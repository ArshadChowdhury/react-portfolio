import "./works.scss";
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
      icon: "data:image/jpeg;base64,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",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nsuzWIJLjWUj9iwwx5vLNLAwOZ-WL4KGOg&usqp=CAUUg",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5ilw12W98kGhiqxmHtybi8cdoCDwGh33Pg&usqp=CAU",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
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
