import React from "react";
import "./Bio.scss";
import { data } from '../data';

export default function Bio() {

  const img = data[0].imagePath;
  
  return (
    <>
      <img src={img} className="bio__picture" />
      <p className="bio__text">
        I am a mobile and web developer graduate based in London, UK. While
        studying at Kingston University, I worked with Java and Android mobile
        development while learning software development principles.
      </p>
      <p className="bio__text">
        My most recent experience was as an Intern at Go Jauntly. I helped with
        administrative tasks such as quality assurances and content creation.
        Additionally, I co-developed the front-end for a new part of their
        website using Nunjucks, SCSS and TypeScript.
      </p>
      <p className="bio__text">
        I am determined to develop my skills further and provide valuable
        solutions to real-life problems.
      </p>
    </>
  );
}
