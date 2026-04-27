import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beyond Humanity — Free Research Report on AI Infrastructure",
  description: "A free 18,000-word research report on the AI infrastructure shift — written for self-directed investors. No sales pitch. Educational reading only.",
  openGraph: {
    title: "Beyond Humanity — Free Research Report",
    description: "Software is replacing jobs across every industry, faster than anyone expected. This free report explains the AI infrastructure shift in plain English — for independent investors who want to understand it.",
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
