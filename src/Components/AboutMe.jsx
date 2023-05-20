import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>Joaquin Monge</h2>
      <h4>I am a Junior Full Stack Developer</h4>

      <div className="icons">
        <BsGithub style={{ fontSize: "24px", marginRight: "10px" }} />
        <BsLinkedin style={{ fontSize: "24px" }} />
      </div>
      <div className="button-container">
        <button className="btnContact">Contact me</button>
      </div>

      <div className="aboutMeCard animate__bounceIn animate__backInUp animate__delay-2s">
        <p>
          Welcome to my portfolio! I'm a passionate developer with a love for
          creating amazing web applications. With experience in JavaScript,
          React, NodeJs, I enjoy bringing ideas to life through code.
        </p>
      </div>

      <div>
        <button className="btnCV">Download CV</button>
      </div>
    </div>
  );
};
