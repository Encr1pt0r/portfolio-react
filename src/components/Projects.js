import React from "react";
import "./Projects.scss";
import { data } from "../data";
import Project from "./Project";

// Projects is the container for the project
// When a container is clicked, a modal appears

export default function Projects() {
  function meep() {
    console.log(data.length);
  }

  return (
    <>
      <div className="projects">
        <h1 className="projects__heading">Projects</h1>
        <div className="projects__items">
          <Project data={data[0]} />
          <Project data={data[0]} />
          <Project data={data[0]} />
          <Project data={data[0]} />
        </div>
      </div>
    </>
  );
}
