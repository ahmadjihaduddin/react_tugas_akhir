import React from "react";
import PickMenu from "../Assets/pick-meals-image.png";
import ChooseMenu from "../Assets/choose-image.png";
import DeliveryMenu from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMenu,
      title: "Dine in",
      text: "makan ditempat dengan kerabat ditambah bakso mercon babat.",
    },
    {
      image: ChooseMenu,
      title: "Take Away",
      text: "bawa pulang dan makan bersama keluarga dirumah juga dapat bahagia.",
    },
    {
      image: DeliveryMenu,
      title: "Delivery Order",
      text: "pesan dari rumah hemat biaya cukup duduk sambil nunggu sajaa.",
    },
  ];
  return (
    <div id="work" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Menu</p>
        <h1 className="primary-heading">Pesan Menu kamu!</h1>
        <p className="primary-text">anda dapat memilih jenis pesanan yaitu dine in, take away, atau delivery order</p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div key={data.title} className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
