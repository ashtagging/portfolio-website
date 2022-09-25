import React, { useEffect, useRef } from "react";
import 'animate.css';
import "./introduction.scss";
import { init } from "ityped";

function Introduction() {
  const textRef = useRef();

  // Ityped npm package for typing animation
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Traveller", "Photographer"],
    });
  }, []);

  return (
    <div className="introduction" id="introduction">
      <div className="left">
        <div className="imgContainer animate__animated animate__fadeInLeft">
          <img src="assets/hashtag-logo.png"  alt="logo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="animate__animated animate__bounce">Hi There, I'm</h2>
          <h1 className="animate__animated animate__pulse">Ashley Littlewood</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Introduction;
