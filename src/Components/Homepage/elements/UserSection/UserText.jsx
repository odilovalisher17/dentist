import React from "react";
import { motion } from "framer-motion";

const UserText = () => {
  return (
    <div className="user-text">
      <motion.div
        className="user-text-header"
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}>
        <span>Dentists are always concerned</span> about helping you{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none">
          <g clip-path="url(#clip0_1_656)">
            <path
              d="M25.0002 14.5833C29.4204 14.5833 33.6597 16.3392 36.7853 19.4649C39.9109 22.5905 41.6668 26.8297 41.6668 31.25C41.6668 35.6702 39.9109 39.9095 36.7853 43.0351C33.6597 46.1607 29.4204 47.9166 25.0002 47.9166C20.5799 47.9166 16.3407 46.1607 13.2151 43.0351C10.0894 39.9095 8.3335 35.6702 8.3335 31.25C8.3335 26.8297 10.0894 22.5905 13.2151 19.4649C16.3407 16.3392 20.5799 14.5833 25.0002 14.5833ZM25.0002 21.875L22.2439 27.4583L16.0835 28.3541L20.5418 32.6979L19.4897 38.8354L25.0002 35.9375L30.5106 38.8333L29.4585 32.6979L33.9168 28.3521L27.7564 27.4562L25.0002 21.875ZM27.0835 4.16455L37.5002 4.16663V10.4166L34.6606 12.7875C32.3042 11.5512 29.7315 10.7809 27.0835 10.5187V4.16663V4.16455ZM22.9168 4.16455V10.5187C20.2696 10.7805 17.6977 11.5501 15.3418 12.7854L12.5002 10.4166V4.16663L22.9168 4.16455Z"
              fill="#3DBA11"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_656">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>{" "}
        take care of your teeth
      </motion.div>

      <div className="user-text-nums">
        <motion.div
          className="user-text-nums-1 text-white bg-green"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}>
          Users
        </motion.div>
        <motion.div
          className="user-text-nums-2 text-white bg-deep-green"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}>
          1,000,000
        </motion.div>
      </div>
    </div>
  );
};

export default UserText;
