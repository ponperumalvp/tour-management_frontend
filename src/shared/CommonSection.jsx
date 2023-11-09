import React from "react";
import "./CommonSection.css";
const CommonSection = ({ title }) => {
  return (
    <div className="common_section">
      <div className="container">
        <h2 className="text-white">{title}</h2>
      </div>
    </div>
  );
};

export default CommonSection;
