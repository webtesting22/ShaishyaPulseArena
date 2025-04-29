import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <div id="FooterContainer">
            <div className="FooterContent sectionPadding">
                <div>
                    <div>
                        <img src="/Images/ShaishyaLogo.png" alt="" />
                        <span className="StylingTextSpan"><b>Official Address:</b> Survey no. 569, Opp Sandesh Bungalow, Karnavati Road, Makarba Village, Ahmedabad, Gujarat 380054</span>
                        <span className="StylingTextSpan"><b>Phone Number:</b> +91 9979005797</span>
                        <span className="StylingTextSpan"><b>Email: </b>shaishyapulsearena@gmail.com</span>

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