import React from "react";

const CustomizableContentComponent = ({
  headerText,
  customStyle,
  children,
  level,
}) => {
  // Default styles for the component
  const defaultStyles = {
    width: "512px",
    // height: "319px",
    borderRadius: "8px",
    background: "#E2EBF8",

  };

  const headerStyles = {
    width: "512px",
    height: "43px",
    padding: "10px 16px 6px 16px",
    gap: "8px",
    display: "flex",
    alignItems: "center",
    boxSizing: 'border-box',

  };

  const headingOne = {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "27px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#676565",
  };

  const headingSecond = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#3A67FA",
  };

  const bodyContainer = {
    width: "512px",
    // height: "276px",
    padding: " 10px 16px 10px 16px",
    borderRadius: "0px 0px 8px 8px",
    border: "1px 0px 0px 0px",
    boxSizing: 'border-box',
    
    
    
  };

  // Merge default styles with custom styles from props
  const mergedStyles = { ...bodyContainer, ...customStyle };

  return (
    <div style={defaultStyles}>
      <div style={headerStyles}>
        <span style={headingOne}>{headerText}</span>
        <span style={headingSecond}>{level}</span>
      </div>

      <div style={mergedStyles}>{children}</div>
    </div>
  );
};

export default CustomizableContentComponent