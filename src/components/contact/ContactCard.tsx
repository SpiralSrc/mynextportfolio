"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { SendButton } from "../ui/SendButton";
import { sendEmail } from "@/actions/actions";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

const ContactCard = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  const { pending } = useFormStatus();

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
      console.log(e);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }
  return (
    <Form
      action={async (formData) => {
        const { error } = await sendEmail(formData);

        if (!isVerified) {
          toast.error("You are not verified!");
        }

        if (error) {
          toast.error("Sending message failed!");
          return;
        }

        recaptchaRef.current?.reset();

        toast.success("Message sent successfully!");
      }}
      className="md:w-[50%] bg-section-gradient3 px-3 md:px-5 text-sm md:text-md flex flex-col gap-2 md:gap-5 pt-8 md:pt-20 pb-10 md:pb-32"
    >
      <Input type="text" name="senderName" placeholder="Name" />
      <Input type="email" name="senderEmail" placeholder="Email" />
      <textarea
        required
        name="message"
        placeholder="Your message..."
        className="h-40 md:h-60 bg-transparent py-2 px-3  placeholder:text-primary/40 border-b border-primary/40 ring-primary/40 focus:rounded-lg focus:border-none focus:outline-none focus:ring-1 focus:ring-primary/40"
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={handleChange}
        onExpired={handleExpired}
      />
      <button
        type="submit"
        disabled={pending || !isVerified}
        className={
          !isVerified
            ? "mt-5 bg-primary/5 text-zinc-500/60 rounded-xl py-3 border-2 border-transparent"
            : "mt-5 bg-primary/30 rounded-xl py-3 border-2 border-transparent hover:shadow-xl  hover:border-primary/60 btn-effect"
        }
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </Form>
  );
};
export default ContactCard;
