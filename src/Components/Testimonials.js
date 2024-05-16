import React from "react";
import ProfilePict from "../Assets/person2.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div id="testimonial" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">Apa pendapat kalian?</h1>
        <p className="primary-text">Ceritakan pengelaman kalian semua sebagai konsumen bakso mercon coy!!!</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePict} alt="" style={{ height: "220px", width: "210px", borderRadius: "20%" }} />
        <p>gabisa berkata-kata soalnya pedes bngtttt!</p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>gunaone treesakti</h2>
      </div>
    </div>
  );
};

export default Testimonials;
