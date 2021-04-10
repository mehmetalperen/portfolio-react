import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

const HomeIntro = () => {
  const [hoverName, setHoverName] = useState(false);
  const [hoverAction, setHoverAction] = useState(false);
  // align-items: center;
  // display: flex;
  // flex-wrap: wrap;
  return (
    <div className="HomeIntro">
      <div className="content-wrapper">
        <Typography variant="h1" component="h1" color="textSecondary">
          HELLO,
        </Typography>
        <Typography variant="h1" component="h1" color="textSecondary">
          I'M
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          color="textSecondary"
          onMouseEnter={() => {
            setHoverName(!hoverName);
          }}
          onMouseLeave={() => {
            setHoverName(!hoverName);
          }}
        >
          {hoverName ? "NADI" : "MEHMET"}
        </Typography>
        <Typography variant="h1" component="h1" color="textDisabled">
          <h4
            style={{ color: "#FF4900", fontWeight: "inherit" }}
            onMouseEnter={() => {
              setHoverAction(!hoverAction);
            }}
            onMouseLeave={() => {
              setHoverAction(!hoverAction);
            }}
            onClick={() => {
              alert("will scroll");
            }}
          >
            {hoverAction ? "=> CLICK <=" : "LEARN MORE?"}
          </h4>
        </Typography>
      </div>
      <img src="cover-pic.jpg" alt="my-profile-pic" />
      <style jsx>
        {`
          .HomeIntro {
            background-color: #000000;
            border-style: solid;
            border-width: 2px;
            border-color: black;
            min-height: 100vh;
            min-width: 100%;
            align-items: center;
            display: flex;
            position: relative;
          }
          .content-wrapper {
            margin: 0 auto 0 10%;
            width: fit-content;
            z-index: 10;
          }
          img {
            position: absolute;
            right: 0;
            top: 0;
            max-height: 100vh;
            margin: 0 0 0 auto;
            border-radius: 100% 100% 0 50%;
          }
          h4:hover {
            cursor: pointer;
          }
          @media only screen and (max-width: 900px) {
            .content-wrapper {
              margin: 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomeIntro;
