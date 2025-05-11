import React, { useState, useContext} from "react";
import "./TechnologiesSection.scss";
import { Fade } from "react-reveal";
import { technologiesSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";


export default function TechnologiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDark } = useContext(StyleContext);

  
  if (!technologiesSection.display) {
    return null;
  }

  // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const getLogoSrc = (platform) => {
    // Check if partner has separate light/dark logos
    if (platform.darkLogo && platform.lightLogo) {
      return isDark ? platform.darkLogo : platform.lightLogo;
    }
    // Fall back to the default logo
    return platform.logo;
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="technologies">
        <div className="technologies-main-div">
          <div className="technologies-header-div">
            <h1 className="technologies-header">{technologiesSection.title}</h1>
            <p className="technologies-subtitle">{technologiesSection.subtitle}</p>
          </div>
          
          <div className="tech-logos-container">
            {technologiesSection.technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`tech-logo-wrapper ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <span className="tech-logo-text">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className="tech-details-container">
            {technologiesSection.technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`tech-details ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="tech-image-container">
                  <img 
                    src={tech.image} 
                    alt={`${tech.name} technology`} 
                    className="tech-detail-image"
                  />
                </div>
                <div className="tech-description">
                  <h3>{tech.name}</h3>
                  <p>{tech.description}</p>
                  <div className="platform-logos-container">
                    {tech.platforms && tech.platforms.map((platformName, platIndex) => {
                      const platform = technologiesSection.platformsSection.platforms.find(
                        (p) => p.name === platformName
                      );
                      return platform ? (
                        <img 
                          key={platIndex}
                          src={getLogoSrc(platform)}
                          alt={`${platform.name} logo`}
                          className="platform-logo"
                        />
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}