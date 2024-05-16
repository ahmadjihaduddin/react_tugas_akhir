import React from "react";
import AboutBackgroud from "../Assets/about-background.png";
import AboutImage from "../Assets/about-background-image.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackgroud} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutImage} alt="" style={{ height: "600px", width: "800px", borderRadius: "50%" }} />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Bakso yang bikin semangatmu Membaraa.</h1>
        <p className="primary-text">Bosan dengan rasa bakso biasa? Tantang lidahmu dengan Bakso Mercon!</p>
        <p className="primary-text">Sensasi pedas yang nendang dijamin bikin kamu ketagihan.</p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn more</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />
            Watch video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
