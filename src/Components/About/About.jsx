import React, { useContext } from "react";
import "../About/About.css";
import { themeContext } from "../../Context";
import about__img from "../../img/aboutImg.jpg";
import resume from "../../img/Shazil Hussain.pdf";

function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="about__section" id="about">
      <div className='main_cover_img'>
        <div
          className="img__cover__div"
          style={{
            color: darkMode ? "white" : "",
            background: darkMode
              ? "linear-gradient(100deg, #444, #333)" // Dark background gradient
              : "linear-gradient(100deg, #61dafb, #61dafb)",
          }}
        >
          <h1>02</h1>
          <h3 style={{ color: darkMode ? "#fff" : "#000" }}>ABOUT US</h3>
          <h2>Shazil Zaidi</h2>
          <h5>WEB DEVELOPMENT</h5>
        </div>
        <img
          src={about__img}
          alt=""
          style={{
            filter: darkMode ? "brightness(0.7)" : "brightness(1)", // Dark mode adjustment
          }}
        />
      </div>
      <div
        className="about__content"
        style={{ color: darkMode ? "#fff" : "#333" }}
      >
        <h1>
          About!
          <div className="smline" id="smline"></div>
        </h1>
        <p>
        As a junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Node.js, MongoDB, Bootstrap, Tailwind CSS, Firebase, and Material UI. I excel in designing and maintaining responsive websites that offer a smooth user experience, while leveraging modern technologies to build efficient and scalable applications.
        </p>
        <a href={resume}>
          <button>My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;
