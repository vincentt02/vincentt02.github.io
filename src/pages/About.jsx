import React from "react";
import "../css/About.css";
import Picture from "../assets/images/profilepicture.png";
import Cplusplus_icon from "../assets/icons/cplusplus-colored.svg";
import Python_icon from "../assets/icons/python-colored.svg";
import Javascript_icon from "../assets/icons/javascript-colored.svg";
import HTML_icon from "../assets/icons/html5-colored.svg";
import CSS_icon from "../assets/icons/css3-colored.svg";
import React_icon from "../assets/icons/react-colored.svg";

export default function About() {
  return (
    <div id="about">
      <div className="picture">
        <img src={Picture} alt="" />
        <p className="email">vincent.tr02@gmail.com</p>
      </div>
      <div className="aboutmeRightside">
        <div className="aboutmeHeader">
          <h1>About Me</h1>
        </div>
        <div className="about_container">
          <div className="aboutme">
            <p>
              I am an undergraduate student at the University of Houston
              aspiring to become a Software Engineer. My current interests lie
              in full stack and mobile app development.
            </p>
          </div>
          <div className="skillsTitle">
            <p>Skills</p>
          </div>
          <div className="skills">
            <ul>
              <li>
                <img src={Cplusplus_icon} alt="C++" width="36" height="36" />
                C++
              </li>
              <li>
                <img src={Python_icon} alt="Python" width="36" height="36" />
                Python
              </li>
              <li>
                <img
                  src={Javascript_icon}
                  alt="Javascript"
                  width="36"
                  height="36"
                />
                Javascript
              </li>
              <li>
                <img src={HTML_icon} alt="HTML" width="36" height="36" />
                HTML
              </li>
              <li>
                <img src={CSS_icon} alt="CSS3" width="36" height="36" />
                CSS
              </li>
              <li>
                <img src={React_icon} alt="React" width="36" height="36" />
                React
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
