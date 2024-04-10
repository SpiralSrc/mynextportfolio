import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SpiralSrc",
    template: "%s | SpiralSrc",
  },
  description: "Welcome to my personal website!",
};

export default function pagesLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
