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
  // ── NEW v2 VARIANTS (matched to video scripts) ──────────────────────────────
  census: {
    preheadline: "Palm Beach County · The fastest-growing population on Earth",
    hero: "The fastest-growing population on Earth isn't counted in any census.",
    sub: "It doesn't need food, sleep, or a raise. It's growing 20% per month. Dean Gallagher, Wellington, Florida, wrote 18,000 words on what this means for investors — and is giving away free printed copies to Palm Beach County neighbors.",
    bullets: [
      "Why the agent economy is a population story, not a technology story",
      "The economic models that break when labor stops being human-bounded",
      "Where the infrastructure serving this population is being built",
      "Printed copy mailed free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your Palm Beach copy →",
  },
  broken: {
    preheadline: "Palm Beach County · The assumption that broke in 2024",
    hero: "For all of recorded history, one assumption held. It broke in 2024.",
    sub: "Every economic forecast, wage model, and productivity estimate was built on the assumption that the workforce grows at the rate of human births. That stopped being true. Dean Gallagher, Wellington, Florida, wrote 18,000 words on what replaces those models — and is giving away free printed copies to Palm Beach County neighbors.",
    bullets: [
      "The hidden assumption in every economic model ever written",
      "What it means when labor stops being a population-bounded variable",
      "Where the repricing will be largest — and what's still mis-priced",
      "Printed copy mailed free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your Palm Beach copy →",
  },
  numbers: {
    preheadline: "Palm Beach County · Three numbers most investors don't know",
    hero: "350 million. 2 billion. 100 billion.",
    sub: "350M AI agents active today — growing 20%/month. 2B by 2027, more than the global workforce. 100B by 2030, more than every human who ever lived. The market has priced the build. It hasn't priced the output. Dean Gallagher, Wellington, Florida, is giving away free printed copies to Palm Beach County neighbors.",
    bigNumber: "100B",
    bigNumberLabel: "Projected AI agents by 2030 — more than all humans who ever lived",
    bullets: [
      "Why these numbers aren't a forecast — they're already in production",
      "What 'pricing the build but not the output' means for capital allocation",
      "Which infrastructure layers serve the output economy specifically",
      "Printed copy mailed free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your Palm Beach copy →",
  },
  sequel: {
    preheadline: "Palm Beach County · The investor's follow-up to the most important AI thesis",
    hero: "A researcher published a 165-page AI thesis. Every prediction came true.",
    sub: "Almost nobody read it. Everything he predicted has happened. This book is the investor's follow-up — written from inside the trade, not from the sidelines, by Dean Gallagher, Wellington, Florida, who started researching in January 2023. Free printed copies for Palm Beach County neighbors.",
    bullets: [
      "What the original thesis predicted — and what's happened since",
      "The economic story the technology thesis missed",
      "Where an investor who was already positioned sees the next move",
      "Printed copy mailed free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your Palm Beach copy →",
  },
  goldrush: {
    preheadline: "Palm Beach County · Picks & shovels — the AI gold rush",
    hero: "The miners lost. Levi Strauss won.",
    sub: "Every gold rush has the same shape. The people chasing the gold lose. The people selling the picks and shovels compound. AI is the gold rush. Dean Gallagher, Wellington, Florida, found the picks and shovels — and is giving away free printed copies to Palm Beach County neighbors.",
    bullets: [
      "The Gold Rush pattern — and which layer of AI maps to Levi Strauss",
      "Why the apps are the miners and the infrastructure is the general store",
      "The five chokepoints every AI dollar passes through",
      "Printed copy mailed free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your Palm Beach copy →",
  },
  foryou: {
    preheadline: "Palm Beach County · Written for investors with 20+ years of experience",
    hero: "If you've managed your own money for 20 or 30 years, you already know the pattern.",
    sub: "Internet. Infrastructure won. Mobile. Infrastructure won. Cloud. Infrastructure won. AI is the same shape. Dean Gallagher, Wellington, Florida, wrote 18,000 words on where the infrastructure is this cycle — and is giving away free printed copies to Palm Beach County neighbors.",
    bullets: [
      "The pattern from three prior cycles — in detail",
      "Why AI infrastructure is structurally different from prior cycles",
      "The specific layer that maps to Cisco in 1998, Qualcomm in 2009, AWS in 2012",
      "Printed copy mailed free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your Palm Beach copy →",
  },
  gap: {
    preheadline: "Palm Beach County · What the market has priced — and what it hasn't",
    hero: "The market has priced the AI buildout. It hasn't priced the output.",
    sub: "NVIDIA. Cloud infrastructure. Data centers. All priced in. What isn't priced: when hundreds of millions of AI agents start generating real economic output, every model that priced the build has to be rebuilt. Dean Gallagher, Wellington, Florida, wrote the thesis — and is giving away free printed copies to Palm Beach County neighbors.",
    bullets: [
      "Exactly what 'pricing the buildout' means — and what it excludes",
      "The five categories of economic output that agents generate at scale",
      "Which infrastructure layers serve the output economy, not just the build",
      "Printed copy mailed free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your Palm Beach copy →",
  },
  insider: {
    preheadline: "Palm Beach County · Written from inside the trade, not from the sidelines",
    hero: "I'm not a financial advisor. I'm an investor who started researching this in January 2023.",
    sub: "18 months before it became a mainstream conversation. I wrote it all down — not as a prediction, as a report from inside the thesis. 18,000 words. Seven chapters. Free PDF instantly. Printed copy shipped free to Palm Beach County neighbors — Dean Gallagher, Wellington, Florida.",
    bullets: [
      "Why January 2023 mattered — what was happening in the infrastructure that most missed",
      "The difference between researching AI from the sidelines and being positioned in it",
      "The thesis as written by someone who has skin in the game",
      "Printed copy mailed free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your Palm Beach copy →",
  },
  hybrid: {
    preheadline: "Palm Beach County · The wrong layer of AI — and the right one",
    hero: "Most investors are chasing the wrong layer of AI.",
    sub: "Internet didn't compound in the browsers. It compounded in the pipes. Mobile didn't compound in the apps. It compounded in the chips. AI is no different. But this time, the infrastructure isn't just for apps — it's for a new workforce. 350 million strong. Growing 20% per month. Dean Gallagher, Wellington, Florida, is giving away free printed copies to Palm Beach County neighbors.",
    bullets: [
      "The pipes/chips/rails pattern across three prior cycles",
      "Why AI infrastructure is serving a workforce, not just software",
      "The specific infrastructure layer that maps to each prior-cycle compounder",
      "Printed copy mailed free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your Palm Beach copy →",
  },

  // ── LEGACY VARIANTS (kept so old URLs don't break) ──────────────────────────
  pattern: {
    preheadline: "Pattern recognition across three cycles",
    hero: "I've seen this play out three times.",
    sub: "Internet. Mobile. Cloud. Each cycle, the infrastructure layer compounded while the apps chased users. Dean Gallagher, Palm Beach County, Florida, wrote the AI version of this thesis.",
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
    sub: "Not a newsletter. Not a course. 18,000 words of AI infrastructure research from a Palm Beach County investor with three decades of experience and his own capital in the trade.",
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
    sub: "Each technology cycle has the same shape. Dean Gallagher, Palm Beach County, Florida, wrote 18,000 words explaining where we are inside the AI version of that window.",
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
    sub: "Picks and shovels. Every technology wave. Dean Gallagher, Palm Beach County, Florida, wrote the AI infrastructure version of this thesis. It's free.",
    bullets: [
      "The historical pattern across five technology cycles",
      "Why infrastructure compounds when the application layer doesn't",
      "Which AI 'picks and shovels' are still pre-consensus today",
    ],
    cta: "Read the picks & shovels thesis →",
  },
  "100": {
    preheadline: "Limited print run — Palm Beach County investor",
    hero: "100 free printed copies of this research.",
    sub: "Dean Gallagher is mailing the first 100 copies of his AI infrastructure research, free. After 100, the printed edition is $97. From a Palm Beach County, Florida investor — three years of work in seven chapters.",
    bullets: [
      "Hardcover printed, signed, shipped — no obligation",
      "Building a small network of serious investors who understand the thesis",
      "After the first 100 copies, the printed edition is paid",
    ],
    cta: "Claim your free printed copy →",
  },
  investor: {
    preheadline: "From the desk of a Palm Beach County investor",
    hero: "I'm not a financial advisor. I'm an investor.",
    sub: "Dean Gallagher writes: \"I live in Palm Beach County, Florida. I manage my own portfolio. I spent three years on one thesis about AI infrastructure. I wrote 18,000 words. I'm giving it away — not to sell anything, but to find the investors who see what I see.\"",
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
    sub: "More than the entire global workforce. The infrastructure running them is the investment story of this decade. Dean Gallagher, Palm Beach County, Florida, wrote the thesis.",
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
    sub: "Internet. Mobile. Cloud. Same shape every cycle. Dean Gallagher, Palm Beach County, Florida, wrote 18,000 words on which AI infrastructure layer is next.",
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
    sub: "18,000 words of AI infrastructure research. Dean Gallagher. Palm Beach County, Florida. Free. No email required to read it.",
    bullets: [
      "Seven chapters. Plain language. Three years of work.",
      "Free PDF instantly. Free printed copy shipped.",
      "Written by a Palm Beach County investor for serious allocators.",
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
