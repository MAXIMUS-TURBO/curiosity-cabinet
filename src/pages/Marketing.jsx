
import { useState } from "react";
import {
  Megaphone,
  CalendarDays,
  Shirt,
  Presentation,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import "./Marketing.css";

import InstagramGallery from "../components/InstagramGallery";


const projects = [
  {
    id: "recruitment",
    shortName: "Recruitment",
    title: "Education Abroad Recruitment Campaigns",
    category: "Campaign Design",
    period: "2023–2025",
    icon: Megaphone,
    description:
      "Developed promotional graphics for faculty-led and summer education abroad opportunities at the University of Houston-Clear Lake. The materials communicated program opportunities, eligibility requirements, financial aid information, and application calls to action.",
    contributions: [
      "Designed promotional graphics for different program audiences.",
      "Organized destination photography, requirements, and application information.",
      "Incorporated QR codes and calls to action to direct students toward application resources.",
    ],
    skills: ["Graphic Design", "Campaign Design", "Typography", "Student Outreach"],
    images: [
      {
        src: "/images/marketing/faculty-led.png",
        alt: "Faculty-led Education Abroad application promotion",
        caption: "Faculty-led program recruitment graphic",
      },
      {
        src: "/images/marketing/summer-applications.png",
        alt: "Summer Education Abroad application promotion",
        caption: "Summer program recruitment graphic",
      },
    ],
  },
  {
    id: "events",
    shortName: "Events",
    title: "Education Abroad Event Marketing",
    category: "Event Promotion",
    period: "2023–2025",
    icon: CalendarDays,
    description:
      "Created promotional materials for Education Abroad 101 information sessions to help students discover programs, understand the application process, and connect with advising resources.",
    contributions: [
      "Designed information-session promotional graphics.",
      "Presented event details and advising information clearly.",
      "Used travel imagery and QR codes to support student engagement.",
    ],
    skills: ["Event Marketing", "Information Design", "Digital Communications"],
    images: [
      {
        src: "/images/marketing/info-session-1.png",
        alt: "Education Abroad 101 information session promotion",
        caption: "Education Abroad 101 event promotion",
      },
      {
        src: "/images/marketing/info-session-2.png",
        alt: "Alternative Education Abroad 101 information session design",
        caption: "Additional information-session design",
      },
    ],
  },
  {
    id: "merchandise",
    shortName: "Merchandise",
    title: "Education Abroad Merchandise & Apparel",
    category: "Branding & Apparel",
    period: "2023–2025",
    icon: Shirt,
    description:
      "Designed original promotional T-shirt graphics for Education Abroad initiatives. The designs were produced and distributed as physical merchandise, extending the department's outreach beyond digital communications.",
    contributions: [
      "Created the original Ask Me About Education Abroad graphic.",
      "Designed the French Routes, STEM Roots apparel concept.",
      "Adapted artwork for wearable promotional merchandise.",
      "Contributed designs that were produced and distributed.",
    ],
    skills: ["Apparel Design", "Branding", "Typography", "Promotional Design"],
    images: [
      {
        src: "/images/marketing/french-routes-front.png",
        alt: "French Routes STEM Roots T-shirt front design",
        caption: "French Routes, STEM Roots front",
      },
      {
        src: "/images/marketing/french-routes-back.png",
        alt: "French Routes STEM Roots T-shirt back design",
        caption: "French Routes, STEM Roots back",
      },
      {
        src: "/images/marketing/abroad-shirt-mockup.png",
        alt: "Blue Education Abroad T-shirt front and back mockup",
        caption: "Education Abroad T-shirt mockup",
      },
    ],
  },
  {
    id: "outreach",
    shortName: "Outreach",
    title: "Campus Engagement & Program Promotion",
    category: "Physical Communications",
    period: "2023–2025",
    icon: Presentation,
    description:
      "Developed visual outreach materials that brought education abroad opportunities into campus spaces, helping students explore specific programs and destinations.",
    contributions: [
      "Created or assembled program-focused informational displays.",
      "Organized academic program details and destination information.",
      "Supported in-person awareness of education abroad opportunities.",
    ],
    skills: ["Campus Outreach", "Visual Communication", "Information Design"],
    images: [
      {
        src: "/images/marketing/brazil-display.jpg",
        alt: "Ecology in Brazil campus bulletin board display",
        caption: "Ecology in Brazil program display",
      },
      {
        src: "/images/marketing/france-display.jpg",
        alt: "Biotechnology in France campus bulletin board display",
        caption: "Biotechnology in France program display",
      },
    ],
  },
];

function Marketing() {
  const [selectedId, setSelectedId] = useState("recruitment");
  const [imageIndex, setImageIndex] = useState(0);

  const selectedProject = projects.find(
    (project) => project.id === selectedId
  );

  const currentImage = selectedProject.images[imageIndex];

  function selectProject(id) {
    setSelectedId(id);
    setImageIndex(0);
  }

  function nextImage() {
    setImageIndex((current) =>
      (current + 1) % selectedProject.images.length
    );
  }

  function previousImage() {
    setImageIndex((current) =>
      (current - 1 + selectedProject.images.length) %
      selectedProject.images.length
    );
  }

  return (
    <div className="marketing-page">
      <header className="marketing-heading">
        <span className="eyebrow">
          COLLECTION 02 / MARKETING & COMMUNICATIONS
        </span>

        <h1>Creative Communications</h1>

        <p>
          Selected projects from my work with the University of
          Houston-Clear Lake's Education Abroad and Scholar Services,
          October 2023 through September 2025.
        </p>
      </header>

      <div className="marketing-icon-grid">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <button
              key={project.id}
              type="button"
              className={`marketing-icon-card ${
                selectedId === project.id ? "selected" : ""
              }`}
              onClick={() => selectProject(project.id)}
              aria-pressed={selectedId === project.id}
            >
              <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
              <span className="marketing-icon-name">
                {project.shortName}
              </span>
              <span className="marketing-icon-category">
                {project.category}
              </span>
            </button>
          );
        })}
      </div>

      <section className="marketing-project" aria-live="polite">
        <div className="marketing-project-top">
          <span className="eyebrow">SELECTED COLLECTION</span>
          <span className="marketing-period">
            {selectedProject.period}
          </span>
        </div>

        <h2>{selectedProject.title}</h2>
        <p className="marketing-description">
          {selectedProject.description}
        </p>

        <div className="marketing-project-layout">
          <div className="marketing-gallery">
            <div className="marketing-gallery-image">
              <img
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
              />
            </div>

            <div className="marketing-gallery-controls">
              <button
                type="button"
                onClick={previousImage}
                disabled={selectedProject.images.length === 1}
                aria-label="Previous image"
              >
                <ChevronLeft size={19} />
              </button>

              <span>
                {imageIndex + 1} / {selectedProject.images.length}
              </span>

              <button
                type="button"
                onClick={nextImage}
                disabled={selectedProject.images.length === 1}
                aria-label="Next image"
              >
                <ChevronRight size={19} />
              </button>
            </div>

            <p className="marketing-image-caption">
              {currentImage.caption}
            </p>
          </div>

          <div className="marketing-project-details">
            <h3>My Contributions</h3>

            <ul>
              {selectedProject.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>Skills Demonstrated</h3>

            <div className="marketing-tags">
              {selectedProject.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <a
              href="https://www.instagram.com/uhcleducationabroad/"
              target="_blank"
              rel="noopener noreferrer"
              className="marketing-link"
            >
              View Education Abroad Instagram
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
              </section>

        {/* Instagram-style social media archive */}
        <InstagramGallery />
      </div>
    );
}

export default Marketing;
