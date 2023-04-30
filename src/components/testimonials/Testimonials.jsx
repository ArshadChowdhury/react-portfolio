import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mohammad Al-Amin",
      title: "Senior Developer",
      img: "assets/nirob_vai.jpg",
      icon: "assets/twitter.png",
      href: "https://twitter.com/0xweathered",
      desc: "Arshad always had perseverance in the face of obstacles, he went above & beyond to solve any problem that was presented to him. He loves technology. He's friendly & easy to work with. I've known him for years, he's very reliable & trustworthy person. He'd be a great asset to any company he works for. ",
    },
    {
      id: 2,
      name: "Joshua Fluke",
      title: "CEO at Grind Reel",
      img: "assets/jshua.jpg",
      icon: "assets/youtube.png",
      href: "https://www.youtube.com/c/JoshuaFluke1",
      desc: "Arshad is a fast learner with great communication skills, he's tech-savvy & have worked on several small projects and shown great potential at Grind Reel. He's still a valuable member of Grind Reel community, He has a great understanding of the front-end technologies & great research capabilities. He's also very reliable, you can always expect him to get the job done in time. ",
      featured: true,
    },
    {
      id: 3,
      name: "Iftekhar Ahmed",
      title: "Data Scientist",
      img: "assets/iftekhar.jpg",
      href: "https://www.linkedin.com/in/ahmed-iftekhar/",
      icon: "assets/linked_in.png",
      desc: "Arshad has been collaborating with me & big communities for quite some time now, which has made him intimately familiar with all the stages of the web lifecycle from the initial architecture to final deployment, he's highly recommended for all kind of web projects.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d, i) => (
          <div className={d.featured ? "card featured" : "card"} key={i}>
            <div className="top">
              <img className="left" src="assets/arrow.png" alt="icon" />
              <img className="user" src={d.img} alt="User" />
              <a href={d.href} target="_blank" rel="noreferrer">
                {" "}
                <img className="right" src={d.icon} alt="icon" />
              </a>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
