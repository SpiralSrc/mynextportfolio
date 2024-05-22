import Me from "@/components/about/Me";
import MoreAbout from "@/components/about/MoreAbout";
import Skills from "@/components/about/Skills";
import Link from "next/link";

export default function page() {
  return (
    <section className="bg-primary backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col py-24 px-3">
        <div className="flex flex-col bg-section-gradient2 pb-14 border-2 border-primary/60 rounded-xl overflow-hidden">
          <h1 className="w-full  text-center font-vibes font-bold text-5xl py-6 border-b-2 border-primary/60">
            About Me
          </h1>
          <Me />
          {/* <hr className="border-primary/30 mx-20 my-10 md:my-20" /> */}
        </div>
        <MoreAbout />
        <div className="flex flex-col mt-2 bg-section-gradient2  px-20 py-10 border-2 border-primary/60 rounded-xl">
          <p>
            Proficient in a wide range of technologies, including but
            not limited to:
          </p>
          <Skills />
        </div>
        <div className="flex justify-end items-center pr-5">
          <Link
            href={"/#about"}
            className="py-2 px-5 my-10 bg-section-gradient1 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-xl hover:btn-effect"
          >
            Go back...
          </Link>
        </div>
      </div>
    </section>
  );
}
