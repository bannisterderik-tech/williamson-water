// Central site configuration — navigation, services, towns, business info.
//
// BUSINESS FACTS ARE NULL UNTIL KEN WILLIAMSON SUPPLIES THEM.
// The May 2026 build filled this object with invented values: a reserved-exchange
// phone number ((970) 555-0140), a placeholder street address (1234 S Townsend Ave),
// an unverified license ("CO Master Plumber #ML-204881 · WQA Certified Installer"),
// a founding year, a 75-mile radius, and three social URLs that do not exist.
// All of it shipped publicly on 132 pages.
//
// RULE: nothing goes in this object that did not come from Ken directly.
// Every consumer must handle null by rendering nothing — never a placeholder.
// Canonical source + notes: ~/Ken Williamson/data/business.json

export const BUSINESS = {
  // Verified-safe: these are names, not claims.
  name: "Pure Tap Water Co.",
  owner: "Ken Williamson",
  tagline: "Pure water. Promised.",

  // CONFIRM WITH KEN — inherited from the May build, never verified against
  // the Colorado DORA registration.
  legalName: "Pure Tap Water Co.",

  // BLOCKED — all null until Ken provides them.
  founded: null as number | null,
  phone: null as string | null,
  phoneHref: null as string | null,
  email: null as string | null,
  address: {
    line1: null as string | null,
    city: null as string | null,
    state: "CO",
    zip: null as string | null,
  },
  hours: [] as { day: string; hours: string }[],
  socials: {
    facebook: null as string | null,
    instagram: null as string | null,
    youtube: null as string | null,
  },
  license: null as string | null,
  serviceRadiusMiles: null as number | null,
};

export type ServiceSlug =
  | "reverse-osmosis"
  | "whole-house-filtration"
  | "water-softening"
  | "well-water-treatment"
  | "uv-purification"
  | "iron-sulfur-removal"
  | "acid-neutralizers"
  | "sediment-filtration"
  | "pfas-treatment"
  | "commercial-systems"
  | "bottleless-coolers"
  | "emergency-service";

