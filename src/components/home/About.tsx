import Image from "next/image";
import aboutBanner from "../../../public/assets/pic3.jpg";
import ImageOverlay from "../ui/ImageOverlay";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="w-full bg-section-gradient2">
      <div className="w-full h-80 sm:h-96 md:h-[450px] lg:h-[550px] xl:h-[600px] relative rounded-b-[10%] overflow-hidden shadow-2xl">
        <Image
          src={aboutBanner}
          alt="about banner"
          fill
          placeholder="blur"
          className="object-cover object-bottom lg:object-center"
        />
        <ImageOverlay />
      </div>
      <div className="max-w-7xl mx-auto h-full py-5 md:py-20 px-3">
        <div className="w-full h-full text-md md:text-lg py-8 md:py-20 indent-4 flex flex-col my-10 gap-5 px-6 md:px-14 border-2 border-primary/60 rounded-xl ">
          <p className="indent-7">
            I am a <strong>Frontend Developer</strong> based in the
            US, specialized in creating modern and responsive
            websites. With a keen eye for design and a deep
            understanding of user experience, I excel in creating
            visually stunning and functional web applications.
          </p>

          <div className="flex my-10 px-3 md:p-0">
            <Link
              href={"/about"}
              className="bg-primary/70 text-[11px] xs:text-sm md:text-[1rem] py-3 pl-1 pr-4 text-secondary flex rounded-full border border-primary btn-effect hover:text-primary hover:bg-primary/50 shadow-xl"
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
