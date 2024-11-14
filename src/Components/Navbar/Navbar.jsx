import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import Toggle from "../Toggle/Toggle";
import Preloader from "../Preloader/preloader";
import { Link } from "react-scroll";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [preloader, setPreloader] = useState(<Preloader />);
  const setoggle = () => {
    setToggle(!toggle);
    console.log(!toggle);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div className="nav_section">
      <nav>
        <div className="logo">
          <a href="">
            <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>Z</span>
            <span>I</span>
            <span>L</span>
          </a>
          <Toggle />
        </div>
        <div
          className={toggle ? "hamburger toggle" : "hamburger"}
          onClick={() => setoggle()}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={toggle ? "nav-links open" : "nav-links"}>
          <li
            className={toggle ? "fade" : "nav-links"}
            onClick={() => {
              document
                .getElementById("intro")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </li>
          <li
            className={toggle ? "fade" : "nav-links"}
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </li>
          <li
            className={toggle ? "fade" : "nav-links"}
            onClick={() => {
              document
                .getElementById("skill")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </li>
          <li
            className={toggle ? "fade" : "nav-links"}
            onClick={() => {
              document
                .getElementById("portfolio")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </li>
          <li
            className={toggle ? "fade" : "nav-links"}
            onClick={() => {
              document
                .getElementById("testimonal")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Testimonals
          </li>
          {/* <li className={toggle ? 'fade' : 'nav-links'}><button classNonclick={() => {document.getElementById('intro').scrollIntoView({behavior: 'smooth'})}}ame="login-button" href="#">Contact</button></li> */}
          <li
            className={toggle ? "fade" : "nav-links"}
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <button className="join-button">Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
