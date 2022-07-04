import React from "react";
import "./Projects.scss";
import { data } from "../data";
import Project from "../components/Project";
import Footer from '../components/Footer';
import Nav from '../components/Nav';

// Projects is the container for the project
// When a container is clicked, a modal appears

export default function Projects() {

  // A new array is used to generate a call to Project component with a link to the data
  let projectList = [];
  data.forEach((item) => {
    // First element removed because its for landing page
    if(item !== data[0]) {
      projectList.push( <li key={item.id}> <Project imgPath={item.imagePath} data={item} /> </li> );
    }
  })

  return (
    <>
      <Nav />
      <div className="projects">
        <h1 className="projects__heading">Projects</h1>
        <ul className="projects__items">
          {projectList}
        </ul>
      </div>
      <Footer />
    </>
  );
}
