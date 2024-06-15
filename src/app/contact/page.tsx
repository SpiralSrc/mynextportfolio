import ContactCard from "@/components/contact/ContactCard";
import ImageOverlay2 from "@/components/ui/ImageOverlay2";
import Link from "next/link";

export const metadata = {
  title: "Contact",
};

export default function page() {
  return (
    <section className="bg-primary backdrop-blur-md">
      <div className="max-w-7xl mx-auto  flex flex-col pt-24 pb-14 md:pt-32 md:pb-36 px-2 xl:px-0">
        <div className="flex flex-col bg-section-gradient1 pb-20 border-2 border-primary/60 rounded-xl">
          <h1 className="w-full text-5xl font-sacramento font-bold text-center  py-5 border-b-2 border-primary/60">
            Contact
          </h1>
          <div className="w-[90%] mx-auto mt-10 lg:mt-20 flex md:flex-row flex-col  rounded-xl overflow-hidden border-2 border-primary/40 shadow-2xl ">
            <div className="md:w-[50%] bg-contact relative h-72 md:h-auto">
              <h2 className="w-full text-center py-12 font-bold text-[4vh] text-secondary backdrop-blur-sm">
                Get in Touch
              </h2>
              <ImageOverlay2 />
            </div>
            <ContactCard />
          </div>
        </div>
        <div className="flex justify-end items-center pr-5">
          <Link
            href={"/#contact"}
            className="py-2 px-5 my-10 bg-section-gradient1 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-xl hover:btn-effect"
          >
            Go back...
          </Link>
        </div>
      </div>
    </section>
  );
}
