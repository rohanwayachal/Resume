import React from "react";
import Header from "./Header";
import Education from "./Education";
import Career from "./Career";
import Project from "./Projects";
import Contact from "./Contact";
import Intro from "./Intro";

import "./styles.css";

export default function App() {
  return (
    <div className="bg">
      <Header />
      <Intro />

      <Education />
      <Career />
      <Project />
      <Contact />
    </div>
  );
}
