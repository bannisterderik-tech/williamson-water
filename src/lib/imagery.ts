// Image registry — every photograph on this site, in one place.
//
// PROVENANCE RULE. These are royalty-free third-party photographs, licensed for
// commercial use. They are NOT photographs of Pure Tap Water Co.'s work, crew,
// trucks, equipment or customers, and nothing on the site may present them as
// such. Alt text describes the scene only; it never implies authorship.
// Town images are genuine photographs of that town or its valley.
//
// Every entry carries its real author, license and source page, and all of them
// are listed publicly at /credits. CC BY and CC BY-SA images require that
// attribution; do not drop it. Cropped or resized CC BY-SA images remain
// CC BY-SA. CC0 images need no attribution but are credited anyway.
//
// When Ken supplies real job photos, replace these slot by slot and delete the
// corresponding credit — a real photo of his work beats any of this.

export type Credit = {
  title: string;
  author: string;
  license: string;
  source: string;
  url: string;
};

export type SiteImage = { src: string; alt: string; credit: Credit };

export const IMAGES = {
  montrose: {
    src: "/img/montrose.jpg",
    alt: "Irrigated fields on the Western Slope outside Montrose, Colorado, with the San Juan Mountains behind",
    credit: { title: "Fields of Montrose Colorado - Western Slope.jpg", author: "Tony Webster", license: "CC BY 2.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Fields_of_Montrose_Colorado_-_Western_Slope.jpg" },
  },
  delta: {
    src: "/img/delta.jpg",
    alt: "The confluence of Hubbard Creek and the North Fork of the Gunnison River in Delta County, Colorado",
    credit: { title: "Confluence of Hubbard Creek and North Fork Gunnison River.JPG", author: "Jeffrey Beall", license: "CC BY 4.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Confluence_of_Hubbard_Creek_and_North_Fork_Gunnison_River.JPG" },
  },
  olathe: {
    src: "/img/olathe.jpg",
    alt: "Main street through Olathe, Colorado, in the Uncompahgre Valley",
    credit: { title: "Olathe, Colorado.JPG", author: "Jeffrey Beall", license: "CC BY-SA 3.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Olathe,_Colorado.JPG" },
  },
  ridgway: {
    src: "/img/ridgway.jpg",
    alt: "Ridgway, Colorado, looking across the Uncompahgre Valley to the San Juan Mountains",
    credit: { title: "Ridgway, Colorado and the Uncompahgre Valley.JPG", author: "Jeffrey Beall", license: "CC BY 4.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Ridgway,_Colorado_and_the_Uncompahgre_Valley.JPG" },
  },
  ouray: {
    src: "/img/ouray.jpg",
    alt: "The mountains above Ouray, Colorado, seen from the Old Twin Peaks Trail",
    credit: { title: "Old Twin Peaks Trail overlooking Ouray, CO.jpg", author: "Seawolf35", license: "CC BY-SA 4.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Old_Twin_Peaks_Trail_overlooking_Ouray,_CO.jpg" },
  },
  telluride: {
    src: "/img/telluride.jpg",
    alt: "The Telluride valley in the San Juan Mountains of southwest Colorado",
    credit: { title: "Telluride valley (Unsplash).jpg", author: "Daniel Ribar bigdanribar", license: "CC0 1.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Telluride_valley_(Unsplash).jpg" },
  },
  cedaredge: {
    src: "/img/cedaredge.jpg",
    alt: "Cedaredge, Colorado, seen from Cedar Mesa on the flank of Grand Mesa",
    credit: { title: "Cedaredge from cedar mesa.jpg", author: "Jaknelaps", license: "CC BY-SA 3.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Cedaredge_from_cedar_mesa.jpg" },
  },
  paonia: {
    src: "/img/paonia.jpg",
    alt: "Fruit orchards in rows above Paonia, Colorado, in the North Fork Valley",
    credit: { title: "Fall harvest in Paonia, Colorado.jpg", author: "Webphd", license: "CC BY 4.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Fall_harvest_in_Paonia,_Colorado.jpg" },
  },
  sanjuans: {
    src: "/img/sanjuans.jpg",
    alt: "Clouds over the San Juan Mountains of southwest Colorado",
    credit: { title: "San Juan Mountains Colorado ahjh.jpg", author: "Luciof", license: "CC BY-SA 3.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:San_Juan_Mountains_Colorado_ahjh.jpg" },
  },
  uncompahgre: {
    src: "/img/uncompahgre.jpg",
    alt: "The Uncompahgre Valley stretching north from the San Juan Mountains",
    credit: { title: "Uncompahgre Valley.JPG", author: "Jeffrey Beall", license: "CC BY 3.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Uncompahgre_Valley.JPG" },
  },
  grandmesa: {
    src: "/img/grandmesa.jpg",
    alt: "Grand Mesa rising above the high plains of western Colorado",
    credit: { title: "Grand Mesa 1740.jpg", author: "Chris Light", license: "CC BY-SA 4.0", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Grand_Mesa_1740.jpg" },
  },
  pour: {
    src: "/img/pour.jpg",
    alt: "Water pouring into a clear drinking glass",
    credit: { title: "Free water pouring close photo", author: "Unknown", license: "CC0 1.0", source: "rawpixel", url: "https://www.rawpixel.com/image/5924341/photo-image-public-domain-plastic-glass" },
  },
  poolwater: {
    src: "/img/poolwater.jpg",
    alt: "Sunlight refracting through clear, still water",
    credit: { title: "Clear blue pool water", author: "Unknown", license: "CC0 1.0", source: "rawpixel", url: "https://www.rawpixel.com/image/6033429/photo-image-public-domain-blue-waves" },
  },
  droplets: {
    src: "/img/droplets.jpg",
    alt: "Water droplets beaded along a blade of grass",
    credit: { title: "Water Droplets", author: "Ylanite Koppens", license: "CC0 1.0", source: "stocksnap", url: "https://stocksnap.io/photo/water-droplets-YCPR5MQTRP" },
  },
  raindrops: {
    src: "/img/raindrops.jpg",
    alt: "Rain beading on a flat surface",
    credit: { title: "Rain Drops", author: "Min An", license: "CC0 1.0", source: "stocksnap", url: "https://stocksnap.io/photo/rain-drops-YYLGRHEGST" },
  },
  shower: {
    src: "/img/shower.jpg",
    alt: "A chrome shower head against tile",
    credit: { title: "Free shower head image", author: "Unknown", license: "CC0 1.0", source: "rawpixel", url: "https://www.rawpixel.com/image/5925137/photo-image-public-domain-house-home" },
  },
  stream: {
    src: "/img/stream.jpg",
    alt: "A clear stream running over rocks through forest",
    credit: { title: "A clear mountain river flowing over smooth volcanic rocks,", author: "Juan Pablo Martinez Gamboa", license: "CC0 1.0", source: "wordpress", url: "https://wordpress.org/photos/photo/6596a729e6/" },
  },
  river: {
    src: "/img/river.jpg",
    alt: "A mountain river flowing fast over a rocky bed",
    credit: { title: "A clear blue river flowing swiftly over rocks in a mountai", author: "appealdahal", license: "CC0 1.0", source: "wordpress", url: "https://wordpress.org/photos/photo/6426a0d899/" },
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof IMAGES;

export const ALL_CREDITS: (SiteImage & { key: string })[] = Object.entries(IMAGES).map(
  ([key, v]) => ({ key, ...v })
);

// --- slot mappings -------------------------------------------------------
// Town keys are genuine photographs of that town or the valley it sits in.
export const TOWN_IMAGE: Record<string, ImageKey> = {
  montrose: "montrose",
  delta: "delta",
  olathe: "olathe",
  ridgway: "ridgway",
  ouray: "ouray",
  telluride: "telluride",
  cedaredge: "cedaredge",
  paonia: "paonia",
};

// Service textures are abstract water/fixture shots. They depict the subject
// matter, never a job this company performed.
export const SERVICE_IMAGE: Record<string, ImageKey> = {
  "reverse-osmosis": "pour",
  "whole-house-filtration": "shower",
  "water-softening": "droplets",
  "well-water-treatment": "stream",
  "uv-purification": "poolwater",
  "iron-sulfur-removal": "river",
  "acid-neutralizers": "raindrops",
  "sediment-filtration": "river",
  "pfas-treatment": "poolwater",
  "commercial-systems": "pour",
  "bottleless-coolers": "pour",
  "emergency-service": "stream",
};

export const REGION: ImageKey[] = ["sanjuans", "uncompahgre", "grandmesa"];

export function townImage(slug: string): SiteImage {
  return IMAGES[(TOWN_IMAGE[slug] ?? "uncompahgre") as ImageKey];
}
export function serviceImage(slug: string): SiteImage {
  return IMAGES[(SERVICE_IMAGE[slug] ?? "poolwater") as ImageKey];
}
