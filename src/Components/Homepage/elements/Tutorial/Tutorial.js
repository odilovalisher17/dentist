import React from "react";
import "./Tutorial.css";
import TutorialLeft from "./elements/TutorialLeft";
import { Container } from "react-bootstrap";
import photoDNK from "../../../../images/tutorials-dnk.png";
import photoPills from "../../../../images/tutorials-pills.png";
import photoPerson from "../../../../images/tutorials-person.jpg";
import TutorialCircle from "./elements/TutorialCircle";

const Tutorial = () => {
  return (
    <Container>
      <div className="tutorial">
        <TutorialLeft />

        <div className="tutorial-circles">
          {[
            {
              img: undefined,
              text: "I can smile with complete confidence!",
              bg: "#F3F7F2",
            },
            {
              img: photoDNK,
              text: undefined,
              bg: "#0D3300",
            },
            {
              img: photoPills,
              text: undefined,
              bg: "#3DBA11",
            },
            {
              img: photoPerson,
              text: undefined,
              bg: undefined,
            },
          ].map((el) => (
            <TutorialCircle img={el.img} text={el.text} bg={el.bg} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Tutorial;
