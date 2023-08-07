import React from "react";
import logo from "../../../images/dentist.png";
import frame from "../../../images/Frame.png";

const FooterLogo = () => {
  return (
    <div className="footer-logo">
      <div className="footer-logo-div">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="footer-logo-details">
        <div className="footer-logo-num">+1 800 555 6777</div>

        <div className="footer-logo-email">info@dentist.com</div>
      </div>

      <div>
        <img src={frame} alt="" />
      </div>

      <div className="footer-logo-address">
        12345 North Main Street, New York, NY 123456
      </div>
    </div>
  );
};

export default FooterLogo;
