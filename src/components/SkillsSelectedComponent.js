import React from "react";
import CustomizableComponent from "./CustomizableComponent";
import CustomizableContentComponent from "./CutomizableContentComponent";
import SkillCard from "./SkillCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getSkillStyles } from "../utils.js/styleGenerator";

const innerBlockStyles = {
  width: "100%", // Adjusted to full width
  height: "100%", // Adjusted to full height
  padding: "12px",
  borderRadius: "8px",
  display: "flex",
  gap: "8px",
  background: "white",
  boxSizing: "border-box", // Added to include padding and border in the element's total width and height
  flexWrap: "wrap",
  alignContent: "baseline",
};

const skillCategories = [
  { id: 0, name: "Core", height: "256px" },
  { id: 1, name: "Special", height: "112px" },
  { id: 2, name: "Creative", height: "160px" },
];

const SkillsSelectedComponent = ({ skillData, updateSkillData }) => {
  return (
    <div className="inner-middle-container">
      <CustomizableComponent headerText="Skills Selected">
        <div className="inner-middle-container-body">
          {skillCategories.map((category) => (
            <CustomizableContentComponent
              key={category.id}
              // customStyle={{ height: category.height }}
              headerText={category.name}
              level="(Level 0)"
            >
              <Droppable droppableId={`skills ${category.name}`} key={category.id}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      ...innerBlockStyles,
                      height: category.height,
                    }}
                  >
                    {skillData[category.id].skill.map((item, index) => (
                      <Draggable
                        key={item.value}
                        draggableId={`${item.value} ${item.name}${index}`}
                        index={index + category.id * 10}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <SkillCard
                              key={item.value}
                              skill={item.value}
                              customStyle={getSkillStyles(item.name)}
                              style={{ boxSizing: "border-box" }} // Added to include padding and border in the element's total width and height
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </CustomizableContentComponent>
          ))}
        </div>
      </CustomizableComponent>
    </div>
  );
};

export default SkillsSelectedComponent;
