import React from "react";
import CustomizableComponent from "./CustomizableComponent";
import CustomizableContentComponent from "./CutomizableContentComponent";
import SkillCard from "./SkillCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getSkillStyles } from "../utils.js/styleGenerator";

const innerBlockStyles = {
  width: "480px",
  height: "256px",
  padding: "12px",
  borderRadius: "8px",
  display: "flex",
  gap: "8px",
  background: "white",
  boxSizing: "border-box",
  flexWrap: "wrap",
  alignContent: "baseline",
};


const SkillsSelectedComponent = ({ skillData, updateSkillData }) => {
  // The rest of your code for handling drag-and-drop
  console.log("NEW",skillData[0])
  return (
    <div className="inner-middle-container">
      {/* <DragDropContext
        onDragEnd={(result) => onDragEnd(result, skillData, updateSkillData)}
      > */}
        <CustomizableComponent headerText="Skills Selected">
          <div className="inner-middle-container-body">
            {/* Customizable content component for "Core" skills */}
            <CustomizableContentComponent
              customStyle={{ height: "276px" }}
              headerText="Core"
              level="(Level 0)"
            >
              <Droppable droppableId={"skills "+skillData[0].skillName} key={skillData[0].id}>
              {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            ...innerBlockStyles,
                            // ...{ height: "180px" },
                          }}
                        >
                          {skillData[0].skill.map((item, index) => {
                            // debugger;
                            return (
                              <Draggable
                                key={item.value}
                                draggableId={`${item.value} ${item.name}${index}`}
                                index={index*1}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <SkillCard
                                        key={item.value}
                                        skill={item.value}
                                        customStyle={getSkillStyles(item.name)}
                                      />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
              </Droppable>
            </CustomizableContentComponent>

            {/* Customizable content component for "Special" skills */}
            <CustomizableContentComponent
              customStyle={{ height: "132px" }}
              headerText="Special"
              level="(Level 0)"
            >
              <Droppable droppableId={"skills "+skillData[1].skillName} key={skillData[1].id}>
              {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            ...innerBlockStyles,
                            ...{ height: "112px" },
                          }}
                        >
                          {skillData[1].skill.map((item, index) => {
                            // debugger;
                            return (
                              <Draggable
                                key={item.value}
                                draggableId={`${item.value} ${item.name}${index}`}
                                index={index*2}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <SkillCard
                                        key={item.value}
                                        skill={item.value}
                                        customStyle={getSkillStyles(item.name)}
                                      />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
              </Droppable>
            </CustomizableContentComponent>

            {/* Customizable content component for "Creative" skills */}
            <CustomizableContentComponent
              customStyle={{ height: "180px" }}
              headerText="Creative"
              level="(Level 0)"
            >
              <Droppable droppableId={"skills "+skillData[2].skillName} key={skillData[2].id}>
              {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            ...innerBlockStyles,
                            ...{ height: "160px" },
                          }}
                        >
                          {skillData[2].skill.map((item, index) => {
                            // debugger;
                            return (
                              <Draggable
                                key={item.value}
                                draggableId={`${item.value} ${item.name}${index}`}
                                index={index*3}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <SkillCard
                                        key={item.value}
                                        skill={item.value}
                                        customStyle={getSkillStyles(item.name)}
                                      />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
              </Droppable>
            </CustomizableContentComponent>
          </div>
        </CustomizableComponent>
      {/* </DragDropContext> */}
    </div>
  );
};

export default SkillsSelectedComponent;
