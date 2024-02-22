import React from "react";
import CustomizableComponent from "./CustomizableComponent";
import PriorityComponent from "./PriorityComponent";
import PriorityCard from "./PriorityCard";
import { priority } from "../data";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getSkillStyles } from "../utils.js/styleGenerator";

const SetSkillPriorityComponent = ({
  priorityData,
  skillData,
  updatePriorityData,
  updateSkillData,
}) => {
  console.log("skill---",skillData)
  console.log("prioirityData",priorityData)
  const priorityBlockStyles = {
    background: "white",
    display: "flex",
    padding: "10px 8px",
    boxSizing: "border-box",
    flexDirection: "column",
    gap: "12px",
  };

  const handleUpdate=(value,indexToupdate)=>{

    console.log(skillData)
    let skill_data=skillData.map((item)=>{
      
      if(item.skillName==value.name){
        return {
          ...item,
          skill:[...item.skill,value]
        }
      }else{
        return {...item}
      }
    })
    const prioirity_data = priorityData.map((item, index) => {
      debugger
      if (index === indexToupdate) {
        console.log("xxx", index);
        // Update the specific object at the desired index
        return {
          ...item,
          skill: item.skill.filter((x) => x.value !== value.value),
        };
      }
      return item;
    });

// debugger
// console.log("skillName",updatedPriorityData)
    updateSkillData([...skill_data])
    updatePriorityData([...prioirity_data])
    
    // debugger

  }

  console.log("---prio", priorityData);
  return (
    <div className="inner-right-container">
      <CustomizableComponent headerText="Set Skill Priority">
        <div className="inner-right-container-body">
          {/* Priority component for "School Priority" */}
          <PriorityComponent headerText="School Priority" level="(Level 0)">
            <Droppable droppableId={"priority "+priorityData[0].skillName} key={priorityData[0].skillName}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={priorityBlockStyles}
                  >
                    {priorityData[0].skill.map((item, index) => (
                      <Draggable
                        key={item.value}
                        draggableId={`${item.value} ${index} ${item.name}`}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <PriorityCard
                                key={item.value}
                                skill={item}
                                index={0}
                                handleDelete={handleUpdate}
                                customStyle={getSkillStyles(item.name)}
                              />
                            </div>
                          );
                        }}
                      </Draggable>
                    ))}
                  </div>
                );
              }}
            </Droppable>
          </PriorityComponent>

          {/* Priority component for "Home Priority" */}
          <PriorityComponent headerText="Home Priority" level="(Level 0)">
            <Droppable droppableId={"priority "+priorityData[1].skillName} key={priorityData[1].skillName}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={priorityBlockStyles}
                  >
                    {priorityData[1].skill.map((item, index) => (
                      <Draggable
                        key={item.value}
                        draggableId={`${item.value} ${item.name}`}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <PriorityCard
                                key={item.value}
                                skill={item}
                                index={1}
                                handleDelete={handleUpdate}
                                customStyle={getSkillStyles(item.name)}
                              />
                            </div>
                          );
                        }}
                      </Draggable>
                    ))}
                  </div>
                );
              }}
            </Droppable>
          </PriorityComponent>
        </div>
      </CustomizableComponent>
    </div>
  );
};

export default SetSkillPriorityComponent;
