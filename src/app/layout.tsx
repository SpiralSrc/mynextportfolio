import type { Metadata } from "next";
import {
  Great_Vibes,
  Inter,
  Roboto,
  Sacramento,
  Satisfy,
} from "next/font/google";
import "./globals.css";
import Bg from "@/components/bg/Bg";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const vibes = Great_Vibes({
  weight: "400",
  variable: "--font-vibes",
  subsets: ["latin-ext", "latin", "vietnamese"],
});
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-roboto",
  style: ["normal", "italic"],
});
const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});

const baseUrl = process.env.MY_URL;

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`),
  title: {
    default: "SpiralSrc",
    template: "%s | SpiralSrc",
  },
  description: "Welcome to my personal website!",
  openGraph: {
    title: "SpiralSrc",
    description: "Welcome to my personal website!",
    url: baseUrl,
    siteName: "SpiralSrc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${vibes.variable} ${sacramento.variable} ${roboto.variable} text-primary/75`}
      >
        <main className="w-screen h-screen font-roboto">
          <Bg />
          <Navbar />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
              iconTheme: {
                primary: "#713200",
                secondary: "#FFFAEE",
              },
            }}
          />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
