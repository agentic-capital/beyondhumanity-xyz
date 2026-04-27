import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beyond Humanity — The Free Report on the AI Agent Economy",
  description: "A 18,000-word research report on the fastest-growing economic force in history. Free download. No spam.",
  openGraph: {
    title: "Beyond Humanity — Free Research Report",
    description: "The AI agent population is growing 20% per month. By 2030 it outnumbers every human who ever lived. This report explains what that means for your portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
