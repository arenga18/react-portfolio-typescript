import React from "react";
import { Link } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/project.css";

export default function Project({
  project: { logo, title, description, linkText, link },
}: {
  project: {
    logo: string | string[];
    title: string;
    description: string;
    linkText: string;
    link: string;
  };
}) {
  return (
    <React.Fragment>
      <div className="project mix-blend-normal rounded-3xl opacity-80 h-full">
        <Link to={link}>
          <div className="project-container p-[30px]">
            <div className="project-logo flex items-center gap-2.5 w-[30px]">
              {Array.isArray(logo) ? (
                logo.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt="logo"
                    className="logo w-full"
                    width={80}
                  />
                ))
              ) : (
                <img src={logo} alt="logo" className="logo" width={80} />
              )}
            </div>
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <div className="project-link">
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>
              <div className="project-link-text">{linkText}</div>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}
