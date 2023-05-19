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
      <p>
        Welcome to my portfolio! I'm a passionate developer with a love for
        creating amazing web applications. With experience in JavaScript, React,
        NodeJs, I enjoy bringing ideas to life through code.
      </p>
      <p>
        I have experience working on various projects that are shon in here. I'm
        always eager to learn and explore new technologies to enhance my skills.
      </p>
      <p>
        Feel free to explore my projects and get in touch with me for any
        inquiries or opportunities. Let's build something incredible together!
      </p>

      <div>
        <button className="btnCV">Download CV</button>
      </div>
    </div>
  );
};
