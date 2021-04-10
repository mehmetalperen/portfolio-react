import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const MobileNavbar = () => {
  // align-items: center;
  // display: flex;
  // flex-wrap: wrap;
  return (
    <div className="MobileNavbar">
      <style jsx>
        {`
          .MobileNavbar {
            align-items: center;
            display: flex;
            height: 80px;
            position: sticky;
            background-color: #000000;
            width: 100%;

            border-style: solid;
            border-width: 2px;
            border-color: orange;
          }
        `}
      </style>
    </div>
  );
};

export default MobileNavbar;
