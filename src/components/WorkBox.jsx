import React, {useState} from "react";

function WorkBox({href, title, img, bgColorClass, arrowClass}) {

  const [hover, setHover] = useState(false);


  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  return <a href= {href} onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut} className={hover ? `works-box works-box--hovering`: `works-box ${bgColorClass}`}>
  <div className={hover ? "work-title work-title--hovering" : "work-title"}>{title}</div>
  <img src={img} className={hover ? "work-img work-img--hover" : "work-img"} alt="" />
  <img src="./img/work-arrow.png" alt="" className={hover ? `work-arrow work-arrow--hover ${arrowClass}` : `work-arrow ${arrowClass}`}/>
</a>
  

}

export default WorkBox;