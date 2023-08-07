import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const HeaderComment = ({ svg, txt, reverse, top1, left1, left2 }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowScale, setWindowScale] = useState(undefined);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setWindowScale("sm");
    } else if (windowWidth > 768 && windowWidth <= 992) {
      setWindowScale("md");
    } else if (windowWidth > 992) {
      setWindowScale("lg");
    }
  }, [windowWidth]);

  return (
    <div
      className="header-photo-comments"
      style={{
        top:
          windowScale === "lg"
            ? top1.lg
            : windowScale === "md"
            ? top1.md
            : top1.sm,
        left:
          windowScale === "lg"
            ? left1.lg
            : windowScale === "md"
            ? left1.md
            : left1.sm,
      }}>
      <Row
        className="header-photo-comments-main"
        onAnimationEnd={(e) => {
          e.target.style = "opacity: 1";
        }}>
        <Col sm={3} md={3} lg={3} xs={3}>
          <div className="header-photo-comments-main-img">{svg}</div>
        </Col>

        <Col sm={9} md={9} lg={9} xs={9} style={{ textAlign: "start" }}>
          <div>{txt}</div>
        </Col>
      </Row>

      <div
        className="comments-pointer"
        style={{
          top: reverse ? "-5px" : windowScale === "lg" ? "45px" : "25px",
          left:
            windowScale === "lg"
              ? left2.lg
              : windowScale === "md"
              ? left2.md
              : left2.sm,
        }}
        onAnimationEnd={(e) => {
          e.target.style.opacity = 1;
        }}></div>

      <div
        className="header-photo-comment-circle"
        style={{
          top: reverse ? "-55px" : windowScale === "lg" ? "95px" : "75px",
          left:
            windowScale === "lg"
              ? left2.lg
              : windowScale === "md"
              ? left2.md
              : left2.sm,
        }}
        onAnimationEnd={(e) => {
          e.target.style.opacity = 1;
        }}>
        <div></div>
      </div>
    </div>
  );
};

export default HeaderComment;
