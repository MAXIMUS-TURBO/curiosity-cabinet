
import { useState } from "react";
import "./Software.css";

const projects = [
  {
    id: "strix",
    title: "STRIX Search & Rescue Dashboard",
    category: "Full-Stack Development",
    status: "In Development",
    description:
      "A web-based command station for an autonomous search-and-rescue drone, designed to visualize telemetry and support mission monitoring.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "ROS 2",
      "WebSockets",
      "Leaflet",
    ],
    highlights: [
      "Designed a responsive dashboard interface for drone telemetry.",
      "Integrated frontend components with a FastAPI backend.",
      "Developed real-time data visualization using WebSockets.",
      "Worked with simulated drone telemetry during development.",
    ],
    github:
      "https://github.com/MAXIMUS-TURBO/search-and-rescue-drone-dashboard",
    image: "/images/strix-dashboard.png",
  },
];

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="software-card">
      <div className="software-preview">
        {!imageFailed ? (
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="software-image-placeholder">
            <span>✦</span>
            <p>PROJECT PREVIEW COMING SOON</p>
          </div>
        )}
      </div>

      <div className="software-details">
        <div className="software-meta">
          <span>{project.category}</span>
          <span className="software-status">{project.status}</span>
        </div>

        <h2>{project.title}</h2>
        <p className="software-description">{project.description}</p>

        <h3>Key Contributions</h3>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="software-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="software-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="software-button"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function Software() {
  return (
    <section className="software-page">
      <header className="software-heading">
        <span className="eyebrow">COLLECTION 01 / SOFTWARE</span>

        <h1>Software Development</h1>

        <p>
          A collection of applications, interfaces, and technical
          projects focused on building useful and thoughtful software.
        </p>
      </header>

      <div className="software-projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Software;
