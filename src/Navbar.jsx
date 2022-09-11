import React from "react";
import "./css/Navbar.css";
import { HashLink } from "react-router-hash-link";
import Resume from "./assets/resume/Resume_Vincent_Tran.pdf";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <HashLink className="navlink" smooth to="#home">
          Home
        </HashLink>
        <HashLink className="navlink" smooth to="#about">
          About Me
        </HashLink>
        <HashLink className="navlink" smooth to="#projects">
          Projects
        </HashLink>
        <a className="navlink" href={Resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </ul>
    </div>
  );
}
