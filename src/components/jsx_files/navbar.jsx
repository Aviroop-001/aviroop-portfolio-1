import "../styling_files/navbar.scss";
import {FaEnvelope, FaUser, FaAt} from "react-icons/fa";

const navbar= ({ menuactive, setmenuactive }) => {
    return (
        <div className={"navbar " + (menuactive && "active")} id="navbar">
            {/* style={{color: "white"}} */}
            <div className="nav-items">
                <div className="info">
                    <a id="logo" href="#intro">AVIROOP</a>
                    <div className="shortcontact">
                        <FaEnvelope className="shortcontact_icon"/>
                        <span>banerjeeaviroop01@gmail.com</span>
                    </div>
                    <div className="shortcontact">
                        <FaUser className="shortcontact_icon"/>
                        <span>+91 7439263408</span>
                    </div>
                </div>
                <div className="burger" onClick={()=>setmenuactive(!menuactive)}>
                    <span id="line1"></span>
                    <span id="line2"></span>
                    <span id="line3"></span>
                </div>
            </div>
        </div>
    )
}

export default navbar;
