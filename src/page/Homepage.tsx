import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/common/Navbar";
import Logo from "../components/common/Logo";
import "./styles/homepage.css";
import INFO from "../data/user";
import AllProjects from "../components/projects/AllProjects";
import Timeline from "../components/homepage/Timeline";
import Education from "../components/homepage/Education";
import Footer from "../components/common/Footer";
import SEO from "../data/seo";

export default function Homepage() {
  const [stayLogo, setStayLogo] = useState<boolean>(false);
  const [logoSize, setLogoSize] = useState<number>(80);
  const [oldLogoSize, setOldLogoSize] = useState<number>(80);

  const currentSEO:
    | {
        page: string;
        description: string;
        keywords: string[];
      }
    | undefined = SEO.find((item) => item.page === "homepage");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.round(window.pageYOffset);

      const newLogoSize = 80 - (scroll * 3) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(logoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const logoStyle: React.CSSProperties = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Homepage | ${INFO.main.title}`}</title>
        {currentSEO && (
          <>
            <meta name="description" content={currentSEO.description} />
            <meta name="keywords" content={currentSEO.keywords.join(", ")} />
          </>
        )}
      </Helmet>
      <div className="page-content">
        <Navbar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>
          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  <h1 className="text-3xl md:text-5xl mb-2">
                    {INFO.homepage.name}
                  </h1>
                  <h2 className="!text-2xl md:!text-4xl !text-[#14b8a6]">
                    {INFO.homepage.job}
                  </h2>
                </div>
                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>
                <div className="homepage-socials">
                  <a
                    href={INFO.socials.github}
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="homepage-social-icon"
                    />
                  </a>
                  <a
                    href={INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="homepage-social-icon"
                    />
                  </a>
                  <a
                    href={INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="homepage-social-icon"
                    />
                  </a>
                  <a href={INFO.socials.email} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faMailBulk}
                      className="homepage-social-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper !w-[280px] md:w-full">
                    <img
                      src="homepage.png"
                      alt="my image"
                      className="homepage-image  "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage-projects">
              <div className="homepage-projects-title mb-10">
                <h2 className="text-4xl text-center font-bold text-[var(--primary-color)]">
                  All Projects
                </h2>
                <p className="mt-4 text-md text-muted-foreground text-center">
                  Projects I have worked on, showcasing my skills and expertise.
                </p>
              </div>
              <AllProjects />
            </div>
            <div className="homepage-journey">
              <Timeline />
            </div>
            <div className="homepage-after-title">
              <div className="homepage-education">
                <Education />
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
