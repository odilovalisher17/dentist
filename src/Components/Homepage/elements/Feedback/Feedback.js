import React, { useEffect, useState } from "react";
import "./Feedback.css";
import { Container, Row, Col } from "react-bootstrap";
import feedbackPhoto1 from "../../../../images/feedback1.jpg";
import feedbackPhoto2 from "../../../../images/feedback3.jpg";
import FeedbackRight from "./FeedbackRight";
import { motion } from "framer-motion";

const Feedback = () => {
  const [windowSize, setWindowSize] = useState(null);

  const handleWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    handleWindowSize();

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return (
    <div className="feedback">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <motion.div
              className="feedback-img"
              initial={{ x: -70 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}>
              {windowSize >= 992 ? (
                <img src={feedbackPhoto1} alt="" />
              ) : (
                <img className="feedback-img-2" src={feedbackPhoto2} alt="" />
              )}
            </motion.div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <FeedbackRight
              carouselItems={[
                {
                  name: "Laura Hughes",
                  position: "Patient",
                  text: "I can smile with complete confidence! I can’t now imagine ever being concerned about appearing in photos. It’s just been a new lease of life. Thank you. I can smile with complete confidence! I can’t now imagine ever being concerned about appearing in photos. It’s just been a new lease of life. Thank you.",
                },
                {
                  name: "Laura Hughes",
                  position: "Patient",
                  text: "I can smile with complete confidence! I can’t now imagine ever being concerned about appearing in photos. It’s just been a new lease of life. Thank you. I can smile with complete confidence! I can’t now imagine ever being concerned about appearing in photos. It’s just been a new lease of life. Thank you.",
                },
                {
                  name: "Laura Hughes",
                  position: "Patient",
                  text: "I can smile with complete confidence! I can’t now imagine ever being concerned about appearing in photos. It’s just been a new lease of life. Thank you. I can smile with complete confidence! I can’t now imagine ever being concerned about appearing in photos. It’s just been a new lease of life. Thank you.",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;
