import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const DesktopNavbar = () => {
  // align-items: center;
  // display: flex;
  // flex-wrap: wrap;
  return (
    <div className="DesktopNavbar">
      <div className="logo-container">
        <img id="logo" src="logo.svg" alt="logo" />
      </div>

      <div className="nav-container">
        <ul>
          <li>
            <h2 id="home-action">HOME</h2>
          </li>
          <li>
            <h2 id="bio-action">BIO</h2>
          </li>
          <li>
            <h2 id="project-action">PROJECTS</h2>
          </li>
          <li>
            <h2 id="contact-action">CONTACT</h2>
          </li>
        </ul>
      </div>

      <style jsx>
        {`
          .DesktopNavbar {
            align-items: center;
            display: flex;
            height: 80px;
            position: sticky;
            justify-content: space-between;
            font-family: Arial;
            background-color: #000000;
            width: 100%;
            align-items: center;
            display: flex;

          }

          .logo-container {
            margin: 0 0 0 5%;/
          }
          .nav-container{
            width:70%;
            align-items: center;
            display: flex;
            
          }
          ul {
              display:flex;
              justify-content: space-evenly;
              width: 100%;
              margin: 0 5% 0 0;
          }
          li{
            list-style-type: none;
            margin: 0 auto;
          }
          h2 {
            color: #FF4900;
            font-weight: 500;
            font-size: 30px;
          }
          h2:hover {
              color:#FFBF00;
              cursor: pointer;
          }

        `}
      </style>
    </div>
  );
};

export default DesktopNavbar;
