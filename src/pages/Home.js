import React, { useState } from "react";
import SkillsSelectedComponent from "../components/SkillsSelectedComponent";
import SetSkillPriorityComponent from "../components/SetSkillPriorityComponent";
import SchoolLevelComponent from "../components/SchoolLevelComponent";
import { skills } from "../data";
import "../styles/home.css";
import "../styles/drag.css";
import { DragDropContext } from "react-beautiful-dnd";
import { handleSkillDrag, moveSkillToPriority } from "../utils.js/updateData";

const Home = () => {
  // State to manage skill and priority data
  const [skillData, updateSkillData] = useState(skills[0].skillOptions);
  const [priorityData, updatePriorityData] = useState(
    skills[1].priorityOptions
  );

  // Handler for drag-and-drop events
  const onDragEnd = (result) => {
    // Check if there's no valid destination
    let droppableId = result.destination;
    if (droppableId === null) {
      return;
    }

    // Extract information from the drag result
    const destinationKeyword = result.destination.droppableId.split(" ")[0];
    const sourceKeyword = result.source.droppableId.split(" ")[0];
    const sourceList = result.source.droppableId.split(" ").pop();
    const destinationList = result.destination.droppableId.split(" ").pop();
    const itemToUpdate = result.draggableId.split(" ").slice(0, -1).join(" ");

    // Handle different scenarios based on source and destination
    if (destinationKeyword === "skills" && sourceKeyword === "skills") {
      // Move skill within the skills category
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
      updateSkillData([...updatedSkillsData]);
    } else if (
      destinationKeyword === "priority" &&
      sourceKeyword === "priority"
    ) {
      // Move skill within the priority category
      let destinationSkill = result.draggableId.split(" ").pop();
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
      updatePriorityData([...updatedPriorityData]);
    } else if (
      destinationKeyword === "priority" &&
      sourceKeyword === "skills"
    ) {
      // Move skill from skills to priority
      const itemToAdd = {
        value: itemToUpdate,
        name: sourceList, // Assuming the name for priority skills is "Priority"
      };
      const { updatedSkillData, updatedPriorityData } = moveSkillToPriority(
        skillData,
        priorityData,
        sourceList,
        destinationList,
        itemToAdd
      );
      updateSkillData([...updatedSkillData]);
      updatePriorityData([...updatedPriorityData]);
    }
  };

  return (
    <div className="home-page-container">
      <div className="home-inner-container">
        {/* DragDropContext for handling drag-and-drop events */}
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(result, skillData, priorityData, updateSkillData)
          }
        >
          {/* Components for displaying school level, selected skills, and skill priority */}
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
