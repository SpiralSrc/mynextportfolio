import ContactCard from "@/components/contact/ContactCard";
import ImageOverlay2 from "@/components/ui/ImageOverlay2";

export default function page() {
  return (
    <section className="bg-section-gradient1">
      <div className="max-w-7xl mx-auto flex flex-col pt-24 pb-14 md:pt-32 md:pb-36 px-2 xl:px-0">
        <div className="flex flex-col pb-20 border-2 border-primary/60 rounded-xl">
          <h1 className="w-full text-5xl font-sacramento font-bold text-center bg-primary/30 py-5 border-b-2 border-primary/60">
            Contact
          </h1>
          <div className="w-[90%] mx-auto mt-10 lg:mt-20 flex md:flex-row flex-col md:pr-3 rounded-xl overflow-hidden border-2 border-primary/40 shadow-2xl ">
            <div className="md:w-[50%] bg-contact relative h-72 md:h-auto">
              <h2 className="w-full text-center py-10 font-bold text-[3vh] text-secondary">
                Get in Touch
              </h2>
              <ImageOverlay2 />
            </div>
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}
