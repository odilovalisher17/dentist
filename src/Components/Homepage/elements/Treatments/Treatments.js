import React, { useState, useEffect } from "react";
import "./Treatments.css";
import TreatmentMethod from "./TreatmentMethod";
import { Container, Row, Col } from "react-bootstrap";
import toothbrushPhoto from "../../../../images/toothbrush.png";
import { motion } from "framer-motion";

const Treatments = () => {
  const [windowSize, setWindowSize] = useState(false);
  const allMethods = [
    "Same-day appointments",
    "Check ups",
    "Telephone consultations",
    "Preventative checks",
    "Dental implants",
    "Private insurance schemes",
    "Gum disease treatments",
    "Preventative checks",
    "Orthodontics",
    "Preventative checks",
  ];

  const handeResizeWindow = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    handeResizeWindow(window.innerWidth);
    window.addEventListener("resize", handeResizeWindow);

    return () => {
      window.removeEventListener("resize", handeResizeWindow);
    };
  }, []);

  return (
    <div className="treatments">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={8}>
            <div className="treatments-left">
              <motion.div
                className="treatments-header"
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}>
                Our Treatments
              </motion.div>

              <div className="all-methods">
                <Row>
                  {allMethods
                    .filter((el, ind) => !(windowSize <= 1200) || ind <= 2)
                    .map((m) => (
                      <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <TreatmentMethod text={m} />
                      </Col>
                    ))}

                  {windowSize <= 1200 ? (
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                      <div className="treatment-left-btn">
                        <a href="/">More</a>
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}
                </Row>
              </div>

              <motion.div
                className="treatments-btn btn-sm-green"
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}>
                Our treatments
              </motion.div>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <motion.div
              className="treatments-right"
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}>
              <div></div>
              <img src={toothbrushPhoto} alt="" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Treatments;
