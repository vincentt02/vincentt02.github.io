import React from "react";
import "../css/Projects.css";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../assets/projectsdata/projectsData";

export default function Projects() {
  return (
    <div id="projects">
      <div className="projectsHeader">
        <h1>Projects</h1>
      </div>
      <div className="projects_container">
        {projectsData.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
