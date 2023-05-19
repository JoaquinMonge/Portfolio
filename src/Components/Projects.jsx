import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "project1.png",
      demoUrl: "https://example.com/project1",
      githubUrl: "https://github.com/example/project1",
    },
    {
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "project2.png",
      demoUrl: "https://example.com/project2",
      githubUrl: "https://github.com/example/project2",
    },
    {
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "project2.png",
      demoUrl: "https://example.com/project2",
      githubUrl: "https://github.com/example/project2",
    },
    {
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "project2.png",
      demoUrl: "https://example.com/project2",
      githubUrl: "https://github.com/example/project2",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.imageUrl} alt={project.title} />
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
