import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software engineering projects by Rohit Gund.",
};

export default function ProjectsPage() {
  return (
    <section className="section page-section">
      <div className="page-heading">
        <p className="eyebrow">Portfolio</p>
        <h1>Projects</h1>
        <p>Selected work across full-stack development, machine learning, cloud, and data systems.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-tech">{project.technology}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">
                View on GitHub
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            ) : (
              <span className="muted-link">Repository not public</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
