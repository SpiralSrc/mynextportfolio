import Image from "next/image";
import heroBanner from "../../../public/assets/pic2.jpg";
import corner from "../../../public/assets/cornerborder.png";
import ImageOverlay from "../ui/ImageOverlay";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-full relative md:h-[85vh] md:bg-section-gradient2 overflow-hidden shadow-2xl "
    >
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-full md:w-[75%] h-full flex flex-col justify-end pb-[35%] md:pb-0 md:justify-center items-center md:pr-10 lg:pr-0">
          <div className="flex flex-col">
            <h2 className="text-xl lg:text-3xl font-bold mb-3">
              Hi,
            </h2>
            <span className="text-4xl xs:text-5xl lg:text-6xl font-vibes font-bold mb-3">
              I&apos;m Rae
            </span>
            <p className="text-primary/55 text-[1.8vh]">
              A Frontend Developer
            </p>
            <div className="flex mt-10  md:first-line:p-0 ">
              <Link
                href={"/contact"}
                className="bg-primary/70 text-[11px] xs:text-sm md:text-[1rem] py-3 px-4 text-secondary flex rounded-full border border-primary btn-effect hover:text-primary hover:bg-primary/50 shadow-xl"
              >
                Get in touch...
              </Link>
            </div>
          </div>
        </div>
        <div className="w-0 md:w-[25%] h-full flex items-center shadow-inner bg-primary">
          <div className="hidden md:block min-w-[200px] h-[290px] md:min-w-[280px] md:h-[370px] xl:w-[350px] xl:h-[450px] overflow-hidden backdrop-blur-md relative shadow-inner bg-primary/60 border-2 border-primary/40 rounded-[30%] sm:-translate-x-24 md:-translate-x-36 xl:-translate-x-44">
            <Image
              src={heroBanner}
              alt="hero banner"
              width={600}
              height={750}
              placeholder="blur"
              className="w-full h-full opacity-80 object-cover blur-[2px] xs:blur-[1px]"
            />
            <ImageOverlay />
          </div>
        </div>
      </div>
      {/* Additional images for mobile bg and a corner border image */}
      <div className="absolute w-full h-full flex ">
        <div className="relative w-[25vw] sm:w-[20vw] h-[20vh]">
          <Image
            src={corner}
            alt="png"
            fill
            sizes="(max-width: 400px) 100vw, (max-width: 640px) 50vw, 33vw"
            className="object-contain opacity-80"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-[1] md:hidden">
        <div className="w-full h-full backdrop-blur-lg relative shadow-inner md:hidden">
          <Image
            src={heroBanner}
            alt="hero banner"
            width={600}
            height={750}
            placeholder="blur"
            className="w-full h-full opacity-80 object-cover blur-[2px] xs:blur-[1px]"
          />
          <ImageOverlay />
        </div>
      </div>
    </section>
  );
};
export default Hero;
