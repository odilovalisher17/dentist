import React, { useState } from "react";
import "./Navbar.css";
import { Button, Container } from "react-bootstrap";

const Navbar = ({ setIsNavbar }) => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="d-flex navbar">
      <Container>
        <div className="nav-logo">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="83"
              height="18"
              viewBox="0 0 83 18"
              fill="none">
              <path
                d="M1.95821 6.10127C3.26368 4.75106 4.8489 4.07595 6.71386 4.07595C8.52796 4.07595 9.96907 4.75106 11.0372 6.10127V0H13.9618V17.7215H11.0372V15.9494C9.96907 17.2658 8.52796 17.9241 6.71386 17.9241C4.86585 17.9241 3.28064 17.2489 1.95821 15.8987C0.652737 14.5316 0 12.903 0 11.0127C0 9.08861 0.652737 7.45148 1.95821 6.10127ZM2.72115 11.0127C2.72115 12.1941 3.12805 13.2068 3.94185 14.0506C4.75565 14.8776 5.76443 15.2911 6.96818 15.2911C8.13801 15.2911 9.13831 14.8692 9.96907 14.0253C10.8168 13.1814 11.2406 12.1772 11.2406 11.0127C11.2406 9.8481 10.8168 8.84388 9.96907 8C9.13831 7.13924 8.13801 6.70886 6.96818 6.70886C5.78138 6.70886 4.77261 7.1308 3.94185 7.97468C3.12805 8.81857 2.72115 9.83122 2.72115 11.0127Z"
                fill="#3DBA11"
              />
              <path
                d="M17.8923 6.10127C19.2486 4.75106 20.8762 4.07595 22.7751 4.07595C24.4705 4.07595 25.9456 4.62447 27.2002 5.72152C28.4717 6.80169 29.2516 8.16034 29.5398 9.79747C29.6416 10.2025 29.6924 10.6076 29.6924 11.0127C29.6924 11.3671 29.65 11.7215 29.5653 12.0759H18.7315C18.9011 13.0717 19.3588 13.865 20.1048 14.4557C20.8678 15.0464 21.7579 15.3418 22.7751 15.3418C24.3349 15.3418 25.581 14.7848 26.5135 13.6709L29.1075 14.3544C28.565 15.4346 27.6918 16.3038 26.4881 16.962C25.3013 17.6034 24.0636 17.9241 22.7751 17.9241C20.8254 17.9241 19.1808 17.2489 17.8414 15.8987C16.519 14.5485 15.8578 12.9198 15.8578 11.0127C15.8578 9.08861 16.536 7.45148 17.8923 6.10127ZM18.7315 9.8481H26.717C26.5474 8.95359 26.0981 8.20253 25.3691 7.59494C24.657 6.97047 23.7839 6.65823 22.7497 6.65823C21.7155 6.65823 20.8339 6.97047 20.1048 7.59494C19.3758 8.20253 18.918 8.95359 18.7315 9.8481Z"
                fill="#3DBA11"
              />
              <path
                d="M31.203 4.3038H34.1276V6.07595C35.1618 4.74262 36.5605 4.07595 38.3238 4.07595C39.8666 4.07595 41.189 4.57384 42.2911 5.56962C43.41 6.54852 43.9695 7.85654 43.9695 9.49367V17.7215H41.0449V10.2785C41.0449 9.21519 40.7228 8.37131 40.0785 7.74684C39.4512 7.10549 38.6713 6.78481 37.7389 6.78481C36.6707 6.78481 35.7976 7.173 35.1194 7.94937C34.4582 8.70886 34.1276 9.66245 34.1276 10.8101V17.7215H31.203V4.3038Z"
                fill="#3DBA11"
              />
              <path
                d="M47.429 6.83544V4.3038V1.08861L50.3027 0.253164V4.3038H54.448V6.83544H50.3027V13.3671C50.3027 14.1941 50.5401 14.7089 51.0148 14.9114C51.5065 15.1139 51.9473 15.2152 52.3372 15.2152C52.9476 15.2152 53.6851 15.0802 54.5497 14.8101V17.6203C53.6342 17.8734 52.795 18 52.032 18C51.0317 18 50.0145 17.7131 48.9803 17.1392C47.9461 16.5485 47.429 15.2996 47.429 13.3924V6.83544Z"
                fill="#3DBA11"
              />
              <path
                d="M59.3902 4.3038V17.7215H56.4656V4.3038H59.3902Z"
                fill="#3DBA11"
              />
              <path
                d="M61.4082 8.12658C61.4082 6.86076 61.9253 5.87342 62.9595 5.16456C63.9938 4.43882 65.3162 4.07595 66.9268 4.07595C68.8427 4.07595 70.5805 4.54008 72.1403 5.46836V8.27848C70.1736 7.14768 68.4358 6.58228 66.9268 6.58228C66.1808 6.58228 65.5705 6.72574 65.0958 7.01266C64.638 7.2827 64.4091 7.64557 64.4091 8.10127C64.4091 8.25317 64.4346 8.39662 64.4854 8.53165C64.5532 8.64979 64.655 8.75949 64.7906 8.86076C64.9432 8.96203 65.0873 9.04642 65.2229 9.11393C65.3755 9.18144 65.5874 9.25738 65.8587 9.34177C66.13 9.40928 66.3589 9.46836 66.5454 9.51899C66.7319 9.55274 67.0031 9.61181 67.3592 9.6962C67.7322 9.78059 68.0289 9.8481 68.2493 9.89874C69.809 10.27 70.9365 10.7932 71.6316 11.4684C72.3437 12.1435 72.7082 12.9705 72.7252 13.9494C72.7252 14.8608 72.4369 15.6287 71.8605 16.2532C71.301 16.8776 70.6313 17.3165 69.8514 17.5696C69.0715 17.8059 68.2154 17.9241 67.2829 17.9241C65.367 17.9241 63.5021 17.3418 61.688 16.1772V13.2152C62.2983 13.7384 63.1376 14.2278 64.2057 14.6835C65.2738 15.1392 66.2995 15.3671 67.2829 15.3671C67.9441 15.3671 68.512 15.2405 68.9868 14.9873C69.4784 14.7173 69.7243 14.3629 69.7243 13.9241C69.7243 13.4684 69.4445 13.097 68.885 12.8101C68.3256 12.5063 67.4524 12.2363 66.2656 12C64.6041 11.6624 63.3749 11.1983 62.5781 10.6076C61.7982 10 61.4082 9.173 61.4082 8.12658Z"
                fill="#3DBA11"
              />
              <path
                d="M75.8792 6.83544V4.3038V1.08861L78.753 0.253164V4.3038H82.8983V6.83544H78.753V13.3671C78.753 14.1941 78.9903 14.7089 79.4651 14.9114C79.9567 15.1139 80.3975 15.2152 80.7875 15.2152C81.3978 15.2152 82.1353 15.0802 83 14.8101V17.6203C82.0845 17.8734 81.2452 18 80.4823 18C79.482 18 78.4648 17.7131 77.4305 17.1392C76.3963 16.5485 75.8792 15.2996 75.8792 13.3924V6.83544Z"
                fill="#3DBA11"
              />
            </svg>
          </a>
        </div>

        {/* Navbar Menu */}
        <div className="nav-menu d-flex">
          <div className="nav-menu-text text-font-18">
            <a href="/">Home</a>
          </div>
          <div className="nav-menu-text text-font-18">
            <a href="/about">About</a>
          </div>
          <div className="nav-menu-text text-font-18">
            <a href="/treatment">Treatment</a>
          </div>
          <div className="nav-menu-text text-font-18">
            <a href="/news">News</a>
          </div>

          <Button variant="outline-dark">Contact</Button>
        </div>

        {/* Navbar Menu Media */}
        <div
          className={isMenu ? "nav-burger nav-burger-true" : "nav-burger"}
          onClick={() => {
            setIsMenu((x) => !x);
            setIsNavbar((n) => !n);
          }}></div>

        <div
          className="toggle-menu"
          style={{
            transform: `translateX(${isMenu ? "0px" : "100vw"})`,
            opacity: isMenu ? "1" : "0",
          }}>
          <div className="container">
            <div className="toggle-menu-text">
              <a href="/" className="text-deep-green">
                Home
              </a>
            </div>
            <div className="toggle-menu-text">
              <a href="/about" className="text-deep-green">
                About
              </a>
            </div>
            <div className="toggle-menu-text">
              <a href="/treatment" className="text-deep-green">
                Treatment
              </a>
            </div>
            <div className="toggle-menu-text">
              <a href="/news" className="text-deep-green">
                News
              </a>
            </div>
            <div className="toggle-menu-text">
              <a href="/contact" className="text-deep-green">
                Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
