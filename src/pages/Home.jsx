
import { Link } from "react-router-dom";

const collections = [
  {
    id: "01",
    title: "Software Development",
    description: "Applications, interfaces, and technical projects.",
    path: "/software",
    icon: "⌘",
  },
  {
    id: "02",
    title: "Marketing & Communications",
    description: "Campaigns, digital content, and creative strategy.",
    path: "/marketing",
    icon: "✦",
  },
  {
    id: "03",
    title: "Data Analytics",
    description: "Dashboards, reporting, and data-driven insights.",
    path: "/analytics",
    icon: "▥",
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">
          WELCOME TO MY DIGITAL ARCHIVE
        </span>

        <h1>
          A curious mind.
          <br />
          A digital world.
        </h1>

        <p>
          Exploring the intersection of software development,
          digital communications, and data analytics.
        </p>

        <a href="#collections" className="primary-button">
          Explore the Collections ↓
        </a>
      </section>

      <section id="collections" className="collections">
        <div className="section-heading">
          <span className="eyebrow">THE ARCHIVE</span>
          <h2>Selected Collections</h2>
          <p>Three disciplines. One curious mind.</p>
        </div>

        <div className="collection-grid">
          {collections.map((collection) => (
            <Link
              to={collection.path}
              className="collection-card"
              key={collection.id}
            >
              <span className="card-number">
                COLLECTION {collection.id}
              </span>

              <div className="card-icon" aria-hidden="true">
                {collection.icon}
              </div>

              <h3>{collection.title}</h3>
              <p>{collection.description}</p>

              <span className="card-link">Explore →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
