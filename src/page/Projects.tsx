import React, { useEffect } from "react";
import "./styles/projects.css";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/Navbar";
import Logo from "../components/common/Logo";
import AllProjects from "../components/projects/AllProjects";
import Footer from "../components/common/Footer";
import INFO from "../data/user";
import SEO from "../data/seo";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description} />
        <meta name="keywords" content={currentSEO?.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} link={false} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title !text-3xl md:!text-5xl md:mb-6">
              Projects That Reflect My Journey
            </div>

            <div className="subtitle projects-subtitle mb-10">
              Throughout my studies, I have developed a range of projects that I
              am proud of. Many of these are open-source and available for
              others to explore and contribute to. If you're interested in any
              of my work, I invite you to check out the code and share any
              suggestions for improvements. Collaboration is an excellent way to
              learn and grow, and I welcome new ideas and feedback.
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
