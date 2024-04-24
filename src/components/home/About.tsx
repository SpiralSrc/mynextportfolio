import Image from "next/image";
import aboutBanner from "../../../public/assets/pic3.jpg";
import ImageOverlay from "../ui/ImageOverlay";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full bg-section-gradient1">
      <div className="w-full h-80 sm:h-96 md:h-[450px] lg:h-[550px] xl:h-[600px] relative rounded-b-[10%] overflow-hidden shadow-2xl">
        <Image src={aboutBanner} alt="about banner" fill className="object-cover object-bottom lg:object-center" />
        <ImageOverlay />
      </div>
      <div className="max-w-7xl mx-auto h-full py-20 px-3 xl:px-0">
        <div className="w-full h-full text-lg py-20 indent-4 flex flex-col my-10 gap-5 px-6 md:px-14 border-2 border-primary/60 rounded-xl ">
          <p className="indent-7">
            I am a <strong>Frontend Developer</strong> based in the US, specialized in creating modern and responsive websites. With a keen eye for
            design and a deep understanding of user experience, I excel in creating visually stunning and functional web applications.
          </p>

          <div className="flex my-10 px-3 md:p-0">
            <Link
              href={"/about"}
              className="bg-primary/90 text-[1.6vh] text-secondary flex rounded-full py-3 pl-2 pr-5 border border-primary btn-effect hover:text-primary hover:bg-primary/50 shadow-xl"
            >
              More about me...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
