import React from "react";
import CustomizableComponent from "./CustomizableComponent";
import CustomizableContentComponent from "./CutomizableContentComponent";
import SkillCard from "./SkillCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  const onDragEnd = (result, columns,updateSkillData) => {
    debugger;
    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.skill];
      const destItems = [...destColumn.skill];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      updateSkillData({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          skill: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          skill: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.skill];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      updateSkillData({
        ...columns,
        [source.droppableId]: {
          ...column,
          skill: copiedItems,
        },
      });
    }
  };

  return (
    <div className="inner-middle-container">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, skillData, updateSkillData)}
      >
        <CustomizableComponent headerText="Skills Selected">
          <div className="inner-middle-container-body">
            {/* Customizable content component for "Core" skills */}
            <CustomizableContentComponent
              customStyle={{ height: "276px" }}
              headerText="Core"
              level="(Level 0)"
            >
              <Droppable droppableId={skillData[0].id} key={skillData[0].name}>
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
                          {skillData[0].skill.map((item, index) => {
                            // debugger;
                            return (
                              <Draggable
                                key={item}
                                draggableId={item}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <SkillCard
                                        key={item}
                                        skill={item}
                                        // customStyle={{
                                        //   background: skills[1].backgroundColor,
                                        //   borderColor: skills[1].borderColor,
                                        // }}
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
              <Droppable droppableId={skillData[1].id} key={skillData[1]}>
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
                                key={item}
                                draggableId={item}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <SkillCard
                                        key={item}
                                        skill={item}
                                        // customStyle={{
                                        //   background: skills[1].backgroundColor,
                                        //   borderColor: skills[1].borderColor,
                                        // }}
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
              <Droppable droppableId={skillData[2].id} key={skillData[2]}>
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
                                key={item}
                                draggableId={item}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <SkillCard
                                        key={item}
                                        skill={item}
                                        // customStyle={{
                                        //   background: skills[1].backgroundColor,
                                        //   borderColor: skills[1].borderColor,
                                        // }}
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
      </DragDropContext>
    </div>
  );
};

export default SkillsSelectedComponent;
