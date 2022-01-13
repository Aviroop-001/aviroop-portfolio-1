import "../styling_files/contact-me.scss";
import { useState } from "react";

export default function Contact() {

    const [Message, setMessage] = useState(false);

    const handlesubmit = (e) =>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img id="connect-image" src="myAssets/connection (1).png" alt=""/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="Email Address"/>
                    <textarea name="" placeholder="Enter Message" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                    {Message && <span>Message Sent! </span>}
                </form>
            </div>
        </div>
    )
}
