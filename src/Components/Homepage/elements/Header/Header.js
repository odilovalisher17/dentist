import React from "react";
import "./Header.css";
import HeaderText from "./elements/HeaderText";
import HeaderImage from "./elements/HeaderImage";
import { Row, Col, Container } from "react-bootstrap";

const Header = ({ setIsModal }) => {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <HeaderText setIsModal={setIsModal} />
          </Col>

          <Col sm={12} md={6} lg={6} className="header-image">
            <HeaderImage />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
