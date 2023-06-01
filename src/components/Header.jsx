import react, {useState} from "react";
import Menu from "./Menu";

function Header(){

  const [color, setColor] = useState(false)

  function changeColor() {
    if(window.scrollY >= 60) {
      setColor(true)
    } else (
      setColor(false)
    )
  }

  window.addEventListener("scroll", changeColor);

  return <header className={color ? "header header-bg" : "header"}>
    <div className="header-container">
      <div className="header-left-container">
        <div className="logo-container">
          <a href="#" className="logo">
            <img src="./img/logo.png" alt="" className={color ? "logo-image logo-image-color" : "logo-image"} />
          </a>
        </div>
        <div className="menu-container">
          <Menu class={color ? "menu-selection menu-selection-color" : "menu-selection"} name="About" link="#boi"/>
          <Menu class={color ? "menu-selection menu-selection-color" : "menu-selection"} name="Works" link="#boi"/>
        </div>
      </div>
      <Menu class={color ? "header-solo header-solo-bg" : "header-solo"} name="Contacts" link="#about"/>
    </div>

  </header>
}

export default Header;