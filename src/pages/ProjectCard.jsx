import React from "react";
import "../css/ProjectCard.css";
import Website_Icon from "../assets/icons/webpageIcon.png";
import GitHub_Icon from "../assets/icons/GitHub-Mark-Light-64px.png";

export default function ProjectCard({ project }) {
  const GitHub_buttonHandler = () => {
    window.open(`${project.GitHubLink}`, "_blank");
  };

  const Website_buttonHandler = () => {
    window.open(`${project.websiteLink}`, "_blank");
  };
  return (
    <div className="project">
      <div className="title">{project.title}</div>
      <div className="projectPicture">
        {<img src={project.image} alt="Project" />}
      </div>
      <div className="projectBottom">
        <div className="description_container">
          <div className="description">{project.description}</div>
          <div className="techUsed">{project.techUsed}</div>
        </div>

        <div className="icons">
          {project.websiteLink !== "" ? (
            <img
              className="websiteIcon"
              src={Website_Icon}
              alt="Website"
              onClick={Website_buttonHandler}
            />
          ) : (
            ""
          )}
          {project.GitHubLink !== "" ? (
            <img
              className="githubIcon"
              src={GitHub_Icon}
              alt="GitHub"
              onClick={GitHub_buttonHandler}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
