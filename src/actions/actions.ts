"use server";

import EmailMessage from "@/components/emails/EmailMessage";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  let data;
  if (
    !senderName ||
    !senderEmail ||
    !message ||
    typeof message !== "string"
  ) {
    return {
      error: "All fields are required!",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <no-reply@spiralsrc.dev>",
      to: "raecodez@gmail.com",
      subject: "Message from Portfolio",
      reply_to: senderEmail as string,
      react: React.createElement(EmailMessage, {
        userFirstName: "Rae",
        senderName: senderName,
        message: message,
      }),
    });
  } catch (error) {
    throw new Error("Failed to send the message");
  }
  return {
    data,
  };
};
