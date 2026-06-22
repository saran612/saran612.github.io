import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { MenuBar } from "@/components/MenuBar";
import { Inter, Great_Vibes } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calligraphy = Great_Vibes({
  variable: "--font-calligraphy",
  weight: "400",
  subsets: ["latin"],
});

const lequire = localFont({
  src: "../../public/Lequire.otf",
  variable: "--font-lequire",
});

export const metadata: Metadata = {
  title: "Saran Karthick (saran612) | Portfolio & Projects",
  description: "Official portfolio of Saran Karthick (saran612 / sarn karthick bit). Showcasing Metro-Mind AI, AgriQCert, machine learning research, IoT development, and certifications.",
  keywords: [
    "saran",
    "saran karthick",
    "sarn karthick bit",
    "saran612",
    "sarn612.me",
    "saran612.github.io",
    "developer portfolio",
    "software engineer",
    "machine learning",
    "Kochi Metro AI",
    "AgriQCert",
    "Internet of Things",
    "BIT"
  ],
  alternates: {
    canonical: "https://sarn612.me",
  },
  openGraph: {
    title: "Saran Karthick (saran612) | Portfolio & Projects",
    description: "Official portfolio of Saran Karthick (saran612 / sarn karthick bit). Showcasing machine learning, AgriQCert, IoT development, and certifications.",
    url: "https://sarn612.me",
    siteName: "Saran Karthick Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saran Karthick (saran612) | Portfolio",
    description: "Portfolio showcasing Metro-Mind AI, AgriQCert, machine learning, and IoT certificates.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="canonical" href="https://saran612.me" />
      </head>
      <body
        className={`${inter.variable} ${calligraphy.variable} ${lequire.variable} font-sans antialiased bg-black text-white cursor-none`}
      >
        <CustomCursor />
        <MenuBar />
        {children}
      </body>
    </html>
  );
}
