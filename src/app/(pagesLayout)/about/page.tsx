import Me from "@/components/about/Me";
import Skills from "@/components/about/Skills";

export default function page() {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex flex-col py-24 px-3 xl:px-0">
        <h1 className="text-center font-sacramento font-bold text-5xl">About Me</h1>
        <Me />
        <Skills />
      </div>
    </section>
  );
}
