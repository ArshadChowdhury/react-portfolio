import "./sidebar.scss";

export default function Sidebar({ menuActive, setMenuActive }) {
  return (
    <div className={"sideBar " + (menuActive && "active")}>
      <ul>
        <li className="sidebarList" onClick={() => setMenuActive(!menuActive)}>
          <a href="#intro">Home</a>
        </li>
        <li className="sidebarList" onClick={() => setMenuActive(!menuActive)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="sidebarList" onClick={() => setMenuActive(!menuActive)}>
          <a href="#services">Services</a>
        </li>
        <li className="sidebarList" onClick={() => setMenuActive(!menuActive)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="sidebarList" onClick={() => setMenuActive(!menuActive)}>
          <a href="#contacts">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}
