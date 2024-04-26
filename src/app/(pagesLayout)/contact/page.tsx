import ContactCard from "@/components/contact/ContactCard";

export default function page() {
  return (
    <section className="h-[79vh]">
      <div className="max-w-7xl flex flex-col pt-32 pb-24 px-2 xl:px-0">
        <h1 className="text-5xl font-sacramento font-bold text-center mb-32">Contact</h1>
        <ContactCard />
      </div>
    </section>
  );
}
