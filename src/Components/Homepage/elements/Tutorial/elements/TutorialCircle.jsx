import React from "react";
import { motion } from "framer-motion";

const TutorialCircle = ({ img, text, bg }) => {
  return (
    <motion.div
      className="tutorial-circle"
      initial={{ x: 100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="tutorial-sm-circle" style={{ backgroundColor: bg }}>
        <div>{text}</div>
      </div>
      {img ? <img src={img} alt="" /> : ""}
    </motion.div>
  );
};

export default TutorialCircle;
