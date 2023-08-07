import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Header from "./elements/Header/Header";
import UserSection from "./elements/UserSection/UserSection";
import BenefitsSlider from "./elements/BenefitsSlider/BenefitsSlider";
import Treatments from "./elements/Treatments/Treatments";
import Feedback from "./elements/Feedback/Feedback";
import Marketing from "./elements/Marketing/Marketing";
import Tutorial from "./elements/Tutorial/Tutorial";
import ModalVideo from "./elements/ModalVideo/ModalVideo";

const Homepage = () => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (isModal) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "visible";
    }
  }, [isModal]);

  return (
    <div className="homepage">
      <Header setIsModal={setIsModal} />
      <UserSection />
      <BenefitsSlider />
      <Treatments />
      <Feedback />
      <Marketing />
      <Tutorial />

      {/* ////\\\\ */}
      {isModal ? <ModalVideo setIsModal={setIsModal} /> : ""}
    </div>
  );
};

export default Homepage;
