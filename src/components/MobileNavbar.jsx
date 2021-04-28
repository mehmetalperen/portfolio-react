import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
const useStyles = makeStyles({
  btnStyle: {
    paddingTop: "16px",
    paddingBottom: "16px",
    margin: "5% auto",
  },
});
const MobileNavbar = () => {
  const classes = useStyles();
  const [isHamburgerClick, setIsHamburgerClick] = useState(false);

  const navObjList = [
    { path: "HomeIntroSection", color: "primary", name: "HOME" },
    { path: "BioSection", color: "secondary", name: "BIO" },
    { path: "ProjectSection", color: "primary", name: "PROJECTS" },
    { path: "ContactMeSection", color: "secondary", name: "CONTACT" },
  ];
  return (
    <div className="MobileNavbar">
      <div className="logo-container">
        <img id="logo" src="logo.svg" alt="logo" />
      </div>

      <div className="hamburger-icon-container">
        <IconButton
          color="secondary"
          onClick={() => {
            setIsHamburgerClick(true);
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {isHamburgerClick ? (
        <div className="dropdown-nav">
          <div className="btn-container">
            <ul className="mobil-ul">
              {navObjList.map((el, index) => {
                return (
                  <Link
                    to={el.path}
                    smooth={true}
                    duration={1000}
                    key={index}
                    id={index}
                  >
                    <li className="mobil-li">
                      <Button
                        onClick={() => {
                          setIsHamburgerClick(!isHamburgerClick);
                        }}
                        className={classes.btnStyle}
                        variant="contained"
                        color={el.color}
                        fullWidth
                      >
                        {el.name}
                      </Button>
                    </li>
                  </Link>
                );
              })}
            </ul>

            <div className="close-btn-container">
              <IconButton
                color="primary"
                onClick={() => {
                  setIsHamburgerClick(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </div>
      ) : null}

      <style jsx>
        {`
          .MobileNavbar {
            align-items: center;
            display: flex;
            height: 80px;
            position: sticky;
            background-color: #000000;
            width: 100%;
            justify-content: space-between;
            position: relative;
          }
          .logo-container {
            margin: 0 10%;
          }
          .hamburger-icon-container {
            margin: 0 10%;
          }

          .dropdown-nav {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            align-items: center;
            text-align: center;
            z-index: 10000;
            width: 100%;
            height: 100vh;
            background-color: #000000;
          }
          .btn-container {
            margin: 0 auto;
            max-width: 70%;
            height: 90vh;
            align-items: center;
            padding-top: 20%;
          }
          .mobil-ul {
            align-items: center;
            margin: 0 auto;
            padding: 0;
            text-align: right;
            justify-content: center;
          }

          .mobil-li {
            list-style-type: none;
            margin: 0 auto;
            padding: 0;
            display: flex;
            align-items: center;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default MobileNavbar;
