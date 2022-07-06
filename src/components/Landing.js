import React from "react";
import "./Landing.scss";
import Bio from "./Bio";
import Skills from "./Skills";
import { Link } from 'react-router-dom';

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
          <Link to="/projects">
            <button type="button">
              Click here to see my projects
            </button>
          </Link>
        </div>
      </div>

    </>
  );
}
