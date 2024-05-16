import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/bannerImage.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Beri tantangan selera pedas mu dengan yang satu ini!!</h1>
          <p className="primary-text">8 dari 10 dokter menyerankan anda makan bakso mercon 1 kali dalam seminggu</p>
          <button className="secondary-button">
            Pesan yok <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="" style={{ height: "600px", width: "800px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
