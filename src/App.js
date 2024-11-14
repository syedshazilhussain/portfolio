import { useContext, useEffect, useState, useRef } from "react";
import "./App.css";
import Preloader from "./Components/Preloader/preloader";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Testimonal from "./Components/Testimonal/Testimonal";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import Chatbot from "./Components/Chatbot/Chatbot";

function App() {
  const [isLoader, setIsLoader] = useState(true);
  // window.addEventListener("loadstart", () => {
    setTimeout(() => {
      setIsLoader(false);
    }, 2000);
  // });

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {isLoader ? (
        <Preloader />
      ) : (
        <div id="main">
          <Navbar />
          <Intro />
          <About />
          <Skills />
          <Project />
          <Testimonal />
          <Contact />
          <Footer />
          <Chatbot/>
        </div>
      )}
    </div>
  );
}

export default App;
