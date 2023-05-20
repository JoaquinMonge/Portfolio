import React from "react";

import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { TbBrandMysql, TbBrandCSharp } from "react-icons/tb";
import c from "../csharp.png";
import react from "../react.png";
import js from "../js.png";
import node from "../node.png";
import mongodb from "../mongodb.png";
import html from "../html.png";
import mysql from "../mysql.png";
import css from "../css.png";
export const Technologies = () => {
  const technologies = [
    "React",
    "JavaScript",
    "HTML/CSS",
    "Node.js",
    "MongoDB",
  ];

  const iconStyles = {
    FaReact: { color: "#61dafb" }, // Azul para React
    IoLogoNodejs: { color: "#43853d" }, // Verde para Node.js
    SiJavascript: { color: "#f0db4f" }, // Amarillo para JavaScript
    DiMongodb: { color: "#4db33d" }, // Verde para MongoDB
    TbBrandMysql: { color: "#005e86" }, // Azul oscuro para MySQL
    TbBrandCSharp: { color: "#9a2d83" }, // Morado para C#
    FaCss3Alt: { color: "#2965f1" }, // Azul para CSS
    FaHtml5: { color: "#e34f26" }, // Naranja para HTML
  };

  return (
    <div className="technologies">
      <h2>Technologies</h2>

      <p>
        I'm always eager to learn and explore new technologies to enhance my
        skills.
      </p>

      <p>
        I have experience with multiple technologies but i am always willing to
        learn new things
      </p>
      <div className="card">
        <div className="iconsTech">
          <div className="fila1">
            <FaReact className="ic" style={iconStyles.FaReact} />
            <IoLogoNodejs className="ic" style={iconStyles.IoLogoNodejs} />
            <SiJavascript className="ic" style={iconStyles.SiJavascript} />
            <DiMongodb className="ic" style={iconStyles.DiMongodb} />
          </div>
          <div className="fila2">
            <TbBrandMysql className="ic" style={iconStyles.TbBrandMysql} />
            <TbBrandCSharp className="ic" style={iconStyles.TbBrandCSharp} />
            <FaCss3Alt className="ic" style={iconStyles.FaCss3Alt} />
            <FaHtml5 className="ic" style={iconStyles.FaHtml5} />
          </div>
        </div>
      </div>

      {/* <div className="techImages">
        <div className="fila1">
          <div>
            <img src={c} alt="" className="c" />
          </div>
          <div>
            <img src={react} alt="" className="react" />
          </div>
          <div>
            <img src={js} alt="" className="js" />
          </div>

          <div>
            <img src={node} alt="" className="node" />
          </div>
        </div>

        <div className="fila2">
          <div>
            <img src={mongodb} alt="" className="mongodb" />
          </div>
          <div>
            <img src={html} alt="" className="html" />
          </div>
          <div>
            <img src={mysql} alt="" className="mysql" />
          </div>
          <div>
            <img src={css} alt="" className="css" />
          </div>
        </div>
      </div> */}

      {/* <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul> */}
    </div>
  );
};
