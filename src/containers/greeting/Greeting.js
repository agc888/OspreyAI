import React, { useContext, useRef } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const sliderRef = useRef(null);
  const beforeImageRef = useRef(null);
  const sliderLineRef = useRef(null);
  const sliderIconRef = useRef(null);

  const handleSliderChange = (e) => {
    const value = `${e.target.value}%`;
    beforeImageRef.current.style.width = value;
    sliderLineRef.current.style.left = value;
    sliderIconRef.current.style.left = value;
  };

  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">

      <div className="greeting-content">
          <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
            {greeting.title}
          </h1>
      </div>
        {/* Image Comparison Slider */}
        <div className="image-comparison">
          <div className="images-container">
            <img
              ref={beforeImageRef}
              className="before-image"
              src={require("../../assets/images/he.png")}
              alt="Before"
            />
            <img
              className="after-image"
              src={require("../../assets/images/imm.png")}
              alt="After"
            />

            <div ref={sliderLineRef} className="slider-line"></div>
            <div ref={sliderIconRef} className="slider-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>

            <input
              type="range"
              className="slider"
              min="0"
              max="100"
              defaultValue="50"
              ref={sliderRef}
              onInput={handleSliderChange}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="greeting-content">
          <p
            className={
              isDark
                ? "dark-mode greeting-text-p"
                : "greeting-text-p subTitle"
            }
          >
            {greeting.subTitle}
          </p>
          <SocialMedia />
          <div className="button-greeting-div">
            <Button text="Contact me" href="#contact" />
            {greeting.resumeLink && (
              <a
                href={require("./resume.pdf")}
                download="Resume.pdf"
                className="download-link-button"
              >
                <Button text="Download my resume" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
