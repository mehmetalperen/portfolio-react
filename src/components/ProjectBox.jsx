import React, { useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const ProjectBox = (props) => {
  return (
    <div id={`ProjectBox${props.id}`}>
      <a
        href="https://www.thesaurus.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div id="project-des-container">
          <Typography variant="body1" component="p">
            <Box color="text.primary" m="1rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              enim nam praesentium excepturi ratione id blanditiis voluptatibus
              sit tempore minus repudiandae officiis dolores, iure et maxime
              aliquam consectetur nemo laudantium!
            </Box>
          </Typography>
        </div>
      </a>

      <style jsx>
        {`
          #ProjectBox${props.id} {
            width: 33%;
            min-width: 300px;
            min-height: 240px;
            margin: 0 auto;

            background-image: url(${props.picture});

            background-size: cover;

            border-width: 2px;
            border-color: #000000;
            border-style: solid;
          }
          #project-des-container {
            overflow: hidden;
            background-color: #000000;
            min-height: 240px;
            opacity: 0;
            transition: opacity 1s ease-in-out;
          }
          #ProjectBox${props.id}:hover #project-des-container {
            cursor: pointer;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectBox;
