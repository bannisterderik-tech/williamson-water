/* ============================================================
   WILLIAMSON WATER — admin shell
   Renders the sidebar, brand mark, role-gated nav and topbar so every
   admin page stays small and the navigation can never drift between pages.

   Usage, inside WW.ready.then():
     var ses = WWShell.mount({
       page: "leads",
       title: "Leads",
       sub: "Everyone who raised a hand.",
       actions: "<button class='btn btn-primary btn-sm' id='new'>+ Lead</button>"
     });
     if (!ses) return;   // mount() redirects and returns null when not allowed
   ============================================================ */
(function () {
  var I = {
    dash:      '<path d="M3 3h7v7H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 14h7v7H3z"/>',
    leads:     '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    test:      '<path d="M9 2v6.5L4.6 17A2.5 2.5 0 0 0 6.8 21h10.4a2.5 2.5 0 0 0 2.2-4L15 8.5V2M8 2h8M7.5 14h9"/>',
    proposal:  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 13h6M9 17h6"/>',
    customers: '<path d="M3 21V9l9-6 9 6v12M9 21v-6h6v6"/>',
    equipment: '<path d="M12 2a7 7 0 0 0-7 7c0 4 7 13 7 13s7-9 7-13a7 7 0 0 0-7-7M12 6v6M9 9h6"/>',
    plans:     '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78"/>',
    jobs:      '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    schedule:  '<path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/>',
    inventory: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16M3.3 7L12 12l8.7-5M12 22V12"/>',
    invoices:  '<path d="M4 2v20l2-1.5L8 22l2-1.5L12 22l2-1.5L16 22l2-1.5L20 22V2l-2 1.5L16 2l-2 1.5L12 2l-2 1.5L8 2 6 3.5zM8 8h8M8 12h8M8 16h5"/>',
    money:     '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    water:     '<path d="M12 2.7s6.5 7.2 6.5 11.3a6.5 6.5 0 0 1-13 0C5.5 9.9 12 2.7 12 2.7"/>',
    reviews:   '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    team:      '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    settings:  '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1"/>'
  };

  /* page key -> [file, label, icon, group] */
  var NAV = [
    ["index",     "Dashboard",     "dash",      "Sales"],
    ["leads",     "Leads",         "leads",     "Sales"],
    ["tests",     "Water Tests",   "test",      "Sales"],
    ["proposals", "Proposals",     "proposal",  "Sales"],

    ["customers", "Customers",     "customers", "Accounts"],
    ["equipment", "Equipment",     "equipment", "Accounts"],
    ["plans",     "Service Plans", "plans",     "Accounts"],

    ["jobs",      "Installs",      "jobs",      "Operations"],
    ["schedule",  "Schedule",      "schedule",  "Operations"],
    ["inventory", "Inventory",     "inventory", "Operations"],

    ["invoices",  "Invoices",      "invoices",  "Money"],
    ["money",     "Money",         "money",     "Money"],

    ["water",     "Water Systems", "water",     "Reference"],
    ["reviews",   "Reviews",       "reviews",   "Reference"],
    ["team",      "Team",          "team",      "Reference"],
    ["settings",  "Settings",      "settings",  "Reference"]
  ];

  /* Which pages each role may open. Field techs get the day's work, nothing else. */
  var ROLE_PAGES = {
    admin: NAV.map(function (n) { return n[0]; }),
    sales: ["index", "leads", "tests", "proposals", "customers", "equipment", "plans", "jobs", "schedule", "invoices", "water", "reviews"],
    field: ["index", "tests", "jobs", "schedule", "equipment", "inventory", "customers", "water"]
  };

  function logoSVG() {
    return '<svg viewBox="0 0 210 40" role="img" aria-label="Pure Tap Water Co.">' +
      '<defs>' +
        '<linearGradient id="wwdrop" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="#8ec3ff"/><stop offset="100%" stop-color="#2f7bff"/>' +
        '</linearGradient>' +
        '<linearGradient id="wwsun" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="#ffd24a"/><stop offset="100%" stop-color="#f4ac00"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M20 4 C 27.5 14.5, 32.5 19.5, 32.5 25 a 12.5 12.5 0 1 1 -25 0 C 7.5 19.5, 12.5 14.5, 20 4 Z" fill="url(#wwdrop)"/>' +
      '<circle cx="26.2" cy="14.4" r="3.2" fill="url(#wwsun)"/>' +
      '<text x="44" y="19" fill="#ffffff" font-family="Inter,system-ui,sans-serif" font-size="14.5" font-weight="700" letter-spacing="-0.3">Pure Tap Water Co.</text>' +
      '<text x="44" y="31" fill="#8ec3ff" font-family="Inter,system-ui,sans-serif" font-size="8" font-weight="700" letter-spacing="2.4">TESTED · TREATED</text>' +
      '</svg>';
  }

  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
           'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[name] || "") + '</svg>';
  }

  function mount(opts) {
    opts = opts || {};
    var ses = WW.auth.require(["admin", "sales", "field"], "../portal/login.html");
    if (!ses) return null;

    var allowed = ROLE_PAGES[ses.role] || [];
    if (opts.page && allowed.indexOf(opts.page) === -1) {
      location.href = "index.html";
      return null;
    }

    /* ---- sidebar ---- */
    var lastGroup = null, navHTML = "";
    NAV.forEach(function (n) {
      if (allowed.indexOf(n[0]) === -1) return;
      if (n[3] !== lastGroup) { navHTML += "<div class='nav-group'>" + n[3] + "</div>"; lastGroup = n[3]; }
      navHTML += "<a href='" + n[0] + ".html'" + (n[0] === opts.page ? " aria-current='page'" : "") + ">" +
                 icon(n[2]) + "<span>" + n[1] + "</span></a>";
    });
    navHTML += "<a href='../index.html' class='nav-sep'>← View site</a>" +
               "<a href='#' id='ww-logout'>Log out</a>";

    var demoPill = WW.mode === "demo"
      ? "<span class='demo-badge' title='No js/config.js present — running on seeded local sample data'>Demo data</span>"
      : "";

    var shell = document.createElement("div");
    shell.className = "app-shell";
    shell.innerHTML =
      "<aside class='app-side'>" +
        "<a class='brand' href='index.html'>" + logoSVG() + "</a>" +
        "<nav class='app-nav' aria-label='Admin'>" + navHTML + "</nav>" +
      "</aside>" +
      "<main class='app-main'>" +
        "<div class='app-topbar'>" +
          "<div>" +
            "<h1>" + WWUI.esc(opts.title || "") + " " + demoPill + "</h1>" +
            "<p class='sub'>" + WWUI.esc(opts.sub || "") + "</p>" +
          "</div>" +
          "<div class='actions'>" + (opts.actions || "") + "</div>" +
        "</div>" +
        "<div id='ww-page'></div>" +
      "</main>";

    document.body.className = "app";
    document.body.insertBefore(shell, document.body.firstChild);

    document.getElementById("ww-logout").addEventListener("click", function (e) {
      e.preventDefault(); WW.auth.logout("../portal/login.html");
    });

    return ses;
  }

  /* Convenience: the container every page renders into */
  function page() { return document.getElementById("ww-page"); }

  window.WWShell = { mount: mount, page: page, NAV: NAV, ROLE_PAGES: ROLE_PAGES, icon: icon, logoSVG: logoSVG };
})();
