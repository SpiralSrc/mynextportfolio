import Link from "next/link";

const ContactIntro = () => {
  return (
    <section className="bg-section-gradient1">
      <div className="max-w-7xl mx-auto py-16 md:py-28 flex flex-col justify-center">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center gap-10 border-2 border-primary/50 rounded-xl py-20">
          <h1 className="font-vibes text-5xl text-center">I would love to hear from you!</h1>
          <div className="flex">
            <Link
              href={"/contact"}
              className="bg-primary/70 text-[11px] xs:text-sm md:text-[1rem] py-3 px-4 text-secondary flex rounded-full border border-primary btn-effect hover:text-primary hover:bg-primary/20 shadow-xl"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactIntro;
