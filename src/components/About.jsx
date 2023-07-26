import react, {useState} from "react";
import Title from "./Title";

function About(){
  return <div id="about" className="about">
    <div className="about-container">
      <div className="about-img-container">
        <img src="./img/about-me.png" alt="" className="about-img" />
      </div>
      <div className="about-text-big-container">
        <div className="about-text-container">
          <div className="about-bold">
            I'm an aspiring Software Engineer and a Front-end Developer.
          </div>
          <div className="about-description">
            I'm currently a student in Okanagan College studying Computer Information Systems. Currently residing in British Columbia.
            I do Web Development, UI/UX design, 3D Modeling for people around the world. I'll be an awesome addition to your team.
          </div>
        </div> 
        <div className="about-counts-container">
          <div className="about-counts-box">
            <p className="about-count">00</p>
            <p className="about-count-desc">No. of dog petted</p>
          </div>
          <div className="about-counts-box">
            <p className="about-count">00</p>
            <p className="about-count-desc">No. of cat petted</p>
          </div>
        </div>
        <div className="about-button-container">
          <a href="" className="about-button" >About Me</a>
          <a href="#contact" className="about-button">Contact Now</a>
        </div>  
      </div>
    </div>
  </div>
}

export default About;