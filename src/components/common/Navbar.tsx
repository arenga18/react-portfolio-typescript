import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

export default function Navbar({ active }: { active: string }) {
  return (
    <React.Fragment>
      <div className="nav-container m-0 flex justify-center items-center">
        <nav className="navbar flex justify-center items-center fixed top-[3vh] z-50">
          <div className="nav-background flex justify-center items-center w-[380px] h-[40px] bg-white rounded-full shadow-sm">
            <ul className="nav-list flex justify-evenly items-center w-full h-full my-auto p-1 md:p-2.5 gap-2">
              <li
                className={active === "home" ? "nav-item active" : "nav-item"}>
                <Link to="/">Home</Link>
              </li>
              <li
                className={active === "about" ? "nav-item active" : "nav-item"}>
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }>
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className={
                  active === "resume" ? "nav-item active" : "nav-item"
                }>
                <a
                  href="/files/Arenga Pinnata Marzuki - Fullstack - CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  Resume
                </a>
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
