import React from 'react';
import "./Project.scss";

// <Project data={data[i]} />
// onClick attribute can be added to the project div
export default function Project(props) {
  return (
    <>
      <div className='project'>
        <h2>{props.data.title}</h2>
      </div>
    </>
  )
}
