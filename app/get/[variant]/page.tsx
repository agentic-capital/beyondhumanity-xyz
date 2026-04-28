import { notFound } from "next/navigation";
import VariantClient from "./VariantClient";

type VariantKey =
  | "pattern" | "data" | "serious" | "window" | "picks"
  | "100" | "investor" | "agents" | "layer" | "book";

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
