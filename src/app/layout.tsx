import type { Metadata } from "next";
import { Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CurrentReel from "@/components/CurrentReel";
import Banner from "@/components/Banner";

// Import Playfair Display (Serif) for headings
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

// Import Merriweather (Serif) for body text
const merriwether = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Anaira Clothing - Luxury Fashion",
  description: "Timeless fashion inspired by the Old Money aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.className} ${merriwether.variable} antialiased  overflow-x-hidden tracking-wider bg-black text-white`}
      >
        <div className="hidden md:flex">
        {/* <CustomCursor/> */}
        </div>
        <CurrentReel/>
        <Header/>
        <Banner/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
