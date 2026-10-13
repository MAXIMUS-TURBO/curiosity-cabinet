
import { useEffect, useState } from "react";

export default function AnalyticsProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    ...(project?.image ? [project.image] : []),
    ...(project?.gallery || []),
  ];

  useEffect(() => {
    if (!project) return;

    setActiveImage(0);

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const nextImage = () => {
    setActiveImage((index) => (index + 1) % images.length);
  };

  const previousImage = () => {
    setActiveImage(
      (index) => (index - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="analytics-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="analytics-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="analytics-modal-title"
      >
        <button
          className="analytics-modal-close"
          onClick={onClose}
          aria-label="Close project"
          type="button"
        >
          ×
        </button>

        <div className="analytics-modal-header">
          <span className="analytics-modal-eyebrow">
            INVESTIGATION / {project.number}
          </span>

          <h2 id="analytics-modal-title">{project.title}</h2>
          <p>{project.subtitle}</p>
        </div>

        {images.length > 0 && (
          <div className="analytics-modal-gallery">
            <img
              src={images[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
            />

            {images.length > 1 && (
              <div className="analytics-modal-gallery-controls">
                <button onClick={previousImage} type="button">
                  ← Previous
                </button>

                <span>
                  {activeImage + 1} / {images.length}
                </span>

                <button onClick={nextImage} type="button">
                  Next →
                </button>
              </div>
            )}
          </div>
        )}

        <div className="analytics-modal-body">
          <p className="analytics-modal-description">
            {project.description}
          </p>

          {project.challenge && (
            <div className="analytics-modal-section">
              <span>01 / THE QUESTION</span>
              <h3>The Challenge</h3>
              <p>{project.challenge}</p>
            </div>
          )}

          {project.approach && (
            <div className="analytics-modal-section">
              <span>02 / THE METHOD</span>
              <h3>My Approach</h3>
              <p>{project.approach}</p>
            </div>
          )}

          {project.findings?.length > 0 && (
            <div className="analytics-modal-section">
              <span>03 / THE DISCOVERIES</span>
              <h3>Key Findings</h3>

              <ul>
                {project.findings.map((finding, index) => (
                  <li key={index}>{finding}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="analytics-modal-section">
            <span>TOOLS & TECHNIQUES</span>
            <h3>Instruments Used</h3>

            <div className="analytics-modal-tools">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>

          {project.link && (
            <a
              className="analytics-modal-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the Project ↗
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
