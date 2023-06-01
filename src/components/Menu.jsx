import React from "react";

function Menu(props) {
  return <a href={props.link} className={props.class}>{props.name}</a>
}

export default Menu;