import React from "react";

import netflix from "../netlfix.png";
import store from "../store.png";
import journal from "../journal.png";
import calendar from "../calendar.png";

export const Projects = () => {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "This is a Netflix clone where you can see al movies by categories and also save your favorite movies to your list",
      imageUrl: netflix,
      demoUrl: "https://netflix-joamonb.netlify.app/",
      githubUrl: "https://github.com/JoaquinMonge/Movie",
    },
    {
      title: "Online Store",
      description:
        "Online clothing store where you can add items to your cart and search by catgories",
      imageUrl: store,
      demoUrl: "https://joamonb-store.netlify.app/",
      githubUrl: "https://github.com/JoaquinMonge/react-cart",
    },
    {
      title: "Journal",
      description:
        "Journal where you can create entries and also upload photos to it.",
      imageUrl: journal,
      demoUrl: "https://journal-joamonb.netlify.app",
      githubUrl: "https://github.com/JoaquinMonge/journal-app",
    },
    {
      title: "Calendar",
      description:
        "Calendar that can be used as a team. Multiple users can add entries to it.",
      imageUrl: calendar,
      demoUrl: "https://github.com/JoaquinMonge/calendar-backend",
      githubUrl: "https://github.com/JoaquinMonge/calendar-backend",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img className="imgProj" src={project.imageUrl} alt={project.title} />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
