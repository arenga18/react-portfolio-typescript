import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/Navbar";
import Logo from "../components/common/Logo";
import Socials from "../components/common/Socials";
import Footer from "../components/common/Footer";
import INFO from "../data/user";

import SEO from "../data/seo";
import "./styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO:
    | {
        page: string;
        description: string;
        keywords: string[];
      }
    | undefined = SEO.find((item) => item.page === "contact");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description} />
        <meta name="keywords" content={currentSEO?.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} link={false} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title !text-3xl md:!text-5xl md:mb-6">
              Let's Get in Touch: Ways to Connect with Me
            </div>

            <div className="subtitle contact-subtitle text-justify">
              Thank you for your interest in reaching out to me. I welcome your
              feedback, questions, and suggestions. If you have a specific
              inquiry or comment, please feel free to email me directly at&nbsp;
              <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I
              strive to respond to all messages within 24 hours, although it may
              take longer during busy periods. Alternatively, you can use the
              contact form on my website to get in touch. Simply fill out the
              required fields, and I will get back to you as soon as possible.
              If you prefer to connect on LinkedIn, you can find me at&nbsp;
              <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
                {INFO.socials.linkedin}
              </a>
              . I share regular updates and engage with my network there, so
              feel free to connect. Thank you again for your interest, and I
              look forward to hearing from you!
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
