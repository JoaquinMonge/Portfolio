import React from "react";

import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { TbBrandMysql, TbBrandCSharp } from "react-icons/tb";

export const Technologies = () => {
  const technologies = [
    "React",
    "JavaScript",
    "HTML/CSS",
    "Node.js",
    "MongoDB",
  ];

  return (
    <div className="technologies">
      <h2>Technologies</h2>

      <div className="icons" style={{ fontSize: "40px" }}>
        <FaReact />
        <IoLogoNodejs />
        <SiJavascript />
        <DiMongodb />
        <TbBrandMysql />
        <TbBrandCSharp />
        <FaCss3Alt />
        <FaHtml5 />
      </div>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};
