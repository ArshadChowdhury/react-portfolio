import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://image.freepik.com/free-vector/banking-app-interface-screens_23-2148604478.jpg"
            alt="Banking App Picture"
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
