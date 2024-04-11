import Image from "next/image";
import aboutBanner from "../../../public/assets/pic3.jpg";
import ImageOverlay from "../ui/ImageOverlay";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full ">
      <div className="w-full h-80 sm:h-96 md:h-[450px] lg:h-[550px] xl:h-[600px] relative rounded-b-[10%] overflow-hidden shadow-2xl">
        <Image src={aboutBanner} alt="about banner" fill className="object-cover object-bottom lg:object-center" />
        <ImageOverlay />
      </div>
      <div className="max-w-7xl mx-auto h-full py-20 px-3 xl:px-0">
        <div className="w-full h-full text-lg pt-3 indent-4 flex flex-col gap-5 px-6 md:px-14 lg:px-0">
          <p>
            I am a <strong>Front-end Developer</strong> based in the US, specialized in creating modern and responsive websites and landing pages. As
            the world of programming is constantly evolving seeking to find better solutions or make coding easier, I myself is currently expanding my
            knowledge by actively learning and exploring various frameworks to further enhance my development capabilities.
          </p>
          <p>
            Committed to practicing good coding practices, I am dedicated to continuously refining my skills and staying updated with the latest
            industry trends and technologies.
          </p>

          <div className="flex mt-10 px-3 md:p-0">
            <Link
              href={"/about"}
              className="bg-primary/90 text-[1.2vh] text-secondary flex rounded-full py-3 pl-2 pr-5 border border-primary btn-effect hover:text-primary hover:bg-primary/50 shadow-xl"
            >
              Read more...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
