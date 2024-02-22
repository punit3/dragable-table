import React from "react";
import CustomizableComponent from "./CustomizableComponent";
import PriorityComponent from "./PriorityComponent";
import PriorityCard from "./PriorityCard";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getSkillStyles } from "../utils.js/styleGenerator";

// React component for setting skill priority
const SetSkillPriorityComponent = ({
  priorityData,
  skillData,
  updatePriorityData,
  updateSkillData,
}) => {
  // Styles for the priority block
  const priorityBlockStyles = {
    background: "white",
    display: "flex",
    padding: "10px 8px",
    boxSizing: "border-box",
    flexDirection: "column",
    gap: "12px",
  };
  // Function to handle updates when a card is clicked on close btn
  const handleUpdate = (value, indexToUpdate) => {
    // Check for duplicacy in skillData
    const isDuplicateInSkillData = skillData.some((item) => {
      const duplicateFound = item.skill.some(
        (skillItem) => JSON.stringify(skillItem) === JSON.stringify(value)
      );
      return duplicateFound;
    });

    // Check for duplicacy in priorityData
    const isDuplicateInPriorityData = priorityData.some(
      (item) => JSON.stringify(item.skill) === JSON.stringify(value)
    );

    if (isDuplicateInSkillData) {
      
      return;
    }

    // Update the skill data
    const updatedSkillData = skillData.map((item) =>
      item.skillName === value.name
        ? { ...item, skill: [...item.skill, value] }
        : { ...item }
    );

    // Remove the item from priorityData if present
    const updatedPriorityData = priorityData.map((item) => {
      const updatedItem = {
        ...item,
        skill: item.skill.filter(
          (x) => JSON.stringify(x) !== JSON.stringify(value)
        ),
      };
      return updatedItem;
    });

   
    updateSkillData([...updatedSkillData]);
    updatePriorityData([...updatedPriorityData]);
  };

  return (
    // Container for the Set Skill Priority component
    <div className="inner-right-container">
      {/* Customizable component with the header "Set Skill Priority" */}
      <CustomizableComponent headerText="Set Skill Priority">
        {/* Body of the component */}
        <div className="inner-right-container-body">
          {/* Loop through priorityData to render PriorityComponents */}
          {priorityData.map((priority, index) => (
            <PriorityComponent
              key={priority.skillName}
              headerText={priority.skillName}
              level="(Level 0)"
            >
              {/* Droppable area for each skill category */}
              <Droppable
                droppableId={`priority ${priority.skillName}`}
                key={priority.skillName}
              >
                {(provided, snapshot) => (
                  // Priority block styles for the Droppable area
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={priorityBlockStyles}
                  >
                    {/* Loop through priority.skill to render PriorityCards */}
                    {priority.skill.map((item, itemIndex) => (
                      <Draggable
                        key={item.value}
                        draggableId={`${item.value} ${itemIndex} ${item.name}`}
                        index={itemIndex}
                      >
                        {(provided, snapshot) => (
                          // Individual PriorityCard with drag-and-drop capabilities
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {/* PriorityCard component */}
                            <PriorityCard
                              key={item.value}
                              skill={item}
                              index={index}
                              handleDelete={() => handleUpdate(item, index)}
                              customStyle={getSkillStyles(item.name)}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </PriorityComponent>
          ))}
        </div>
      </CustomizableComponent>
    </div>
  );
};

export default SetSkillPriorityComponent;
