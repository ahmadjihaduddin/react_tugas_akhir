import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer" className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <BsYoutube />
          <FaFacebookF />
          <BsInstagram />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Jl.Karang pilang</span>
          <span>+62 82100212199</span>
          <span>baksoMerc@gmail.com</span>
          <span>no cabang"</span>
        </div>
        <div className="footer-section-columns">
          <span>Copyright 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
