import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import HomeIntro from "../components/HomeIntro";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import ProjectSection from "../components/ProjectSection";
const PortfolioPage = () => {
  return (
    <div className="FavoritePage">
      <HomeIntro />
      <Navbar />
      <Bio />
      <ProjectSection />

      <style jsx>
        {`
          .FavoritePage {
            min-height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

export default PortfolioPage;
