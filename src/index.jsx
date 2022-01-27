import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./app.scss";
import Contacts from "./components/contacts/Contacts";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";

ReactDOM.render(
  <div className="app">
    <Topbar />
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contacts />
    </div>
  </div>,
  document.getElementById("root")
);
