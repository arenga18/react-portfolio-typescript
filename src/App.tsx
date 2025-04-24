import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import Homepage from "./page/Homepage";
import Notfound from "./page/Notfound";
import About from "./page/About";
import Projects from "./page/Projects";
import Contact from "./page/Contact";

// import { TRACKING_ID } from "./data/tracking";

function App() {
  // useEffect(() => {
  //   if (TRACKING_ID !== "") {
  //     ReactGA.initialize(TRACKING_ID);
  //   }
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
