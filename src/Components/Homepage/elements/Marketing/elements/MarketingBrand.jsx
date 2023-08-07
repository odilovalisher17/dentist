import React from "react";
import { motion } from "framer-motion";

const MarketingBrand = ({ logo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-50px" }}
      whileInView={{ opacity: 1, translateY: "0px" }}
      transition={{ duration: 1 }}>
      <img src={logo} alt="" />
    </motion.div>
  );
};

export default MarketingBrand;
