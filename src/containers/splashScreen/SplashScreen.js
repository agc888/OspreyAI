import React, { useContext } from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { splashScreen } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      
      {/* Logo at the top */}
      <div className="splash-title-container">
        <a href="/" className="logo">
          <img 
            src={
              isDark 
                ? require("../../assets/images/OspreyAI_Dark.png")
                : require("../../assets/images/OspreyAI_Light.png")
            }
            alt="OspreyAI Logo"
            className="logo-image"
          />
        </a>
      </div>

      {/* Animation below logo */}
      <div className="splash-animation-container">
        <DisplayLottie 
          animationData={splashScreen.animation} 
          speed={1.5} // slow down the animation
        />
      </div>
      
    </div>
  );
}



