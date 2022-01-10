import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import HomeIntro from "../components/HomeIntro";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import LoadingPage from "../components/LoadingPage";
const PortfolioPage = () => {
  const [isLoadingCoverPic, setIsLoadingCoverPic] = useState(true);
  const [coverPic, setCoverPic] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const backgroundToLoad = new Image();
      backgroundToLoad.src = "cover-pic.jpg";

      backgroundToLoad.onload = () => {
        setCoverPic("cover-pic.jpg");
        setIsLoadingCoverPic(false);
      };
    }, 1000);
  });
  return (
    <div className="PortfolioPage">
      <Navbar />
      {isLoadingCoverPic ? (
        <LoadingPage />
      ) : (
        <div>
          <HomeIntro picSrc={coverPic} />
          <Bio />
          <ProjectSection />
          <ContactSection />
        </div>
      )}
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
