import Image from "next/image";
import imageme from "../../../public/assets/my3d.png";

const Me = () => {
  return (
    <div className="w-4/6 mx-auto flex flex-col-reverse md:flex-row justify-center gap-10 mt-10 md:mt-20">
      <div className="flex justify-center items-center px-2 lg:px-5">
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl">
            Hi, <strong>I&apos;m Rae</strong> <br /> and I&apos;m a
            Frontend Developer.
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-28 md:w-36 h-36 md:h-48 relative px-5">
          <Image
            src={imageme}
            fill
            alt="me"
            className="w-full h-full object-contain  opacity-70 blur-[0.5px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Me;
