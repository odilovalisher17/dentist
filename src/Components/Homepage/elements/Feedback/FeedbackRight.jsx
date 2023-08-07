import React from "react";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";

const FeedbackRight = ({ carouselItems }) => {
  return (
    <div className="feedback-right">
      <Carousel controls={false}>
        {carouselItems.map((c) => (
          <Carousel.Item className="feedback-carousel-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 230 162"
              fill="none">
              <path
                d="M167.784 68.2371C209.261 68.2371 230 84.2138 230 116.167C230 136.459 221.378 150.22 204.135 157.45C198.543 160.016 191.902 161.299 184.212 161.299C167.901 161.299 154.502 155.468 144.016 143.806C133.764 131.911 128.637 117.217 128.637 99.7241C128.637 82.2313 130.035 67.3042 132.831 54.9426C135.861 42.5811 140.055 30.5694 145.414 18.9076C155.667 -3.94958 170.231 -24.8243 189.105 -43.7164L212.524 -24.8243C193.183 -7.56475 179.668 14.826 171.979 42.3479C169.415 50.9776 168.017 59.6074 167.784 68.2371ZM40.0127 68.2371C81.4899 68.2371 102.228 84.2138 102.228 116.167C102.228 136.459 93.7233 150.22 76.713 157.45C71.1206 160.016 64.4796 161.299 56.79 161.299C40.4787 161.299 27.0802 155.468 16.5944 143.806C6.10857 131.911 0.865662 117.217 0.865662 99.7241C0.865662 82.2313 2.26377 67.3042 5.05998 54.9426C8.08922 42.5811 12.2835 30.5694 17.643 18.9076C28.3618 -4.18282 43.0419 -25.0575 61.6833 -43.7164L84.7521 -24.8243C72.1692 -13.3957 61.7999 0.715149 53.6442 17.5082C45.4886 34.068 40.9447 50.9776 40.0127 68.2371Z"
                fill="white"
              />
            </svg>

            <Carousel.Caption>
              <motion.div
                className="carousel-caption-text"
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}>
                {c.text}
              </motion.div>

              <div className="feedback-carousel-label">
                <motion.div
                  className="feedback-carousel-label-name"
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}>
                  {c.name}
                </motion.div>
                <motion.div
                  className="feedback-carousel-label-position"
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}>
                  {c.position}
                </motion.div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeedbackRight;
