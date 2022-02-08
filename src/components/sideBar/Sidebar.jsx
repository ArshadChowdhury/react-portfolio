import "./sidebar.scss";

export default function Sidebar({ menuActive, setMenuActive }) {
  return (
    <div className={"sideBar " + (menuActive && "active")}>
      <ul>
        <li onClick={() => setMenuActive(!menuActive)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuActive(!menuActive)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuActive(!menuActive)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuActive(!menuActive)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuActive(!menuActive)}>
          <a href="#contacts">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}
