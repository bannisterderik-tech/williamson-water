export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  date: string;
  body: string; // simple markdown-ish formatted; we render with <article className="prose"> + plain HTML
};

export const ARTICLES: Article[] = [
  {
    slug: "hard-water-101",
    title: "Hard Water 101: Why Western Slope water destroys appliances",
    excerpt:
      "Hardness on the Western Slope routinely hits 14–28 gpg. Here's what that does to your water heater, dishwasher, and laundry — and what to do about it.",
    category: "Water Quality",
    readMinutes: 7,
    date: "2025-02-12",
    body: `
<p>If you live anywhere between Grand Junction and Telluride, you live with hard water. Project 7 Water Authority's treated supply tests around 12–16 grains per gallon (gpg). Private wells across the Uncompahgre Valley regularly hit 18–28 gpg. By any standard, that's <em>very</em> hard.</p>

<h2>What is hardness, exactly?</h2>
<p>Hardness is the amount of dissolved calcium and magnesium in your water — measured in grains per gallon (gpg) or parts per million (ppm). One grain equals 17.1 ppm. The minerals come from limestone, dolomite, and other carbonate-rich rock that the water passes through on its way to your tap.</p>

<h2>Why your water heater is dying</h2>
<p>Calcium and magnesium are perfectly fine to drink. They're terrible to heat. As soon as hard water enters your water heater, the minerals come out of solution and precipitate onto the burner element (electric) or tank bottom (gas). This scale layer insulates the heater from the water, forcing it to work harder, longer, and hotter to produce hot water. Studies by the Water Quality Research Foundation show <strong>30% efficiency loss within five years</strong> on hard water without softening. The replacement clock ticks twice as fast.</p>

<h2>Where else hardness shows up</h2>
<ul>
  <li><strong>Glassware</strong> — Spots and a permanent haze. The minerals dry onto the glass surface.</li>
  <li><strong>Skin</strong> — Soap doesn't rinse cleanly; minerals form a scum that closes pores and leaves skin dry.</li>
  <li><strong>Laundry</strong> — Whites grey out, blacks fade, fibers stiffen because mineral salts trap detergent residue.</li>
  <li><strong>Plumbing</strong> — Scale narrows hot-water lines, reduces flow, and seizes valves.</li>
</ul>

<h2>The fix</h2>
<p>A properly sized water softener exchanges the hardness minerals for trace amounts of sodium (or potassium, if you prefer). After a softener, dishwasher rinse aid actually works, soaps lather, glassware comes out spotless, and your water heater lives its full warranty.</p>

<h2>Should I worry about the salt?</h2>
<p>Softened water adds about 30 mg of sodium per quart — roughly the sodium in a single slice of bread. Even doctors restricting salt almost never object. If you do, we route a hard line directly to the kitchen sink so cooking water stays unsoftened.</p>

<h2>Bottom line</h2>
<p>If you've replaced a water heater in fewer than 10 years, are spending Saturdays squeegeeing the shower glass, or have laundry that comes out stiff and grey — your water is telling you. A softener pays for itself in 4–6 years just on appliance life. The rest is gravy.</p>
`,
  },
  {
    slug: "well-water-testing-guide",
    title: "What to test for in your Western Slope well (and what to ignore)",
    excerpt: "A practical, low-bullshit guide to testing private wells in Montrose, Delta, Ouray, and San Miguel counties.",
    category: "Well Water",
    readMinutes: 9,
    date: "2025-01-18",
    body: `
<p>If you're on a private well in western Colorado, the state doesn't test your water. Nobody does, unless you arrange it. Here's the actual list of things worth testing for — and a few that get oversold.</p>

<h2>Test annually</h2>
<ul>
  <li><strong>Total coliform / E. coli</strong> — Bacteria indicators. A positive result means contamination of some kind. UV is the typical fix.</li>
  <li><strong>Nitrates</strong> — Especially in ag-adjacent properties (Olathe corn country, Delta orchards). EPA limit is 10 mg/L; reverse osmosis is the certified removal.</li>
  <li><strong>pH</strong> — Below 7.0 attacks copper. Above 8.5 produces scale. Both fixable.</li>
</ul>

<h2>Test every 3 years</h2>
<ul>
  <li><strong>Iron and manganese</strong> — Even 0.3 ppm iron stains. Above 1 ppm needs oxidation filtration.</li>
  <li><strong>Hydrogen sulfide</strong> — Rotten-egg odor. Detected qualitatively by nose, quantitatively in lab.</li>
  <li><strong>Total dissolved solids (TDS)</strong> — A general indicator. High TDS means high mineral load — typically not a contaminant issue but a quality concern.</li>
  <li><strong>Hardness</strong> — Drives whether you need a softener.</li>
  <li><strong>Uranium</strong> — Worth a one-time test for any well in Colorado. Some pockets of the Western Slope show measurable uranium. Easy removal once known.</li>
</ul>

<h2>Test once, then move on (unless conditions change)</h2>
<ul>
  <li><strong>Radon</strong> — Many Colorado homes have radon in air; some have radon dissolved in water. One-time test is worth it.</li>
  <li><strong>Arsenic, lead</strong> — Rare here but worth a single screening.</li>
  <li><strong>PFAS</strong> — Costly test ($200+). Worth doing if you're near a known contamination zone or firefighting training site.</li>
</ul>

<h2>What gets oversold</h2>
<p>Door-to-door water companies pitch tests that produce dramatic-looking results no matter what comes out of the tap. Common tricks:</p>
<ul>
  <li><strong>TDS scaring</strong> — Mineral content isn't a health issue. Don't fix what isn't broken.</li>
  <li><strong>"Chlorine demand" tests</strong> — A pitch for whole-house carbon you may not need.</li>
  <li><strong>Soap suds test</strong> — Shows hardness, but a strip-test does the same for $0.10.</li>
</ul>

<h2>Where to test</h2>
<p>We pull samples, send to a state-certified Colorado lab (typically Colorado Analytical Labs in Brighton or Industrial Laboratories in Wheat Ridge), and review the results with you. Bacteria culture goes to our local lab in Grand Junction.</p>

<h2>Cost</h2>
<p>A baseline well panel (bacteria, nitrate, pH, hardness, iron, manganese, TDS) runs about $90 at the lab. Add uranium for $35. Radon for $40. PFAS for $200. Our test visit is free — you only pay for the lab work, and only if you want lab work beyond our in-home meters.</p>
`,
  },
  {
    slug: "is-ro-worth-it",
    title: "Is a reverse-osmosis system actually worth it?",
    excerpt:
      "Quick math: bottled water, taste, contaminants, and the break-even point. We'll show our work.",
    category: "Drinking Water",
    readMinutes: 6,
    date: "2025-03-04",
    body: `
<p>Reverse osmosis is the gold standard for drinking-water purification. It's also the most-marketed water product in the home — which means a lot of "is it worth it?" questions. Here's the honest math.</p>

<h2>What an RO actually does</h2>
<p>An RO membrane has pores around 0.0001 microns — small enough to strip out lead, arsenic, nitrates, fluoride, chlorine, chloramine, PFAS, microplastics, and the calcium and magnesium that give water mineral taste. The certified ones (NSF/ANSI 58) have third-party-verified removal rates.</p>

<h2>The bottled water math</h2>
<p>The average four-person household consumes 12–18 cases of bottled water per month. Say 15 cases at $4 each = $60/month, or $720/year. Over 5 years that's $3,600 — not counting hauling, storage, or the plastic guilt.</p>
<p>Against that, a quality RO system and its annual filters usually pay for themselves well inside a couple of years. We quote the actual number after testing your water.</p>

<h2>The taste math</h2>
<p>Chlorine in Project 7 water runs 0.5–1.5 ppm at the tap. The taste threshold is around 0.3 ppm. Most Western Slope tap water tastes like chlorine. RO removes it. Coffee snaps to life. Cocktails taste like the recipe. Pet water bowls don't grow biofilm.</p>

<h2>The contaminant math</h2>
<p>Trace levels of PFAS, lead, and nitrates appear in nearly every municipal water report. They're under EPA "action levels" — but action levels are a regulatory ceiling, not a target. RO removes 99%+ of all three. If you have kids in the home, this is the strongest argument for RO.</p>

<h2>Where RO isn't the answer</h2>
<ul>
  <li>If you only have hardness — buy a softener.</li>
  <li>If your problem is whole-house chlorine smell — buy a whole-house carbon.</li>
  <li>If your well has iron or sulfur — those need pre-treatment before RO.</li>
</ul>

<h2>Final verdict</h2>
<p>For drinking and cooking water, an RO is one of the highest-ROI improvements you can make in your home. We install them all day, and the only complaints we ever hear are from clients who waited too long to do it.</p>
`,
  },
  {
    slug: "pfas-explained",
    title: "PFAS, explained without the panic",
    excerpt: "What 'forever chemicals' actually are, where they come from, and how to know if it's in your water.",
    category: "Water Quality",
    readMinutes: 8,
    date: "2025-04-02",
    body: `
<p>PFAS — per- and polyfluoroalkyl substances — get a lot of headlines and a lot of fear. Here's the actual story.</p>
<h2>What they are</h2>
<p>PFAS are a family of more than 9,000 synthetic chemicals containing the carbon-fluorine bond — one of the strongest bonds in chemistry. That's why they're called "forever chemicals." They don't break down naturally. They show up in non-stick cookware, fast-food wrappers, raincoats, firefighting foam, stain-resistant carpet, and (because they leach into water from those products) in drinking water across the United States.</p>
<h2>Where they come from on the Western Slope</h2>
<p>The two big regional sources are airport firefighting training sites (Grand Junction Regional Airport has been studied) and decades of industrial discharge into rivers that feed our supply systems. Project 7 has tested at low but detectable levels.</p>
<h2>Are the levels actually dangerous?</h2>
<p>The EPA's new enforceable limit is 4 parts per trillion for PFOA and PFOS — about as low as a regulation can practically go. Most municipal water reports show single-digit ppt; some show higher. The science suggests cumulative exposure over decades is the concern, not any single glass of water.</p>
<h2>The fix</h2>
<p>NSF/ANSI 58 certified reverse-osmosis systems remove 99%+ of common PFAS at the kitchen tap. NSF/ANSI 53 certified solid-block carbon filters also work but with somewhat lower removal rates. Most pitcher filters are <em>not</em> certified for PFAS — check the label.</p>
<h2>Bottom line</h2>
<p>PFAS is in our water. The risk per glass is low; the risk over decades is the concern. Point-of-use RO is the certified path to a sub-ppt drinking glass. We test before, test after, and share the lab report.</p>
`,
  },
  {
    slug: "softeners-vs-conditioners",
    title: "Water softeners vs. salt-free conditioners: an honest comparison",
    excerpt: "Two technologies. Two different jobs. Here's how to pick.",
    category: "Softening",
    readMinutes: 6,
    date: "2025-05-20",
    body: `
<p>Salt-free water conditioners are sold heavily online — partly because they're easier to ship without certified install, partly because "salt-free" sounds healthier. But they're not direct substitutes for a softener. They're different tools.</p>
<h2>What a softener does</h2>
<p>Ion exchange. Calcium and magnesium ions in your water swap for trace sodium ions on a resin bed. Hardness is physically removed from the water. Output: water with no measurable hardness.</p>
<h2>What a conditioner does</h2>
<p>Most use template-assisted crystallization (TAC). They convert dissolved hardness minerals into microscopic crystals that <em>don't</em> stick to surfaces — but the minerals are still in the water. Output: still hard water (by measurement), but with reduced scale formation.</p>
<h2>Pros and cons</h2>
<table>
  <thead><tr><th>Concern</th><th>Softener</th><th>Conditioner</th></tr></thead>
  <tbody>
    <tr><td>Scale on shower glass</td><td>Eliminated</td><td>Reduced</td></tr>
    <tr><td>Spotted dishes</td><td>Eliminated</td><td>Mixed results</td></tr>
    <tr><td>Skin/hair feel</td><td>Softer</td><td>No change</td></tr>
    <tr><td>Soap lathering</td><td>Dramatically improved</td><td>No change</td></tr>
    <tr><td>Salt use</td><td>Yes (30–60 lb/mo typical)</td><td>None</td></tr>
    <tr><td>Wastewater from regen</td><td>~30 gal/wk</td><td>None</td></tr>
    <tr><td>Power use</td><td>~$2/mo</td><td>None</td></tr>
    <tr><td>Effective on iron</td><td>Limited (≤0.5 ppm)</td><td>No</td></tr>
  </tbody>
</table>
<h2>When to pick which</h2>
<p>Pick a softener if you have appliance problems, dry skin, hard-water scale, or laundry issues. Pick a conditioner if your only concern is shower-glass scale, you want zero ongoing maintenance, or you have a regulatory restriction on salt discharge in your area. We sell both and quote each honestly.</p>
`,
  },
  {
    slug: "iron-stains-fix",
    title: "Orange iron stains: how to actually get rid of them",
    excerpt:
      "Why iron stains keep coming back even after you clean — and what to install so they stop.",
    category: "Well Water",
    readMinutes: 7,
    date: "2025-06-08",
    body: `
<p>Iron is the most common well-water complaint in our service area. Orange stains in toilet bowls. Reddish-brown rings in the bathtub. Spots on laundry. Discolored bathroom fixtures. Cleaning helps for about a day.</p>
<h2>Where the iron comes from</h2>
<p>Western Slope groundwater passes through iron-rich shales and sandstones. The dissolved iron (ferrous, Fe²⁺) is invisible in the water — until it hits air and oxidizes to ferric (Fe³⁺), which is the orange rust you see. Even 0.3 ppm causes visible staining.</p>
<h2>Why softeners alone don't solve it</h2>
<p>Softeners can capture iron incidentally — but only at low concentrations (under 0.5 ppm) and only for a while. Beyond that the iron fouls the resin and the softener becomes the problem instead of the solution. We see "iron-fouled softener" calls every week.</p>
<h2>The right tool</h2>
<p>Air-injection oxidation filtration. A pocket of compressed air at the top of the media tank oxidizes the iron <em>before</em> it reaches the rest of your plumbing, and a catalytic media bed traps the resulting precipitate. The system backwashes itself every few days.</p>
<h2>What you'll notice after install</h2>
<ul>
  <li>Stains stop forming within 48 hours</li>
  <li>Sulfur smell (if present) is also gone — the same media handles both</li>
  <li>Laundry looks dramatically cleaner</li>
  <li>Water tastes flat for a week, then your palate resets</li>
</ul>
<h2>What it costs</h2>
<p>Priced per install once the water is tested. Pairs with a downstream softener for full water-quality treatment.</p>
`,
  },
  {
    slug: "chlorine-vs-chloramine",
    title: "Chlorine vs. chloramine: what your city is putting in your water",
    excerpt: "Most chlorine is removable. Chloramine is sneakier. Here's what to know.",
    category: "Municipal Water",
    readMinutes: 5,
    date: "2025-07-14",
    body: `
<p>Municipal water has to be disinfected. The question is how — and what it leaves in the water by the time it reaches your tap.</p>
<h2>Chlorine</h2>
<p>Gas chlorine. Cheap, effective, dissipates quickly. Removable with a standard carbon block filter — RO post-filter, fridge filter, or whole-house carbon all handle it. Most of the Western Slope used to be on chlorine.</p>
<h2>Chloramine</h2>
<p>Chlorine combined with ammonia. More stable, lasts longer in long supply lines (Project 7's), better at killing biofilm. Harder to remove — requires <em>catalytic</em> carbon, not standard carbon. A regular fridge filter does very little.</p>
<h2>How to tell which you have</h2>
<p>Read your annual Consumer Confidence Report (CCR). Search "[your city name] CCR" and look for "secondary disinfectant." Or ask us — we know the answer for every town we serve.</p>
<h2>Why it matters</h2>
<p>Chloramine in hot showers off-gases into the air and is absorbed by skin. People with sensitive skin notice the difference within days of installing whole-house carbon. Fish-keepers must remove it (chloramine is lethal to fish, regardless of dechlorination tablets that only neutralize chlorine).</p>
<h2>The fix</h2>
<p>Whole-house catalytic carbon. Priced per install. 5-7 year media life.</p>
`,
  },
  {
    slug: "project-7-water-explained",
    title: "Project 7 Water Authority: where your water comes from",
    excerpt: "If you live in Montrose, Delta, or Olathe, your water has a story. Here's the short version.",
    category: "Municipal Water",
    readMinutes: 5,
    date: "2025-08-22",
    body: `
<p>Project 7 Water Authority is the regional water provider for Montrose, Delta, Olathe, Tri-County Water Conservancy District, and parts of the Uncompahgre Valley. If you live in town in any of these communities, you're a Project 7 customer.</p>
<h2>Source</h2>
<p>Water is diverted from the Gunnison River and treated at the Project 7 treatment plant. It's a high-quality raw source — clean, low-pollutant, fed by Rocky Mountain snowpack.</p>
<h2>Treatment</h2>
<p>Conventional treatment: coagulation, flocculation, sedimentation, filtration, and chloramine disinfection. The chloramine secondary disinfectant is what lasts in the long supply lines that reach Olathe, Delta, and rural service connections.</p>
<h2>What you taste</h2>
<p>Chloramine. Project 7 maintains a chloramine residual to protect long pipe runs from biofilm. Great for safety. Noticeable in drinking water and showers. Catalytic carbon handles it.</p>
<h2>Hardness</h2>
<p>Project 7 water tests around 12-16 gpg hardness — moderately to very hard. It's mineralized because the Gunnison passes through limestone country. Softening is the standard fix.</p>
<h2>What's not in it</h2>
<p>No fluoride is added by Project 7 (some natural fluoride is present). Nitrate levels are very low. Lead levels at the plant are zero — any lead in your tap water is coming from your service line or fixtures.</p>
<h2>What we recommend for Project 7 homes</h2>
<p>Most homes benefit from a softener + RO combo. The chloramine drives the whole-house carbon decision, especially for sensitive-skin households.</p>
`,
  },
  {
    slug: "snowmelt-sediment-spring",
    title: "Snowmelt season: why your water turns brown every spring",
    excerpt: "April–June, the rivers run high and your pipes pay the price. Here's what's happening — and the cheap fix.",
    category: "Seasonal",
    readMinutes: 5,
    date: "2025-04-22",
    body: `
<p>Every April, our phones light up with the same call: "My water is brown."</p>
<h2>What's happening</h2>
<p>Snowmelt off the San Juans and West Elk peaks washes huge volumes of sediment into the Gunnison and Uncompahgre rivers. Surface water treatment plants are designed to handle some turbidity, but the seasonal spike can overwhelm filtration capacity. Even when the plant catches everything, the velocity of water moving through old pipes stirs up sediment that has settled inside the mains. The result: visible turbidity at your fixtures.</p>
<h2>Is it dangerous?</h2>
<p>Usually not — the sediment is mineral, not biological. It looks terrible and tastes earthy but isn't a health concern. If your utility issues a boil-water order, that's different — heed it.</p>
<h2>The fix</h2>
<p>A spin-down sediment separator and a 5-micron pleated cartridge at the point of entry catches the brown water before it reaches your fixtures, dishwasher, washing machine, and ice maker. Priced per install once we know your plumbing. Cartridges change once a year (twice during heavy snowmelt years).</p>
<h2>What not to do</h2>
<p>Don't run hot water during a brown-water event. Sediment gets pulled into your water heater and stays there. Wait for the cold to clear, then flush hot.</p>
`,
  },
  {
    slug: "buying-rural-property-water",
    title: "Buying a rural property? Test the well before you sign.",
    excerpt: "The five tests that should happen before you close on any property with a private well.",
    category: "Buyer's Guide",
    readMinutes: 7,
    date: "2025-09-10",
    body: `
<p>Closing on a rural property is exciting. It's also when buyers most often inherit a water problem the seller didn't disclose — or didn't know about. Here's what to test for before you sign.</p>
<h2>1. Flow test</h2>
<p>Most lenders require it. A flow test measures how many gallons per minute the well can produce, sustained, over a one-hour or four-hour period. Anything under 5 gpm is a flag. Under 3 gpm and you'll need a storage tank and pressure system to live normally.</p>
<h2>2. Bacteria test</h2>
<p>Total coliform and E. coli, cultured at a state-certified lab. A positive result isn't a deal-breaker — UV systems are cheap and effective — but it should adjust your offer.</p>
<h2>3. Full chemistry panel</h2>
<p>pH, hardness, iron, manganese, nitrates, TDS, sulfate, hydrogen sulfide. The numbers will tell you exactly what kind of treatment system you'll need — and what it'll cost.</p>
<h2>4. Uranium</h2>
<p>Western Colorado has uranium-bearing geology. One-time test for $35. Easy fix if positive — but worth knowing.</p>
<h2>5. Septic system inspection</h2>
<p>Not technically water testing, but failed septic systems contaminate wells. Get the septic inspected at the same time.</p>
<h2>Costs and timing</h2>
<p>A full pre-purchase well evaluation runs $300–$450 for testing, $250 for flow, $300–$500 for septic inspection. Two weeks to get all results back. Almost always worth it — we've seen six-figure differences in remediation cost between "looks fine" and "tested everything."</p>
<h2>What to do with the results</h2>
<p>Bring them to us — we'll quote remediation in writing so you can negotiate seller credits or know what you're signing up for. Best $400 you spend in the home-buying process.</p>
`,
  },
];
