import react, {useState} from "react";
import ReactWOW from 'react-wow';

function Banner(){
  return <div className="banner">
    <div className="introduction">
    I'm Michael, a versatile professional specializing in Web Development, Programming, and Design.
    </div>
    <div className="banner-image-container">
      <img src="./img/banner-image.png" alt="" className="banner-image" />
    </div>
    <img src="./img/banner-bg.png" alt="" className="banner-bg" />
  </div>
}

export default Banner;