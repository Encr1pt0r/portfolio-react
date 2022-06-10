import React from "react";
import "./Skills.scss";
import { FaGithubSquare, FaJava, FaHtml5, 
  FaCss3Alt, FaAngular, FaReact, 
  FaFigma, FaTrello, FaSlack, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiAndroidstudio } from 'react-icons/si';
import { AiOutlineGitlab } from 'react-icons/ai';
import { DiGit } from 'react-icons/di';

export default function Skills() {

  return (
    <>
      <h3 className="skills__heading">Looking forward to working with</h3>
      <div className="skills__container">
        <FaReact className="skills__container__icon" />
        <SiAndroidstudio className="skills__container__icon" />
        <FaNodeJs className="skills__container__icon" />
        <FaJava className="skills__container__icon" />
      </div>

      <h3 className="skills__heading">The tools that I am familar with</h3>
      <div className="skills__container">
        <FaJava className="skills__container__icon" aria-label="Java" />
        <FaHtml5 className="skills__container__icon" aria-label="HTML5" />
        <FaCss3Alt className="skills__container__icon" aria-label="CSS" />
        <FaReact className="skills__container__icon" aria-label="React" />
        <IoLogoJavascript className="skills__container__icon" aria-label="JavaScript" />
        <SiAndroidstudio className="skills__container__icon" aria-label="Android" />
        <SiTypescript className="skills__container__icon" aria-label="TypeScript" />
        <FaNodeJs className="skills__container__icon" aria-label="NodeJS" />
        <DiGit className="skills__container__icon" aria-label="Git" />
        <FaFigma className="skills__container__icon" aria-label="Figma" />
        <FaGithubSquare className="skills__container__icon" aria-label="GitHub" />
        <AiOutlineGitlab className="skills__container__icon" aria-label="GitLab" />
        <FaAngular className="skills__container__icon" aria-label="Angular" />
        <FaSlack className="skills__container__icon" aria-label="Slack" />
        <FaTrello className="skills__container__icon" aria-label="Trello" />
      </div>
      
    </>
  );
}
