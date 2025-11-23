import React from "react";
import "./HowItWorksStep.css";

const HowItWorksStep = ({ icon, title, description }) => {
  return (
    <div className="step-card">
      <div className="step-icon-circle">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default HowItWorksStep;
