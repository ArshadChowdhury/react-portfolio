import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 60,
      startDelay: 1200,
      typeSpeed: 150,
      strings: ["Designer", "Developer", "Enthusiast"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/arshad_pic.png" alt="Arshad" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There !! I'm</h2>
          <h1>Arshad</h1>
          <h3>
            A Web <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down_arrow.jpg" alt="Down Arrow" />
        </a>
      </div>
    </div>
  );
}
