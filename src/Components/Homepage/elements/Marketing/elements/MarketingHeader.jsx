import React, { useEffect, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";

const MarketingHeader = () => {
  const [partners, setPartners] = useState(800);
  const [teams, setTeams] = useState(300);
  const ref = useRef(null);
  const view = useInView(ref);

  const handlePartners = () => {
    setPartners((p) => (p < 1000 ? p + 1 : p));
  };
  const handleTeams = () => {
    setTeams((t) => (t < 500 ? t + 1 : t));
  };

  useEffect(() => {
    if (view) {
      setPartners(800);
      setTeams(300);
    }
  }, [view]);

  useEffect(() => {
    setTimeout(handlePartners, 20);

    setTimeout(handleTeams, 20);
  }, [partners, teams]);

  return (
    <motion.div
      ref={ref}
      className="marketing-header"
      initial={{
        opacity: 0,
        transform: "translateX(-100px)",
      }}
      whileInView={{
        opacity: 1,
        transform: "translateX(0px)",
      }}
      transition={{
        duration: 1,
      }}>
      <div className="marketing-header-text">
        Integrate with 50+ sales and marketing tools
      </div>

      <div className="marketing-header-statistics">
        <Row>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <div
              className="marketing-header-statistics-num"
              style={{ marginRight: "30px" }}>
              {partners}
            </div>
            <span className="marketing-header-statistics-about">Partners</span>
          </Col>

          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <div className="marketing-header-statistics-num">{teams}</div>
            <span className="marketing-header-statistics-about">Team</span>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default MarketingHeader;
