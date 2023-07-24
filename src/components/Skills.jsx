import react, {useState} from "react";
import SkillBox from "./SkillBox"

const mySkills = [
  {
    skill: "HTML",
    skillPoint: 20, 
    skillColor: "html"
  },
  {
    skill: "CSS",
    skillPoint: 20,
    skillColor: "css"
  },
  {
    skill: "JAVASCRIPT",
    skillPoint: 20,
    skillColor: "js"
  },
  {
    skill: "REACT",
    skillPoint: 18,
    skillColor: "react"
  },
  {
    skill: "JAVA",
    skillPoint: 18,
    skillColor: "java"
  },
  {
    skill: "PYTHON",
    skillPoint: 15,
    skillColor: "python"
  },
  {
    skill: "MySQL",
    skillPoint: 14,
    skillColor: "sql"
  },
  {
    skill: "UNITY",
    skillPoint: 20,
    skillColor: "unity"
  },
];

function Skills() {

  const [activeSkills,setActiveSkills] = useState({
    html:false,
    css: false,
    js: false,
    react: false,
    java: false,
    python: false,
    sql: false,
    unity: false,
  });

  const activateSkill = () => {
    setActiveSkills((prevSkills) => {
      const updatedSkills = { ...prevSkills };
      const skillKeys = Object.keys(updatedSkills);
      const nextIndex = skillKeys.findIndex((skill) => !updatedSkills[skill]);
      const nextSkill = skillKeys[nextIndex];
      if (nextSkill) {
        updatedSkills[nextSkill] = true;
      }
      return updatedSkills;
    });
  };

  const activateAllSkills = () => {
    setActiveSkills((prevSkills) => {
      // Create a new object with all skills set to true
      const updatedSkills = {};
      for (const skill in prevSkills) {
        updatedSkills[skill] = true;
      }
      return updatedSkills;
    });
  };

  return <>
    <div className="skills">
      <div className="skills-bg"></div>
      <div className="skills-title">Skills</div>
      <div className="skills-container">
        <div className="skills-small-container">
          {mySkills.map(skill => 
            <SkillBox {...skill} isActive={activeSkills[skill.skillColor]}    />
          )}
        </div>
        <div className="skills-char-container">
          <img src="./img/character1.gif" alt="" className="skills-img" />
          <div className="skills-desc-container">
            <div className="skills-char-name">Michael</div>
            <div className="skills-level">Lvl 29</div>
          </div>
          <div className="skills-dice-container">
            <div className="skills-dice"></div>
            <div className="skills-dice-buttons">
              <a className="skills-button" onClick={activateSkill}>Roll Stats</a>
              <a className="skills-button" onClick={activateAllSkills}>Skip</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Skills;