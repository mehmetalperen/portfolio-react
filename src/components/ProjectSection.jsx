import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProjectBox from "./ProjectBox";
const ProjectSection = () => {
  return (
    <div className="ProjectSection">
      <div className="title-container">
        <Typography variant="h2" component="h2" color="secondary">
          <Box>PROJECTS </Box>
        </Typography>
      </div>
      <div className="project-wrapper">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
      <style jsx>
        {`
          .ProjectSection {
            min-height: 100vh;
            width: 100%;
            align-items: center;
          }
          .title-container {
            display: flex;
            align-items: center;
            justify-content: center;
            display: flex;

            border-width: 2px;
            border-color: red;
            border-style: dashed;
          }
          .project-wrapper {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-evenly;
            max-width: 90%;
            margin: 0 auto;

            border-width: 2px;
            border-color: blue;
            border-style: dashed;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectSection;
