import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rohit Gund for professional inquiries.",
};

export default function ContactPage() {
  return (
    <section className="section page-section compact-page">
      <div className="page-heading">
        <p className="eyebrow">Get in Touch</p>
        <h1>Contact</h1>
        <p>
          For direct inquiries, email me at{" "}
          <a href="mailto:iamrohitgund@gmail.com">iamrohitgund@gmail.com</a>, or use the form below.
        </p>
      </div>
      <div className="contact-layout">
        <aside className="contact-panel">
          <Mail aria-hidden="true" size={24} />
          <h2>Email</h2>
          <a href="mailto:iamrohitgund@gmail.com">iamrohitgund@gmail.com</a>
        </aside>
        <ContactForm />
      </div>
    </section>
  );
}
