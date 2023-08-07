import React from "react";
import "./UserSection.css";
import photo1 from "../../../../images/user-section.png";
import { Container } from "react-bootstrap";
import UserText from "./UserText";

const UserSection = () => {
  return (
    <div
      className="user-section"
      style={{
        background: `url(${photo1}) center center /cover`,
      }}>
      <Container>
        <UserText />
      </Container>
    </div>
  );
};

export default UserSection;
