import { useState } from "react";

import {  DesktopMac , PhoneAndroid, Web } from "@material-ui/icons";

import "./services.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const data = [
    {
      id: "1",
      icon: <DesktopMac /> ,
      title: "Web Development",
      desc: "I've been using MERN stack for almost 2 years now. I can build websites/web apps/landing page using MERN stack proficiently. I've also worked on a few large scale project at my work. All the features I implemented was significant.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: <PhoneAndroid />,
      title: "Mobile Application",
      desc: "I will be learning React Native soon, so I'm beginner in terms of building mobile apps using React Native but I'm constantly learning new tech and building apps to learn things faster.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: <Web />,
      title: "Web Designing",
      desc: "I can design website using HTML/CSS/Tailwind/BootStrap from psd or other image formats, I can also use figma to some extent and generate designs for website.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  return (
    <div className="services" id="services">
      <h1>Services</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d, i) => (
          <div className="container" key={i}>
            <div className="item">
              <div className="left">
                <div className="left-container">
                    {d.icon}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span onClick={()=> window.location = "#portfolio"}>Projects</span>
                </div>
              </div>
              <div className="right">
                <img className="services-image" src={d.img} alt="React Projects" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/left_arrow.png"
        className="arrow left"
        alt="Left Arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/left_arrow.png"
        className="arrow right"
        alt="Right Arrow"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
