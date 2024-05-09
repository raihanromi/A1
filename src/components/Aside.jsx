import {
  GiCalendar,
  GiClawSlashes,
  GiMailbox,
  GiMayanPyramid,
  GiPhone,
} from "react-icons/gi";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/portfolio_react/images/mypic.jpg" alt="portfolio picture" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Raihan Romeo
          </h1>

          <p className="title">Web developer</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:raihanromi98@gmail.com" className="contact-link">
                raihanromi98@gmail.com
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/raihan-romeo/"
              className="social-link"
            >
              <FaLinkedin className="icon-box" />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/raihanromi" className="social-link">
              <FaGithub className="icon-box" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
