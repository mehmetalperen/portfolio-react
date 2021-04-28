import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Navbar = () => {
  return (
    <div className="Navbar">
      {useMediaQuery("(max-width: 900px)") ? (
        <MobileNavbar />
      ) : (
        <DesktopNavbar />
      )}

      <style jsx>{`
        .Navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
