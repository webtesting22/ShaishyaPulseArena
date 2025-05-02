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

                    </div>
                </div>
                <div>
                    <span className="StylingTextSpan"><b>Terms and Conditions</b></span>
                    <span className="StylingTextSpan"><b>Privacy Policy</b></span>
                </div>
            </div>
        </div>
    )
}
export default Footer;