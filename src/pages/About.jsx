
import { Link } from "react-router-dom";
import "./About.css";
import { assetPath } from "../utils/assetPath";

const skills = [
  {
    title: "Software Development",
    items: ["React", "JavaScript", "Python", "Java", "FastAPI", "SQL"],
  },
  {
    title: "Data & Analytics",
    items: ["Power BI", "Excel", "SQL", "Data Visualization", "Reporting"],
  },
  {
    title: "Creative & Communications",
    items: [
      "Digital Communications",
      "Content Creation",
      "Visual Design",
      "Marketing",
    ],
  },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <span className="eyebrow">BEHIND THE CABINET</span>

        <h1>A little about me.</h1>

        <div className="about-intro-grid">
          <div className="about-copy">
            <p className="about-lead">
              Hi, I'm Fatima! I'm a Computer Science student at
              the University of Houston-Clear Lake with a passion
              for technology, design, and creative problem-solving.
            </p>

            <p>
              My experience spans software development, data
              analytics, and digital communications. I enjoy
              combining technical thinking with creativity to
              build useful applications, communicate ideas, and
              turn information into meaningful insights.
            </p>

            <p>
              From developing a search-and-rescue drone dashboard
              to working with data and supporting university
              technology initiatives, I'm always looking for
              opportunities to learn and create.
            </p>

            <div className="about-buttons">
              <Link to="/software" className="about-primary">
                Explore My Work →
              </Link>

              <Link to="/contact" className="about-secondary">
                Get in Touch ↗
              </Link>
            </div>
          </div>

          
          <div className="about-profile">
            <div className="about-photo-frame">
              <img
                src={assetPath("/images/profile.jpg")}
                alt="Portrait of Fatima"
                className="about-photo"
              />
            </div>

            
          <div className="about-photo-caption">
            <span>✦ THE CURIOUS MIND</span>
            <p>Developer · Analyst · Creative</p>
          </div>
          </div>

          </div> {/* Closes about-intro-grid */}
          </section> {/* Closes about-intro */}

      <section className="about-skills">
        <span className="eyebrow">MY TOOLKIT</span>
        <h2>What I Work With</h2>

        <div className="about-skills-grid">
          {skills.map((group) => (
            <div className="about-skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="about-skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-next">
        <span className="eyebrow">WHAT'S NEXT?</span>
        <h2>Always curious. Always building.</h2>
        <p>
          I'm interested in opportunities where I can apply my
          technical background, develop new skills, and contribute
          to meaningful projects.
        </p>

        <Link to="/contact" className="about-primary">
          Let's Connect →
        </Link>
      </section>
    </div>
  );
}

export default About;
