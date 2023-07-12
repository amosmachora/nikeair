import React from "react";
import "./Footer.css";
import images from "../../constants/images";

const Footer = () => {
  return (
    <div className="App__bg footercontainer">
      <div className="imgcontainer">
        <img src={images.AirForceFooter1} alt="Shoe" className="footerimage" />
        <img src={images.AirForceFooter2} alt="Shoe" className="footerimage" />
        <img src={images.AirForceFooter3} alt="Shoe" className="footerimage" />
      </div>
      <div className="watchVideo">
        <img
          src={images.PlayButton}
          alt="Play Button"
          className="videobutton"
        />
      </div>
    </div>
  );
};

export default Footer;
