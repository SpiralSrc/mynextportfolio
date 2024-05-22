"use client";

import Form from "../ui/Form";
import Input from "../ui/Input";
import { SendButton } from "../ui/SendButton";
import { sendEmail } from "@/actions/actions";
import toast from "react-hot-toast";

const ContactCard = () => {
  return (
    <Form
      action={async (formData) => {
        const { error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Message sent successfully!");
      }}
      className="md:w-[50%] px-3 md:px-5 text-sm md:text-md flex flex-col gap-2 md:gap-5 pt-8 md:pt-20 pb-10 md:pb-32"
    >
      <Input type="text" name="senderName" placeholder="Name" />
      <Input type="email" name="senderEmail" placeholder="Email" />
      <textarea
        required
        name="message"
        placeholder="Your message..."
        className="h-40 md:h-60 bg-transparent py-2 px-3  placeholder:text-primary/40 border-b border-primary/40 ring-primary/40 focus:rounded-lg focus:border-none focus:outline-none focus:ring-1 focus:ring-primary/40"
      />
      <SendButton />
    </Form>
  );
};
export default ContactCard;
