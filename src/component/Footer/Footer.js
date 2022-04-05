import React from "react";
import foodImage from "../Header/1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerContainer">
          <div className="footer-info">
            <span className="infoSpan">OBSD</span>
            <img src={foodImage} height="30px" />
          </div>
          <div className="copyRight">&copy;	2022 OBSD - All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
