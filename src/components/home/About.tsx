import Image from "next/image";
import aboutBanner from "../../../public/assets/pic3.jpg";
import ImageOverlay from "../ui/ImageOverlay";

const About = () => {
  return (
    <section className="w-full h-[60vh] ">
      {/* <div className="w-full h-80 sm:h-96 md:h-[450px] lg:h-[550px] xl:h-[600px] relative rounded-b-[10%] overflow-hidden shadow-2xl">
        <Image src={aboutBanner} alt="about banner" fill className="object-cover object-bottom lg:object-center" />
        <ImageOverlay />
      </div> */}
      <div className="max-w-7xl h-full py-20 px-2 xl:px-0">
        <h1 className="font-sacramento text-center text-6xl font-bold">About</h1>
      </div>
    </section>
  );
};
export default About;
