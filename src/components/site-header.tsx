import Link from "next/link";
import { Code2, Network } from "lucide-react";
import { navItems, socialLinks } from "@/lib/content";

const socialIcons = {
  GitHub: Code2,
  LinkedIn: Network,
};

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Rohit Gund home">
        <span className="brand-mark">RG</span>
        <span>
          <strong>Rohit Gund</strong>
          <small>Software Engineer</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-socials" aria-label="Professional profiles">
        {socialLinks.map((item) => {
          const Icon = socialIcons[item.label as keyof typeof socialIcons];
          return (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              <Icon aria-hidden="true" size={19} />
            </a>
          );
        })}
      </div>
    </header>
  );
}
