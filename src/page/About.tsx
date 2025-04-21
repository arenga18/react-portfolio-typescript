import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/common/Navbar";
import Logo from "../components/common/Logo";
import Socials from "../components/common/Socials";
import Footer from "../components/common/Footer";
import INFO from "../data/user";
import "./styles/about.css";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet></Helmet>

      <div className="page-content">
        <Navbar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} link={false} />
            </div>
            <div className="about-container">
              <div className="about-main">
                <div className="about-right-side">
                  <div className="title about-title">{INFO.about.title}</div>

                  <div className="subtitle about-subtitle">
                    {INFO.about.description}
                  </div>
                </div>

                <div className="about-left-side">
                  <div className="about-image-container">
                    <div className="about-image-wrapper">
                      <img
                        src="about.png"
                        alt="about"
                        className="about-image"
                      />
                    </div>
                  </div>

                  <div className="about-socials">
                    <Socials />
                  </div>
                </div>
              </div>
              <div className="about-socials-mobile">
                <Socials />
              </div>
            </div>
            {/* <div className="page-footer">
              <Footer />
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
