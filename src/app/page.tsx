import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Download, Network } from "lucide-react";
import { skills, timeline } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer</p>
          <h1>Hi, I am Rohit.</h1>
          <p className="hero-text">
            I build reliable software systems with a focus on backend engineering, cloud platforms,
            and practical full-stack product development.
          </p>
          <div className="hero-actions">
            <a href="https://github.com/iamrohitgund" target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" size={18} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/iamrohitgund/" target="_blank" rel="noreferrer">
              <Network aria-hidden="true" size={18} />
              LinkedIn
            </a>
            <a href="/resume.pdf">
              <Download aria-hidden="true" size={18} />
              Resume
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <Image
            src="/images/undraw_developer_activity_bv83.svg"
            alt=""
            width={520}
            height={420}
            priority
          />
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Summary</p>
          <h2>Engineering with product context.</h2>
        </div>
        <p>
          Innovative professional with strong technical acumen, a passion for software engineering,
          a solid educational background, and hands-on experience across Java, Python, JavaScript,
          cloud tools, and full-stack web development.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Core Skills</p>
          <h2>Tools I use to build.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article className="skill-card" key={skill.label}>
                <Icon aria-hidden="true" size={22} />
                <h3>{skill.label}</h3>
                <p>{skill.value}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section story-section">
        <div className="section-heading">
          <p className="eyebrow">My Story</p>
          <h2>A long-running curiosity for software.</h2>
        </div>
        <div className="story-copy">
          <p>
            Ever since I was a kid, problem-solving has been my passion. I still remember making
            an old computer print &quot;Hello, World&quot; for the first time and realizing software could
            turn ideas into something real.
          </p>
          <p>
            That curiosity led me from HTML and CSS into Java, Python, backend systems, web
            applications, and cloud engineering. I enjoy learning new tools and using them to solve
            practical problems for people and products.
          </p>
          <Link className="text-link" href="/projects">
            View projects
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Timeline</p>
          <h2>Timeline of my career.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <article className="timeline-item" key={`${item.date}-${item.title}`}>
                <div className="timeline-icon">
                  <Icon aria-hidden="true" size={20} />
                </div>
                <div>
                  <p className="timeline-date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <strong>{item.organization}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
