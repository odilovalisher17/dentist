import React from "react";

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <div className="footer-menu-option">
        <a href="/">Home</a>
      </div>

      <div className="footer-menu-option">
        <a href="/">About</a>
      </div>

      <div className="footer-menu-option">
        <a href="/">Treatment</a>
      </div>

      <div className="footer-menu-option">
        <a href="/">News</a>
      </div>

      <div className="footer-menu-option footer-menu-option-contact">
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default FooterMenu;
