import React from "react";
import "./PartnersSection.css";
import { Fade } from "react-reveal";
import { partnersSection } from "../../portfolio";

export default function PartnersSection() {
  if (!partnersSection.display) {
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="partners">
        <div className="partners-main-div">
          <div className="partners-header-div">
            <h1 className="partners-header">{partnersSection.title}</h1>
            <p className="partners-subtitle">{partnersSection.subtitle}</p>
          </div>
          
          <div className="reveal-up carousel-container">
            <div className="carousel-wrapper">
              {partnersSection.partners.map((partner, index) => (
                <div key={index} className="carousel-img">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}