import type { Metadata } from "next";
import { Code2, Network } from "lucide-react";
import { socialLinks } from "@/lib/content";

const icons = {
  GitHub: Code2,
  LinkedIn: Network,
};

export const metadata: Metadata = {
  title: "Social Media",
  description: "Professional profiles for Rohit Gund.",
};

export default function SocialMediaPage() {
  return (
    <section className="section page-section compact-page">
      <div className="page-heading">
        <p className="eyebrow">Professional Profiles</p>
        <h1>Social Media</h1>
        <p>Connect with me through my primary professional profiles.</p>
      </div>
      <div className="profile-list">
        {socialLinks.map((link) => {
          const Icon = icons[link.label as keyof typeof icons];
          return (
            <a className="profile-card" key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <span>
                <Icon aria-hidden="true" size={22} />
              </span>
              <strong>{link.label}</strong>
              <small>{link.href.replace("https://www.", "").replace("https://", "").replace(/\/$/, "")}</small>
            </a>
          );
        })}
      </div>
    </section>
  );
}
