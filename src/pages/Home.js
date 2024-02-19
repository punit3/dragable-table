import React from "react";
import CustomizableComponent from "../components/CustomizableComponent";
import CustomizableContentComponent from "../components/CutomizableContentComponent"; 
import { skills, priority } from "../data"; 
import SkillCard from "../components/SkillCard";
import "../styles/home.css"; 
import PriorityComponent from "../components/PriorityComponent";
import PriorityCard from "../components/PriorityCard";

const Home = () => {
  // Styles for the inner block in the middle container
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

  // Styles for the priority block in the right container
  const priorityBlockStyles = {
    background: "white",
    display: "flex",
    padding: "10px 8px",
    boxSizing: "border-box",
    flexDirection: "column",
    gap: "12px",
  };

  return (
    <div className="home-page-container">
      <div className="home-inner-container">
        {/* Left container with a customizable component */}
        <div className="inner-left-container">
          <CustomizableComponent headerText="School Level">
            <div className="inner-left-container-body">
              <div className="level-block">
                <p>Level 0</p>
                <img src="/images/arrow.svg" alt="arrow-icon" />
              </div>
            </div>
          </CustomizableComponent>
        </div>

        {/* Middle container with customizable content components */}
        <div className="inner-middle-container">
          <CustomizableComponent headerText="Skills Selected">
            <div className="inner-middle-container-body">
              {/* Customizable content component for "Core" skills */}
              <CustomizableContentComponent
                customStyle={{ height: "276px" }}
                headerText="Core"
                level="(Level 0)"
              >
                <div style={{ ...innerBlockStyles, ...{ height: "256px" } }}>
                  {skills[0].skill.map((item) => (
                    <SkillCard
                      key={item}
                      skill={item}
                      customStyle={{
                        background: skills[0].backgroundColor,
                        borderColor: skills[0].borderColor,
                      }}
                    />
                  ))}
                </div>
              </CustomizableContentComponent>

              {/* Customizable content component for "Special" skills */}
              <CustomizableContentComponent
                customStyle={{ height: "132px" }}
                headerText="Special"
                level="(Level 0)"
              >
                <div style={{ ...innerBlockStyles, ...{ height: "112px" } }}>
                  {skills[1].skill.map((item) => (
                    <SkillCard
                      key={item}
                      skill={item}
                      customStyle={{
                        background: skills[1].backgroundColor,
                        borderColor: skills[1].borderColor,
                      }}
                    />
                  ))}
                </div>
              </CustomizableContentComponent>

              {/* Customizable content component for "Creative" skills */}
              <CustomizableContentComponent
                customStyle={{ height: "180px" }}
                headerText="Creative"
                level="(Level 0)"
              >
                <div style={{ ...innerBlockStyles, ...{ height: "160px" } }}>
                  {skills[2].skill.map((item) => (
                    <SkillCard
                      key={item}
                      skill={item}
                      customStyle={{
                        background: skills[2].backgroundColor,
                        borderColor: skills[2].borderColor,
                      }}
                    />
                  ))}
                </div>
              </CustomizableContentComponent>
            </div>
          </CustomizableComponent>
        </div>

        {/* Right container with customizable components for skill priorities */}
        <div className="inner-right-container">
          <CustomizableComponent headerText="Set Skill Priority">
            <div className="inner-right-container-body">
              {/* Priority component for "School Priority" */}
              <PriorityComponent headerText="School Priority" level="(Level 0)">
                <div style={priorityBlockStyles}>
                  {priority[0].school.map((item) => (
                    <PriorityCard
                      key={item.subject}
                      skill={item.subject}
                      customStyle={{
                        background: item.backgroundColor,
                        borderColor: item.borderColor,
                      }}
                    />
                  ))}
                </div>
              </PriorityComponent>

              {/* Priority component for "Home Priority" */}
              <PriorityComponent headerText="Home Priority" level="(Level 0)">
                <div style={priorityBlockStyles}>
                  {priority[1].Home.map((item) => (
                    <PriorityCard
                      key={item.subject}
                      skill={item.subject}
                      customStyle={{
                        background: item.backgroundColor,
                        borderColor: item.borderColor,
                      }}
                    />
                  ))}
                </div>
              </PriorityComponent>
            </div>
          </CustomizableComponent>
        </div>
      </div>
    </div>
  );
};

export default Home;
