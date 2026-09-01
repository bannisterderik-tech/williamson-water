/* ============================================================
   WILLIAMSON WATER — shared UI kit (WWUI)
   Right-side detail drawer, toast, modal, table renderer, and the
   search/sort toolbar used across every admin page.
   Self-injects its CSS; depends only on the tokens in css/main.css.
   ============================================================ */
(function () {
  if (window.WWUI) return;

  var css = "\
  .wwui-scrim{position:fixed;inset:0;background:rgba(8,29,77,.45);opacity:0;pointer-events:none;transition:opacity .22s ease;z-index:80}\
  .wwui-scrim.open{opacity:1;pointer-events:auto}\
  .wwui-drawer{position:fixed;top:0;right:0;height:100%;width:min(580px,100%);background:var(--canvas,#f6f8fb);box-shadow:-18px 0 50px rgba(8,29,77,.26);transform:translateX(100%);transition:transform .26s cubic-bezier(.4,0,.15,1);z-index:81;display:flex;flex-direction:column}\
  .wwui-drawer.open{transform:translateX(0)}\
  .wwui-dhead{padding:1.1rem 1.35rem;display:flex;align-items:flex-start;gap:1rem;background:var(--brand-900,#0c2f76);color:#eaf2ff}\
  .wwui-eyebrow{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;opacity:.7;font-weight:800}\
  .wwui-dhead h3{margin:.15rem 0 0;font-size:1.35rem;line-height:1.15;color:#fff}\
  .wwui-dsub{opacity:.8;font-size:.88rem;margin-top:.15rem}\
  .wwui-x{margin-left:auto;background:rgba(255,255,255,.15);border:0;color:#fff;width:2rem;height:2rem;border-radius:50%;font-size:1.15rem;line-height:1;cursor:pointer;flex:0 0 auto}\
  .wwui-x:hover{background:rgba(255,255,255,.28)}\
  .wwui-dbody{padding:1.25rem 1.35rem;overflow-y:auto;flex:1}\
  .wwui-dfoot{padding:.9rem 1.35rem;border-top:1px solid rgba(19,26,44,.1);display:flex;gap:.55rem;flex-wrap:wrap;background:#fff}\
  .wwui-sec{margin-bottom:1.4rem}\
  .wwui-sec>h4{font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-soft,#66728d);font-weight:800;margin:0 0 .55rem;display:flex;align-items:center;gap:.5rem}\
  .wwui-count{background:rgba(19,26,44,.08);border-radius:99px;padding:.05rem .5rem;font-size:.7rem;color:var(--ink-soft,#66728d)}\
  .wwui-kv{display:grid;grid-template-columns:9rem 1fr;gap:.38rem .8rem;font-size:.93rem;margin:0}\
  .wwui-kv dt{color:var(--ink-soft,#66728d);font-weight:700}\
  .wwui-kv dd{margin:0;color:var(--ink-900,#131a2c)}\
  .wwui-list{display:flex;flex-direction:column;gap:.45rem}\
  .wwui-item{border:1px solid rgba(19,26,44,.1);border-radius:12px;padding:.65rem .8rem;background:#fff;display:flex;justify-content:space-between;align-items:center;gap:.8rem}\
  .wwui-it-main{font-weight:700;color:var(--ink-900,#131a2c)}\
  .wwui-it-sub{font-size:.82rem;color:var(--ink-soft,#66728d);margin-top:.1rem}\
  .wwui-empty{color:var(--ink-soft,#66728d);font-size:.89rem;padding:.45rem 0}\
  .wwui-row-link{cursor:pointer}.wwui-row-link:hover{background:rgba(47,123,255,.05)}\
  .wwui-toast{position:fixed;bottom:1.4rem;left:50%;transform:translateX(-50%) translateY(1.5rem);background:var(--brand-900,#0c2f76);color:#fff;padding:.72rem 1.1rem;border-radius:12px;box-shadow:0 12px 34px rgba(8,29,77,.3);z-index:90;font-weight:700;opacity:0;transition:opacity .2s,transform .2s;max-width:90vw}\
  .wwui-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}\
  .wwui-toast.err{background:#a5311d}\
  @media(max-width:560px){.wwui-drawer{width:100%}.wwui-kv{grid-template-columns:1fr}.wwui-kv dt{margin-top:.35rem}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }

  /* ---------- drawer ---------- */
  var scrim = document.createElement("div"); scrim.className = "wwui-scrim";
  var drawer = document.createElement("div"); drawer.className = "wwui-drawer";
  drawer.setAttribute("role", "dialog"); drawer.setAttribute("aria-modal", "true");
  function mount() { if (!scrim.parentNode) { document.body.appendChild(scrim); document.body.appendChild(drawer); } }
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);

  scrim.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  function open(opts) {
    opts = opts || {}; mount();
    var actions = (opts.actions || []).map(function (a, i) {
      return "<button class='btn btn-" + (a.kind || "outline") + " btn-sm' data-wwui-act='" + i + "'>" + esc(a.label) + "</button>";
    }).join("");
    drawer.innerHTML =
      "<div class='wwui-dhead'><div>" +
        "<div class='wwui-eyebrow'>" + esc(opts.eyebrow || "Detail") + "</div>" +
        "<h3>" + esc(opts.title || "") + "</h3>" +
        (opts.subtitle ? "<div class='wwui-dsub'>" + esc(opts.subtitle) + "</div>" : "") +
      "</div><button class='wwui-x' aria-label='Close'>&times;</button></div>" +
      "<div class='wwui-dbody'>" + (opts.bodyHTML || "") + "</div>" +
      (actions ? "<div class='wwui-dfoot'>" + actions + "</div>" : "");
    drawer.querySelector(".wwui-x").addEventListener("click", close);
    (opts.actions || []).forEach(function (a, i) {
      var b = drawer.querySelector("[data-wwui-act='" + i + "']");
      if (b && a.onClick) b.addEventListener("click", function () { a.onClick(api); });
    });
    if (opts.onBody) opts.onBody(drawer.querySelector(".wwui-dbody"));
    scrim.classList.add("open"); drawer.classList.add("open");
    return api;
  }
  function close() { scrim.classList.remove("open"); drawer.classList.remove("open"); }
  function setBody(html) { var b = drawer.querySelector(".wwui-dbody"); if (b) b.innerHTML = html; }

  /* ---------- render helpers ---------- */
  function kv(pairs) {
    var rows = pairs.filter(function (p) { return p && p[1] != null && p[1] !== ""; })
      .map(function (p) { return "<dt>" + esc(p[0]) + "</dt><dd>" + (p[2] === "raw" ? p[1] : esc(p[1])) + "</dd>"; }).join("");
    return "<dl class='wwui-kv'>" + rows + "</dl>";
  }
  function section(title, innerHTML, count) {
    return "<div class='wwui-sec'><h4>" + esc(title) +
           (count != null ? "<span class='wwui-count'>" + count + "</span>" : "") + "</h4>" + innerHTML + "</div>";
  }
  function list(items, emptyMsg) {
    if (!items || !items.length) return "<div class='wwui-empty'>" + esc(emptyMsg || "Nothing yet.") + "</div>";
    return "<div class='wwui-list'>" + items.map(function (it) {
      return "<div class='wwui-item" + (it.href ? " wwui-row-link" : "") + "'" +
        (it.href ? " onclick=\"location.href='" + esc(it.href) + "'\"" : "") + ">" +
        "<div><div class='wwui-it-main'>" + (it.mainRaw || esc(it.main || "")) + "</div>" +
        (it.sub ? "<div class='wwui-it-sub'>" + esc(it.sub) + "</div>" : "") + "</div>" +
        (it.right || it.rightRaw ? "<div>" + (it.rightRaw || esc(it.right)) + "</div>" : "") + "</div>";
    }).join("") + "</div>";
  }

  /* Render a water test as a grid of rated cells. Every cell's colour comes
     from WW.rate() against a real regulatory threshold — never a guess. */
  function testGrid(test) {
    if (!test) return "<div class='wwui-empty'>No test on file.</div>";
    var cells = WW.ANALYTES.map(function (a) {
      var v = test[a.key];
      if (v === "" || v == null) return "";
      var r = WW.rate(a.key, v);
      return "<div class='wt-cell " + (r === "over" ? "over" : r === "watch" ? "watch" : "") + "' title='" + esc(a.hint) + "'>" +
        "<div class='wt-k'>" + esc(a.label) + "</div>" +
        "<div class='wt-v'>" + esc(v) + " <span class='wt-u'>" + esc(a.unit) + "</span></div></div>";
    }).join("");
    var flags = [];
    if (test.h2s === "yes") flags.push("<span class='badge over'>Sulfur odor</span>");
    if (test.bacteria === "positive") flags.push("<span class='badge over'>Bacteria positive</span>");
    if (test.turbidity === "yes") flags.push("<span class='badge watch'>Turbid</span>");
    if (test.disinfectant === "chloramine") flags.push("<span class='badge blue'>Chloramine</span>");
    return "<div class='wt-grid'>" + cells + "</div>" +
      (flags.length ? "<div style='margin-top:.7rem;display:flex;gap:.4rem;flex-wrap:wrap'>" + flags.join("") + "</div>" : "");
  }

  /* ---------- toast ---------- */
  var toastEl;
  function toast(msg, kind) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "wwui-toast"; document.body.appendChild(toastEl); }
    toastEl.className = "wwui-toast" + (kind === "err" ? " err" : "");
    toastEl.textContent = msg;
    requestAnimationFrame(function () { toastEl.classList.add("show"); });
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }

  /* ---------- modal ---------- */
  function modal(opts) {
    opts = opts || {};
    var back = document.createElement("div");
    back.className = "modal-back open";
    back.innerHTML = "<div class='modal" + (opts.wide ? " wide" : "") + "'>" +
      "<h3>" + esc(opts.title || "") + "</h3>" +
      "<div class='modal-body'>" + (opts.bodyHTML || "") + "</div>" +
      "<div class='modal-actions'>" +
        "<button class='btn btn-outline btn-sm' data-cancel>" + esc(opts.cancelLabel || "Cancel") + "</button>" +
        "<button class='btn btn-primary btn-sm' data-ok>" + esc(opts.okLabel || "Save") + "</button>" +
      "</div></div>";
    document.body.appendChild(back);
    function shut() { back.remove(); }
    back.querySelector("[data-cancel]").addEventListener("click", shut);
    back.addEventListener("click", function (e) { if (e.target === back) shut(); });
    back.querySelector("[data-ok]").addEventListener("click", function () {
      var form = {};
      back.querySelectorAll("[name]").forEach(function (el) {
        form[el.name] = el.type === "checkbox" ? el.checked : el.value;
      });
      if (!opts.onOk || opts.onOk(form, shut) !== false) { if (!opts.keepOpen) shut(); }
    });
    if (opts.onBody) opts.onBody(back.querySelector(".modal-body"));
    var first = back.querySelector("input,select,textarea");
    if (first) first.focus();
    return { close: shut, el: back };
  }

  function confirmDelete(what, onYes) {
    modal({
      title: "Delete " + what + "?",
      bodyHTML: "<p class='t-sub'>This cannot be undone.</p>",
      okLabel: "Delete",
      onOk: function () { onYes(); }
    });
  }

  /* ---------- list toolbar (search + sort) ---------- */
  function listBar(mountEl, opts) {
    opts = opts || {};
    var sorts = opts.sorts || [];
    mountEl.style.cssText = "display:flex;gap:.55rem;flex-wrap:wrap;align-items:center;margin-bottom:1rem";
    mountEl.innerHTML =
      "<input type='search' class='wwbar-q' placeholder='" + esc(opts.placeholder || "Search…") + "' aria-label='Search' style='flex:1;min-width:180px'>" +
      (sorts.length ? "<select class='wwbar-sort' aria-label='Sort' style='width:auto'>" +
        sorts.map(function (s) { return "<option value='" + esc(s.value) + "'>" + esc(s.label) + "</option>"; }).join("") + "</select>" : "") +
      (opts.extraHTML || "");
    var q = mountEl.querySelector(".wwbar-q"), sortSel = mountEl.querySelector(".wwbar-sort");
    var state = { q: "", sort: sorts[0] && sorts[0].value, mount: mountEl };
    function emit() { state.q = q.value.trim(); if (sortSel) state.sort = sortSel.value; opts.onChange && opts.onChange(state); }
    q.addEventListener("input", emit);
    if (sortSel) sortSel.addEventListener("change", emit);
    return state;
  }

  function filterSort(arr, state, cfg) {
    cfg = cfg || {};
    var out = arr;
    if (state && state.q && cfg.keys) {
      var ql = state.q.toLowerCase();
      out = out.filter(function (x) {
        return cfg.keys.map(function (k) { return x[k] == null ? "" : x[k]; }).join(" ").toLowerCase().indexOf(ql) > -1;
      });
    }
    var c = cfg.sorts && state && cfg.sorts[state.sort];
    if (c) out = out.slice().sort(c);
    return out;
  }

  var cmp = {
    textAsc:  function (k) { return function (a, b) { return String(a[k] || "").localeCompare(String(b[k] || "")); }; },
    textDesc: function (k) { return function (a, b) { return String(b[k] || "").localeCompare(String(a[k] || "")); }; },
    numAsc:   function (k) { return function (a, b) { return (Number(a[k]) || 0) - (Number(b[k]) || 0); }; },
    numDesc:  function (k) { return function (a, b) { return (Number(b[k]) || 0) - (Number(a[k]) || 0); }; },
    dateAsc:  function (k) { return function (a, b) { var x = String(a[k] || ""), y = String(b[k] || ""); return x < y ? -1 : x > y ? 1 : 0; }; },
    dateDesc: function (k) { return function (a, b) { var x = String(a[k] || ""), y = String(b[k] || ""); return x < y ? 1 : x > y ? -1 : 0; }; }
  };

  /* ---------- table renderer ----------
     rows(): array; cols: [{ head, cell(row), cls }]; onRow(row) -> click handler */
  function table(tbody, rows, cols, opts) {
    opts = opts || {};
    tbody.innerHTML = "";
    if (!rows.length) {
      tbody.innerHTML = "<tr><td colspan='" + cols.length + "' class='tbl-empty'>" +
        esc(opts.empty || "Nothing here yet.") + "</td></tr>";
      return;
    }
    rows.forEach(function (row) {
      var tr = document.createElement("tr");
      if (opts.onRow) { tr.style.cursor = "pointer"; tr.addEventListener("click", function () { opts.onRow(row); }); }
      tr.innerHTML = cols.map(function (c) {
        return "<td" + (c.cls ? " class='" + c.cls + "'" : "") + ">" + (c.cell(row) || "") + "</td>";
      }).join("");
      tbody.appendChild(tr);
    });
  }

  var api = {
    open: open, close: close, setBody: setBody,
    kv: kv, section: section, list: list, testGrid: testGrid, table: table,
    toast: toast, modal: modal, confirmDelete: confirmDelete,
    listBar: listBar, filterSort: filterSort, cmp: cmp,
    esc: esc, drawer: drawer
  };
  window.WWUI = api;
})();
