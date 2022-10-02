import React from "react";
import "./about.scss";

function About() {
  const viewCV = () => {
    window.open("SD_CV.pdf", "_blank", "fullscreen=yes");
  };

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>About Me</h1>
          <p>
          I'm a Software Developer from Sheffield UK currently looking for
          job opportunities. Outside of work you can typically find me taking
          photos 📷 , hiking 🥾 , or playing chess♟. Please take a look at my portfolio below.
          </p>
          <div className="cv-button">
            <button onClick={viewCV} class="view-button cv-button">
              View CV
              <div class="icon">
                <i class="fa-solid fa-file-lines"></i>
              </div>
            </button>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
}

export default About;
