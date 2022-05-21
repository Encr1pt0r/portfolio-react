import React from "react";
import "./Landing.scss";

export default function landing() {
  return (
    <>
      <div className="landing">
        <div className="landing__title">
          <h1 className="landing__title__main">Kevin Mbuluko</h1>
          <h2 className="landing__title__sub">
            Web and Mobile Developer Based in London
          </h2>
        </div>

        <div className="landing__profile">
          <div className="landing__profile__bio">
            {/* <Bio /> */}
            <div className="biopic"></div>
            <p>Qui ex aute id occaecat sit nulla ut laboris ipsum deserunt minim laborum irure. 
              Labore et excepteur est proident tempor ut in officia irure est consequat aliqua 
              fugiat aliqua. Commodo id sunt elit nulla. quis voluptate pariatur duis nostrud. 
              Cillum ea laborum enim magna nostrud culpa sunt.</p>
            <p>Qui ex aute id occaecat sit nulla ut laboris ipsum deserunt minim laborum irure. 
              Labore et excepteur est proident tempor ut in officia irure est consequat aliqua 
              fugiat aliqua.</p>
          </div>
          <div className="landing__profile__skills">
            {/* <Skills /> */}
            <h3>Looking forward to working with</h3>

            <h3>The tools that I am familar with</h3>
            </div>
        </div>

        <div className="landing__call-to-action"></div>
      </div>

      <div className="b"></div>
    </>
  );
}
