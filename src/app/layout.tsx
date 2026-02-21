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
  title: "Intelligence. Automated. Beautifully.",
  description: "Hyper-minimalist portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
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
