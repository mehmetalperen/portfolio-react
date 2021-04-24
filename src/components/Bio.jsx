import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import BioContent from "./BioContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  smallBtn: {
    margin: "10px auto",
    width: "40%",
  },
  bigBtn: {
    margin: "10px auto",
    width: "90%",
  },
});

const Bio = () => {
  const classes = useStyles();
  const [yellowBtnHover, setYellowBtnHover] = useState(false);
  return (
    <div className="Bio">
      <div className="bio-content-wrapper">
        <BioContent />
        <BioContent />

        <div className="btn-wrapper">
          <div className="small-btn-container">
            <Button
              className={classes.smallBtn}
              variant="contained"
              color="primary"
            >
              <Typography variant="h3" component="h3">
                <Box color="black">RESUME</Box>
              </Typography>
            </Button>
            <Button
              className={classes.smallBtn}
              variant="contained"
              color="primary"
            >
              <Typography variant="h3" component="h3">
                <Box color="black">TRANSCRIPT </Box>
              </Typography>
            </Button>
          </div>
          <div className="big-btn-container">
            <Button
              className={classes.bigBtn}
              variant="contained"
              color="secondary"
              fullWidth
            >
              <Typography variant="h3" component="h3">
                <Box color="black">PROJECTS </Box>
              </Typography>
            </Button>
          </div>
        </div>
      </div>
      <div className="img-wrapper">
        <img src="bio-section-pic.svg" alt="" id="section-img" />
      </div>
      <style jsx>{`
        .Bio {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-wrap: wrap-reverse;
          align-items: center;
          justify-content: space-between;
          background-color: #000000;
        }

        .img-wrapper {
          width: 40%;
          margin: 0 auto;
          align-items: center;
          text-align: center;
          border-style: solid;
          border-width: 3px;
          border-color: red;
        }
        #section-img {
          width: 100%;
          margin: 0 auto;
        }
        .bio-content-wrapper {
          width: 50%;
          margin: 0 auto;
          border-style: solid;
          border-width: 3px;
          border-color: blue;
        }
        .small-btn-container {
          display: flex;
          justify-content: space-between;
        }
        .big-btn-container {
          text-align: center;
        }

        @media only screen and (max-width: 900px) {
          .img-wrapper {
            width: 100%;
          }
          #section-img {
            width: 70%;
          }
          .bio-content-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Bio;