export type Service = {
  slug: ServiceSlug;
  name: string;
  short: string;
  blurb: string;
  icon: string; // lucide name
  fixes: string[];
  startingAt?: string;
  badge?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "reverse-osmosis",
    name: "Reverse Osmosis Drinking Water",
    short: "Bottled-quality water from your kitchen tap",
    blurb:
      "5-stage and 7-stage under-sink RO systems with remineralization. Removes 99% of dissolved solids, chlorine, nitrates, lead, and PFAS. Engineered for Western Slope hard water.",
    icon: "Droplets",
    fixes: ["Chlorine taste & odor", "TDS / hardness in drinking water", "Lead, arsenic, nitrates", "PFAS / forever chemicals", "Bottled water cost"],
    badge: "Most popular",
  },
  {
    slug: "whole-house-filtration",
    name: "Whole-House Filtration",
    short: "Clean water at every fixture",
    blurb:
      "Point-of-entry carbon and catalytic media systems that scrub chlorine, chloramines, sediment, and organics from every drop entering the home. Sized for your flow rate.",
    icon: "Home",
    fixes: ["Chlorine in showers", "Skin & hair dryness", "Off taste throughout the house", "Sediment from snowmelt"],
  },
  {
    slug: "water-softening",
    name: "Water Softener Installation",
    short: "End hard-water damage for good",
    blurb:
      "High-efficiency, on-demand softeners sized to your hardness and household. The Western Slope runs 12 – 28 gpg — your appliances, water heater, and skin pay the price until you fix it.",
    icon: "ShieldCheck",
    fixes: ["Hard-water scale", "Dry skin & dull hair", "White spots on dishes", "Failing water heaters", "Stiff laundry"],
    badge: "Most common fix",
  },
  {
    slug: "well-water-treatment",
    name: "Well Water Treatment",
    short: "Engineered for rural Montrose County wells",
    blurb:
      "We test your well, design a multi-stage solution, and install everything from oxidation iron filters to UV sterilization. One contractor — not three.",
    icon: "Mountain",
    fixes: ["Iron staining", "Rotten-egg sulfur smell", "Bacteria / coliform", "Manganese", "Uranium / radon"],
  },
  {
    slug: "uv-purification",
    name: "UV Purification",
    short: "Chemical-free disinfection",
    blurb:
      "NSF Class A UV sterilizers neutralize 99.99% of bacteria, viruses, and protozoa — including E. coli, coliform, and Giardia. Critical for private wells and emergency-prep homes.",
    icon: "Sun",
    fixes: ["Positive bacteria tests", "Boil-water advisories", "Private well disinfection", "Cabin / vacation home protection"],
  },
  {
    slug: "iron-sulfur-removal",
    name: "Iron & Sulfur Removal",
    short: "Stop the orange stains and rotten-egg smell",
    blurb:
      "Air-injection oxidation filters specifically tuned for the iron and hydrogen sulfide common in Uncompahgre Valley well water.",
    icon: "FlaskConical",
    fixes: ["Orange / red staining on fixtures", "Rotten-egg odor", "Black slime in toilets", "Discolored laundry"],
  },
  {
    slug: "acid-neutralizers",
    name: "Acid Neutralizers (pH Correction)",
    short: "Protect copper plumbing from pinhole leaks",
    blurb:
      "Low-pH water eats copper. Calcite and corosex neutralizers raise pH to 7.0+ and end the slow drip-drip-drip of leaks in your walls.",
    icon: "TestTube2",
    fixes: ["Blue-green staining", "Pinhole leaks in copper", "pH below 7.0", "Aggressive water"],
  },
  {
    slug: "sediment-filtration",
    name: "Sediment Filtration",
    short: "Keep grit out of your house",
    blurb:
      "Spin-down separators and pleated filtration that handle the silt loads of spring snowmelt and shallow wells across the Western Slope.",
    icon: "Filter",
    fixes: ["Cloudy water", "Clogged aerators", "Damaged solenoid valves", "Snowmelt season turbidity"],
  },
  {
    slug: "pfas-treatment",
    name: "PFAS / Forever Chemical Removal",
    short: "Certified removal of the chemicals you can't see",
    blurb:
      "NSF/ANSI 53 and 58 certified solutions targeting PFOA, PFOS, GenX, and the wider PFAS family. We test, we treat, we re-test.",
    icon: "AlertOctagon",
    fixes: ["PFOA / PFOS in drinking water", "Firefighting foam contamination zones", "Long-term health concerns"],
    badge: "Trending concern",
  },
  {
    slug: "commercial-systems",
    name: "Commercial & Light-Industrial",
    short: "Restaurants, breweries, clinics, ag operations",
    blurb:
      "Custom water treatment for kitchens, breweries, dialysis clinics, dental offices, hydroponic ops, and ag wash-down. We size, install, and service everything.",
    icon: "Building2",
    fixes: ["Spotting on glassware", "Boiler scale", "Bacterial contamination", "Process-water specs"],
  },
  {
    slug: "bottleless-coolers",
    name: "Bottleless Water Coolers",
    short: "End the 5-gallon jug subscription",
    blurb:
      "Plumbed-in cold, hot, and sparkling water coolers for offices, gyms, and shops. One install. No more delivery invoices, no more lifting jugs.",
    icon: "Coffee",
    fixes: ["Jug delivery costs", "Storing 5-gallon bottles", "Plastic waste"],
  },
  {
    slug: "emergency-service",
    name: "Emergency Water Service",
    short: "Emergency response across the Western Slope",
    blurb:
      "Burst pipes, failed softeners, leaking RO systems, bacteria advisories — when water goes sideways, we go on call. Real human, real fast.",
    icon: "Siren",
    fixes: ["No water", "Active leaks", "Failed system", "Boil-water orders"],
  },
];

