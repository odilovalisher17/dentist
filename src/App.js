import React, { useState, useEffect } from "react";
import Homepage from "./Components/Homepage/Homepage";
import "./utils.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [isNavbar, setIsNavbar] = useState(false);

  useEffect(() => {
    if (isNavbar) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "visible";
    }
  }, [isNavbar]);
  return (
    <div>
      <Navbar setIsNavbar={setIsNavbar} />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
