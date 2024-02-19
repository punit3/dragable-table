import React from "react";

const CustomizableComponent = ({ headerText, customStyle, children }) => {
  // Default styles for the component
  const defaultStyles = {};

  const headerStyles = {
    padding: "16px",
    borderRadius: "8px 8px 0px 0px",
    border: " 1px 1px, 0px, 1px",
    gap: "4px",
    background: "#1E2773",
    borderWidth: " 1px, 1px, 0px, 1px",
    color: "white",
    borderStyle: "solid",
    fontFamily: " Poppins",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "33px",
    letterSpacing: "0em",
    textAlign: "left",

    borderColor: "#1E2773",
  };

  // Merge default styles with custom styles from props
  const mergedStyles = { ...defaultStyles, ...customStyle };

  return (
    <div style={mergedStyles}>
      <div style={headerStyles}>{headerText || "Default Header"}</div>

      <div>{children}</div>
    </div>
  );
};

export default CustomizableComponent;