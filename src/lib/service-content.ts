import type { ServiceSlug } from "./site";

export type ServiceContent = {
  hero: string;
  longBlurb: string;
  problem: { title: string; body: string }[];
  howItWorks: { title: string; body: string }[];
  results: string[];
  goodFor: string[];
  features: string[];
  caveats?: string;
  faq: { q: string; a: string }[];
};

export const SERVICE_CONTENT: Record<ServiceSlug, ServiceContent> = {
  "reverse-osmosis": {
    hero: "Bottled-quality water from your kitchen tap. Every glass. For pennies.",
    longBlurb:
      "Reverse osmosis is the gold standard for drinking-water purification. A semi-permeable membrane removes more than 99% of dissolved solids — including lead, arsenic, nitrates, fluoride, chlorine, chloramine, PFAS, microplastics, and the calcium and magnesium that make Western Slope water taste flat and ruin coffee. We install 5-stage and 7-stage systems with calcium remineralization, so your water doesn't just become safe — it becomes the best you've ever tasted.",
    problem: [
      { title: "City water tastes like a pool.", body: "Project 7 keeps chlorine residuals high to protect long supply lines. Great for safety, terrible for flavor and morning coffee." },
      { title: "TDS through the roof.", body: "Western Slope tap regularly tests 280–600 ppm TDS. The bar for 'great' water is under 50. RO closes that gap in seconds." },
      { title: "PFAS is in your county report.", body: "Trace PFOA and PFOS are now detectable across Colorado's water supply. NSF/ANSI 58 certified RO removes them. Pitchers don't." },
      { title: "Bottled water is a standing expense.", body: "A household that buys drinking water by the case is paying for it again every month. A plumbed RO system replaces that with a filter change." },
    ],
    howItWorks: [
      { title: "Stage 1 — Sediment", body: "5-micron pleated pre-filter pulls silt, rust, and snowmelt turbidity off the line before they hit the membrane." },
      { title: "Stage 2 — Carbon block", body: "Coconut-shell catalytic carbon strips 99% of chlorine, chloramine, VOCs, and any taste/odor your softener missed." },
      { title: "Stage 3 — RO membrane", body: "75-100 GPD thin-film membrane rejects 95-99% of total dissolved solids, lead, arsenic, fluoride, PFAS, and nitrates." },
      { title: "Stage 4 — Polishing carbon", body: "Inline carbon scrubs anything that made it through and removes any residual taste from the storage tank." },
      { title: "Stage 5 — Remineralization", body: "Trace calcium and magnesium add back the minerals that give water structure and a clean, alpine taste." },
    ],
    results: [
      "Water that tastes better than bottled — by a wide margin",
      "Crystal-clear ice cubes that don't fog or off-gas",
      "Coffee, tea, and cocktails that taste like the recipe intended",
      "Zero PFAS, lead, nitrates, or fluoride in your pour",
      "Pet bowls, fish tanks, and humidifiers fed with pure water",
    ],
    goodFor: ["City water with strong chlorine taste", "Well water with high TDS", "Households tired of buying bottled", "Coffee snobs", "PFAS-concerned homeowners"],
    features: [
      "NSF/ANSI 58 certified components",
      "Lead-free brass faucet (choose from 4 finishes)",
      "3.2-gallon pressurized storage tank",
      "Built-in TDS meter on dedicated faucet (optional)",
      "Filter-life monitor with phone reminders",
      "Workmanship warranty",
    ],
    caveats: "RO is for drinking water. It is not a whole-house solution. We typically pair RO with a softener for cooking water and a whole-house carbon for showers.",
    faq: [
      { q: "Will an RO remove minerals I want?", a: "Yes, RO removes all dissolved minerals. Our standard install adds calcium and magnesium back at the post-stage so you get the health benefits and the alpine taste without the scale." },
      { q: "How much water does it waste?", a: "Modern membranes run a 1:1 ratio (one gallon of waste per gallon produced). Older systems were 4:1. We install only modern, efficient units." },
      { q: "How often do filters change?", a: "Pre and post-carbon filters every 12 months. Membrane every 3-5 years. We offer a reminder service so you never forget." },
    ],
  },

  "whole-house-filtration": {
    hero: "Clean water at every fixture. Not just the kitchen.",
    longBlurb:
      "A whole-house (point-of-entry) filtration system mounts where the water enters your home and treats every drop — kitchen, shower, washing machine, hose bib, toilet. We size each system to your flow rate and target the specific contaminants in your water: chlorine, chloramine, sediment, organics, taste, and odor. Western Slope homes especially benefit because chlorinated municipal water dries skin and hair, and high sediment loads during snowmelt can wreck your appliances.",
    problem: [
      { title: "Chlorine kills your skin and hair.", body: "Chlorine vapor in a hot shower is absorbed through skin and inhaled. Whole-house carbon removes it before it reaches the fixture." },
      { title: "Sediment is destroying valves.", body: "Spring snowmelt loads pipes with silt that grinds solenoid valves, dishwasher pumps, and refrigerator water lines into early retirement." },
      { title: "Taste & odor at every faucet.", body: "Spending money on a kitchen RO while bathroom and outdoor faucets still smell like chlorine is half a solution." },
    ],
    howItWorks: [
      { title: "Stage 1 — Big-blue sediment", body: "Whole-house 4.5\" × 20\" cartridge captures sediment down to 5 microns at full house flow." },
      { title: "Stage 2 — Catalytic carbon tank", body: "1.5 or 2.0 cu-ft of catalytic coconut carbon scrubs chlorine, chloramine, VOCs, and organic taste/odor for 5–7 years." },
      { title: "Stage 3 — Backwash control", body: "Programmable head backwashes the media every 7 days to keep flow rates and capacity at spec." },
      { title: "Optional — Iron, KDF, UV", body: "We layer in additional media or UV based on what your test report shows." },
    ],
    results: ["Softer skin and hair after every shower", "No more chlorine smell from any tap", "Longer-lived appliances", "Better-tasting water everywhere — even the laundry rinse"],
    goodFor: ["Homes on chlorinated municipal water", "Snowmelt-affected rural water", "Families with sensitive skin/eczema", "Anyone tired of fixing valves"],
    features: ["Sized for 1.5\" or 2\" service lines", "Bypass valve for service days", "5–7 year media life", "Backed by 10-year tank warranty", "Whisper-quiet electronic head"],
    faq: [
      { q: "Does this replace a softener?", a: "No. A whole-house filter removes chlorine, sediment, and taste — it does NOT remove hardness. Most homes pair a whole-house filter with a softener." },
      { q: "How big does the unit need to be?", a: "We size by gallons-per-minute peak demand and household size. A typical 3–4 bath home runs a 1.5 cu-ft tank. We never undersize." },
      { q: "Does it need power?", a: "The control head uses about as much electricity as a phone charger. We plug it into the same outlet as your water heater." },
    ],
  },

  "water-softening": {
    hero: "Stop scale at the source. Save your skin, hair, and water heater.",
    longBlurb:
      "Western Slope water is hard — frequently 14 to 28 grains per gallon. That hardness is calcium and magnesium, and while it's safe to drink, it destroys appliances, ruins glassware, dries out skin, leaves laundry stiff, and wears down your water heater years before its time. A properly sized softener replaces those minerals with a trace of sodium and ends the war. We install high-efficiency, on-demand softeners from Clack, Pentair, and Kinetico — sized to your water test and household — and we tune them in person, not over the phone.",
    problem: [
      { title: "Soap-scum on every surface.", body: "If you've ever wiped down a shower door every weekend, you've fought hard water. A softener ends that chore for good." },
      { title: "Your water heater is dying early.", body: "Hard water scales the bottom of the tank. By year five, capacity is cut in half and your gas bill doubles." },
      { title: "Dishwasher and laundry pain.", body: "Spotted glassware. Stiff towels. Faded blacks. Hard water is the silent killer behind every laundry complaint." },
    ],
    howItWorks: [
      { title: "Resin tank", body: "1.0–1.5 cu-ft of high-capacity resin captures calcium and magnesium as water flows through." },
      { title: "On-demand regeneration", body: "A meter counts gallons used. Only when the resin is fully loaded does the system regenerate — saving salt and water." },
      { title: "Brine tank", body: "A sized salt tank refills monthly for the average household. We use clean, pellet-form salt." },
      { title: "Backwash + rinse", body: "During regen, brine rinses the resin and the unit refills, ready for another cycle." },
    ],
    results: ["No more scale on glass shower doors", "Bright white whites in the laundry", "Glassware out of the dishwasher with zero spots", "Hot showers without the squeaky-skin fight", "Water heater that lives its full warranty"],
    goodFor: ["Any home on Western Slope water above 7 gpg", "Homes with hard-water scale on fixtures", "People with eczema or dry-skin complaints", "Anyone who's replaced a water heater early"],
    features: ["1.0 to 2.0 cu-ft sizing", "Electronic metered control valve", "Bypass valve standard", "Salt-use meter and reminders", "10-year tank warranty / 5-year head"],
    faq: [
      { q: "Will softened water taste salty?", a: "No. A softener adds about 30 mg of sodium per quart — about as much as a slice of bread. Even sodium-restricted diets are fine. If you're worried, we route a hard line to the kitchen sink." },
      { q: "How often does it regenerate?", a: "Most households regenerate once every 5-9 days. The system only fires when needed — not on a timer." },
      { q: "Salt-free conditioner instead?", a: "Salt-free systems condition water but do not remove hardness. We sell them when appropriate, but most clients buying a softener actually need a softener." },
    ],
  },

  "well-water-treatment": {
    hero: "We test your well like our family lives there. (Sometimes they do.)",
    longBlurb:
      "Private wells in Montrose, Delta, Ouray, and San Miguel counties run the gamut — from pristine sandstone springs to iron-loaded, sulfur-stinking, bacteria-positive nightmares. There is no off-the-shelf well solution. We pull a full ICP-MS water test, design a multi-stage system specific to your contaminants, and install everything in one visit. The big chains use a softener as a hammer for every well water nail. We don't.",
    problem: [
      { title: "Iron staining everything orange.", body: "Even 0.3 ppm of iron stains laundry, fixtures, and toilet bowls. Many local wells run 1.5–6 ppm. Softeners can't handle it alone." },
      { title: "Rotten-egg sulfur smell.", body: "Hydrogen sulfide gas dissolves into shallow aquifers and turns showers into sewer simulations. Air-injection oxidation kills it." },
      { title: "Bacteria positive on the well test.", body: "Coliform shows up in seasonal wells, shallow wells, and cracked casings. UV neutralizes 99.99% — no chemicals required." },
      { title: "Manganese turning fixtures black.", body: "Sneaky cousin of iron. Stains and slimes. Requires its own oxidation media." },
    ],
    howItWorks: [
      { title: "1. Complete well test", body: "We pull a sample, send it to a state-certified lab, and design from real numbers — not a strip-test guess." },
      { title: "2. Pre-treatment", body: "Spin-down sediment separator strips sand and grit before anything else." },
      { title: "3. Oxidation + filtration", body: "Air-injection or chemical-injection plus catalytic media converts iron, sulfur, and manganese into filterable solids." },
      { title: "4. Softening", body: "After contaminants are removed, a softener handles the remaining hardness — typically much lower than untreated." },
      { title: "5. UV sterilization", body: "Final stage for bacteria. Optional but recommended on every private well." },
      { title: "6. Point-of-use RO", body: "Drinking-water polish for the kitchen. Belt-and-suspenders on a well." },
    ],
    results: ["Clean, soft, odor-free water from every tap", "Stains gone — fixtures, toilets, laundry", "Showers without the smell", "Confident drinking water for kids, guests, and dogs"],
    goodFor: ["Any private well", "Homes after a positive bacteria test", "Buyers of a property with a 'mystery' well", "Properties on shared community wells"],
    features: ["Lab testing", "Custom multi-stage design", "Install scheduled around you", "Workmanship warranty", "Annual maintenance contracts available"],
    faq: [
      { q: "How much will my well system cost?", a: "It depends on what your well actually contains, which is why we test before quoting. You get the number in writing once we know." },
      { q: "How long will it last?", a: "Tank-based media systems run 6–10 years. UV bulbs every 12 months. Membranes 3–5 years. We service all of it." },
      { q: "Will my well pump be OK?", a: "Part of the design. We measure your flow and pressure before specifying any system. If your pump is undersized for treatment, we'll tell you before you spend a dollar on filters." },
    ],
  },

  "uv-purification": {
    hero: "99.99% of bacteria, viruses, and protozoa — without a single chemical.",
    longBlurb:
      "UV sterilizers shine high-intensity 254 nm ultraviolet light at every drop of water flowing through your house. The wavelength scrambles bacterial DNA so the organisms can't reproduce. There is no chemical residual, no taste change, no waste water, and no salt. Properly sized and pre-filtered, a UV system makes well water as microbiologically safe as a municipal supply. We size to your flow rate, recommend pre-filtration, and install with a flow-sensor and visual indicator.",
    problem: [
      { title: "Positive bacteria test on your well.", body: "E. coli, total coliform, and other indicators are found in 25%+ of private wells nationwide. Boil-water orders are a band-aid; UV is the fix." },
      { title: "Boil-water advisories.", body: "When the municipal system fails, UV is your insurance. The light stays on. The bacteria don't." },
      { title: "Cabin / vacation home protection.", body: "Stagnant lines breed bacteria. UV at the point of entry keeps a seasonal home safe year-round." },
    ],
    howItWorks: [
      { title: "Pre-filtration", body: "UV requires clear water — 5-micron sediment minimum, often with iron pre-treatment. We never skip the prep." },
      { title: "UV chamber", body: "A high-intensity 30 or 40 mJ/cm² UV lamp inside a stainless chamber treats every drop in real time." },
      { title: "Flow sensor & alarm", body: "If the lamp fails or flow exceeds dose rating, an alarm fires. No silent failure." },
      { title: "Annual lamp swap", body: "We replace the lamp annually as part of your service contract. Quartz sleeve every 2 years." },
    ],
    results: ["Confident drinking water on a private well", "Peace of mind during boil-water orders", "No chemical residual, no taste change", "Insurance for vacation homes"],
    goodFor: ["Any private well", "Cisterns and seasonal supplies", "Restaurants and clinics on well water", "Pre-emptive disinfection on aging municipal lines"],
    features: ["NSF Class A and Class B units", "Stainless steel chamber", "Audible & visual alarm on lamp failure", "Pre-filter housing included", "Workmanship warranty"],
    faq: [
      { q: "Will UV remove iron, hardness, or chemicals?", a: "No. UV is a microbiological treatment only. We pair it with iron filters, softeners, and carbon as your water requires." },
      { q: "How often do bulbs change?", a: "Annually. Bulb intensity falls below dose spec at 9,000 hours. We send reminders and stock the bulbs." },
      { q: "Does it use a lot of power?", a: "A UV lamp draws very little — comparable to leaving a small LED fixture on." },
    ],
  },

  "iron-sulfur-removal": {
    hero: "End the orange stains and the rotten-egg smell. Permanently.",
    longBlurb:
      "Iron and hydrogen sulfide are the two most common — and most aggressive — well water contaminants on the Western Slope. They stain everything, smell terrible, and shorten the life of every downstream component. Air-injection oxidation filtration is the right tool: it injects a pocket of air into the top of the media tank, oxidizes the iron and sulfide as water passes through, and traps the resulting precipitate in catalytic media. Periodic backwashing flushes the captured contaminants. No chemicals. No regen salts. No moving parts to wear out.",
    problem: [
      { title: "Orange staining everywhere.", body: "Toilets, tubs, sinks, laundry — iron oxidizes when exposed to air. Even 0.3 ppm causes visible staining." },
      { title: "Rotten-egg smell from hot water.", body: "Hydrogen sulfide is produced by sulfur bacteria in the water heater anode. Removal at the point of entry kills both the smell and the bacterial source." },
      { title: "Black slime in toilet tanks.", body: "Manganese — iron's evil cousin — leaves black stains and slime. Same oxidation media handles both." },
    ],
    howItWorks: [
      { title: "Air injection (DIR)", body: "A pocket of compressed air at the top of the media tank oxidizes incoming iron and sulfide instantly." },
      { title: "Catalytic media bed", body: "Specialized media (Filox, Birm, or KMnO₄-regenerated) traps the oxidized precipitate before it reaches your home." },
      { title: "Automatic backwash", body: "Every 3–7 days the system reverses flow, drops the air pocket, and flushes captured iron and sulfur to the drain." },
      { title: "Polish stage", body: "We follow oxidation with a 5-micron carbon to catch the last 1% and remove any residual taste." },
    ],
    results: ["Zero orange or black staining", "No more rotten-egg smell from showers", "Cleaner laundry and brighter whites", "Longer-lived water heaters and dishwashers"],
    goodFor: ["Wells with iron above 0.3 ppm", "Wells with measurable H₂S or sulfur odor", "Homes with manganese staining", "Older wells with rust accumulation"],
    features: ["No chemicals required", "5-10 year media life", "Self-cleaning via automatic backwash", "Compact 9\" or 10\" diameter tanks", "Workmanship warranty"],
    faq: [
      { q: "How is this different from a softener?", a: "A softener exchanges ions. It captures small amounts of iron incidentally — but at typical Western Slope iron levels (1–6 ppm) it will foul within months. Oxidation media is the right tool." },
      { q: "Will it remove all the smell?", a: "If the source is hydrogen sulfide in the cold water — yes, completely. If the smell only shows up in hot water, the issue may be your water heater anode and we may recommend a swap instead." },
      { q: "How much water does backwash use?", a: "About 30 gallons every 5 days for a typical 9\" tank. Less than a single shower per week." },
    ],
  },

  "acid-neutralizers": {
    hero: "Save your copper plumbing before it leaks.",
    longBlurb:
      "Western Slope groundwater is often slightly acidic — pH below 7.0 — especially in mountain wells fed by snowmelt and granite-aquifer sources. Acidic water aggressively attacks copper plumbing, leading to blue-green staining, pinhole leaks, and full re-plumbs that cost five figures. An acid neutralizer raises pH by passing water through a bed of calcite and corrosive media, which dissolves slowly to add the alkalinity the water is missing. It's one of the cheapest investments you can make in your home — and one of the most overlooked.",
    problem: [
      { title: "Blue-green stains in tubs and sinks.", body: "That's copper dissolving out of your pipes. It's not staining — it's failure in progress." },
      { title: "Pinhole leaks already?", body: "If your home is on a well and you've had a leak in a copper line, acidic water is the prime suspect. Neutralize before the next one." },
      { title: "Metallic taste in drinking water.", body: "Aggressive water leaches metals from the pipe. Even at sub-action levels, the taste is there." },
    ],
    howItWorks: [
      { title: "Calcite media bed", body: "Crushed calcium carbonate dissolves slowly, raising pH to 7.0–7.5." },
      { title: "Corosex (optional)", body: "For very low pH water (under 5.5), we blend in corosex — a more aggressive media that holds the line at slightly higher pH." },
      { title: "Automatic backwash", body: "Periodic backwash redistributes the media and prevents channeling." },
      { title: "Annual top-off", body: "Calcite dissolves into the water (it's how it works). We refill the media tank once a year as part of service." },
    ],
    results: ["pH lifted to a safe 7.0–7.5", "Copper protected from acid corrosion", "Blue-green staining stopped", "Hardness slightly increased (calcium added — pair with softener if needed)"],
    goodFor: ["Any well below pH 7.0", "Homes with copper plumbing and any sign of corrosion", "Mountain wells fed by snowmelt", "Properties with recent pinhole leaks"],
    features: ["10-15 year tank life", "Annual media refill included in service plan", "No chemicals required", "Compact footprint", "Pairs perfectly with a softener"],
    faq: [
      { q: "Will this make my water hard?", a: "Slightly — it adds calcium as it neutralizes. If hardness is a concern, we pair the neutralizer with a softener downstream." },
      { q: "How often does the media need refilled?", a: "Calcite is consumed as it works. Most homes need a top-off every 12 months — included in our annual service plan." },
      { q: "What if my pH is too low for calcite?", a: "Below 5.5, we use a corosex blend. Below 5.0, we step up to a chemical-injection system. We measure first, design second." },
    ],
  },

  "sediment-filtration": {
    hero: "Keep dirt out of your appliances. And your glass.",
    longBlurb:
      "Spring snowmelt, shallow wells, and aging municipal mains all push sediment downstream. Sand, silt, rust flakes, and biofilm shred the rubber gaskets in your dishwasher, jam your refrigerator water line, and turn that one bathroom faucet into a slow trickle. A properly sized sediment filtration system catches everything before it hits the rest of your plumbing — and protects every dollar of downstream water treatment.",
    problem: [
      { title: "Cloudy water at the tap.", body: "Visible turbidity is just the tip — most sediment is small enough to pass through your eye but big enough to wreck a solenoid valve." },
      { title: "Aerators clog every month.", body: "If you're unscrewing the aerator on your kitchen faucet regularly, you have a sediment problem upstream." },
      { title: "Snowmelt turbidity spikes.", body: "March-through-June, mountain water runs brown. Without filtration, that ends up in your refrigerator, ice maker, and washer." },
    ],
    howItWorks: [
      { title: "Spin-down separator", body: "Centrifugal pre-filter strips sand and grit down to 60 microns. Flush the bowl monthly — that's the whole maintenance plan." },
      { title: "Pleated cartridge", body: "Whole-house 4.5\" × 20\" pleated cartridge handles 5-micron and finer particles, with massive surface area for long life." },
      { title: "Optional sub-micron polish", body: "For homes with persistent fine sediment, we layer in a 1-micron post-filter to catch the last fraction." },
    ],
    results: ["Crystal-clear water at every fixture", "Longer-lived dishwashers, fridges, and water heaters", "Aerators that stop clogging", "Cleaner everything downstream"],
    goodFor: ["Homes on shallow or older wells", "Snowmelt-affected mountain supplies", "Aging municipal mains", "Any home that's experiencing visible turbidity"],
    features: ["Re-usable spin-down with sight glass", "12-month pleated cartridges", "Tool-free housing changeouts", "Bypass valve included", "Pairs with every other system we sell"],
    faq: [
      { q: "How often will I change the cartridge?", a: "12 months on average. Snowmelt season may compress that — we include a pressure gauge so you can see flow drop and change on time." },
      { q: "What about a backwashing filter instead?", a: "For very high sediment loads (50+ NTU), we install a backwashing media tank that's self-cleaning. Above 100 NTU we may add a settling tank too." },
      { q: "Will it lower my pressure?", a: "Less than 2 psi when fresh. We size to your peak demand so you never feel it." },
    ],
  },

  "pfas-treatment": {
    hero: "Forever chemicals don't have to be forever in your home.",
    longBlurb:
      "PFAS — perfluoroalkyl and polyfluoroalkyl substances — are now detected at trace levels in nearly every municipal water supply in the United States. They don't break down. They accumulate in the body. The EPA has set new enforceable limits, but most utilities are years away from compliance upgrades. The good news: NSF/ANSI 53 and NSF/ANSI 58 certified residential systems can remove more than 99% of the most common PFAS today, at the point of use. We install them, we test before and after, and we publish the numbers.",
    problem: [
      { title: "PFAS is in the report.", body: "If your annual Consumer Confidence Report shows any PFAS — even sub-action levels — the chemical is in your kid's water bottle." },
      { title: "Pitcher filters miss most of it.", body: "Most off-the-shelf pitcher filters are NSF 42 certified — taste and odor only. PFAS removal requires NSF 53 or 58." },
      { title: "Bottled water isn't the answer.", body: "Several major bottled brands have tested positive for PFAS. The plastic itself contributes. Point-of-use RO is the certified path." },
    ],
    howItWorks: [
      { title: "Certified RO membrane", body: "An NSF/ANSI 58 certified RO removes 99%+ of PFOA, PFOS, GenX, and the wider PFAS family. We install only certified systems." },
      { title: "Bonded activated carbon", body: "For homes without RO, a pair of NSF 53-certified solid-block carbon stages provides high-percentage PFAS removal at the kitchen tap." },
      { title: "Pre/post lab testing", body: "We pull a baseline sample, install, and re-test at 30 days. We share the lab report with you. No black boxes." },
    ],
    results: ["More than 99% reduction of common PFAS", "Documented before-and-after lab results", "Peace of mind for families with young kids", "Removal of co-contaminants (lead, nitrates, chlorine) at no extra cost"],
    goodFor: ["Any household concerned about PFAS in their CCR", "Homes near agricultural firefighting drill grounds", "Families with infants or expectant mothers", "Anyone tired of bottled water"],
    features: ["NSF/ANSI 53 and 58 certified components only", "Pre- and post-install lab testing", "Filter-life monitor with phone reminders", "Custom faucet finishes", "Workmanship warranty"],
    faq: [
      { q: "How do I know it's actually working?", a: "We pull a baseline sample before install and re-test 30 days after. You see the lab report. If you don't get the numbers we promised, we re-engineer." },
      { q: "Does the whole house need PFAS treatment?", a: "For drinking, cooking, and ice — yes. For showering — current science doesn't show significant dermal/inhalation risk for typical PFAS levels, so we generally recommend point-of-use only for cost reasons." },
      { q: "Is this the same as a regular RO?", a: "It uses the same architecture, but only certain membranes and components are NSF/ANSI 58 certified for PFAS. We install only the certified ones." },
    ],
  },

  "commercial-systems": {
    hero: "Restaurants, breweries, clinics. We've done your industry.",
    longBlurb:
      "Commercial water is its own animal. Coffee shops need balanced minerals for flavor. Breweries need precise softening and chloramine removal. Dental and dialysis clinics have hard regulatory specs. Restaurants need scale-protected dish machines. We design, install, and service commercial water systems across the Western Slope — and we hold annual service contracts on dozens of accounts. Bring us the spec sheet (or the symptom). We'll quote real, fixed numbers.",
    problem: [
      { title: "Spotting on the glass at the bar.", body: "Bar glasses out of a high-temp dish machine spotted means hardness is fouling the rinse arm. RO-assisted rinse or full softening solves it." },
      { title: "Espresso tastes flat or sour.", body: "Coffee water needs balanced TDS — typically 125-200 ppm with controlled alkalinity. We dial it for SCA spec." },
      { title: "Brewery sparge water off-spec.", body: "Brewing water defines beer character. We help brewers spec carbon, RO, and mineral additions to reproduce target water profiles." },
      { title: "Clinic compliance audit.", body: "Dental, dialysis, and lab water have specific NSF/AAMI specifications. We document and service to the spec." },
    ],
    howItWorks: [
      { title: "Site survey + flow analysis", body: "We measure peak draw, line size, and downtime tolerance. No over-engineering, no under-spec." },
      { title: "Custom system design", body: "We blueprint the system on your site, including service access, drain lines, and bypass." },
      { title: "Code-compliant install", body: "All commercial installs include backflow protection, RPZ where required, and inspection paperwork." },
      { title: "Service contract", body: "Monthly, quarterly, or semi-annual visits depending on use. We bring the consumables and the documentation." },
    ],
    results: ["Glassware out of the dish machine spotless", "Espresso pulled to spec", "Brewing water dialed to recipe", "Compliance binder ready for inspection"],
    goodFor: ["Restaurants & bars", "Breweries, distilleries & coffee roasters", "Dental, dialysis & medical clinics", "Agricultural wash-down", "Greenhouses & cannabis ops"],
    features: ["Service contracts available", "After-hours emergency response", "Compliance documentation provided", "ROI analysis on every quote", "Custom design and engineering"],
    faq: [
      { q: "Do you handle backflow prevention?", a: "Yes — we install and certify RPZ and double-check assemblies, and we file annual test reports with your municipality." },
      { q: "Can you service systems we already have?", a: "Most likely. We service most major commercial brands and can usually rebuild a tired unit for less than half the cost of a new system." },
      { q: "What's the typical lead time?", a: "2-4 weeks for standard systems. We stock common parts and run an emergency truck for service contract clients." },
    ],
  },

  "bottleless-coolers": {
    hero: "End the 5-gallon jug subscription.",
    longBlurb:
      "If your office, gym, or shop still has 5-gallon jugs being delivered — you're paying for water you could be making. A bottleless cooler plumbs directly into your existing water line, filters and chills (and optionally heats and sparkles) on demand, and removes the storage, lifting, and delivery costs forever. We install and service bottleless coolers across Montrose County and beyond, including office, retail, gym, and break-room environments.",
    problem: [
      { title: "Jug delivery is expensive.", body: "Jug delivery is a recurring invoice that never stops, plus storage space and the lifting. A plumbed cooler replaces all of it with a filter change." },
      { title: "Empty jugs everywhere.", body: "5-gallon jugs take up storage. Empty jugs are heavier than they look. Lifting is a workplace-injury cause." },
      { title: "Plastic waste.", body: "Even with deposit-and-return, the carbon footprint of bottled coolers is multiples of plumbed alternatives." },
    ],
    howItWorks: [
      { title: "Plumbed water line", body: "We tap a nearby cold water line, run polished tubing, and connect the cooler — usually in under 90 minutes." },
      { title: "Multi-stage filtration", body: "Sediment + carbon + ultrafiltration removes chlorine, lead, microplastics, and 99.9% of bacteria." },
      { title: "Chill, hot, sparkling (optional)", body: "Pick your spec. Cold-only, hot-and-cold, or full premium with carbonation." },
      { title: "Monthly service", body: "We swap filters and sanitize the lines on the schedule that matches your usage." },
    ],
    results: ["No more jug deliveries", "Predictable monthly cost", "Cleaner break room", "Bigger ROI than you'd guess"],
    goodFor: ["Offices and clinics", "Gyms and yoga studios", "Hair salons and barber shops", "Retail showrooms and dealerships", "Break rooms and shop floors"],
    features: ["Lease or buy options", "Lease or purchase, your call", "Cold, hot, and sparkling configurations", "Stainless or ABS cabinet", "Monthly filter service included"],
    faq: [
      { q: "Can we lease instead of buy?", a: "Yes — leasing is available, with filter changes and sanitization included. Ask us for current lease and purchase terms." },
      { q: "What if we move locations?", a: "Talk to us and we will sort the move out with you." },
      { q: "How loud is it?", a: "Quieter than a refrigerator. The compressor cycles a few times an hour." },
    ],
  },

  "emergency-service": {
    hero: "When water goes sideways, we go on call.",
    longBlurb:
      "Burst pipe. Leaking softener. Failed RO. Active well contamination. Whatever the water emergency, we answer the phone — and we move. Pure Tap Water Co. runs a dedicated emergency truck across Montrose County and a 24-hour line for the surrounding Western Slope. We are licensed plumbers; we don't just sell tanks. If we can fix it, we will. If we can't, we'll tell you who can and stay until the situation is stable.",
    problem: [
      { title: "No water in the house.", body: "Pump failure, frozen line, failed pressure tank — we diagnose and stabilize while you stay dry." },
      { title: "Active leak from a softener or RO.", body: "Connectors fail. Tanks crack. We carry every common part on the truck and can shut down/repair in one visit." },
      { title: "Bacteria warning from the county.", body: "We deliver bottled water for the gap and run an emergency UV or chlorination install within 24 hours." },
    ],
    howItWorks: [
      { title: "Phone call to triage", body: "Real human on the line. We talk you through shut-offs and damage control before we hit the road." },
      { title: "Emergency dispatch", body: "Call and we will tell you honestly how soon we can be there." },
      { title: "Repair or stabilize", body: "We fix what we can on the spot. What we can't, we make safe and schedule a permanent fix." },
      { title: "Documentation for insurance", body: "We provide a full report with photos for your homeowner claim if applicable." },
    ],
    results: ["Water restored — fast", "Damage minimized", "Documented for insurance", "Real human accountability"],
    goodFor: ["Burst pipes", "Failed softeners and RO units", "Boil-water orders", "Frozen and broken well-pump situations", "Suspected contamination events"],
    features: ["24-hour line", "Stocked emergency truck", "Insurance-ready documentation", "A written diagnosis on every emergency call", "No 'after-hours surprise pricing' on existing clients"],
    faq: [
      { q: "What's the response time?", a: "Call us and we will tell you honestly how soon we can get there. We would rather give you a real time than a promise we cannot keep." },
      { q: "How does pricing work?", a: "Call and we will tell you the dispatch and labour rates before we come out, so there is no surprise on the invoice." },
      { q: "Do you handle frozen pipes?", a: "Yes — within our scope. Frozen water lines we thaw and inspect for damage. Frozen drain lines we refer to a partner specialist." },
    ],
  },
};
