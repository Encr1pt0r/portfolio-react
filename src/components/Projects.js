import React from "react";
import "./Projects.scss";
import { data } from "../data";
import Project from "./Project";

// Projects is the container for the project
// When a container is clicked, a modal appears

export default function Projects() {

  // A new array is used to generate a call to Project component with a link to the data
  let projectList = [];
  data.forEach((item) => {
    const imgPath = item.imagePath;
    // console.log(imgPath);
    projectList.push( <Project imgPath={imgPath} data={item} /> );
  })

  return (
    <>
      <div className="projects">
        <h1 className="projects__heading">Projects</h1>
        <ul className="projects__items">
          {projectList}
        </ul>
      </div>
    </>
  );
}
