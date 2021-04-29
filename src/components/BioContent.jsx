import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const BioContent = (props) => {
  return (
    <div className="BioContent">
      <Typography variant="h2" component="h2">
        <Box color="text.secondary" m="1rem" fontSize={40}>
          {props.title}
        </Box>
      </Typography>
      <Typography variant="body1" component="p">
        <Box color="text.primary" m="1.5rem">
          {props.content}
        </Box>
      </Typography>
      <Typography variant="body1" component="p">
        <Box color="text.primary" m="1.5rem"></Box>
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
