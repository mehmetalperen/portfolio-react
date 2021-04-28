import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const DesktopNavbar = () => {
  console.log(window.pageYOffset);

  const handleScrollToAboutUs = () => {
    window.scrollBy({
      top: window.innerHeight * 1,
      behavior: "smooth",
    });
    console.log(window.pageYOffset);
  };

  return (
    <div className="DesktopNavbar">
      <div className="logo-container">
        <img id="logo" src="logo.svg" alt="logo" />
      </div>

      <div className="nav-container">
        <ul className="desktop-ul">
          <li className="desktop-li">
            <Link
              className="nav-link"
              to="HomeIntroSection"
              smooth={true}
              duration={1000}
            >
              <h2 className="nav-heading" id="home-action">
                HOME
              </h2>
            </Link>
          </li>
          <li className="desktop-li">
            <Link
              to="BioSection"
              smooth={true}
              duration={1000}
              className="nav-link"
            >
              <h2 className="nav-heading" id="bio-action">
                BIO
              </h2>
            </Link>
          </li>
          <li className="desktop-li">
            <Link
              to="ProjectSection"
              smooth={true}
              duration={1000}
              className="nav-link"
            >
              <h2 className="nav-heading" id="project-action">
                PROJECTS
              </h2>
            </Link>
          </li>
          <li className="desktop-li">
            <Link
              to="ContactMeSection"
              smooth={true}
              duration={1000}
              className="nav-link"
            >
              <h2 className="nav-heading" id="contact-action">
                CONTACT
              </h2>
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>
        {`
          .DesktopNavbar {
            align-items: center;
            display: flex;
            height: 80px;
            justify-content: space-between;
            font-family: Arial;
            background-color: #000000;
            width: 100%;
            align-items: center;
            display: flex;
          }
          .nav-link {
            text-decoration: none;
          }
          .logo-container {
            margin: 0 0 0 5%;
          }
          .nav-container {
            width: 70%;
            align-items: center;
            display: flex;
          }
          .desktop-ul {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            margin: 0 5% 0 0;
          }
          .desktop-li {
            list-style-type: none;
            margin: 0 auto;
          }
          .nav-heading {
            color: #ff4900;
            font-weight: 500;
            font-size: 30px;
          }
          .nav-heading:hover {
            color: #ffbf00;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default DesktopNavbar;
