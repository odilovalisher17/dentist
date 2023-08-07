import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import FooterLogo from "./elements/FooterLogo";
import FooterSocialMedia from "./elements/FooterSocialMedia";
import FooterMenu from "./elements/FooterMenu";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="footer-options">
          <FooterLogo />
          <FooterSocialMedia />
          <FooterMenu />

          <div className="footer-contact-circle">Contact</div>
        </div>

        <div className="footer-copyright">
          <div>© Copyright 2022 All Rights Reserved</div>
          <div>
            Developmenet by <span>Balcom</span>
          </div>
        </div>

        <div className="footer-border-bottom"></div>
      </div>
    </Container>
  );
};

export default Footer;
