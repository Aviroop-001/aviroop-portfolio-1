import "../styling_files/intro.scss"
import {FaChevronDown} from "react-icons/fa";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const  textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
             showCursor: true, 
             backDelay: 1000,
             backSpeed:  30,
             strings: ['Software Developer', 'FrontEnd Web Developer', 'Problem Solver', 'Competetive Coder'] 
        })
        
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="myimage">
                    <img src="/myAssets/myimage.png" alt="Aviroop's Image" />
                </div>
            </div>
            <div className="right">
                <div className="shortintro">
                    <h2>Hello guys, myself</h2>
                    <h1>Aviroop Banerjee</h1>
                    <h3>I'm <span ref={textRef}></span></h3>
                </div>
                <a href="#skills">
                    <FaChevronDown className="downarrow"/>
                </a>
            </div>
        </div>
    )
}
