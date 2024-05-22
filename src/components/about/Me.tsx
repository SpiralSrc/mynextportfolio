import Image from "next/image";

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
        <div className="w-28 md:w-36 h-36 md:h-48 rounded-full overflow-hidden relative bg-primary/70 border-2 border-primary">
          <Image
            src={
              "https://res.cloudinary.com/dtw9b5stp/image/upload/v1716240822/portfolioassets/z44fqzdgu3uq1fum0y46.png"
            }
            fill
            alt="me"
            className="w-full h-full object-cover -translate-x-1 translate-y-1 scale-105 hover:scale-110 hover:smooth-effect opacity-70 blur-[0.5px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Me;
