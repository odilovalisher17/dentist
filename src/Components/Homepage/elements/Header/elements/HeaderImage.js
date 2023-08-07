import React from "react";
import "./HeaderImage.css";
import photo1 from "../../../../../images/header-photo.png";
import HeaderComment from "./HeaderComment";

const HeaderImage = () => {
  return (
    <div className="header-photo">
      <div className="header-photo-img">
        <img src={photo1} alt="" />

        {/*  */}
        <div className="header-photo-animate-div-1">
          <div>
            <div></div>
          </div>
        </div>
        <div className="header-photo-animate-div-2">
          <div>
            <div></div>
          </div>
        </div>
        <div className="header-photo-animate-div-3">
          <div>
            <div></div>
          </div>
        </div>
        <div className="header-photo-animate-div-4">
          <div>
            <div></div>
          </div>
        </div>
        {/*  */}
      </div>

      <HeaderComment
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        }
        txt="Comfort Comes First"
        reverse={false}
        top1={{ lg: "-5vh", md: "-5vh", sm: "-5vh" }}
        left1={{ lg: "8vw", md: "4vw", sm: "10vw" }}
        left2={{ lg: "5vw", md: "7vw", sm: "20vw" }}
      />

      <HeaderComment
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none">
            <g clipPath="url(#clip0_1_627)">
              <path
                d="M17.3335 12.9998C16.7868 12.9998 16.3335 12.5465 16.3335 11.9998V2.6665H7.96016C6.50683 2.6665 5.3335 3.85317 5.3335 5.29317V26.7065C5.3335 28.1465 6.50683 29.3332 7.96016 29.3332H24.0402C25.4935 29.3332 26.6668 28.1465 26.6668 26.7065V12.9998H17.3335ZM19.4935 21.8398H17.3335V23.9998C17.3335 24.7332 16.7335 25.3332 16.0002 25.3332C15.2668 25.3332 14.6668 24.7332 14.6668 23.9998V21.8398H12.5068C11.7602 21.8398 11.1735 21.2398 11.1735 20.5065C11.1735 19.7598 11.7602 19.1732 12.5068 19.1732H14.6668V17.3332C14.6668 16.5998 15.2668 15.9998 16.0002 15.9998C16.7335 15.9998 17.3335 16.5998 17.3335 17.3332V19.1732H19.4935C20.2402 19.1732 20.8268 19.7598 20.8268 20.5065C20.8268 21.2398 20.2402 21.8398 19.4935 21.8398Z"
                fill="#3DBA11"
              />
              <path
                d="M18.3467 2.6665L26.6667 10.9865H18.3467V2.6665Z"
                fill="#3DBA11"
              />
            </g>
          </svg>
        }
        txt="Design Community Articles"
        reverse={false}
        top1={{ lg: "15vh", md: "15vh", sm: "10vh" }}
        left1={{ lg: "15vw", md: "10vw", sm: "20vw" }}
        left2={{ lg: "7vw", md: "9vw", sm: "28vw" }}
      />

      <HeaderComment
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none">
            <g clipPath="url(#clip0_1_637)">
              <path
                d="M29.3332 11.6668V24.3335C29.3332 25.6135 28.2798 26.6668 26.9998 26.6668H4.99984C3.71984 26.6668 2.6665 25.6135 2.6665 24.3335V6.3335C2.6665 5.78683 3.11984 5.3335 3.6665 5.3335H12.6665C13.0398 5.3335 13.3865 5.54683 13.5598 5.88016L15.2798 9.3335H26.9998C28.2798 9.3335 29.3332 10.3868 29.3332 11.6668Z"
                fill="#3DBA11"
              />
            </g>
          </svg>
        }
        txt="Emergency Dental Care"
        reverse={true}
        top1={{ lg: "40vh", md: "35vh", sm: "29vh" }}
        left1={{ lg: "5vw", md: "0vw", sm: "10vw" }}
        left2={{ lg: "6vw", md: "7vw", sm: "14vw" }}
      />
    </div>
  );
};

export default HeaderImage;
