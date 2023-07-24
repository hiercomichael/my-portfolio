import react, {useState, useLayoutEffect} from "react";

function SkillBox({skill, skillPoint, skillColor, isActive}) {
  
  const currentSkill = isActive ? skillPoint : 0;

  const [count,setCount] = useState(0);
  useLayoutEffect(() => {
    const staggeredCount = () => {
      setTimeout(() => {
        if(currentSkill && count < currentSkill) {
          setCount(prev => prev + 1)
        } 
      },100)
    }
    staggeredCount();
  },[count, currentSkill])



  const barWidth = Math.floor((skillPoint / 20) * 100) + "%";

  return <>
    <div className={isActive ? `skills-box` : `skills-box`}>
      <div className={isActive ? `skill-bar skill-bar--${skillColor} active` : `skill-bar`} style={{width:barWidth}}></div>
      <div className="skill-desc ">{skill}</div>
      <div className="skill-point">{count}/20</div>
    </div>
  </>
}

export default SkillBox;