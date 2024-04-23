import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About Me",
    template: "%s | SpiralSrc",
  },
  description: "Welcome to my personal website!",
};

export default function pagesLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-screen h-screen bg-section-gradient1">{children}</div>;
}
