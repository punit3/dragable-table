import React from "react";

const Policies = () => {
  // Styles for the container
  const containerStyles = {
    width: "1001px",
    height: "439px",
    top: "513px",
    left: "1666px",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    background: "#d9d9d9",
    margin: "20px",
    padding: "40px",
  };

  return (
    <div style={containerStyles}>
      {/* Text content describing the policies */}
      For level 0, there are some skills to be selected. Skills are divided into 3 types - core, special, and creative. Each skill has different colors. The skills in different sections need to be arranged according to the user's environment, i.e., implemented at school or at home.

      Skills here need to be dragged and dropped from the "Skills Selected" column to the "Set Skills Priority" column.
      
      A skill from the "Skills Selected" column should be dragged to either the school or home section in the "Set Skills Priority" column.
      
      The skills in a particular section should be draggable between columns and can also be reordered in the same column.
      
      The skills from the "Set Skills Priority" column should have a cancel button. On clicking the button, the skill should return to where it was dragged from. Interchanging skills between school and home can be done.

      Candidates can share the code base in a zip folder or can push the code on Git and share the link.
    </div>
  );
};

export default Policies;
