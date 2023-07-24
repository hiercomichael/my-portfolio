import react, {useState} from "react";
import Menu from "./Menu";
import Hamburger from 'hamburger-react';

function Header(){

  const [color, setColor] = useState(false)

  function changeColor() {
    if(window.scrollY >= 60) {
      setColor(true)
    } else (
      setColor(false)
    )
  }

  const [isOpen, setOpen] = useState(false);

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
          <Menu class={color ? "menu-selection menu-selection-color" : "menu-selection"} name="HOME" link="#boi"/>
          <Menu class={color ? "menu-selection menu-selection-color" : "menu-selection"} name="SERVICES" link="#boi"/>
          <Menu class={color ? "menu-selection menu-selection-color" : "menu-selection"} name="SKILLS" link="#boi"/>
          <Menu class={color ? "menu-selection menu-selection-color" : "menu-selection"} name="WORKS" link="#boi"/>
        </div>
        <div className="header-solo">
          <Menu class={"menu-selection-solo"} name="CONTACT NOW" link="#boi"/>
        </div>
        <Hamburger size={40} toggled={isOpen} toggle={setOpen} />
        <div className={isOpen ? "menu-mobile-container menu-mobile-container--clicked" : "menu-mobile-container"}>
          <a href="#boi" className="menu-mobile">HOME</a>
          <a href="#boi" className="menu-mobile">SERVICES</a>
          <a href="#boi" className="menu-mobile">SKILLS</a>
          <a href="#boi" className="menu-mobile">WORKS</a>
        </div>
      </div>

    </div>

  </header>
}

export default Header;