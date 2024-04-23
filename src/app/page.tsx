import About from "@/components/home/About";
import ContactIntro from "@/components/home/ContactIntro";
import Hero from "@/components/home/Hero";
import ProjectIntro from "@/components/home/ProjectIntro";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectIntro />
      <ContactIntro />
    </>
  );
}
