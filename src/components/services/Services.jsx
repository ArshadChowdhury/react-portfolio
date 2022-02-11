import "./services.scss";
import { useState } from "react";

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
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQee9hCGu8Ed4igY_0NquGHC40FPf6vZXUsSg&usqp=CAU",
      title: "Web Development",
      desc: "I've been using MERN stack for almost a year now. I can build websites/web apps/landing page using MERN stack proficiently",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAACenp5WVlZdXV2QkJDj4+MZGRlpaWmzs7Orq6s1NTUgICC2traMjIxsbGy/v7/Jycn5+fnX19fs7Ox1dXXz8/NgYGBBQUElJSVOTk7b29uBgYHExMQREREwMDCWlpZ+fn7Q0NCfMdXKAAADIklEQVR4nO3X6VLiQBiFYRAFZZEsQEC2yP1f5JgObhiMWOfQM1Pv85Oi+us3Jk3sdAAAf6/+IZnoJOk6dtBn6aarN51ksbtepUtDX2X3EDstyApTX2XZj53X6cz2xsAXaezA/ttWdquRzn73tm4SNzAbH/fxnM6kCy/y8nXpuKfqbb2JqTavlpX14quYR2pS72H49kF+03j8zcrHr+62bcvn9fJ3wh1fanQSmFZ/z4bv9ZpPkdb775jouEN+pv4T3r9/EEoaDvh5c+GhdcIwfG8j3PNl6o0v3j8ozlzxWWPg0w9GhJeJgWzHl/pygavfjrLpm1l5e6oYNn3x1CTMyAWb/Y311+mLVLyZxcmTfl3J6U3qEG7TR++Ms+pjYGA1Di83TefzNdw0n5AGvZiFq+m903QZvbAwDymjF96ah9xR6EShBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFErELyzMQ8rohcvJg9PkPnrhVVBoLez1rWab6IX/9Vk6rIYvzUPm1ZCpecg5STV8sPAOeaqGPHpnnLUOp8DaOiPbVTOG1hnf6Pqv7zbMyK0zvhGekW7mHBFu0oFzwrfCg9h9Nk6YhAkb44QWo7CBB9v69ZPendkGtKqfEttBkHev8KS36NV7mDuucnZ8Kxybf49adjE4vjluUvGBk5er49LRDtJa/8P78Vjnw6qTuIEviaMf/4fwK9vYgS83amHsG/Vj5wXp3hXo+x26VDoft2/3Qrsi+hP42fqwHeokh9z6MggAAP5tfwBsCzwbbNEwsQAAAABJRU5ErkJggg==",
      title: "Mobile Application",
      desc: "I'm currently learning React Native, so I'm novice in terms of mobile apps using React Native but I'm constantly learning new tech and building apps ",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "data:image/png;base64,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",
      title: "Web Designing",
      desc: "I can design website using HTML/CSS/Bootstrap/Sass from psd or other image formats",
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
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="Project" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="React Projects" />
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
