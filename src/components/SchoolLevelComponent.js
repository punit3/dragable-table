import React from "react";
import CustomizableComponent from "./CustomizableComponent";

// React component for displaying the School Level
const SchoolLevelComponent = () => {
  return (
    // Container for the School Level component
    <div className="inner-left-container">
      {/* Customizable component with the header "School Level" */}
      <CustomizableComponent headerText="School Level">
        {/* Body of the component */}
        <div className="inner-left-container-body">
          {/* Level block with text and arrow icon */}
          <div className="level-block">
            <p>Level 0</p>
            <img src="/images/arrow.svg" alt="arrow-icon" />
          </div>
        </div>
      </CustomizableComponent>
    </div>
  );
};


export default SchoolLevelComponent;
