import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <div id="FooterContainer">
            <div className="FooterContent sectionPadding">
                <div>
                    <div>
                        <img src="/Images/ShaishyaLogo.png" alt="" loading="lazy"/>
                        <span className="StylingTextSpan"><b>Official Address:</b> <a href="https://maps.app.goo.gl/zQGFjJe5aWSG51nT8" style={{color:"black"}} target="_blank" rel="noopener noreferrer">Survey no. 569, Opp Sandesh Bungalow, Karnavati Road, Makarba Village, Ahmedabad, Gujarat 380054</a></span>
                        <span className="StylingTextSpan"><b>Phone Number:</b> <a href="tel:+919979005797" style={{color:"black"}}>+91 9979005797</a></span>
                        <span className="StylingTextSpan"><b>Email: </b><a href="mailto:shaishyapulsearena@gmail.com" style={{color:"black"}}>shaishyapulsearena@gmail.com</a></span>
                        <span className="StylingTextSpan"><b>Terms and Conditions</b></span>
                        <span className="StylingTextSpan"><b>Privacy Policy</b></span>
                    </div>
                </div>
                <div>
                <iframe id="Iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.52674772784266!2d72.4888195!3d23.0080536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bea38a9dca5%3A0x4dddfa6933aa42ec!2sShaishya%20Pulse%20Arena!5e0!3m2!1sen!2sin!4v1746603631259!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
export default Footer;