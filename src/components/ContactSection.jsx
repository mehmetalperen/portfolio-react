import React, { useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const ContactSection = () => {
  return (
    <div id="ContactMeSection" className="ContactSection">
      <div className="title-container">
        <Typography variant="h2" component="h2" color="black">
          <Box>Let's Get In Touch! </Box>
        </Typography>
      </div>

      <div className="socials-container">
        <div className="social-box">
          <a
            href="mailto:mhmtalperennadi@gmail.com"
            className="social-link"
            target="_blank"
          >
            <img src="email 1.svg" alt="email icon" className="social-icon" />
          </a>
        </div>
        <div className="social-box">
          <a
            href="https://github.com/mehmetalperen"
            className="social-link"
            target="_blank"
            className="social-link"
          >
            <img src="github 1.svg" alt="github icon" className="social-icon" />
          </a>
        </div>
        <div className="social-box">
          <a
            href="https://www.linkedin.com/in/mehmet-nadi-03372a1b1/"
            target="_blank"
            className="social-link"
          >
            <img
              src="linkedin 1.svg"
              alt="linkin icon"
              className="social-icon"
            />
          </a>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-content-container">
          <Typography variant="body1" component="p" color="black">
            <Box>©{new Date().getFullYear()} Mehmet Nadi </Box>
            <Box>
              Made with <FavoriteIcon style={{ color: "#FF4900" }} /> in LA{" "}
            </Box>
          </Typography>
        </div>
      </div>

      <style jsx>{`
        .ContactSection {
          background-color: #1882d4;
          min-height: 100vh;
          width: 100%;
          align-items: center;
          display: flex;
          flex-wrap: wrap;
        }
        .title-container {
          width: 100%;
        }
        .socials-container {
          min-width: 100%;
          margin: 0 auto;
          align-items: center;

          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
        .social-box {
          min-width: 300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          text-align: center;
        }
        .social-link {
          margin: 0 auto;
        }

        .social-icon {
          margin: 0 auto;
          opacity: 1;
          transition: width 0.2s ease, height 0.2s ease;
        }
        .social-icon:hover {
          opacity: 0.6;
          width: 80px;
          height: 80px;
        }
        .footer-container {
          width: 100%;
          min-height: 100px;
          align-items: center;

          display: flex;
          flex-wrap: nowrap;
          margin: 0 auto;
        }
        .footer-content-container {
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
