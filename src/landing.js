import React from "react";
import "./Landing.scss";
import Bio from "./Bio";
import Skills from "./Skills";

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
            <Bio />
          </div>
          <div className="landing__profile__skills">
            <Skills />
          </div>
        </div>

        <div className="landing__call-to-action">
          <p>Scroll down to see my projects</p>
        </div>
      </div>

      <div className="b"></div>
    </>
  );
}
