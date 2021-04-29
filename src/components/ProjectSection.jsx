import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProjectBox from "./ProjectBox";
const ProjectSection = () => {
  const projectObjects = [
    {
      picture: "axess-pic.png",
      path: "",
      description: "",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "hungary-app-pic.png",
      path: "",
      description: "",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "google-demo-pic.png",
      path: "",
      description: "",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "word-counter-pic.png",
      path: "",
      description: "",
      features: ["", ""],
      technologies: ["", ""],
    },
    ,
    {
      picture: "budget-app-pic.png",
      path: "",
      description: "",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "movie-finder-pic.png",
      path: "",
      description: "",
      features: ["", ""],
      technologies: ["", ""],
    },
  ];
  return (
    <div id="ProjectSection" className="ProjectSection">
      <div className="project-title-container">
        <Typography
          variant="h2"
          component="h2"
          color="secondary"
          align="center"
        >
          <Box>PROJECTS </Box>
        </Typography>
      </div>
      <div className="project-wrapper">
        {projectObjects.map((project, index) => {
          return (
            <ProjectBox
              key={index}
              id={index}
              picture={project.picture}
              path={project.path}
              description={project.description}
              feature={project.features}
              technologies={project.technologies}
            />
          );
        })}
      </div>
      <style jsx>
        {`
          .ProjectSection {
            min-height: 100vh;
            width: 100%;
            align-items: center;
            padding-top: 5%;
          }
          .project-title-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
          }
          .project-wrapper {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-evenly;
            max-width: 90%;
            margin: 5% auto;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectSection;
