
import { analyticsProjects } from "../data/analyticsProjects";
import AnalyticsProjectCard from "../components/AnalyticsProjectCard";
import "./DataAnalytics.css";
import { useState } from "react";
import AnalyticsProjectModal from "../components/AnalyticsProjectModal";

export default function DataAnalytics() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <main className="observatory-page">
      <section className="observatory-hero">
        <div className="observatory-stars" aria-hidden="true">
          ✦ · ✧ · ✦
        </div>

        <p className="observatory-eyebrow">
          THE CURIOSITY CABINET / COLLECTION III
        </p>

        <h1>The Observatory</h1>

        <p className="observatory-tagline">
          Finding patterns in the noise.
        </p>

        <div className="observatory-divider" aria-hidden="true">
          ✦ ───────── ✦
        </div>

        <p className="observatory-intro">
          I approach data analytics as both a technical and creative
          discipline. Through analysis, visualization, and thoughtful
          communication, I turn complex information into stories
          that people can understand and use.
        </p>
      </section>

      <section className="observatory-collection">
        <div className="observatory-section-heading">
          <span>CURATED INVESTIGATIONS</span>
          <h2>Selected Work</h2>
          <p>
            Exploring data through dashboards, research,
            and analytical reporting.
          </p>
        </div>

        <div className="observatory-project-grid">
        {analyticsProjects.map((project) => (
          <AnalyticsProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      </section>

      <section className="observatory-process">
        <div className="observatory-section-heading">
          <span>BEHIND THE FINDINGS</span>
          <h2>My Analytical Process</h2>
        </div>

        <div className="observatory-process-grid">
          {[
            ["01", "Question", "Define what needs to be understood."],
            ["02", "Prepare", "Clean and organize the data."],
            ["03", "Analyze", "Explore relationships and patterns."],
            ["04", "Visualize", "Make insights understandable."],
            ["05", "Communicate", "Connect findings to decisions."],
          ].map(([number, title, description]) => (
            <div className="observatory-process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="observatory-toolkit">
        <div className="observatory-section-heading">
          <span>INSTRUMENTS OF DISCOVERY</span>
          <h2>Tools & Techniques</h2>
        </div>

        <div className="observatory-tools">
          {[
            "SQL",
            "Python",
            "Excel",
            "Tableau",
            "Power BI",
            "Data Cleaning",
            "Dashboard Design",
            "Data Storytelling",
          ].map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>
      <AnalyticsProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
