
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        ✦ THE CURIOSITY CABINET
      </NavLink>

      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/software">Software</NavLink>
        <NavLink to="/marketing">Marketing</NavLink>
        <NavLink to="/analytics">Data Analytics</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <a
        href="/resume.pdf"
        className="resume-button"
        target="_blank"
        rel="noreferrer"
      >
        Resume ↗
      </a>
    </header>
  );
}

export default Navbar;
