import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio/portfolio";

const Skills = () => {
  if (!skills.length) return null;
  return (
    <section className="section skills reveal" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li className="skills__list-item btn btn--plain">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
