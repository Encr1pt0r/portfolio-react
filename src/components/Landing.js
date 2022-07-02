import React from "react";
import "./Landing.scss";
import Bio from "./Bio";
import Skills from "./Skills";
import { BsArrowDownCircleFill } from 'react-icons/bs';

export default function landing() {
  return (
    <>
      <div className="landing">
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
          <BsArrowDownCircleFill className="landing__call-to-action__arrow" />
        </div>
      </div>

    </>
  );
}
