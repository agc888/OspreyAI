import React, { useContext, useRef, useEffect } from "react";
import "./PipelineSection.scss";
import { Fade } from "react-reveal";
import { pipelineSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Lottie from "lottie-react";

export default function PipelineSection() {
  const { isDark } = useContext(StyleContext);
  const lottieRef = useRef(); // Create a ref for the Lottie animation

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.3); // Set speed programmatically
    }
  }, []);

  if (!pipelineSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="pipeline">
        <div className="pipeline-main-div">
          <div className="pipeline-header-div">
            <h1 className="pipeline-header">{pipelineSection.title}</h1>
            <p className="pipeline-subtitle">{pipelineSection.subtitle}</p>
          </div>

          <div className="pipeline-content">
            <div className="pipeline-visuals">
              <div className="pipeline-image-column">
                <img
                  src={isDark ? pipelineSection.darkLogo : pipelineSection.lightLogo}
                  alt="Pipeline visualization"
                  className="pipeline-detail-image"
                />
              </div>
              <div className="pipeline-svg-column">
                {pipelineSection.beforeDescription && (
                  <div className="pipeline-before-description">
                    {pipelineSection.beforeDescription}
                  </div>
                )}
                {(pipelineSection.lightAnimatedSvg || pipelineSection.darkAnimatedSvg) && (
                  <div className="pipeline-animated-svg">
                    <Lottie
                      lottieRef={lottieRef} // Pass the ref to Lottie
                      animationData={isDark ? pipelineSection.darkAnimatedSvg : pipelineSection.lightAnimatedSvg}
                      loop={true}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                )}
                {pipelineSection.afterDescription && (
                  <div className="pipeline-after-description">
                    {pipelineSection.afterDescription}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}