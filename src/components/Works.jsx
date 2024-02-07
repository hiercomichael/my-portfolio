import react, {useState} from "react";
import WorkBox from "./WorkBox";
import Title from "./Title";

const myWorks = [
  {
    img: "./img/work-1.jpg",
    title: "Better Health - Application Design",
    description: "Better Health is an application that we made for our school project.",
    href: "https://www.figma.com/file/2k06E2gDOOThFGP3yvh4yO/Untitled?type=design&node-id=0%3A1&mode=design&t=iy5W4pxMu0txQe5m-1"
  },
  {
    img: "./img/work-2.jpg",
    title: "World Cup 2077 - Java Development",
    description: "A simple football pixel game that runs in Java language",
    href: "https://github.com/hiercomichael/soccergame"
  },
];

function Works(){

  return <div className="works" id="works">
    <Title title="WORKS" />
    <div className="works-container">
      {myWorks.map(work => 
              <WorkBox {...work} />
            )}
    </div>
  </div>
}

export default Works;