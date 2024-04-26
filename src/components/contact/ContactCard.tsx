import ImageOverlay2 from "../ui/ImageOverlay2";

const ContactCard = () => {
  return (
    <div className="w-[90%] mx-auto flex md:flex-row flex-col md:pr-3 rounded-xl overflow-hidden border-2 border-primary/40 shadow-2xl">
      <div className="md:w-[45%] bg-contact relative h-96 md:h-auto">
        <h2 className="w-full text-center py-10 font-bold text-[3vh] text-secondary">Get in Touch</h2>
        <ImageOverlay2 />
      </div>
      <div className="md:w-[55%] px-5">
        <form className="w-full flex flex-col gap-5 py-12">
          <input
            type="text"
            required
            placeholder="Name"
            className="bg-transparent py-2 px-3  placeholder:text-primary/40 border-b border-primary/40 ring-primary/40 focus:rounded-lg focus:border-none focus:outline-none focus:ring-1 focus:ring-primary/40"
          />
          <input
            type="text"
            required
            placeholder="Email"
            className="bg-transparent py-2 px-3  placeholder:text-primary/40 border-b border-primary/40 ring-primary/40 focus:rounded-lg focus:border-none focus:outline-none focus:ring-1 focus:ring-primary/40"
          />
          <textarea
            required
            placeholder="Your message..."
            className="h-60 bg-transparent py-2 px-3  placeholder:text-primary/40 border-b border-primary/40 ring-primary/40 focus:rounded-lg focus:border-none focus:outline-none focus:ring-1 focus:ring-primary/40"
          />
          <button className="my-3">Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default ContactCard;
