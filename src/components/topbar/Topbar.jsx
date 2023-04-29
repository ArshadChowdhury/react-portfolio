import "./topbar.scss";
import { Call, Mail, ArrowLeftSharp } from "@material-ui/icons";

export default function Topbar({ menuActive, setMenuActive }) {
  function sendEmail() {
    window.location = "mailto:arshadchowdhury46@gmail.com";
  }
  function sendWhatsApp() {
    window.location = "https://api.whatsapp.com/send?phone=8801676830816";
  }

  return (
    <div className={"topbar " + (menuActive && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            BMA
          </a>
          <div className="itemContainer" onClick={sendEmail}>
            <Mail className="icon" />
            <span>arshadchowdhury46@gmail.com</span>
          </div>
          <div className="itemContainer" onClick={sendWhatsApp}>
            <Call className="icon" />
            <span>+8801676830816</span>
          </div>
          <div
            href="#contacts"
            className="itemContainer"
            onClick={() => (window.location = "#contacts")}
          >
            <ArrowLeftSharp className="icon rightSide" />
            <h2 className="talk">Let's Talk</h2>
          </div>

          <div className="itemContainer">
            <button
              className="cv-button"
              onClick={() =>
                (window.location =
                  "https://drive.google.com/file/d/15Bp4fCXsgyC_VVADpAIyns9_fh69Qy-J/view?usp=sharing")
              }
            >
              Watch My CV
            </button>
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
