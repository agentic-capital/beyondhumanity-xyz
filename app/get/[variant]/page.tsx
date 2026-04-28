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
    preheadline: "Palm Beach County · Long-term investors",
    hero: "There's a shift in AI that most long-term investors are missing.",
    sub: "I'm a Palm Beach County investor who spent years researching it. Turned it into a book — Beyond Humanity. Giving free copies to neighbors here. Get yours while you can.",
    bullets: [
      "Why most long-term investors are positioned in the wrong layer of AI",
      "The shift that's already happening — and why most portfolios haven't adjusted",
      "Printed and shipped free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your free Palm Beach copy →",
  },
  broken: {
    preheadline: "Palm Beach County · The shift no one is talking about",
    hero: "The assumption every economic model runs on broke in 2024.",
    sub: "For all of recorded history, the workforce grew at the rate of human births. That stopped being true two years ago. I spent years on a book about what it means for long-term investors. Beyond Humanity. Giving copies free to Palm Beach County neighbors.",
    bullets: [
      "The hidden assumption in every economic forecast — and why it's now wrong",
      "What replaces it — and which investments benefit most",
      "Printed and shipped free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your free Palm Beach copy →",
  },
  numbers: {
    preheadline: "Palm Beach County · Three numbers most investors don't know",
    hero: "350 million. 2 billion. 100 billion.",
    sub: "AI agents active today. By 2027. By 2030. More than the entire global workforce. More than every human who ever lived. I spent years writing a book on what this means for long-term investors. Beyond Humanity. Free for Palm Beach County neighbors.",
    bigNumber: "2B+",
    bigNumberLabel: "AI agents by 2027 — more than the global workforce",
    bullets: [
      "Why these numbers change where serious capital should be positioned",
      "The infrastructure layer that serves a workforce of 100 billion agents",
      "Printed and shipped free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your free Palm Beach copy →",
  },
  sequel: {
    preheadline: "Palm Beach County · The investor's follow-up",
    hero: "A researcher published a thesis. Every prediction he made came true.",
    sub: "Almost nobody read it. Everything he predicted happened. I'm a Palm Beach County investor who was already researching this when that essay came out. Wrote my own book — Beyond Humanity — from inside the thesis, not from the sidelines. Giving free copies to neighbors here.",
    bullets: [
      "What the original thesis predicted — and what's happened since",
      "The investor's perspective: what it looks like from inside the trade",
      "Printed and shipped free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your free Palm Beach copy →",
  },
  goldrush: {
    preheadline: "Palm Beach County · Picks & shovels",
    hero: "The miners lost. Levi Strauss won.",
    sub: "Every gold rush has the same shape. AI is the gold rush. Most investors are on the wrong side of it. I spent years figuring out where the picks and shovels are and wrote a book about it — Beyond Humanity. Free for Palm Beach County neighbors.",
    bullets: [
      "Which layer of AI maps to Levi Strauss in the Gold Rush",
      "Why the apps are the miners and the infrastructure is the general store",
      "Printed and shipped free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your free Palm Beach copy →",
  },
  foryou: {
    preheadline: "Palm Beach County · Written for investors like you",
    hero: "If you've been a long-term investor for 20 or 30 years — you already know the pattern.",
    sub: "Internet. Infrastructure won. Mobile. Infrastructure won. Cloud. Infrastructure won. AI is the same shape. I spent years on the AI version and wrote a book about it — Beyond Humanity. For Palm Beach County neighbors who've seen this before.",
    bullets: [
      "The infrastructure pattern across three prior cycles — in detail",
      "Why the AI version is structurally identical — and where the AI infrastructure is",
      "Printed and shipped free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your free Palm Beach copy →",
  },
  gap: {
    preheadline: "Palm Beach County · What the market hasn't priced",
    hero: "The market has priced the AI buildout. It hasn't priced the output.",
    sub: "NVIDIA. Cloud capex. Data centers. All priced in. What isn't: when hundreds of millions of AI agents start generating real economic output, every model breaks. I spent years on a book about what gets repriced. Beyond Humanity. Free for Palm Beach County neighbors.",
    bullets: [
      "What 'priced the buildout but not the output' means for long-term investors",
      "The specific categories that get repriced when agent output hits the economy",
      "Printed and shipped free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your free Palm Beach copy →",
  },
  insider: {
    preheadline: "Palm Beach County · Written from inside the thesis",
    hero: "I'm not a financial advisor. I'm a Palm Beach County investor who started researching this years before it was mainstream.",
    sub: "I started in January 2023. Eighteen months before this became a mainstream conversation. Wrote a book about it — not as a prediction, as a report from inside the thesis. Beyond Humanity. Giving free copies to neighbors here.",
    bullets: [
      "Why January 2023 mattered — what was happening that most people missed",
      "The thesis from the perspective of someone already positioned in it",
      "Printed and shipped free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your free Palm Beach copy →",
  },
  hybrid: {
    preheadline: "Palm Beach County · The wrong layer of AI",
    hero: "Most long-term investors are chasing the wrong layer of AI.",
    sub: "Internet didn't compound in the browsers. It compounded in the pipes. Mobile didn't compound in the apps. It compounded in the chips. AI is no different. I spent years on a book about which layer. Beyond Humanity. Free for Palm Beach County neighbors.",
    bullets: [
      "The pipes/chips/rails pattern across three prior cycles",
      "Which AI infrastructure layer maps to each prior-cycle compounder",
      "Printed and shipped free to Palm Beach County neighbors — limited time",
    ],
    cta: "Claim your free Palm Beach copy →",
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
