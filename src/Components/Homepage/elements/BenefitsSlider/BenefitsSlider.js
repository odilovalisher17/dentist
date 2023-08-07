import React from "react";
import "./BenefitsSlider.css";
import { Container } from "react-bootstrap";
import Slider from "./Slider";
import { motion } from "framer-motion";

const BenefitsSlider = () => {
  return (
    <div className="benefits">
      <Container>
        <div className="benefits-header">
          <motion.div
            className="benefits-header-text"
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}>
            The Benefits
          </motion.div>
          <div className="benefits-header-view">View all</div>
        </div>
      </Container>

      <Slider
        slides={[
          { id: 0, text: "Dental Community Articles" },
          { id: 1, text: "Dental Community Articles" },
          { id: 2, text: "Dental Community Articles" },
          { id: 3, text: "Dental Community Articles" },
        ]}
      />
    </div>
  );
};

export default BenefitsSlider;
