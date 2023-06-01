import react, {useState} from "react";
import WorkBox from "./WorkBox";

function Works(){

  const [hover, setHover] = useState(false);


  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }


  return <div className="works">
    <hr className="works-hr" />
    <div className="works-title">WORKS</div>
    <div className="works-container">
      <div className="works-first-container">
        <WorkBox img="./img/works-1.png" title="WEB DEVELOPMENT" bgColorClass="works-box--first"/>
        <WorkBox img="./img/works-2.png" title="UI / UX DESIGN" bgColorClass="works-box--second" arrowClass="work-arrow--second"/>
      </div>
      <div className="works-first-container works-first-container--second">
        <WorkBox img="./img/works-3.png" href="#" title="GAME DEVELOPMENT" bgColorClass="works-box--third"/>
        <WorkBox img="./img/works-4.png" title="PROJECT MANAGEMENT" bgColorClass="works-box--fourth" arrowClass="work-arrow--second"/>
      </div>
    </div>
  </div>
}

export default Works;