import "./topbar.scss";
import { Call, Mail } from "@material-ui/icons";

export default function Topbar({ menuActive, setMenuActive }) {
  return (
    <div className={"topbar " + (menuActive && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            BMA
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>arshadchowdhury46@gmail.com</span>
          </div>
          <div className="itemContainer">
            <Call className="icon" />
            <span>+8801676830816</span>
          </div>
        </div>

        <div className="right">
          <div className="menu" onClick={() => setMenuActive(!menuActive)}>
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
