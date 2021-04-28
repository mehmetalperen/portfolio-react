import React, { useState, useEffect } from "react";

const HomeIntro = () => {
  const [hoverName, setHoverName] = useState(false);
  const [hoverAction, setHoverAction] = useState(false);
  // align-items: center;
  // display: flex;
  // flex-wrap: wrap;

  // console.log(window.matchMedia("(pointer: coarse)").matches);

  return (
    <div id="HomeIntroSection" className="HomeIntro">
      <div className="content-wrapper">
        <div className="greeding-container">
          <h1 className="greeding-message">HELLO,</h1>
          <h1 className="greeding-message">I'M</h1>
          {hoverName ? (
            <h1
              className="greeding-message"
              onMouseLeave={() => {
                setHoverName(!hoverName);
              }}
            >
              NADI
            </h1>
          ) : (
            <h1
              className="greeding-message"
              onMouseEnter={() => {
                setHoverName(!hoverName);
              }}
            >
              MEHMET
            </h1>
          )}
        </div>

        <div className="action-container">
          <h1
            id="action-message"
            onMouseEnter={() => {
              setHoverAction(true);
            }}
            onMouseLeave={() => {
              setHoverAction(false);
            }}
            onClick={() => {
              alert("Will be scrooling down");
            }}
          >
            {hoverAction ? "CLICK!" : "LEARN MORE?"}
          </h1>
        </div>
      </div>
      <img id="pp" src="cover-pic.jpg" alt="my-profile-pic" />
      <style jsx>
        {`
          .HomeIntro {
            background-color: #000000;

            min-height: 100vh;
            min-width: 100%;
            align-items: center;
            display: flex;
            position: relative;
          }
          .content-wrapper {
            margin: 0 auto 0 10%;
            min-width: 50%;
            z-index: 10;
          }
          h1 {
            font-family: Arial;
            font-size: 60px;
            font-weight: 500;
          }
          .greeding-message {
            color: #1882d4;
          }

          #action-message {
            color: #ff4900;
          }
          #action-message:hover {
            cursor: pointer;
            color: #ff7b47;
          }
          #pp {
            position: absolute;
            right: 0;
            top: 0;
            max-height: 100vh;
            margin: 0 0 0 auto;
            border-radius: 100% 100% 0 50%;
            opacity: 0;
            animation: picLoad 2s ease-in-out 0.5s forwards;
          }
          @keyframes picLoad {
            0 {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          h4:hover {
            cursor: pointer;
          }
          @media only screen and (max-width: 900px) {
            .content-wrapper {
              margin: 0 auto;
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomeIntro;
