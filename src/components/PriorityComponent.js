import React from "react";

const PriorityComponent = ({ headerText, customStyle, children }) => {
  // Default styles for the component
  const defaultStyles = {
    height: "442.5px",
    borderRadius: "8px",
    background: "white",
    overflow: "scroll",
  };

  const headerStyles = {
    width: "318px",
    // height: "65px",
    padding: "16px",
    bordeRadius: "8px 8px 0px 0px",
    border: " 1px 1px, 0px, 1px",
    gap: "4px",

    color: "#676565",

    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "33px",
    letterSpacing: "0em",
    textAlign: "left",
    boxSizing: "border-box",
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

export default PriorityComponent;
