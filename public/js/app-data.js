/* ============================================================
   WILLIAMSON WATER — data layer (WW). Dual mode.

   - Supabase mode: active when js/config.js defines window.WW_CONFIG.
     Reads come from an in-memory cache filled at startup (row-level
     security in Postgres decides what each role can see); writes update
     the cache optimistically and sync to Supabase.
   - Demo mode: no config -> localStorage with seeded sample data, so the
     panel is fully clickable before the backend exists.

   Pages call the same WW.* API either way and wrap init in WW.ready.then().

   DEMO DATA IS OBVIOUSLY FAKE ON PURPOSE (555 numbers, example.com) and the
   shell paints a DEMO badge whenever mode === "demo". None of it is ever
   allowed to reach a public marketing page — see PLAN.md §5.
   ============================================================ */
(function () {
  var DB_KEY  = "ww_demo_db_v1";
  var SES_KEY = "ww_session_v1";
  var CFG = window.WW_CONFIG || null;

  /* ---------- shared helpers ---------- */
  function money(n) {
    var v = Number(n || 0);
    var cents = v % 1 !== 0;   /* pad to two places, or drop them entirely — never "$3,240.1" */
    return "$" + v.toLocaleString("en-US", {
      minimumFractionDigits: cents ? 2 : 0,
      maximumFractionDigits: cents ? 2 : 0
    });
  }
  function fmtDate(iso) {
    if (!iso) return "—";
    var dt = new Date(String(iso).slice(0, 10) + "T12:00:00");
    if (isNaN(dt)) return "—";
    return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  function today() { return new Date().toISOString().slice(0, 10); }
  function daysFrom(iso) {
    if (!iso) return null;
    return Math.round((new Date(iso + "T12:00:00") - new Date(today() + "T12:00:00")) / 86400000);
  }

  /* ============================================================
     WATER CHEMISTRY REFERENCE
     Thresholds are real regulatory/most-accepted values. Sources live in
     data/verified-facts.json and data/wells.json. These drive the ok/watch/
     over badge on every test result — the CRM never guesses.
     ============================================================ */
  var ANALYTES = [
    { key: "hardness_gpg",  label: "Hardness",   unit: "gpg",  watch: 7,    over: 10.5,  hint: "Softener territory above ~7 gpg. Project 7 tap averages 7.5 gpg (128 mg/L), peaking near 10.6 gpg in January." },
    { key: "ph",            label: "pH",         unit: "",     lo: 6.5,     hi: 8.5,     hint: "EPA secondary range 6.5–8.5. Below 6.5 is aggressive to copper — acid neutralizer." },
    { key: "tds_ppm",       label: "TDS",        unit: "ppm",  watch: 500,  over: 1000,  hint: "EPA secondary 500 mg/L. Project 7 finished water averages 123 mg/L." },
    { key: "iron_ppm",      label: "Iron",       unit: "ppm",  watch: 0.3,  over: 1.0,   hint: "EPA secondary 0.3 mg/L. Stays elevated even in deep wells here (median 380 µg/L at ≥100 ft)." },
    { key: "manganese_ppm", label: "Manganese",  unit: "ppm",  watch: 0.05, over: 0.3,   hint: "EPA secondary 0.05 mg/L. 24% of tested Western Slope wells exceed it." },
    { key: "nitrate_ppm",   label: "Nitrate-N",  unit: "ppm",  watch: 5,    over: 10,    hint: "MCL 10 mg/L as N. Above ~5 keeps selenium mobile in Mancos Shale groundwater." },
    { key: "sulfate_ppm",   label: "Sulfate",    unit: "ppm",  watch: 250,  over: 500,   hint: "EPA secondary 250 mg/L. 18% of local wells exceed — roughly 5x the national rate." },
    { key: "arsenic_ppb",   label: "Arsenic",    unit: "ppb",  watch: 5,    over: 10,    hint: "MCL 10 µg/L. 10.7% of tested Western Slope wells exceed it — the highest primary-standard failure rate in the region." },
    { key: "uranium_ppb",   label: "Uranium",    unit: "ppb",  watch: 15,   over: 30,    hint: "MCL 30 µg/L. Shallow Uncompahgre wells median 76 µg/L. Critical in the Uravan Belt." },
    { key: "selenium_ppb",  label: "Selenium",   unit: "ppb",  watch: 25,   over: 50,    hint: "MCL 50 µg/L. Shallow Montrose wells median 65 µg/L, max 4,120. Depth is the fix." },
    { key: "lead_ppb",      label: "Lead",       unit: "ppb",  watch: 5,    over: 15,    hint: "Action level 15 µg/L. A compliant 90th percentile does not mean a compliant tap." },
    { key: "chlorine_ppm",  label: "Chlorine",   unit: "ppm",  watch: 2,    over: 4,     hint: "MRDL 4.0 mg/L. Project 7 runs CHLORAMINE (1.43 of 1.91 mg/L residual) — size carbon for chloramine, not free chlorine." },
    { key: "tthm_ppb",      label: "TTHM",       unit: "ppb",  watch: 40,   over: 80,    hint: "MCL 80 µg/L. Ridgway averages 63.7 with a 112 ppb single sample." },
    { key: "copper_ppm",    label: "Copper",     unit: "ppm",  watch: 0.9,  over: 1.3,   hint: "Action level 1.3 mg/L. Ouray's 90th percentile sits at 1.07 — 82% of the action level." }
  ];
  var ANALYTE_BY_KEY = {};
  ANALYTES.forEach(function (a) { ANALYTE_BY_KEY[a.key] = a; });

  /* Rate one measured value -> "ok" | "watch" | "over" | null (no reading) */
  function rate(key, value) {
    var a = ANALYTE_BY_KEY[key];
    if (!a || value === "" || value == null) return null;
    var v = Number(value);
    if (isNaN(v)) return null;
    if (a.lo != null || a.hi != null) {               /* range analyte, e.g. pH */
      if ((a.lo != null && v < a.lo) || (a.hi != null && v > a.hi)) return "over";
      return "ok";
    }
    if (a.over != null && v >= a.over) return "over";
    if (a.watch != null && v >= a.watch) return "watch";
    return "ok";
  }

  /* Which services a test result actually supports recommending.
     Recommendations come from measured values only — never from a guess. */
  function recommend(test) {
    if (!test) return [];
    var out = [];
    function push(svc, why) { out.push({ service: svc, why: why }); }
    var r = function (k) { return rate(k, test[k]); };

    if (r("hardness_gpg") === "watch" || r("hardness_gpg") === "over")
      push("Water softener", "Hardness measured " + test.hardness_gpg + " gpg");
    if (r("iron_ppm") !== "ok" && test.iron_ppm)
      push("Iron filter / oxidation", "Iron measured " + test.iron_ppm + " ppm");
    if (test.h2s === "yes")
      push("Iron & sulfur removal", "Rotten-egg odor reported at the tap");
    if (r("manganese_ppm") !== "ok" && test.manganese_ppm)
      push("Manganese removal", "Manganese measured " + test.manganese_ppm + " ppm");
    if (r("ph") === "over" && Number(test.ph) < 6.5)
      push("Acid neutralizer", "pH measured " + test.ph + " — aggressive to copper");
    if (test.bacteria === "positive")
      push("UV purification", "Bacteria present — positive coliform result");
    if (r("nitrate_ppm") !== "ok" || r("arsenic_ppb") !== "ok" || r("uranium_ppb") !== "ok" ||
        r("selenium_ppb") !== "ok" || r("lead_ppb") !== "ok" || r("tds_ppm") !== "ok")
      push("Reverse osmosis (POU)", "Dissolved contaminant above its screening level");
    if (r("tthm_ppb") !== "ok" && test.tthm_ppb)
      push("Carbon filtration", "TTHM measured " + test.tthm_ppb + " ppb");
    if (test.source_type === "municipal" && test.disinfectant === "chloramine")
      push("Catalytic carbon", "Chloramine system — standard carbon undersizes");
    if (r("sediment") === null && test.turbidity === "yes")
      push("Sediment filtration", "Visible turbidity reported");
    return out;
  }

  /* ================= DEMO SEED ================= */
  function seed() {
    var t = new Date();
    function d(off) { var x = new Date(t); x.setDate(x.getDate() + off); return x.toISOString().slice(0, 10); }
    return {
      customers: [
        { id: "c1", name: "Dana Whitfield",        phone: "(970) 555-0141", email: "dana@example.com",     address: "1210 Spring Creek Rd", city: "Montrose",        town: "montrose",        source_type: "municipal", pwsid: "CO0143518", well_depth_ft: null, plan: "guardian", notes: "Gate code 4412. Friendly dog." },
        { id: "c2", name: "Marcus & Jenny Ortega", phone: "(970) 555-0177", email: "ortegafam@example.com", address: "455 Garnet Mesa Dr",  city: "Delta",           town: "delta",           source_type: "municipal", pwsid: "CO0115205", well_depth_ft: null, plan: "basic",    notes: "" },
        { id: "c3", name: "Bill Tanner",           phone: "(970) 555-0163", email: "btanner@example.com",   address: "2890 Oak Grove Rd",   city: "Olathe",          town: "olathe",          source_type: "well",      pwsid: null,        well_depth_ft: 42,   plan: null,       notes: "Shallow well over Mancos. Referred by Dana Whitfield." },
        { id: "c4", name: "Sue Ellen Park",        phone: "(970) 555-0129", email: "separk@example.com",    address: "118 Sherman St",      city: "Ridgway",         town: "ridgway",         source_type: "municipal", pwsid: "CO0146676", well_depth_ft: null, plan: null,       notes: "Complained about taste — town runs high TTHM." },
        { id: "c5", name: "Ray Delgado",           phone: "(970) 555-0102", email: "rdelgado@example.com",  address: "77 Hanks Valley Rd",  city: "Hotchkiss",       town: "hotchkiss",       source_type: "well",      pwsid: null,        well_depth_ft: 180,  plan: "guardian", notes: "Deep well. Iron staining on fixtures." },
        { id: "c6", name: "Alpine Ridge HOA",      phone: "(970) 555-0188", email: "board@example.com",     address: "4 Mountain Village Blvd", city: "Mountain Village", town: "mountain-village", source_type: "municipal", pwsid: null, well_depth_ft: null, plan: null, notes: "Commercial. Asked about PFAS after the UCMR5 results." }
      ],
      leads: [
        { id: "l1", name: "Karen Mosley",  phone: "(970) 555-0190", email: "", city: "Montrose",  town: "montrose",  service: "Water softener",       source: "Web form", stage: "new",               note: "Spots on glassware, scale on the kettle", created: d(-1) },
        { id: "l2", name: "Tom Beckett",   phone: "(970) 555-0155", email: "", city: "Cedaredge", town: "cedaredge", service: "Whole-house filtration", source: "Referral", stage: "contact_attempted", note: "Left voicemail", created: d(-2) },
        { id: "l3", name: "Alicia Fry",    phone: "(970) 555-0171", email: "", city: "Paonia",    town: "paonia",    service: "Well water treatment", source: "Google",   stage: "contacted",         note: "New well, wants a full panel run", created: d(-4) },
        { id: "l4", name: "Gene Harmon",   phone: "(970) 555-0118", email: "", city: "Naturita",  town: "naturita",  service: "Uranium / radium",     source: "Web form", stage: "test_scheduled",    note: "Uravan Belt — CGS study spooked him", created: d(-6) },
        { id: "l5", name: "Priya Nair",    phone: "(970) 555-0136", email: "", city: "Telluride", town: "telluride", service: "Reverse osmosis",      source: "Referral", stage: "proposal_sent",     note: "Quoted 7-stage RO", created: d(-9) },
        { id: "l6", name: "Walt Simmons",  phone: "(970) 555-0147", email: "", city: "Norwood",   town: "norwood",   service: "Carbon filtration",    source: "Google",   stage: "proposal_created",  note: "Chloramine system — taste complaints", created: d(-12) }
      ],
      water_tests: [
        { id: "wt1", customer_id: "c3", lead_id: null, date: d(-5), tech: "Ken Williamson", source_type: "well", disinfectant: null,
          hardness_gpg: 24.5, ph: 7.1, tds_ppm: 1840, iron_ppm: 1.8, manganese_ppm: 0.22, nitrate_ppm: 6.2,
          sulfate_ppm: 640, arsenic_ppb: 4, uranium_ppb: 88, selenium_ppb: 71, lead_ppb: 1, chlorine_ppm: null,
          tthm_ppb: null, copper_ppm: 0.1, h2s: "no", bacteria: "negative", turbidity: "yes",
          notes: "42 ft well in alluvium over Mancos Shale. Selenium and uranium both well over — textbook shallow-well profile." },
        { id: "wt2", customer_id: "c5", lead_id: null, date: d(-20), tech: "Ken Williamson", source_type: "well", disinfectant: null,
          hardness_gpg: 18.2, ph: 7.4, tds_ppm: 520, iron_ppm: 2.4, manganese_ppm: 0.14, nitrate_ppm: 0.9,
          sulfate_ppm: 210, arsenic_ppb: 2, uranium_ppb: 3, selenium_ppb: 1, lead_ppb: 0, chlorine_ppm: null,
          tthm_ppb: null, copper_ppm: 0.2, h2s: "yes", bacteria: "negative", turbidity: "no",
          notes: "180 ft well. Depth handled the selenium/uranium; iron and sulfur did not care." },
        { id: "wt3", customer_id: "c1", lead_id: null, date: d(-40), tech: "Ken Williamson", source_type: "municipal", disinfectant: "chloramine",
          hardness_gpg: 7.6, ph: 7.3, tds_ppm: 128, iron_ppm: 0.04, manganese_ppm: null, nitrate_ppm: 0.4,
          sulfate_ppm: 48, arsenic_ppb: null, uranium_ppb: null, selenium_ppb: null, lead_ppb: 2, chlorine_ppm: 1.9,
          tthm_ppb: 38, copper_ppm: 0.3, h2s: "no", bacteria: "negative", turbidity: "no",
          notes: "Project 7 tap. Matches the published composite almost exactly." },
        { id: "wt4", customer_id: null, lead_id: "l4", date: d(-2), tech: "Ken Williamson", source_type: "well", disinfectant: null,
          hardness_gpg: 12.1, ph: 7.8, tds_ppm: 910, iron_ppm: 0.4, manganese_ppm: 0.31, nitrate_ppm: 1.1,
          sulfate_ppm: 380, arsenic_ppb: 14, uranium_ppb: 41, selenium_ppb: 8, lead_ppb: 6, chlorine_ppm: null,
          tthm_ppb: null, copper_ppm: 0.1, h2s: "no", bacteria: "negative", turbidity: "no",
          notes: "Uravan Belt. Arsenic and uranium both over — matches the CGS OF-24-08 pattern." }
      ],
      proposals: [
        { id: "p1", customer_id: "c3", title: "Shallow-well rebuild — RO + sediment + softener", amount: 7480, status: "sent",     created: d(-3),  token: "demo-p1", test_id: "wt1" },
        { id: "p2", customer_id: "c5", title: "Air-injection iron/sulfur filter",                amount: 3290, status: "accepted", created: d(-18), token: "demo-p2", test_id: "wt2" },
        { id: "p3", customer_id: "c1", title: "Catalytic carbon + softener (chloramine-sized)",  amount: 4150, status: "paid",     created: d(-38), token: "demo-p3", test_id: "wt3" },
        { id: "p4", customer_id: "c4", title: "Whole-house carbon — TTHM reduction",             amount: 2680, status: "draft",    created: d(0),   token: "demo-p4", test_id: null },
        { id: "p5", customer_id: "c6", title: "Commercial PFAS + POU RO — 12 units",             amount: 21400, status: "sent",    created: d(-6),  token: "demo-p5", test_id: null }
      ],
      invoices: [
        { id: "i1", customer_id: "c5", kind: "invoice",  label: "INV-1041 · Iron/sulfur filter",      amount: 3290, status: "paid",  date: d(-16) },
        { id: "i2", customer_id: "c1", kind: "invoice",  label: "INV-1042 · Carbon + softener",       amount: 4150, status: "paid",  date: d(-36) },
        { id: "i3", customer_id: "c2", kind: "invoice",  label: "INV-1043 · RO membrane replacement", amount: 189,  status: "sent",  date: d(-8) },
        { id: "i4", customer_id: "c6", kind: "estimate", label: "EST-2011 · Commercial PFAS package", amount: 21400, status: "sent", date: d(-6) },
        { id: "i5", customer_id: "c3", kind: "estimate", label: "EST-2012 · Well rebuild",            amount: 7480, status: "sent",  date: d(-3) }
      ],
      jobs: [
        { id: "j1", customer_id: "c3", title: "Well rebuild — RO, sediment, softener", status: "scheduled",   start: d(4),   value: 7480, tech: "t1", note: "Order 20\" big-blue housings." },
        { id: "j2", customer_id: "c5", title: "Air-injection iron filter install",     status: "done",        start: d(-16), value: 3290, tech: "t1", note: "Complete. Water clear on retest." },
        { id: "j3", customer_id: "c1", title: "Catalytic carbon + softener",           status: "done",        start: d(-36), value: 4150, tech: "t2", note: "" },
        { id: "j4", customer_id: "c6", title: "Commercial POU rollout — 12 units",     status: "in-progress", start: d(-2),  value: 21400, tech: "t1", note: "6 of 12 set." }
      ],
      equipment: [
        { id: "e1", customer_id: "c1", type: "Water softener",   brand: "Clack",     model: "WS1", serial: "WW-1001", installed: d(-36), warranty_until: d(1789), service_type: "Salt refill",        next_service: d(12) },
        { id: "e2", customer_id: "c1", type: "Catalytic carbon", brand: "Centaur",   model: "CB-10", serial: "WW-1002", installed: d(-36), warranty_until: d(1789), service_type: "Media change",     next_service: d(320) },
        { id: "e3", customer_id: "c5", type: "Iron filter (AIO)", brand: "Fleck",    model: "2510-AIO", serial: "WW-1003", installed: d(-16), warranty_until: d(1809), service_type: "Media change",  next_service: d(700) },
        { id: "e4", customer_id: "c2", type: "RO system",        brand: "AXEON",     model: "5-stage", serial: "WW-1004", installed: d(-400), warranty_until: d(-35), service_type: "Membrane swap",  next_service: d(-6) },
        { id: "e5", customer_id: "c6", type: "UV sterilizer",    brand: "VIQUA",     model: "D4-V",  serial: "WW-1005", installed: d(-330), warranty_until: d(35),  service_type: "Lamp replacement", next_service: d(30) }
      ],
      plans: [
        { id: "pl1", customer_id: "c1", tier: "guardian", price_mo: 59, started: d(-36), next_visit: d(12),  active: true },
        { id: "pl2", customer_id: "c5", tier: "guardian", price_mo: 59, started: d(-16), next_visit: d(45),  active: true },
        { id: "pl3", customer_id: "c2", tier: "basic",    price_mo: 29, started: d(-400), next_visit: d(-6), active: true }
      ],
      visits: [
        { id: "v1", customer_id: "c1", date: d(-6),  type: "Salt delivery",       tech: "t2", summary: "Six bags. Brine tank cleaned.", done: true },
        { id: "v2", customer_id: "c2", date: d(-6),  type: "RO membrane swap",    tech: "t1", summary: "", done: false },
        { id: "v3", customer_id: "c1", date: d(12),  type: "Salt delivery",       tech: "t2", summary: "", done: false },
        { id: "v4", customer_id: "c6", date: d(30),  type: "UV lamp replacement", tech: "t1", summary: "", done: false },
        { id: "v5", customer_id: "c3", date: d(4),   type: "Install",             tech: "t1", summary: "", done: false }
      ],
      inventory: [
        { id: "n1", sku: "SALT-40",   name: "Solar salt, 40 lb bag",        category: "Consumable", qty: 62, reorder_at: 40, unit_cost: 7.25 },
        { id: "n2", sku: "MEM-75",    name: "RO membrane, 75 GPD",          category: "Membrane",   qty: 6,  reorder_at: 8,  unit_cost: 42.00 },
        { id: "n3", sku: "SED-20",    name: "Sediment cartridge, 20\" 5µm", category: "Filter",     qty: 24, reorder_at: 15, unit_cost: 6.40 },
        { id: "n4", sku: "CARB-CAT",  name: "Catalytic carbon, cu ft",      category: "Media",      qty: 9,  reorder_at: 6,  unit_cost: 118.00 },
        { id: "n5", sku: "UV-D4",     name: "UV lamp, VIQUA D4",            category: "Lamp",       qty: 3,  reorder_at: 4,  unit_cost: 89.00 },
        { id: "n6", sku: "RESIN-10",  name: "Softener resin, cu ft",        category: "Media",      qty: 11, reorder_at: 6,  unit_cost: 96.00 }
      ],
      team_seats: [
        { id: "t1", email: "ken@example.com",  name: "Ken Williamson", role: "admin", active: true },
        { id: "t2", email: "tech@example.com", name: "Field Tech",     role: "field", active: true }
      ],
      reviews: []   /* stays empty until real reviews exist — see PLAN.md §5 rail 4 */
    };
  }

  /* ================= DEMO MODE ================= */
  function demoMode() {
    function load() {
      try { var raw = localStorage.getItem(DB_KEY); if (raw) return JSON.parse(raw); } catch (e) {}
      var s = seed(); localStorage.setItem(DB_KEY, JSON.stringify(s)); return s;
    }
    var db = load();
    function save() { try { localStorage.setItem(DB_KEY, JSON.stringify(db)); } catch (e) {} }

    return {
      mode: "demo",
      ready: Promise.resolve(),
      list: function (e) { return (db[e] || []).slice(); },
      get: function (e, id) { return (db[e] || []).find(function (x) { return String(x.id) === String(id); }) || null; },
      add: function (e, obj) {
        obj.id = obj.id || e.slice(0, 2) + Date.now().toString(36);
        (db[e] = db[e] || []).push(obj); save(); return obj;
      },
      update: function (e, id, patch) {
        var x = this.get(e, id); if (!x) return null;
        Object.keys(patch).forEach(function (k) { x[k] = patch[k]; }); save(); return x;
      },
      remove: function (e, id) {
        db[e] = (db[e] || []).filter(function (x) { return String(x.id) !== String(id); }); save();
      },
      resetDemo: function () { localStorage.removeItem(DB_KEY); location.reload(); },
      auth: {
        session: function () { try { return JSON.parse(localStorage.getItem(SES_KEY)); } catch (e) { return null; } },
        login: function (role, name) {
          var s = { role: role || "admin", name: name || "Ken Williamson", email: "ken@example.com", customerId: role === "client" ? "c1" : null };
          localStorage.setItem(SES_KEY, JSON.stringify(s)); return s;
        },
        logout: function (redirect) { localStorage.removeItem(SES_KEY); location.href = redirect || "../portal/login.html"; },
        require: function (roles, loginPath) {
          var s = this.session();
          if (!s) { s = this.login("admin"); }        /* demo mode auto-signs in so the panel is browsable */
          var allowed = Array.isArray(roles) ? roles : (roles ? [roles] : null);
          if (allowed && allowed.indexOf(s.role) === -1) { location.href = loginPath; return null; }
          return s;
        },
        sendMagicLink: function () { return Promise.resolve({ demo: true }); }
      }
    };
  }

  /* ================= SUPABASE MODE ================= */
  function supabaseMode() {
    var TABLES = ["customers", "leads", "water_tests", "proposals", "invoices", "jobs",
                  "equipment", "plans", "visits", "inventory", "team_seats", "reviews"];
    var cache = {}; TABLES.forEach(function (t) { cache[t] = []; });
    var sb = null, sessionInfo = null;

    function loadLib() {
      return new Promise(function (res, rej) {
        if (window.supabase) return res();
        var s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js";
        s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
      });
    }
    function fetchAll() {
      return Promise.all(TABLES.map(function (t) {
        return sb.from(t).select("*").then(function (r) { cache[t] = r.data || []; })
                 .catch(function () { cache[t] = []; });
      }));
    }
    var ready = loadLib().then(function () {
      sb = window.supabase.createClient(CFG.url, CFG.key);
      return sb.auth.getSession();
    }).then(function (r) {
      var sess = r.data && r.data.session;
      if (!sess) return;
      return sb.rpc("my_role").then(function (rr) {
        var effRole = (rr && !rr.error && rr.data) ? rr.data : null;
        return sb.from("profiles").select("*").eq("id", sess.user.id).single().then(function (p) {
          var prof = p.data || {};
          sessionInfo = {
            role: effRole || prof.role || "client",
            email: sess.user.email,
            name: (sess.user.email || "").split("@")[0],
            customerId: prof.customer_id || null
          };
          return fetchAll().then(function () {
            var seat = (cache.team_seats || []).find(function (x) {
              return (x.email || "").toLowerCase() === (sessionInfo.email || "").toLowerCase();
            });
            if (seat && seat.name) sessionInfo.name = seat.name;
            if (sessionInfo.customerId) {
              var c = cache.customers.find(function (x) { return x.id === sessionInfo.customerId; });
              if (c) sessionInfo.name = c.name;
            }
          });
        });
      });
    }).catch(function (e) { console.error("WW init:", e); });

    function syncErr(r) {
      if (r && r.error) {
        console.error("WW sync:", r.error.message);
        if (window.WWUI && WWUI.toast) WWUI.toast("Save failed: " + r.error.message, "err");
        return true;
      }
      return false;
    }
    var UUID_KEYS = { tech: 1, customer_id: 1, lead_id: 1, test_id: 1 };
    function clean(obj) {
      var out = {};
      Object.keys(obj).forEach(function (k) {
        if (k.charAt(0) === "_") return;
        var v = obj[k];
        if (v === "" && UUID_KEYS[k]) v = null;
        out[k] = v;
      });
      return out;
    }

    return {
      mode: "supabase",
      ready: ready,
      client: function () { return sb; },
      list: function (e) { return (cache[e] || []).slice(); },
      get: function (e, id) { return (cache[e] || []).find(function (x) { return String(x.id) === String(id); }) || null; },
      add: function (e, obj) {
        if (obj.id === undefined) obj.id = e.slice(0, 2) + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        (cache[e] = cache[e] || []).push(obj);
        obj._saved = sb.from(e).insert(clean(obj)).select().then(function (r) {
          if (r && r.error) {
            cache[e] = (cache[e] || []).filter(function (x) { return x !== obj; });   /* roll back optimistic row */
            syncErr(r); throw r.error;
          }
          if (r.data && r.data[0]) Object.keys(r.data[0]).forEach(function (k) { if (obj[k] == null) obj[k] = r.data[0][k]; });
          return obj;
        });
        return obj;
      },
      update: function (e, id, patch) {
        var x = this.get(e, id); if (!x) return null;
        Object.keys(patch).forEach(function (k) { x[k] = patch[k]; });
        x._saved = sb.from(e).update(clean(patch)).eq("id", id).then(function (r) { syncErr(r); return r; });
        return x;
      },
      remove: function (e, id) {
        cache[e] = (cache[e] || []).filter(function (x) { return String(x.id) !== String(id); });
        sb.from(e).delete().eq("id", id).then(syncErr);
      },
      resetDemo: function () { alert("Live mode — connected to the real database."); },
      auth: {
        session: function () { return sessionInfo; },
        login: function () { location.href = "../portal/login.html"; },
        logout: function (redirect) { sb.auth.signOut().then(function () { location.href = redirect || "../portal/login.html"; }); },
        require: function (roles, loginPath) {
          var allowed = Array.isArray(roles) ? roles : (roles ? [roles] : null);
          if (!sessionInfo || (allowed && allowed.indexOf(sessionInfo.role) === -1)) { location.href = loginPath; return null; }
          return sessionInfo;
        },
        sendMagicLink: function (email, redirectTo) {
          return sb.auth.signInWithOtp({ email: email, options: { emailRedirectTo: redirectTo } });
        }
      }
    };
  }

  var WW = CFG ? supabaseMode() : demoMode();

  /* ---------- shared derived helpers on top of either mode ---------- */
  WW.money = money;
  WW.fmtDate = fmtDate;
  WW.today = today;
  WW.daysFrom = daysFrom;
  WW.ANALYTES = ANALYTES;
  WW.analyte = function (k) { return ANALYTE_BY_KEY[k]; };
  WW.rate = rate;
  WW.recommend = recommend;

  WW.customerName = function (id) { var c = WW.get("customers", id); return c ? c.name : "—"; };
  WW.techName = function (id) {
    if (!id) return "Unassigned";
    var m = WW.get("team_seats", id);
    return m ? (m.name || m.email) : "—";
  };
  WW.teamMembers = function () { return WW.list("team_seats").filter(function (m) { return m.active !== false; }); };

  /* Latest water test for a customer (or lead) */
  WW.latestTest = function (opts) {
    var rows = WW.list("water_tests").filter(function (t) {
      if (opts.customerId) return String(t.customer_id) === String(opts.customerId);
      if (opts.leadId) return String(t.lead_id) === String(opts.leadId);
      return false;
    });
    rows.sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    return rows[0] || null;
  };

  /* Equipment due for service within `days` (negative = overdue) */
  WW.serviceDue = function (days) {
    days = days == null ? 30 : days;
    return WW.list("equipment").filter(function (e) {
      var n = daysFrom(e.next_service);
      return n != null && n <= days;
    }).sort(function (a, b) { return (a.next_service || "") < (b.next_service || "") ? -1 : 1; });
  };

  /* Monthly recurring revenue from active service plans */
  WW.mrr = function () {
    return WW.list("plans").filter(function (p) { return p.active !== false; })
             .reduce(function (a, p) { return a + Number(p.price_mo || 0); }, 0);
  };

  /* Inventory rows at or below their reorder point */
  WW.lowStock = function () {
    return WW.list("inventory").filter(function (i) { return Number(i.qty) <= Number(i.reorder_at); });
  };

  /* Lead pipeline stages — water sales cycle runs through a TEST, which is the
     step a roofing pipeline does not have and where this business is won. */
  WW.LEAD_STAGES = [
    { key: "new",               label: "New" },
    { key: "contact_attempted", label: "Tried" },
    { key: "contacted",         label: "Contacted" },
    { key: "test_scheduled",    label: "Test set" },
    { key: "tested",            label: "Tested" },
    { key: "proposal_created",  label: "Quoted" },
    { key: "proposal_sent",     label: "Sent" },
    { key: "won",               label: "Won" },
    { key: "lost",              label: "Lost" }
  ];

  /* ---------- lead -> customer ----------
     A proposal needs customer_id (FK to customers), but a water test can hang
     off lead_id, so without this the lead->test->proposal chain dead-ends at
     the proposal. Converting moves the lead's contact details onto a new
     customer, re-points that lead's water tests at it, and marks the lead won.

     Ordering matters in supabase mode: water_tests.customer_id is a foreign key,
     so the customer row has to be committed before any test can point at it.
     WW.add assigns .id synchronously and exposes ._saved, which is what we wait
     on. Idempotent: converting twice returns the customer made the first time. */
  WW.convertLead = function (leadId) {
    var l = WW.get("leads", leadId);
    if (!l) return Promise.reject(new Error("Lead not found"));

    var already = WW.list("customers").filter(function (c) {
      return String(c.from_lead_id) === String(leadId);
    })[0];
    if (already) return Promise.resolve({ customer: already, created: false, tests: 0 });

    var tests = WW.list("water_tests").filter(function (t) {
      return String(t.lead_id) === String(leadId);
    }).sort(function (a, b) { return String(b.date || "").localeCompare(String(a.date || "")); });

    /* The lead record has no supply type, but its water test does — carry it
       across rather than leaving the customer's supply blank. */
    var supply = (tests.filter(function (t) { return t.source_type; })[0] || {}).source_type || null;

    var cust = WW.add("customers", {
      name:         l.name,
      phone:        l.phone || null,
      email:        l.email || null,
      city:         l.city  || null,
      town:         l.town  || null,
      source_type:  supply,
      notes:        l.note  || null,
      from_lead_id: leadId
    });

    return Promise.resolve(cust._saved || cust).then(function () {
      tests.forEach(function (t) {
        WW.update("water_tests", t.id, { customer_id: cust.id, lead_id: null });
      });
      WW.update("leads", leadId, { stage: "won" });

      var waits = tests.map(function (t) { return (WW.get("water_tests", t.id) || {})._saved; });
      waits.push((WW.get("leads", leadId) || {})._saved);
      return Promise.all(waits.filter(Boolean)).then(function () {
        return { customer: cust, created: true, tests: tests.length };
      });
    });
  };

  /* The customer a lead became, if it was converted. */
  WW.leadCustomer = function (leadId) {
    return WW.list("customers").filter(function (c) {
      return String(c.from_lead_id) === String(leadId);
    })[0] || null;
  };

  window.WW = WW;
})();
