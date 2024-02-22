import React from "react";
import CustomizableComponent from "./CustomizableComponent";
import CustomizableContentComponent from "./CutomizableContentComponent"; 
import SkillCard from "./SkillCard";
import {  Droppable, Draggable } from "react-beautiful-dnd";
import { getSkillStyles } from "../utils.js/styleGenerator";

// Styles for the inner block
const innerBlockStyles = {
  width: "100%",
  height: "100%",
  padding: "12px",
  borderRadius: "8px",
  display: "flex",
  gap: "8px",
  background: "white",
  boxSizing: "border-box",
  flexWrap: "wrap",
  alignContent: "baseline",
};

// Define categories for skills
const skillCategories = [
  { id: 0, name: "Core", height: "256px" },
  { id: 1, name: "Special", height: "112px" },
  { id: 2, name: "Creative", height: "160px" },
];

const SkillsSelectedComponent = ({ skillData, updateSkillData }) => {
  return (
    <div className="inner-middle-container">
      {/* Container for customizable component */}
      <CustomizableComponent headerText="Skills Selected">
        <div className="inner-middle-container-body">
          {/* Loop through skill categories */}
          {skillCategories.map((category) => (
            <CustomizableContentComponent
              key={category.id}
              headerText={category.name}
              level="(Level 0)"
            >
              {/* Droppable area for each skill category */}
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
                    {/* Loop through skills in the current category */}
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
                            {/* SkillCard component for each skill */}
                            <SkillCard
                              key={item.value}
                              skill={item.value}
                              customStyle={getSkillStyles(item.name)}
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
