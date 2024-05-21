import type { Metadata } from "next";
import { Great_Vibes, Inter, Roboto, Sacramento, Satisfy } from "next/font/google";
import "./globals.css";
import Bg from "@/components/bg/Bg";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const vibes = Great_Vibes({ weight: "400", variable: "--font-vibes", subsets: ["latin-ext", "latin", "vietnamese"] });
const roboto = Roboto({ subsets: ["cyrillic"], weight: "400", variable: "--font-roboto", style: ["normal", "italic"] });
const sacramento = Sacramento({ weight: "400", subsets: ["latin"], variable: "--font-sacramento" });

export const metadata: Metadata = {
  title: {
    default: "SpiralSrc",
    template: "%s | SpiralSrc",
  },
  description: "Welcome to my personal website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  ${vibes.variable} ${sacramento.variable} ${roboto.variable} text-primary/75`}>
        <main className="w-screen h-screen font-roboto">
          <Bg />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
