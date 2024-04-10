import Image from "next/image";
import heroBanner from "../../../public/assets/pic2.jpg";
import ImageOverlay from "../ui/ImageOverlay";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-[95vh] xs:h-[85vh] bg-section-gradient rounded-b-[15%] xs:rounded-b-[10%] overflow-hidden shadow-2xl">
      <div className="w-full h-full flex flex-row">
        <div className="w-[80%] xs:w-[75%] h-full flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <h2 className="text-[2vh] font-bold">Hi,</h2>
            <span className="text-[6vh] font-sacramento font-bold">I&apos;m Rae</span>
            <p className="text-primary/55 text-[1.5vh]">A Frontend Developer</p>
          </div>
          <div className="flex mt-10 pl-5 md:first-line:p-0">
            <Link
              href={"/"}
              className="bg-primary/90 text-[1.8vh] text-secondary flex rounded-full py-3 px-5 border border-primary btn-effect hover:text-primary hover:bg-primary/20 shadow-xl"
            >
              Get in touch...
            </Link>
          </div>
        </div>
        <div className="w-[20%] xs:w-[25%] h-full flex items-center shadow-inner bg-primary">
          <div className="hidden sm:block min-w-[300px] h-[450px] overflow-hidden relative shadow-inner bg-red-950 rounded-[30%] sm:-translate-x-36">
            <Image
              src={heroBanner}
              alt="hero banner"
              width={600}
              height={750}
              className="w-full h-full opacity-80 object-cover blur-[2px] xs:blur-[1px]"
            />
            <ImageOverlay />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
