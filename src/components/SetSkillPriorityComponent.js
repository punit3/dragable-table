import React from "react";
import CustomizableComponent from "./CustomizableComponent";
import PriorityComponent from "./PriorityComponent";
import PriorityCard from "./PriorityCard";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getSkillStyles } from "../utils.js/styleGenerator";

const SetSkillPriorityComponent = ({
  priorityData,
  skillData,
  updatePriorityData,
  updateSkillData,
}) => {
  const priorityBlockStyles = {
    background: "white",
    display: "flex",
    padding: "10px 8px",
    boxSizing: "border-box",
    flexDirection: "column",
    gap: "12px",
  };

  const handleUpdate = (value, indexToUpdate) => {
    const updatedSkillData = skillData.map((item) => (
      item.skillName === value.name
        ? { ...item, skill: [...item.skill, value] }
        : { ...item }
    ));

    const updatedPriorityData = priorityData.map((item, index) => (
      index === indexToUpdate
        ? { ...item, skill: item.skill.filter((x) => x.value !== value.value) }
        : item
    ));

    updateSkillData([...updatedSkillData]);
    updatePriorityData([...updatedPriorityData]);
  };

  return (
    <div className="inner-right-container">
      <CustomizableComponent headerText="Set Skill Priority">
        <div className="inner-right-container-body">
          {/* Loop through priorityData to render PriorityComponents */}
          {priorityData.map((priority, index) => (
            <PriorityComponent
              key={priority.skillName}
              headerText={priority.skillName}
              level="(Level 0)"
            >
              <Droppable
                droppableId={`priority ${priority.skillName}`}
                key={priority.skillName}
              >
                {(provided, snapshot) => (
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
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
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
