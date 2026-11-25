/* ============================================================
   Pure Tap Co / Pure Tap Water Co. — live backend config.

   Presence of this file is what flips js/app-data.js out of demo
   mode and onto Supabase. Delete it and the panel falls back to
   seeded localStorage sample data.

   The key below is the PUBLISHABLE key. It is designed to ship in
   the browser — it carries no privileges of its own. Every table
   has row level security on, so what any visitor can read or write
   is decided in Postgres by db/schema.sql, not here. Verified
   2026-11-19: anonymous INSERT into reviews -> 42501 refused.

   Never put the service_role / secret key in this file.
   ============================================================ */
window.WW_CONFIG = {
  url: "https://elbqgskbashzpvrycweb.supabase.co",
  key: "sb_publishable__6GX960rgLEzoCVB7Hm6GA_amLYcJI5"
};
