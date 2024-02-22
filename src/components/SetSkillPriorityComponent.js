import React from "react";
import CustomizableComponent from "./CustomizableComponent";
import PriorityComponent from "./PriorityComponent";
import PriorityCard from "./PriorityCard";
import { priority } from "../data";

const SetSkillPriorityComponent = () => {
  const priorityBlockStyles = {
    background: "white",
    display: "flex",
    padding: "10px 8px",
    boxSizing: "border-box",
    flexDirection: "column",
    gap: "12px",
  };

  return (
    <div className="inner-right-container">
      <CustomizableComponent headerText="Set Skill Priority">
        <div className="inner-right-container-body">
          {/* Priority component for "School Priority" */}
          <PriorityComponent headerText="School Priority" level="(Level 0)">
            <div style={priorityBlockStyles}>
              {priority[0].school.map((item) => (
                <PriorityCard
                  key={item.subject}
                  skill={item.subject}
                  customStyle={{
                    background: item.backgroundColor,
                    borderColor: item.borderColor,
                  }}
                />
              ))}
            </div>
          </PriorityComponent>

          {/* Priority component for "Home Priority" */}
          <PriorityComponent headerText="Home Priority" level="(Level 0)">
            <div style={priorityBlockStyles}>
              {priority[1].Home.map((item) => (
                <PriorityCard
                  key={item.subject}
                  skill={item.subject}
                  customStyle={{
                    background: item.backgroundColor,
                    borderColor: item.borderColor,
                  }}
                />
              ))}
            </div>
          </PriorityComponent>
        </div>
      </CustomizableComponent>
    </div>
  );
};

export default SetSkillPriorityComponent;
