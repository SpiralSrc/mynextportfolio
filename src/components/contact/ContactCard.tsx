import Form from "../ui/Form";
import Input from "../ui/Input";
import { SendButton } from "../ui/SendButton";

const ContactCard = () => {
  async function send() {
    "use server";

    console.log("Button clicked!");
  }
  return (
    <Form action={send} className="md:w-[55%] px-5  flex flex-col gap-5 pt-20 pb-32">
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <textarea
        required
        name="message"
        placeholder="Your message..."
        className="h-60 bg-transparent py-2 px-3  placeholder:text-primary/40 border-b border-primary/40 ring-primary/40 focus:rounded-lg focus:border-none focus:outline-none focus:ring-1 focus:ring-primary/40"
      />
      <SendButton />
    </Form>
  );
};
export default ContactCard;