export const TOWNS = [
  {
    slug: "montrose",
    name: "Montrose",
    county: "Montrose",
    intro: "Our hometown — and where our trucks start every morning.",
    water: "Project 7 Water Authority serves most of Montrose with treated surface water from the Gunnison Diversion. Hardness runs 12 – 16 gpg with seasonal chloramine. Private wells in the surrounding mesa areas commonly hit iron and sulfur.",
    population: "20,400",
  },
  {
    slug: "delta",
    name: "Delta",
    county: "Delta",
    intro: "Full coverage across Delta and the North Fork corridor.",
    water: "Project 7-treated municipal water with hardness in the 10 – 14 gpg range. Outlying wells around Garnet Mesa and Read regularly show iron staining.",
    population: "9,100",
  },
  {
    slug: "olathe",
    name: "Olathe",
    county: "Montrose",
    intro: "Sweet corn capital, hard water everywhere.",
    water: "Olathe runs on Project 7 water with high chlorine residual. Ag-adjacent wells commonly show nitrates and sediment.",
    population: "1,800",
  },
  {
    slug: "ridgway",
    name: "Ridgway",
    county: "Ouray",
    intro: "Mountain town water with mountain town challenges.",
    water: "Ridgway draws from Ridgway Reservoir. Pristine source — but seasonal turbidity and chlorination still drive RO and whole-house demand. Private wells around Pleasant Valley vary widely.",
    population: "1,200",
  },
  {
    slug: "ouray",
    name: "Ouray",
    county: "Ouray",
    intro: "Switzerland of America. Our trucks know the canyon.",
    water: "Ouray's spring-fed system is famously good — but mineralization is high and homes still benefit from softening and RO for drinking water.",
    population: "1,100",
  },
  {
    slug: "telluride",
    name: "Telluride",
    county: "San Miguel",
    intro: "From box-canyon mansions to Mountain Village condos.",
    water: "Telluride and Mountain Village water is some of the cleanest in the state — but altitude, scale, and a discerning clientele drive premium RO and luxury filtration demand.",
    population: "2,600",
  },
  {
    slug: "cedaredge",
    name: "Cedaredge",
    county: "Delta",
    intro: "Surface Creek country — high hardness, high demand.",
    water: "Surface Creek Domestic Water serves most of Cedaredge with hardness frequently above 18 gpg. Wells on Grand Mesa skirts often pull manganese.",
    population: "2,400",
  },
  {
    slug: "paonia",
    name: "Paonia",
    county: "Delta",
    intro: "Orchards, vineyards, and water that needs work.",
    water: "Town of Paonia water with seasonal taste/odor complaints. North Fork wells span the full spectrum — iron, sulfur, sediment, and occasional coliform.",
    population: "1,400",
  },
] as const;

export type TownSlug = (typeof TOWNS)[number]["slug"];

export const NAV: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  {
    label: "Services",
    href: "/services",
    children: SERVICES.slice(0, 9).map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: TOWNS.map((t) => ({ label: t.name + ", CO", href: `/service-areas/${t.slug}` })),
  },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Water Quality Guide", href: "/resources" },
      { label: "Hard Water 101", href: "/resources/hard-water-101" },
      { label: "Well Water Testing", href: "/resources/well-water-testing-guide" },
      { label: "Is RO Worth It?", href: "/resources/is-ro-worth-it" },
      { label: "PFAS Explained", href: "/resources/pfas-explained" },
      { label: "Softeners vs. Conditioners", href: "/resources/softeners-vs-conditioners" },
    ],
  },
  { label: "About", href: "/about" },
];

export const FOOTER_LINKS = {
  Services: SERVICES.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  "Service Areas": TOWNS.map((t) => ({ label: `${t.name}, CO`, href: `/service-areas/${t.slug}` })),
  Company: [
    { label: "About Ken", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Reviews", href: "/reviews" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Water Quality Guide", href: "/resources" },
    { label: "Pricing", href: "/pricing" },
    { label: "Financing", href: "/financing" },
    { label: "Warranty", href: "/warranty" },
    { label: "FAQ", href: "/faq" },
    { label: "Get a Free Quote", href: "/quote" },
  ],
};

// Build SEO landing combos — these power /service-areas/[town]/[service]
export const TOWN_SERVICE_COMBOS = TOWNS.flatMap((t) =>
  SERVICES.filter((s) => s.slug !== "emergency-service" && s.slug !== "bottleless-coolers").map((s) => ({
    town: t.slug,
    service: s.slug,
  }))
);
