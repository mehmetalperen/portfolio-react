import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const BioContent = () => {
  return (
    <div className="BioContent">
      <Typography variant="h2" component="h2">
        <Box color="text.secondary" m="1rem">
          BIO:
        </Box>
      </Typography>

      <Typography variant="body1" component="p">
        <Box color="text.primary" m="1rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim
          nam praesentium excepturi ratione id blanditiis voluptatibus sit
          tempore minus repudiandae officiis dolores, iure et maxime aliquam
          consectetur nemo laudantium!
        </Box>
      </Typography>

      <style jsx>{`
        .BioContent {
          margin: 0 auto 5% auto;
        }
      `}</style>
    </div>
  );
};

export default BioContent;
