import React from "react";
import "../css/Home.css";
import LinkedIn_Icon from "../assets/icons/LinkedIn_logo.png";
import GitHub_Icon from "../assets/icons/GitHub-Mark-Light-64px.png";

export default function Home() {
  const LinkedIn_buttonHandler = () => {
    window.open("https://www.linkedin.com/in/vincentt02/", "_blank");
  };

  const GitHub_buttonHandler = () => {
    window.open("https://github.com/vincentt02", "_blank");
  };

  return (
    <div id="home">
      <div className="greeting">
        <h1>Hi! I'm Vincent!</h1>
        <p>Computer Science Student</p>
      </div>
      <div className="socialLinks">
        <img
          className="LinkedIn_Icon"
          src={LinkedIn_Icon}
          alt="LinkedIn Icon"
          onClick={LinkedIn_buttonHandler}
        />
        <img
          className="GitHub_Icon"
          src={GitHub_Icon}
          alt="GitHub Icon"
          onClick={GitHub_buttonHandler}
        />
      </div>
    </div>
  );
}
