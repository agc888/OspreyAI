import "./PipelineSection.scss";
import { Fade } from "react-reveal";
import { pipelineSection } from "../../portfolio";

export default function PipelineSection() {
  
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
            <div className="pipeline-image-container">
              <img 
                src={pipelineSection.image} 
                alt="Pipeline visualization" 
                className="pipeline-detail-image"
              />
            </div>
            <div className="pipeline-description">
              {pipelineSection.description}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}