"use client";

import { useFormStatus } from "react-dom";

export function SendButton({ isVerified }: boolean | any) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || !isVerified}
      className="mt-5 bg-primary/30 rounded-xl py-3 border-2 border-transparent hover:shadow-xl  hover:border-primary/60 btn-effect"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}
