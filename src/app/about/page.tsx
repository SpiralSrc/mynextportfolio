import Me from "@/components/about/Me";
import Skills from "@/components/about/Skills";

export default function page() {
  return (
    <section className="bg-primary backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col py-24 px-3 xl:px-0">
        <div className="flex flex-col bg-section-gradient1 pb-14 border-2 border-primary/60 rounded-xl overflow-hidden">
          <h1 className="w-full  text-center font-vibes font-bold text-5xl py-5 border-b-2 border-primary/60">
            About Me
          </h1>
          <Me />
        </div>
        <div className="flex flex-col mt-10 bg-section-gradient1  px-3 py-10 border-2 border-primary/60 rounded-xl">
          <p>
            Proficient in a wide range of technologies, including but
            not limited to:
          </p>
          <Skills />
        </div>
      </div>
    </section>
  );
}
