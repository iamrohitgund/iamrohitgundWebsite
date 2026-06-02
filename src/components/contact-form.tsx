"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState("The form opens your email client so the message stays direct.");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    );

    window.location.href = `mailto:iamrohitgund@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Your email client should open with the message prepared.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="your@email.com" autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" rows={7} placeholder="What would you like to discuss?" />
      </label>
      <div className="form-actions">
        <button type="submit">
          <Send aria-hidden="true" size={18} />
          Send Message
        </button>
        <a href="mailto:iamrohitgund@gmail.com">
          <Mail aria-hidden="true" size={18} />
          Email Directly
        </a>
      </div>
      <p className="form-note">{status}</p>
    </form>
  );
}
