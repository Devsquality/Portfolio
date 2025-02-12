import React from "react";
import { about } from "../../portfolio/portfolio";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social, image } = about;

  return (
    <div className="about center">
      <div className="about__container">
        <div className="about__text">
          {name && (
            <h1>
              Hi, I am <span className="about__name">{name}</span>
            </h1>
          )}
          {role && <h2 className="about__role">A {role[0]}.</h2>}
          <p>{description[0] && description[0]}</p>

          {role && <h2 className="about__role">{role[1]}.</h2>}
          <p>{description[1] && description[1]}</p>
        </div>
        <img src={image} alt="Profile" className="about__image" />
      </div>
      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                {<AiFillGithub size="2em" />}
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <AiFillLinkedin size="2em" />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
