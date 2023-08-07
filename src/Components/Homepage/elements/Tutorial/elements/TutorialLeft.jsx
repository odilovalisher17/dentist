import React from "react";
import { motion } from "framer-motion";

const TutorialLeft = () => {
  return (
    <motion.div
      className="tutorial-left"
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="tutorial-left-header">Ready To Smile?</div>

      <div className="tutorial-left-text">
        I can smile with complete confidence!
      </div>

      <div className="tutorial-left-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 256 256">
          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
              d="M 89 46 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 88 c 0.553 0 1 0.448 1 1 S 89.553 46 89 46 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              d="M 75.057 59.943 c -0.256 0 -0.512 -0.098 -0.707 -0.293 c -0.391 -0.391 -0.391 -1.023 0 -1.414 L 87.586 45 L 74.35 31.764 c -0.391 -0.391 -0.391 -1.023 0 -1.414 s 1.023 -0.391 1.414 0 l 13.943 13.943 c 0.391 0.391 0.391 1.023 0 1.414 L 75.764 59.65 C 75.568 59.846 75.313 59.943 75.057 59.943 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
    </motion.div>
  );
};

export default TutorialLeft;
