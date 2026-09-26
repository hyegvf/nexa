import type { Metadata, Viewport } from "next";
import { Manrope, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["800"],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nexa — Intelligence, Reimagined.",
  description:
    "Nexa is a new generation AI experience built around intelligence, creativity, and possibility. AI chat, tools, automation, agents and more — one evolving ecosystem.",
  keywords: ["Nexa", "AI", "artificial intelligence", "AI agents", "automation", "creative AI"],
  openGraph: {
    title: "Nexa — Intelligence, Reimagined.",
    description:
      "A new generation AI experience built around intelligence, creativity, and possibility.",
    siteName: "Nexa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa — Intelligence, Reimagined.",
    description:
      "A new generation AI experience built around intelligence, creativity, and possibility.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07040e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${poppins.variable} ${jbmono.variable} antialiased bg-nexa-bg text-nexa-mist`}
      >
        <noscript>
          <style>{`.rv,.mask-line>span{opacity:1!important;transform:none!important}.nx-loader-gate{display:none!important}`}</style>
        </noscript>
        {children}
        <div className="nx-noise" aria-hidden="true" />
      </body>
    </html>
  );
}
