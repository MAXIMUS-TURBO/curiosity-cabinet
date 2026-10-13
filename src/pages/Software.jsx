
import { useState } from "react";
import { Plane, Terminal } from "lucide-react";
import "./Software.css";

const projects = [
  {
    id: "strix",
    shortName: "STRIX",
    title: "STRIX Search & Rescue Dashboard",
    category: "Full-Stack Development",
    status: "In Development",
    icon: Plane,
    description:
      "A web-based command station for an autonomous search-and-rescue drone, designed to visualize telemetry and support mission monitoring.",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "ROS 2",
      "WebSockets",
      "Leaflet",
    ],
    highlights: [
      "Designed a responsive dashboard for drone telemetry.",
      "Connected React components to a FastAPI backend.",
      "Implemented real-time updates using WebSockets.",
      "Worked with simulated drone telemetry.",
    ],
    github:
      "https://github.com/MAXIMUS-TURBO/search-and-rescue-drone-dashboard",
    image: "/images/strix-dashboard.png",
  },
  {
    id: "hawk",
    shortName: "Hawk",
    title: "Hawk Programming Language",
    category: "Compiler Design",
    status: "Academic Project",
    icon: Terminal,
    description:
      "A custom programming language implemented in Java, featuring lexical analysis and recursive-descent parsing.",
    technologies: [
      "Java",
      "Compiler Design",
      "Lexical Analysis",
      "Parsing",
      "Symbol Tables",
    ],
    highlights: [
      "Implemented a lexical scanner for recognizing tokens.",
      "Developed a recursive-descent parser.",
      "Added syntax validation and error reporting.",
      "Worked with grammar rules and language constructs.",
    ],
    github: "https://github.com/MAXIMUS-TURBO/Hawk-Programming-Language",
    image: "/images/hawk-language.png",
  },
];

function Software() {
  const [selectedId, setSelectedId] = useState("strix");
  const [imageFailed, setImageFailed] = useState(false);

  const selectedProject = projects.find(
    (project) => project.id === selectedId
  );

  function selectProject(id) {
    setSelectedId(id);
    setImageFailed(false);
  }

  return (
    <div className="software-page">
      <header className="software-heading">
        <span className="eyebrow">COLLECTION 01 / SOFTWARE</span>
        <h1>Software Development</h1>
        <p>
          A collection of applications, experiments, and
          technical projects.
        </p>
      </header>

      <div className="project-icon-grid">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <button
              key={project.id}
              type="button"
              className={`project-icon-card ${
                selectedId === project.id ? "selected" : ""
              }`}
              onClick={() => selectProject(project.id)}
              aria-pressed={selectedId === project.id}
            >
              <Icon size={34} strokeWidth={1.5} aria-hidden="true" />

              <span className="project-icon-name">
                {project.shortName}
              </span>

              <span className="project-icon-category">
                {project.category}
              </span>
            </button>
          );
        })}
      </div>

      <section className="selected-project" aria-live="polite">
        <div className="selected-project-header">
          <span className="eyebrow">SELECTED ARTIFACT</span>
          <span className="software-status">
            {selectedProject.status}
          </span>
        </div>

        <h2>{selectedProject.title}</h2>
        <p className="selected-project-description">
          {selectedProject.description}
        </p>

        <div className="selected-project-layout">
          <div className="selected-project-image">
            {!imageFailed ? (
              <img
                key={selectedProject.id}
                src={selectedProject.image}
                alt={`${selectedProject.title} preview`}
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="project-image-placeholder">
                <span>✦</span>
                <p>Project preview coming soon</p>
              </div>
            )}
          </div>

          <div className="selected-project-info">
            <h3>Key Contributions</h3>

            <ul>
              {selectedProject.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <h3>Technologies</h3>

            <div className="software-tags">
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="software-button"
              >
                View on GitHub ↗
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Software;
