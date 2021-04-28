import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import HomeIntro from "../components/HomeIntro";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
const PortfolioPage = () => {
  return (
    <div className="PortfolioPage">
      <Navbar />

      <HomeIntro />
      <Bio />
      <ProjectSection />
      <ContactSection />
      <style jsx>{`
        .PortfolioPage {
          position: absolute;
          min-width: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
