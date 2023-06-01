import react, {useState} from "react";

function About(){
  return <div id="about" className="about">
    <div className="about-container">
      <div className="about-square"></div>
      <div className="about-skills">
        <img src="/img/about.png" className="about-img" alt="" />
      </div>
      <div className="about-text-big-container">
        <div className="about-text-container">
          <div  className="about-title">About Me</div>
          <div className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus dicta tenetur enim veritatis velit dolorem fugit corrupti in. Minima, quaerat exercitationem? Labore dolorum sunt sapiente minus perspiciatis quidem iusto?</div>
        </div>    
      </div>
   
    </div>
  </div>
}

export default About;