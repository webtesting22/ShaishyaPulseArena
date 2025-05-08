import React, { useState } from "react";
import { Modal } from "antd";
import "./Footer.css";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePrivacyClick = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div id="FooterContainer">
            <div className="FooterContent sectionPadding">
                <div>
                    <div>
                        <img src="/Images/ShaishyaLogo.png" alt="" loading="lazy" />
                        <span className="StylingTextSpan">
                            <b>Official Address:</b>{" "}
                            <a
                                href="https://maps.app.goo.gl/zQGFjJe5aWSG51nT8"
                                style={{ color: "black" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Survey no. 569, Opp Sandesh Bungalow, Karnavati Road, Makarba Village, Ahmedabad, Gujarat 380054
                            </a>
                        </span>
                        <span className="StylingTextSpan">
                            <b>Phone Number:</b>{" "}
                            <a href="tel:+919979005797" style={{ color: "black" }}>
                                +91 9979005797
                            </a>
                        </span>
                        <span className="StylingTextSpan">
                            <b>Email: </b>
                            <a href="mailto:shaishyapulsearena@gmail.com" style={{ color: "black" }}>
                                shaishyapulsearena@gmail.com
                            </a>
                        </span>
                        <span
                            className="StylingTextSpan"
                            style={{ cursor: "pointer", textDecoration: "underline" }}
                            onClick={handlePrivacyClick}
                        >
                            <b>Privacy Policy</b>
                        </span>
                    </div>
                </div>
                <div>
                    <iframe
                        id="Iframe"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.52674772784266!2d72.4888195!3d23.0080536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bea38a9dca5%3A0x4dddfa6933aa42ec!2sShaishya%20Pulse%20Arena!5e0!3m2!1sen!2sin!4v1746603631259!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <Modal
                title=""
                open={isModalOpen}
                onCancel={handleClose}
                footer={null}
                width={800}
            >
                <div id="ModalData">
                <h1>Privacy Policy for Shaishya Pulse Arena</h1>
                <p>At Shaishya Pulse Arena, accessible from https://www.superseedsonline.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Shaishya Pulse Arena and how we use it.</p>
                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Shaishya Pulse Arena. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                <h2>Consent</h2>
                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                <h2>Information we collect</h2>
                <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

                <h2>How we use your information</h2>
                <p>We use the information we collect in various ways, including to:</p>
                <ul>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>

                <h2>Log Files</h2>
                <p>Shaishya Pulse Arena follows a standard procedure of using log files. These files log visitors when they visit websites... (remaining content is the same, with name changed)</p>

                <h2>Advertising Partners Privacy Policies</h2>
                <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Shaishya Pulse Arena.</p>
                <p>Note that Shaishya Pulse Arena has no access to or control over cookies that are used by third-party advertisers.</p>

                <h2>Third Party Privacy Policies</h2>
                <p>Shaishya Pulse Arena's Privacy Policy does not apply to other advertisers or websites... (continued)</p>

                <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                <p>Under the CCPA, among other rights, California consumers have the right to: ...</p>

                <h2>GDPR Data Protection Rights</h2>
                <p>We would like to make sure you are fully aware of all of your data protection rights... (continued)</p>

                <h2>Children's Information</h2>
                <p>Shaishya Pulse Arena does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                </div>
            </Modal>
        </div>
    );
};

export default Footer;
