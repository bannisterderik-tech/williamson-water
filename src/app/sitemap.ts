import type { MetadataRoute } from "next";
import { SERVICES, TOWNS, TOWN_SERVICE_COMBOS } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";

const BASE = "https://www.puretapco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = [
    "",
    "/about",
    "/process",
    "/pricing",
    "/financing",
    "/warranty",
    "/reviews",
    "/faq",
    "/careers",
    "/contact",
    "/quote",
    "/schedule",
    "/privacy",
    "/terms",
    "/resources",
    "/services",
    "/service-areas",
  ].map((p) => ({ url: BASE + p, lastModified: now }));

  const services = SERVICES.map((s) => ({ url: `${BASE}/services/${s.slug}`, lastModified: now }));
  const towns = TOWNS.map((t) => ({ url: `${BASE}/service-areas/${t.slug}`, lastModified: now }));
  const combos = TOWN_SERVICE_COMBOS.map((c) => ({
    url: `${BASE}/service-areas/${c.town}/${c.service}`,
    lastModified: now,
  }));
  const articles = ARTICLES.map((a) => ({ url: `${BASE}/resources/${a.slug}`, lastModified: now }));

  return [...statics, ...services, ...towns, ...combos, ...articles];
}
