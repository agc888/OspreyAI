import React, { useEffect, useState, useRef, useContext } from "react";
import "./PartnersSection.css";
import { Fade } from "react-reveal";
import { partnersSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function PartnersSection() {
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);
  const { isDark } = useContext(StyleContext);
  
  // Configuration options
  const scrollSpeed = 30; // seconds for one complete cycle (lower = faster)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!carouselRef.current || isLoading) return;
    
    // Apply dynamic scrolling speed
    const carousel = carouselRef.current;
    carousel.style.animationDuration = `${scrollSpeed}s`;
    
    // Always keep the animation running
    carousel.style.animationPlayState = 'running';
  }, [isLoading, scrollSpeed]);

  if (!partnersSection.display) {
    return null;
  }
  
  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...partnersSection.partners, ...partnersSection.partners];
  
  // Function to get the appropriate logo based on theme
  const getLogoSrc = (partner) => {
    // Check if partner has separate light/dark logos
    if (partner.darkLogo && partner.lightLogo) {
      return isDark ? partner.darkLogo : partner.lightLogo;
    }
    // Fall back to the default logo
    return partner.logo;
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="partners">
        <div className="partners-main-div">
          <div className="partners-header-div">
            <h1 className="partners-header">{partnersSection.title}</h1>
            <p className="partners-subtitle">{partnersSection.subtitle}</p>
          </div>
          
          <div className="carousel-container">
            {isLoading ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>Loading partners...</div>
            ) : (
              <div 
                ref={carouselRef}
                className="carousel-wrapper"
              >
                {duplicatedPartners.map((partner, index) => (
                  <div key={index} className="carousel-img">
                    <img
                      src={getLogoSrc(partner)}
                      alt={partner.name}
                      className="partner-logo"
                      onError={(e) => {
                        console.error(`Failed to load logo for ${partner.name}`);
                        e.target.onerror = null;
                        // Show partner name as fallback
                        e.target.parentNode.innerHTML = `<div style="text-align:center;font-size:14px;">${partner.name}</div>`;
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}