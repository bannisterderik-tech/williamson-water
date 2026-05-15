import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BUSINESS } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.legalName} — Water Purification, Testing & RO Systems · Montrose, CO`,
    template: `%s · ${BUSINESS.legalName}`,
  },
  description:
    "Family-owned water purification, water testing, and reverse-osmosis installation across Montrose County and the Western Slope of Colorado. Free in-home water tests. Fixed-price quotes. Lifetime support.",
  metadataBase: new URL("https://williamsonwater.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.legalName,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
