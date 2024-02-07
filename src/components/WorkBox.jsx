import React, {useState} from "react";

function WorkBox({href, title, img, description}) {

  const [hover, setHover] = useState(false);


  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  return <div className="work-container">
      <div className="work-img-container">
        <div className="work-img" style={{backgroundImage:`url(${img})`}}></div>
      </div>
      <div className="work-desc-big-container">
        <div className="work-desc-container">
          <div className="work-desc-title">{title}</div>
          <div className="work-description">{description}</div>
        </div>
        <div className="work-status-container">
          <a href={href} target="_blank" className="work-link">Visit Project</a>
        </div>
      </div>
  </div>

  

}

export default WorkBox;