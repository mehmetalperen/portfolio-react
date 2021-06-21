import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProjectBox from "./ProjectBox";
const ProjectSection = () => {
  const projectObjects = [
    {
      picture: "axess-pic.png",
      path: "https://devpost.com/software/axess",
      description:
        "Axess takes advantage of the popularity of tools such as CodePen and JSBin among those learning web development by offering an NPM Package that allows for seamless integration of online IDE's into a web accessibility education tool.",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "hungary-app-pic.png",
      path: "https://unruffled-wiles-bb251b.netlify.app/",
      description:
        "Hungry is a recipe search app with an incredible user interface that makes cooking fun and easy! Access to 330,000 recipes. YouTube Support. Step by step instructions. Like/Unlike functionality. ",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "google-demo-pic.png",
      path: "https://optimistic-easley-995549.netlify.app/",
      description:
        "Recreated the Google Classroom experience. Creating new class. Making class announcements. Replying to an announcement or to a comment. Deleting announcements and comments",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "word-counter-pic.png",
      path: "https://upbeat-aryabhata-595ba2.netlify.app/",
      description:
        "Count My Word is a word counter app with additional features.Progress tracker. Character Counter. Sentence Counter. Paragraph Counter. Responsive. Frequently Used Words(deletable).",
      features: ["", ""],
      technologies: ["", ""],
    },
    ,
    {
      picture: "budget-app-pic.png",
      path: "https://mehmetalperen.github.io/Year-budget-calculator-/",
      description:
        "My Budgetary is a budget calculator app with a user-friendly UI! Month Support. Change in Color depending on Financial wellness. Sentence Counter. Alert in case of Financial Danger. Add/Delete detail. Responsive.",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "movie-finder-pic.png",
      path: "https://laughing-banach-cac211.netlify.app/",
      description:
        "Movie Finder Pro is a movie search app with a responsive UI! Search Movie. Like/Unlike. See details. Add Comments. Go to Movie official page",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "natural-selection.png",
      path: "https://mehmetalperen.github.io/natural-selection-simulation/",
      description:
        "This natural selection simulation was a work I did for fun. I practiced my object-oriented programming skills while building this project. This project sparked an interest in me for Machine Learning and AI.",
      features: ["", ""],
      technologies: ["", ""],
    },
    {
      picture: "snake-game-pic.png",
      path: "https://mehmetalperen.github.io/snake-game/",
      description:
        "This snake game was one of the project I did for fun. I practiced my Vanila JS skills doing this project.",
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
