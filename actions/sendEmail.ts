"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  try {
    const senderMail = formData.get("senderEmail");
    const message = formData.get("message");

    // Validate message
    if (!message || typeof message !== "string") {
      return {
        error: "Invalid Message. Please enter a valid text message.",
      };
    }

    // Validate sender email
    if (!senderMail || typeof senderMail !== "string") {
      return {
        error: "Invalid Email. Please enter a valid email address.",
      };
    }

    // Send email via Resend API
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "shelkeatharv964@gmail.com",
      subject: "Hello",
      replyTo: senderMail,
      text: message,
      react: React.createElement(ContactFormEmail, { 
        message:message as string, 
        senderEmail:senderMail as string 
      })
    });

    // Check if response has an error
    if (!response || response.error) {
      throw new Error("Failed to send email");
    }

    return {
      success: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};

