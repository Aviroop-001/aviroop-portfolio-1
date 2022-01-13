import "../styling_files/skills.scss";
import { useState } from "react";

export default function Skills() {

  const [Currentslide, setCurrentslide] = useState(0);
  const Data = [
    {
      id: "1",
      icon: "myAssets/www.png",
      title: "React Js",
      description:
        "Describes my expertise in a particular field, associated with the skill. Eg React, Node, Web Dev, Ai Ml etc.",
      image: "myAssets/project_img1.jpg"
    },
    {
      id: "2",
      icon: "myAssets/www.png",
      title: "Node Js",
      description:
        "Describes my expertise in a particular field, associated with the skill. Eg React, Node, Web Dev, Ai Ml etc.",
      image: "myAssets/project_img1.jpg"
    },
    {
      id: "3",
      icon: "myAssets/www.png",
      title: "Skill3",
      description:
        "Describes my expertise in a particular field, associated with the skill. Eg React, Node, Web Dev, Ai Ml etc.",
      image: "myAssets/project_img1.jpg"
    },
    {
      id: "4",
      icon: "myAssets/www.png",
      title: "Skill4",
      description: "Describes my expertise in a particular field, associated with the skill. Eg React, Node, Web Dev, Ai Ml etc.",
      image: "myAssets/project_img1.jpg"
    },
    {
      id: "5",
      icon: "myAssets/www.png",
      title: "Skill5",
      description: "Describes my expertise in a particular field, associated with the skill. Eg React, Node, Web Dev, Ai Ml etc.",
      image: "myAssets/project_img1.jpg"
    }
  ];

  const handleclick = (direction) =>{
    if(direction === 'left'){
      setCurrentslide(Currentslide > 0 ? Currentslide-1 : Data.length-1)
    }
    else{
      setCurrentslide(Currentslide < Data.length-1 ? Currentslide+1 : 0)
    }
  }

  return (
    <div className="skills" id="skills">
      <div className="slider" style = {{transform: `translateX(-${Currentslide*100}vw)`}}>
        {Data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <img src={d.icon} alt="" />
                <h2>{d.title}</h2>
                <p>{d.description}</p>
                <span>Projects</span>
              </div>
              <div className="right">
                <img src={d.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="myAssets/leftarrow.png" alt="" className="arrow left" onClick={()=> handleclick('left')}/>
      <img src="myAssets/rightarrow.png" alt="" className="arrow right" onClick={()=> handleclick('right')}/>
    </div>
  );
}
