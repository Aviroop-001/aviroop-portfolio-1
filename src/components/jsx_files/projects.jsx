import "../styling_files/projects.scss"
import Projects_list from "../jsx_files/projects_list";
import { useState, useEffect } from "react";
import {React_projects, Node_projects, Mern_projects, Aiml_projects} from "../jsx_files/Data"

export default function Projects() {

    const [Activeitem, setActiveitem] = useState("react");
    const List = [
        {
            id : "react",
            title : "React Apps"
        },
        {
            id : "node",
            title : "NodeJS Apps"
        },
        {
            id : "mern",
            title : "MERN Apps"
        },
        {
            id : "aiml",
            title : "AI & ML"
        },
    ]
    const [Data, setData] = useState([]);
    useEffect(() => {
        switch (Activeitem) {
            case "react":
                setData(React_projects);
                break;
            case "node":
                setData(Node_projects);
                break;
            case "mern":
                setData(Mern_projects);
                break;
            case "aiml":
                setData(Aiml_projects);
                break;
            default:
                setData(React_projects);
                break;
        }
    }, [Activeitem])

    return (
        <div className="projects" id="projects">
            <h1>My Projects</h1>
            <ul>
                {List.map(item => (
                    <Projects_list 
                        title={item.title} 
                        id={item.id}
                        active= {Activeitem===item.id}
                        setActiveitem={setActiveitem}
                    />
                ))}
            </ul>
            <div className="container">
                {Data.map(data=>(
                    <div className="project">
                        <img src={data.image} alt="" />
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
