/*
   WWLink — the wiring between pages.

   This is a multi-page app, not a SPA, so the only thing that survives a
   navigation is the URL. Every "do the next step" button therefore hands the
   next page its context as a query param, and every page reads its own params
   on load and pre-fills from them. Before this existed the links already
   carried ?lead= / ?test= and nothing on the receiving end ever read them, so
   the user re-typed what the app already knew.

   Rules:
   - A deep link never invents data. It pre-selects records that exist.
   - A pre-filled form always says where the values came from (ctx banner), so
     nobody saves a record against the wrong customer because a select was
     silently set for them.
   - Recommendations are copied onto the proposal at build time, never
     recomputed later. See scopeFromTest.
*/
(function () {
  if (window.WWLink) return;

  function esc(s) { return WWUI.esc(s); }

  var L = {};

  /* ---------- query string ---------- */
  L.q = function (name) {
    try { return new URLSearchParams(location.search).get(name); } catch (e) { return null; }
  };
  L.has = function () {
    for (var i = 0; i < arguments.length; i++) if (L.q(arguments[i])) return true;
    return false;
  };
  /* Drop the params once consumed, so a refresh or a back-button doesn't
     re-open a modal the user already dealt with. */
  L.clear = function () {
    try { history.replaceState(null, "", location.pathname); } catch (e) {}
  };

  /* ---------- record URLs ---------- */
  var PAGE = { customer: "customer.html", lead: "lead.html" };
  L.to = function (entity, id, extra) {
    var p = PAGE[entity];
    if (!p) return null;
    var u = p + "?id=" + encodeURIComponent(id);
    if (extra) Object.keys(extra).forEach(function (k) {
      if (extra[k] != null && extra[k] !== "") u += "&" + k + "=" + encodeURIComponent(extra[k]);
    });
    return u;
  };
  L.go = function (entity, id, extra) { var u = L.to(entity, id, extra); if (u) location.href = u; };

  /* A clickable name that opens the owning record page. */
  L.name = function (entity, id, label) {
    var txt = label == null ? "" : String(label);
    var u = L.to(entity, id);
    if (!u || !id) return esc(txt || "—");
    return "<a class='ww-rec' href='" + u + "'>" + esc(txt || "—") + "</a>";
  };

  /* Who a water test belongs to, as {entity, id, name} or null. */
  L.testOwner = function (t) {
    if (!t) return null;
    if (t.customer_id) {
      var c = WW.get("customers", t.customer_id);
      return { entity: "customer", id: t.customer_id, name: c ? c.name : "—", rec: c };
    }
    if (t.lead_id) {
      var l = WW.get("leads", t.lead_id);
      return { entity: "lead", id: t.lead_id, name: l ? l.name : "—", rec: l };
    }
    return null;
  };
  L.ownerLink = function (t) {
    var o = L.testOwner(t);
    if (!o) return "<span class='t-sub'>—</span>";
    return L.name(o.entity, o.id, o.name) +
           (o.entity === "lead" ? " <span class='badge'>lead</span>" : "");
  };

  /* ---------- selects that honour a preselection ---------- */
  L.options = function (rows, selected, labelFn, placeholder) {
    var out = placeholder == null ? "" :
      "<option value=''" + (selected ? "" : " selected") + ">" + esc(placeholder) + "</option>";
    out += (rows || []).map(function (r) {
      var on = selected != null && String(r.id) === String(selected);
      return "<option value='" + esc(r.id) + "'" + (on ? " selected" : "") + ">" + esc(labelFn(r)) + "</option>";
    }).join("");
    return out;
  };
  /* Mark the matching <option> of a value-list select (source_type etc). */
  L.pick = function (pairs, selected) {
    return pairs.map(function (p) {
      var on = selected != null && String(p[0]) === String(selected);
      return "<option value='" + esc(p[0]) + "'" + (on ? " selected" : "") + ">" + esc(p[1]) + "</option>";
    }).join("");
  };

  /* ---------- context banner for pre-filled forms ---------- */
  L.ctx = function (o) {
    o = o || {};
    var rows = (o.lines || []).filter(Boolean).map(function (l) {
      return "<div class='ww-ctx-line'><span>" + esc(l[0]) + "</span><b>" + (l[2] === "raw" ? l[1] : esc(l[1])) + "</b></div>";
    }).join("");
    return "<div class='ww-ctx'>" +
      "<div class='ww-ctx-head'>" +
        "<span class='ww-ctx-eyebrow'>" + esc(o.eyebrow || "Carried over") + "</span>" +
        "<strong>" + esc(o.title || "") + "</strong>" +
        (o.sub ? "<span class='t-sub'>" + esc(o.sub) + "</span>" : "") +
      "</div>" +
      (rows ? "<div class='ww-ctx-grid'>" + rows + "</div>" : "") +
    "</div>";
  };

  /* ---------- test -> proposal ---------- */
  /* The scope text written onto the proposal. Services and the measured reason
     for each, verbatim from WW.recommend. No prices: nothing in this codebase
     is allowed to invent a number Ken has not given us. */
  L.scopeFromTest = function (test) {
    var recs = WW.recommend(test) || [];
    if (!recs.length) return "";
    var head = "Recommended from the water test dated " + WW.fmtDate(test.date) + ":";
    return head + "\n\n" + recs.map(function (r) {
      return "- " + r.service + "\n  (" + r.why + ")";
    }).join("\n");
  };
  L.titleFromTest = function (test) {
    var recs = WW.recommend(test) || [];
    if (!recs.length) return "";
    if (recs.length === 1) return recs[0].service;
    if (recs.length === 2) return recs[0].service + " + " + recs[1].service;
    return recs[0].service + " + " + (recs.length - 1) + " more";
  };

  window.WWLink = L;
})();
