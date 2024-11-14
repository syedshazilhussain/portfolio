import React from "react";
import "../Preloader/Preloader.css";
import PuffLoader from "react-spinners/PuffLoader";

function Preloader() {
  return (
    <div className="shazil-container">
      <div className="shazil__inner">
        <div className="letter">S</div>
        <div className="letter">h</div>
        <div className="letter">a</div>
        <div className="letter">z</div>
        <div className="letter">i</div>
        <div className="letter">l</div>
      </div>
      <PuffLoader
        color="#36d7b7"
        size={700}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Preloader;
