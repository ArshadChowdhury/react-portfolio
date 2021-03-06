import Contacts from "./components/contacts/Contacts";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Sidebar from "./components/sideBar/Sidebar";
import { useState } from "react";
import "./app.scss";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="app">
      <Topbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
