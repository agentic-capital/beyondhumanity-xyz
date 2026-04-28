import { notFound } from "next/navigation";
import VariantClient from "./VariantClient";

type VariantKey =
  | "census" | "book" | "broken" | "numbers" | "sequel"
  | "goldrush" | "foryou" | "gap" | "insider" | "hybrid"
  // legacy slugs kept alive so old URLs don't 404
  | "pattern" | "data" | "serious" | "window" | "picks"
  | "100" | "investor" | "agents" | "layer";

type Variant = {
  hero: string;
  sub: string;
  bullets?: string[];
  cta: string;
  preheadline?: string;
  bigNumber?: string;
  bigNumberLabel?: string;
  timeline?: { era: string; years: string }[];
};

const VARIANTS: Record<VariantKey, Variant> = {
  // ── NEW v2 VARIANTS (thesis-focused, AI population event messaging) ─────────
  census: {
    preheadline: "The AI Population Event",
    hero: "350 million AI agents are active right now. Within 3 years, more than every human on earth.",
    sub: "By 2030, more than every human who has ever lived in all of history. This isn't a technology trend — it's a population event. Dean wrote the essay on what it means for capital. 100 copies. Free.",
    bullets: [
      "Why the scale of AI agents changes every economic model ever written",
      "The infrastructure layer that compounds when 8 billion agents need compute and power",
      "100 copies of the essay. Free. No shipping.",
    ],
    cta: "Get the free essay →",
  },
  broken: {
    preheadline: "Every Economic Model Is Now Wrong",
    hero: "For all of recorded history, the workforce grew at the rate of human births. That broke in 2024.",
    sub: "AI agents grew 20% last month alone — that's the one assumption every economic model was built on, gone. Dean wrote the essay on what the correct framework looks like. 100 copies. Free.",
    bullets: [
      "The hidden assumption in every economic forecast — and why it's now false",
      "What 20% monthly agent growth means for capital allocation",
      "100 copies of the essay. Free. No shipping.",
    ],
    cta: "Get the free essay →",
  },
  numbers: {
    preheadline: "350M · 8B · 100B",
    hero: "Three numbers most investors haven't processed yet.",
    sub: "350 million AI agents active today. 8 billion by 2027 — more than the entire human workforce. 100 billion by 2030 — more than every human who ever lived. Dean wrote the investment essay on what this means for capital. 100 copies. Free.",
    bigNumber: "8B",
    bigNumberLabel: "AI agents by 2027 — more than the entire global human workforce",
    bullets: [
      "Why 8 billion agents changes the math on labor, productivity, and capital",
      "The infrastructure serving that population — and why it compounds",
      "100 copies of the essay. Free. No shipping.",
    ],
    cta: "Get the free essay →",
  },
  sequel: {
    preheadline: "The Investor's Essay on the AI Agent Economy",
    hero: "We moved past the ChatGPT phase. Companies are replacing entire workflows with agents.",
    sub: "Not prompts — full workflows, running 24 hours a day, no salary, no overhead. 350 million of them live right now. Dean wrote the essay on where to be positioned. 100 copies. Free.",
    bullets: [
      "Why the ChatGPT-for-questions phase is over — and what comes next",
      "The infrastructure layer serving 350 million agents — and growing 20% per month",
      "100 copies of the essay. Free. No shipping.",
    ],
    cta: "Get the free essay →",
  },
  goldrush: {
    preheadline: "The AI Gold Rush",
    hero: "In the Gold Rush, Levi Strauss made more than any miner. He sold the picks and shovels.",
    sub: "AI is that gold rush — 350 million agents, all running on infrastructure. Dean spent years writing the picks-and-shovels essay on which infrastructure layer compounds. 100 copies. Free.",
    bullets: [
      "Why AI apps are the miners and AI infrastructure is Levi Strauss",
      "Which infrastructure layer maps to every prior-cycle compounder",
      "100 copies of the essay. Free. No shipping.",
    ],
    cta: "Get the free essay →",
  },
  foryou: {
    preheadline: "The Pattern Every Serious Investor Knows",
    hero: "Internet compounded in the pipes. Mobile compounded in the chips. AI is no different.",
    sub: "Every technology cycle, the infrastructure layer compounds while applications chase headlines. AI has 350 million agents running on infrastructure right now, growing 20% per month. Dean wrote the essay. 100 copies. Free.",
    bullets: [
      "The pipes/chips/rails pattern across internet, mobile, cloud, and AI",
      "Which AI infrastructure layer maps to Cisco, Qualcomm, and AWS",
      "100 copies of the essay. Free. No shipping.",
    ],
    cta: "Get the free essay →",
  },
  gap: {
    preheadline: "The Market Has Priced the Build. Not the Output.",
    hero: "NVIDIA. Cloud capex. Data centers. All priced in. What isn't priced: the output.",
    sub: "When 350 million agents start generating real economic value — and they're already doing it — every model that priced the build has to be rebuilt. Dean wrote the essay on what gets repriced. 100 copies. Free.",
    bullets: [
      "What 'pricing the build but not the output' means for serious capital allocation",
      "The specific infrastructure categories that serve the output economy",
      "100 copies of the essay. Free. No shipping.",
    ],
    cta: "Get the free essay →",
  },
  insider: {
    preheadline: "The Speed No One Is Modeling",
    hero: "The internet took 10 years to reshape the workforce. Mobile took 5. AI agents crossed 350 million in under 24 months.",
    sub: "And they're growing 20% per month. No economic model is accounting for this speed. Dean wrote the essay on the correct framework — and where to position before it becomes consensus. 100 copies. Free.",
    bullets: [
      "Why every historical technology adoption model is too slow for AI agents",
      "The inflection point that most investors are still behind on",
      "100 copies of the essay. Free. No shipping.",
    ],
    cta: "Get the free essay →",
  },
  hybrid: {
    preheadline: "Far Beyond Humanity",
    hero: "350 million AI agents today. 8 billion by 2027. 100 billion by 2030.",
    sub: "More than every human who has ever lived in all of history — by 2030. We called the essay Beyond Humanity because that's exactly what the trajectory shows. 100 copies. Free. No shipping.",
    bullets: [
      "The population crossover — when agents outnumber humans — and what it means for capital",
      "The infrastructure serving 100 billion agents: the investment essay",
      "100 copies of the essay. Free. No shipping.",
    ],
    cta: "Get the free essay →",
  },

  // ── LEGACY VARIANTS (kept so old URLs don't break) ──────────────────────────
  pattern: {
    preheadline: "Pattern recognition across three cycles",
    hero: "I've seen this play out three times.",
    sub: "Internet. Mobile. Cloud. Each cycle, the infrastructure layer compounded while the apps chased users. Dean Gallagher wrote the AI version of this thesis.",
    bullets: [
      "The exact pattern from three prior cycles — and where AI fits inside it",
      "Which infrastructure layer is currently mispriced and why",
      "The 18 to 24 month positioning window history shows for every cycle",
    ],
    cta: "Get the free research →",
  },
  data: {
    preheadline: "AI Infrastructure Capex · 2024",
    hero: "$250B.",
    sub: "That's annual hyperscaler AI infrastructure spend, and it's accelerating into 2026. The apps fight for users. The infrastructure prints contracts.",
    bigNumber: "$250B",
    bigNumberLabel: "Hyperscaler AI infrastructure spend, 2024",
    bullets: [
      "Where the $660–$690B 2026 hyperscaler capex is flowing",
      "The five physical chokepoints every AI dollar passes through",
      "The infrastructure layer your portfolio probably under-owns",
    ],
    cta: "Download the free thesis →",
  },
  serious: {
    preheadline: "Written for serious allocators",
    hero: "Written for investors who manage serious capital.",
    sub: "Not a newsletter. Not a course. a full research essay on AI infrastructure from a investor with three decades of experience and his own capital in the trade.",
    bullets: [
      "A thesis built from inside the trade, not from the sidelines",
      "Plain language, no hype, no fund pitch, no email required",
      "Why the 'AI everything' ETFs miss the actual chokepoint",
    ],
    cta: "Read the research (free) →",
  },
  window: {
    preheadline: "Every infrastructure cycle has a window",
    hero: "The positioning window is 18 to 24 months.",
    sub: "Each technology cycle has the same shape. Dean Gallagher wrote a full essay explaining where we are inside the AI version of that window.",
    timeline: [
      { era: "Internet", years: "1996 – 1999" },
      { era: "Mobile", years: "2007 – 2010" },
      { era: "Cloud", years: "2010 – 2013" },
      { era: "AI infrastructure", years: "Open right now" },
    ],
    bullets: [
      "Why cycle windows close fast — and what closes them",
      "The exact infrastructure positions every prior cycle rewarded",
      "Where current AI infrastructure pricing actually stands",
    ],
    cta: "Get the research before the window closes →",
  },
  picks: {
    preheadline: "Picks & shovels — every cycle",
    hero: "Levi Strauss made more money than any miner in the Gold Rush.",
    sub: "Picks and shovels. Every technology wave. Dean Gallagher wrote the AI infrastructure version of this thesis. It's free.",
    bullets: [
      "The historical pattern across five technology cycles",
      "Why infrastructure compounds when the application layer doesn't",
      "Which AI 'picks and shovels' are still pre-consensus today",
    ],
    cta: "Read the picks & shovels thesis →",
  },
  "100": {
    preheadline: "Limited Print Run",
    hero: "100 free printed copies of this research.",
    sub: "Dean is giving away 100 printed copies. Free. No shipping. 100 copies. Free. No shipping.",
    bullets: [
      "Hardcover printed, signed, shipped — no obligation",
      "Building a small network of serious investors who understand the thesis",
      "After the first 100 copies, the printed edition is paid",
    ],
    cta: "Claim your free printed copy →",
  },
  investor: {
    preheadline: "From the Desk of the Author",
    hero: "I'm not a financial advisor. I'm an investor.",
    sub: "Dean Gallagher writes: \"I live in Wellington, Florida. I manage my own portfolio. I spent three years on one thesis about AI infrastructure. I wrote a full essay. I'm giving it away — not to sell anything, but to find the investors who see what I see.\"",
    bullets: [
      "First-person research from inside the trade",
      "No fund pitch, no upsell, no sales call",
      "If you read it and want to discuss, you can reply directly",
    ],
    cta: "Read the full thesis (free) →",
  },
  agents: {
    preheadline: "The fastest-growing economic population on Earth",
    hero: "350 million AI agents today. Over 2 billion by 2027.",
    sub: "More than the entire global workforce. The infrastructure running them is the investment story of this decade. Dean Gallagher wrote the thesis.",
    bigNumber: "2B+",
    bigNumberLabel: "Projected AI agents by 2027 — more than the global workforce",
    bullets: [
      "Why the agent economy isn't a forecast — it's already in production",
      "The exact infrastructure layers serving 2B+ agents will run on",
      "Where current valuations price 'tools' but miss 'output'",
    ],
    cta: "Get the free research →",
  },
  layer: {
    preheadline: "Apps get headlines. Infrastructure compounds.",
    hero: "The apps get the headlines. The infrastructure gets the compounding.",
    sub: "Internet. Mobile. Cloud. Same shape every cycle. Dean Gallagher wrote a full essay on which AI infrastructure layer is next.",
    bullets: [
      "The five infrastructure chokepoints in detail",
      "Why the 'application' layer is the wrong place to look",
      "How prior-cycle compounders rerated — and the AI parallels",
    ],
    cta: "Download the infrastructure thesis →",
  },
  book: {
    preheadline: "Beyond Humanity",
    hero: "Beyond Humanity.",
    sub: "a full research essay on AI infrastructure. Dean Gallagher. Wellington, Florida. Free. No email required to read it.",
    bullets: [
      "Seven chapters. Plain language. Three years of work.",
      "Free PDF instantly. Free printed copy shipped.",
      "Written by a investor for serious allocators.",
    ],
    cta: "Get the free book →",
  },
};

export function generateStaticParams() {
  return Object.keys(VARIANTS).map((variant) => ({ variant }));
}

export async function generateMetadata({ params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params;
  const v = VARIANTS[variant as VariantKey];
  if (!v) return {};
  return {
    title: `${v.hero} — Beyond Humanity`,
    description: v.sub,
    robots: { index: false, follow: false },
  };
}

export default async function VariantPage({ params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params;
  const v = VARIANTS[variant as VariantKey];
  if (!v) notFound();
  return <VariantClient variant={v} />;
}
