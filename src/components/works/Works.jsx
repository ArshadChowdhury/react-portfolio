import "./works.scss";

export default function works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nsuzWIJLjWUj9iwwx5vLNLAwOZ-WL4KGOg&usqp=CAUU"
                    alt="Project"
                  />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates cupiditate laboriosam maxime repudiandae expedita
                  sequi enim optio quasi vel quas?
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
