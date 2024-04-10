import type { Metadata } from "next";
import { Inter, Sacramento } from "next/font/google";
import "./globals.css";
import Bg from "@/components/bg/Bg";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
      <body className={`${inter.variable} ${sacramento.variable} text-primary`}>
        <Bg />
        <main className="w-screen h-screen">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
