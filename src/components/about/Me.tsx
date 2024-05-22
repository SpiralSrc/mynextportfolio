import Image from "next/image";

const Me = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between gap-10 mt-10 md:mt-20">
      <div className="w-full md:w-4/6 px-2 lg:px-5">
        <div className="flex flex-col gap-10">
          <p className="indent-7">
            Hi, <strong>I&apos;m Rae</strong>, and I bring a unique
            perspective to frontend development, having transitioned
            from a career in nursing to the tech industry. My
            background in nursing has equipped me with invaluable soft
            skills that have proven to be incredibly beneficial in my
            journey as a frontend developer. It has instilled in me a
            deep sense of patience and resilience, which have been
            instrumental in tackling complex coding challenges and
            problem-solving in web development.
          </p>
          <p className="indent-7">
            Alongside my technical expertise, I prioritize
            professionalism, empathy, and a strong sense of
            confidentiality in my work. I have a keen eye for detail
            and a strong sense of adaptability, both of which are
            crucial in delivering high-quality and accessible web
            applications.
          </p>

          <p className="indent-7">
            As a passionate developer, I have also taken the
            initiative to expand my skills into backend development.
            This has not only deepened my understanding of how backend
            systems work, but also equipped me with the knowledge to
            collaborate more effectively with backend teams. I believe
            that having a well-rounded understanding of both frontend
            and backend technologies will greatly enhance my ability
            to create seamless and efficient solutions.
          </p>
          <p className="indent-7">
            Committed to practicing good coding practices, I am
            dedicated to continuously refining my skills and staying
            updated with the latest industry trends and technologies
            as the world of programming is constantly evolving seeking
            to find better solutions or make coding easier.
          </p>
        </div>
      </div>
      <div className="md:w-[30%] flex justify-center items-center">
        <div className="w-48 md:w-64 h-60 md:h-[360px] rounded-full overflow-hidden relative bg-primary/70 border-2 border-primary">
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
