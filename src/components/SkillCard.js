import React from "react";

// SkillCard component to display a skill with custom styling
const SkillCard = ({ customStyle, skill }) => {
  // Default styles for the SkillCard
  const defaultStyles = {
    height: "40px",
    padding: "8px 10px 8px 10px",
    borderRadius: "8px",
    border: "1.2px solid",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    cursor: "pointer",
  };

  // Merging default styles with custom styles (if provided)
  const mergedStyles = { ...defaultStyles, ...customStyle };

  // Rendering the SkillCard with the merged styles and skill content
  return <div style={mergedStyles}>{skill}</div>;
};


export default SkillCard;
