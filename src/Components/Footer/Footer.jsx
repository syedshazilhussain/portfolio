import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <section className="Footer mt-16">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      <div className="footer__content">
        <div className="logo">
          <a href="">
            <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>Z</span>
            <span>I</span>
            <span>L</span>
            {" "}
            <span>H</span>
            <span>U</span>
            <span>S</span>
            <span>S</span>
            <span>A</span>
            <span>I</span>
            <span>N</span>
          </a>
        </div>
        <div className="footer__links mt-3">
          <a href="https://www.facebook.com/profile.php?id=61550011704187">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <ion-icon name="logo-instagram"></ion-icon>
          <a href="https://github.com/syedshazilhussain?tab=overview&from=2024-06-01&to=2024-06-06">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="https://www.fiverr.com/syed_shazil786?up_rollout=true">
            <ion-icon name="logo-foursquare"></ion-icon>
          </a>
        </div>
        <p>
          Copyright © 2024 Shazil Hussain All Right Resorved {"   "} <span> . </span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
