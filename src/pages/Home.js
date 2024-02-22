import React, { useState } from "react";
import SkillsSelectedComponent from "../components/SkillsSelectedComponent";
import SetSkillPriorityComponent from "../components/SetSkillPriorityComponent";
import SchoolLevelComponent from "../components/SchoolLevelComponent";
import { skills} from "../data";
import "../styles/home.css";
import "../styles/drag.css";
import { DragDropContext } from "react-beautiful-dnd";
import { handleSkillDrag, moveSkillToPriority } from "../utils.js/updateData";

const Home = () => {
 
  const [skillData, updateSkillData] = useState(skills[0].skillOptions);
  const [priorityData, updatePriorityData] = useState(
    skills[1].priorityOptions
  );
  const onDragEnd = (result, skill_Data, priority_Data, updateSkillData) => {
    // debugger;
    let droppableId=result.destination
   
    if(droppableId===null){
      return
    }
    
    const destinationKeyword = result.destination.droppableId.split(" ")[0];
    const sourceKeyword = result.source.droppableId.split(" ")[0];
    const sourceList = result.source.droppableId.split(" ").pop();
    const destinationList = result.destination.droppableId.split(" ").pop();
    const itemToUpdate = result.draggableId.split(" ").slice(0, -1).join(" ");
    
    
    if (destinationKeyword == "skills" && sourceKeyword == "skills") {
      // const sourceSkillName = sourceList;
      // const destinationSkillName = destinationList;
      const itemToAdd = {
        value: itemToUpdate,
        name: destinationList,
      };

      const updatedSkillsData = handleSkillDrag(
        skillData,
        sourceList,
        destinationList,
        itemToAdd
      );
      // debugger;
      updateSkillData([...updatedSkillsData]);
    } else if (
      destinationKeyword == "priority" &&
      sourceKeyword == "priority"
    ) {
      let destinationSkill=result.draggableId.split(" ").pop()
      const item = result.draggableId.split(" ").slice(0, -2).join(" ");
      const itemToAdd = {
        value: item,
        name: destinationSkill,
      };
      const updatedPriorityData = handleSkillDrag(
        priorityData,
        sourceList,
        destinationList,
        itemToAdd
      );

      // debugger;
      updatePriorityData([...updatedPriorityData]);
    } else if (
      destinationKeyword == "priority" &&
      sourceKeyword == "skills"
    ) {
     
      const itemToAdd = {
        value: itemToUpdate,
        name:sourceList, // Assuming the name for priority skills is "Priority"
      };
      debugger
      const { updatedSkillData, updatedPriorityData } = moveSkillToPriority(
        skillData,
        priorityData,
        sourceList,
        destinationList,
        itemToAdd
      );

      // console.log(updatedSkillData);
      // console.log(updatedPriorityData);
      updateSkillData([...updatedSkillData]);
      updatePriorityData([...updatedPriorityData]);
    }
  };


  return (
    <div className="home-page-container">
      <div className="home-inner-container">
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(result, skillData, priorityData, updateSkillData)
          }
        >
          <SchoolLevelComponent />
          <SkillsSelectedComponent
            skillData={skillData}
            updateSkillData={updateSkillData}
          />
          <SetSkillPriorityComponent
            skillData={skillData}
            priorityData={priorityData}
            updateSkillData={updateSkillData}
            updatePriorityData={updatePriorityData}
          />
        </DragDropContext>
      </div>
    </div>
  );
};

export default Home;
