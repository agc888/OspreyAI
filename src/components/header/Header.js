import React, {useContext} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  partnersSection,
  pipelineSection,
  workExperiences,
  technologiesSection,
  skillsSection,
  bigProjects,
  achievementSection,
  educationInfo
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewPartner = partnersSection.display;
  const viewPipeline = pipelineSection.display;
  const viewTechnologies = technologiesSection.display;
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewProjects = bigProjects.display;
  const viewEducation = educationInfo.display;

  return (
    <div className="header-container">
      <header className={isDark ? "dark-menu header" : "header"}>
      <a href="/" className="logo">
          <img 
            src={isDark 
              ? require("../../assets/images/OspreyAI_Dark.png")  // Dark mode image
              : require("../../assets/images/OspreyAI_Light.png") // Light mode image
            }
            alt="OspreyAI Logo"
            className="logo-image"
          />
      </a> 
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
        {viewPartner && (
            <li>
              <a href="#partners">Partners</a>
            </li>
          )}
          {viewPipeline && (
            <li>
              <a href="#pipeline">Pipeline</a>
            </li>
          )}
          {viewTechnologies && (
            <li>
              <a href="#technolgies">Technolgies</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experiences</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;