
import { useState } from "react";

export default function AnalyticsProjectCard({ project, onClick }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="observatory-project-card">
      <button
        type="button"
        className="observatory-project-button"
        onClick={onClick}
        aria-label={`View ${project.title} project details`}
      >
        <div className="observatory-project-image">
          {!imageFailed && project.image ? (
            <img
              src={project.image}
              alt=""
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="observatory-image-placeholder">
              <span>✦</span>
              <p>Investigation {project.number}</p>
            </div>
          )}
        </div>

        <div className="observatory-project-content">
          <span className="observatory-project-number">
            INVESTIGATION / {project.number}
          </span>

          <h3>{project.title}</h3>

          <p className="observatory-project-subtitle">
            {project.subtitle}
          </p>

          <p className="observatory-project-description">
            {project.description}
          </p>

          <div className="observatory-project-tools">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <span className="observatory-project-explore">
            Explore Investigation ↗
          </span>
        </div>
      </button>
    </article>
  );
}
