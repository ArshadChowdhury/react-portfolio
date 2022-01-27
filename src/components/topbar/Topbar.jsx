import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            BMA
          </a>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}
