import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Kirim masukan anda pada kami?</h1>
      <h1 className="primary-heading">masukan transfer juga boleh.</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourEmail@gmail.com" />
        <button className="secondary-button">submit</button>
      </div>
    </div>
  );
};

export default Contact;
