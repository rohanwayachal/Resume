import React from "react";
import "./styles.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <h4 className="logo">
          {" "}
          <Link
            className="nav-link"
            to="introduction"
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={1000}
          >
            Rohan Wayachal{" "}
          </Link>
        </h4>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              className="nav-link"
              to="edu"
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={1000}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="exp"
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={1000}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="project"
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="contact"
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
