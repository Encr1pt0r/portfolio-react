import React from 'react';
import "./Project.scss";

// <Project data={data[i]} />
// onClick attribute can be added to the project div
export default function Project(props) {

  return (
    <>
      <div className='project'>
        <img className='project__image' src={props.data.imagePath} alt="Project img" />
        <h2 className='project__title'>{props.data.title}</h2>
        <h3 className='project__subtitle'>{props.data.subtitle}</h3>
        <p className='project__description'>{props.data.description}</p>
      </div>
    </>
  )
}
