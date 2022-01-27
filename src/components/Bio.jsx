import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import BioContent from "./BioContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  smallBtn: {
    margin: "10px auto",
    width: "40%",
    minWidth: "160px",
    borderRadius: "20px",
  },
  bigBtn: {
    margin: "10px auto",
    width: "90%",
    borderRadius: "20px",
  },
});

const Bio = () => {
  const classes = useStyles();
  const [color, setColor] = useState("blue");

  const myInfo = [
    {
      title: "BIO:",
      content:
        "I am a second-year college student majoring in Computer Science with a GPA of 3.9. I have always been passionate about technology, science, and engineering. Even in my earliest memories, I am trying to solve an engineering problem. The love of making stuff and creating solutions has eventually led me to fall in love with software development.",
    },

    {
      title: "SKILLS:",
      content:
        "I love working on a project and learning new skills in software development. My favorite library is React. I feel confident in building applications using Javascript, JSX, CSS, HTML, Material-UI, and Boostrap. I have built several websites and web applications.",
    },
  ];
  const theme = React.useMemo(() => {
    if (color === "blue") {
      return createMuiTheme({
        palette: {
          secondary: {
            main: "#FFBF00",
            contrastText: "#fff",
          },
        },
      });
    }
    return createMuiTheme();
  }, [color]);
  return (
    <div id="BioSection" className="Bio">
      <div className="bio-content-wrapper">
        {myInfo.map((el, index) => {
          return (
            <BioContent
              key={index}
              title={el.title}
              content={el.content}
              test={el.test}
            />
          );
        })}

        <div className="btn-wrapper">
          <div className="small-btn-container">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                className={classes.smallBtn}
                color="secondary"
                onClick={() => {
                  window.open("CS Resume.pdf");
                }}
              >
                <Typography variant="h5" component="h5">
                  <Box color="black">RESUME</Box>
                </Typography>
              </Button>
            </ThemeProvider>
            <ThemeProvider>
              <Button
                className={classes.smallBtn}
                variant="contained"
                color="secondary"
              >
                <Typography variant="h5" component="h5">
                  <Link to="ProjectSection" smooth={true} duration={1000}>
                    <Box color="black">PROJECTS </Box>
                  </Link>
                </Typography>
              </Button>
            </ThemeProvider>
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
        }
        #section-img {
          width: 100%;
          margin: 0 auto;
        }
        .bio-content-wrapper {
          width: 50%;
          margin: 0 auto;
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
