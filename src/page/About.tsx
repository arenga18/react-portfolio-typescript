import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/common/Navbar";
import Logo from "../components/common/Logo";
import Socials from "../components/common/Socials";
import Footer from "../components/common/Footer";
import INFO from "../data/user";
import "./styles/about.css";
import SEO from "../data/seo";

export default function About() {
  const currentSEO:
    | {
        page: string;
        description: string;
        keywords: string[];
      }
    | undefined = SEO.find((item) => item.page === "about");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description} />
        <meta name="keywords" content={currentSEO?.keywords.join(", ")} />
      </Helmet>

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
                  <div className="title about-title !text-3xl md:!text-5xl md:mb-6">
                    {INFO.about.title}
                  </div>

                  <div className="subtitle about-subtitle">
                    <p className="mb-3">{INFO.about.description1}</p>
                    <p>{INFO.about.description2}</p>
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
            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
