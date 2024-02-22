import React from "react";
import CustomizableComponent from "./CustomizableComponent";

const SchoolLevelComponent = () => {
  return (
    <div className="inner-left-container">
      <CustomizableComponent headerText="School Level">
        <div className="inner-left-container-body">
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
