import React, { useState } from "react";
import SkillsSelectedComponent from "../components/SkillsSelectedComponent";
import SetSkillPriorityComponent from "../components/SetSkillPriorityComponent";
import SchoolLevelComponent from "../components/SchoolLevelComponent";
import { skills, priority } from "../data";
import "../styles/home.css"
import "../styles/drag.css"

const Home = () => {
  const [skillData, updateSkillData] = useState(skills[0].skillOptions);
  // Your existing code...
  return (
    <div className="home-page-container">
      <div className="home-inner-container">
        <SchoolLevelComponent />
        <SkillsSelectedComponent skillData={skillData} updateSkillData={updateSkillData} />
        <SetSkillPriorityComponent />
      </div>
    </div>
  );
};

export default Home;
