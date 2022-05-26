import React from 'react';
import "./Project.scss";
import { ImageAssests } from '../data';

// <Project data={data[i]} />
// onClick attribute can be added to the project div
export default function Project(props) {

  // Selects the right cover image for the project component
  // When adding another project, also make a link to the image here
  let img;
  if(props.data.id === "opencv") {
    img = ImageAssests.opencv;
  } else {
    img = ImageAssests.mesh;
  }

  return (
    <>
      <li className='project' key={props.data.id}>
        <img className='project__image' src={img} alt="Project img" />
        <h2 className='project__title'>{props.data.title}</h2>
      </li>
    </>
  )
}
