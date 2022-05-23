import React from "react";
import "./Bio.scss";

export default function Bio() {
  return (
    <>
      <div className="picture"></div>
      {/* <img classname="picture" width={350} alt="hello" src={Kevin}/> */}
      <p className="text">
        I am a mobile and web developer graduate based in London, UK. While
        studying at Kingston University, I worked with Java and Android mobile
        development while learning software development principles.
      </p>
      <p className="text">
        My most recent experience was as an Intern at Go Jauntly. I helped with
        administrative tasks such as quality assurances and content creation.
        Additionally, I co-developed the front-end for a new part of their
        website using Nunjucks, SCSS and TypeScript.
      </p>
      <p className="text">
        I am determined to develop my skills further and provide valuable
        solutions to real-life problems.
      </p>
    </>
  );
}
