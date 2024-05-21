"use server";

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("sendEmail") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;
  try {
  } catch (error) {
    throw new Error(`${error},"Error sending the message"`);
  }
};
