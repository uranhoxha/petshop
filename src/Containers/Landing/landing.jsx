import React from "react";
import "./landing.css";
import photo from "./photo.png";
import { FaPaw } from "react-icons/fa";

function landing() {
  return (
    <div className="section-padding landing-section" id="home">
      <div className="paw-container">
        <FaPaw className="fa-paw" />
        <FaPaw className="fa-paw" />
        <FaPaw className="fa-paw" />
        <FaPaw className="fa-paw" />
        <FaPaw className="fa-paw" />
        <FaPaw className="fa-paw" />
        <FaPaw className="fa-paw" />
        <FaPaw className="fa-paw" />
      </div>
      <div className="landing-content">
        <div className="landing-text">
          <h3>
            Find your perfect companion and create a forever bond - Welcome to
            Pawfect Pals: Where Hearts Find Homes!
          </h3>
          <a href="#about"><button>find more below</button></a>
        </div>
        <img src={photo} />
      </div>
    </div>
  );
}

export default landing;
