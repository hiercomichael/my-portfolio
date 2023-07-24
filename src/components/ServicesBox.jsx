import react, {useState} from "react";

function ServicesBox({bgColorClass, servicesTitle, servicesDesc}) {

  const [click, setClick] = useState(false);

  function handleMouseClick() {
    if(click === true) {
      setClick(false);
      console.log("asdasdasd");
    } else
      setClick(true);
  }

  return <>
        <div onClick={handleMouseClick} className={click ? `services-box services-box--clicked` : `services-box ${bgColorClass}`}>
            <div className="services-line">
              <div className={click ? "services-skill services-skill--clicked" : "services-skill"}>{servicesTitle}</div>
              <div className={click ? "services-desc services-desc--show" : "services-desc"}>{servicesDesc}</div>
              <div className={click ? "services-circle services-circle--clicked" : "services-circle"}></div>
          </div>
        </div>
  </>
}

export default ServicesBox;
