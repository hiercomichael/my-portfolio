import react, {useState} from "react";
import Typed from 'react-typed';

function Banner(){

  const [position, setPosition] = useState(false)

  function changePosition() {
    if(window.scrollY >= 60) {
      setPosition(true)
    } else (
      setPosition(false)
    )
  }

  window.addEventListener("scroll", changePosition);
  
  return <div className="banner">
    <div className="introduction">
    Hey! I'm Michael
    <br />
    <Typed 
      strings={[`I'm an Architect.`,`I'm a Developer.`,`I'm a Designer.`]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
    </div>
    <div className="banner-image-container">
      <img src="./img/banner-image3.png" alt="" className="banner-image" />
    </div>
    <img src="./img/banner-bg.png" alt="" className={position ? "banner-bg" : "banner-bg banner-bg--default"} />
    <a href="#about" className="banner-arrow">
      <img src="./img/arrow-down.png" alt="" className="banner-arrow-img" />
    </a>
  </div>
}

export default Banner;