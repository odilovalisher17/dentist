import React from "react";
import { motion } from "framer-motion";

const TreatmentMethod = ({ text }) => {
  return (
    <motion.div
      className="treatment-method"
      initial={{ x: -50 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none">
        <g clip-path="url(#clip0_1_499)">
          <path
            d="M17.3251 4.36331C15.5468 2.67664 13.2551 1.75998 10.7801 1.83331C8.33261 1.89748 6.05011 2.90581 4.36344 4.67498C2.67677 6.45331 1.77844 8.77248 1.83344 11.22C1.95261 16.1975 6.04094 20.1666 11.0001 20.1666H11.2201C13.6676 20.1025 15.9501 19.0941 17.6368 17.325C19.3234 15.5466 20.2218 13.2275 20.1668 10.78C20.1026 8.33248 19.0943 6.04998 17.3251 4.36331ZM15.4734 9.34998L10.4226 14.4008C10.2393 14.575 10.0101 14.6666 9.77177 14.6666C9.53344 14.6666 9.30427 14.575 9.12094 14.4008L6.82927 12.1C6.47177 11.7425 6.47177 11.165 6.82927 10.8075C7.18677 10.45 7.76427 10.45 8.12177 10.8075L9.77177 12.4575L14.1809 8.05748C14.5384 7.69998 15.1159 7.69998 15.4734 8.05748C15.8309 8.41498 15.8309 8.99248 15.4734 9.34998Z"
            fill="#0D3300"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_499">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div>{text}</div>
    </motion.div>
  );
};

export default TreatmentMethod;
