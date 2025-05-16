import React from "react";
import "./HeroHome.css";
import { Row, Col } from "antd";
import HomeHeroSlider from "../HomeHeroSlider/HomeHeroSlider";
import { FaInstagram } from "react-icons/fa";
const HeroHome = () => {
    return (
        <>
            <div id="HeroHomeContainer">
                <div className="GraphicsShowContainer">
                    <Row style={{ width: "100%" }}>
                        <Col lg={12}>
                            <div>
                                <img src="/Images/ShaishyaLogo.png" alt="" loading="lazy" />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="RigtSideLinksContainer">
                                <div>
                                  <a href="https://www.instagram.com/shaishyapulsearena?igsh=ZWJlYmdsbWF2aDQz&utm_source=qr" target="_blank" style={{color:"black"}}><b> Instagram</b></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* <img data-aos="fade-zoom-in" data-aos-duration="1000" src="/Images/NewCricketGraphicOnhomepage.jpg" alt="cricket graphic" loading="lazy"/> */}
                </div>
                <div className="HeroHomeContent sectionPadding">
                    <div>
                        <Row>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <div>
                                    <span className="StylingTextSpan">Box Cricket Arena</span>
                                    <h1 className="bigHeading" data-aos="fade-right"
                                        data-aos-duration="2000" data-aos-delay="500">Ahmedabad’s hub for sport energy and community</h1>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <div data-aos="fade-left"
                                    data-aos-duration="2000" data-aos-delay="1000">
                                    <p><b>Experience Ahmedabad’s Ultimate Sporting Revolution</b></p>
                                    <p>Welcome to Shaishya Pulse Arena—a space meticulously crafted for those who demand excellence, cherish community, and aspire to elevate their athletic journey. Here, ambition meets luxury, transforming every game into an extraordinary experience.
                                    </p>
                                    <div>
                                    <a href="https://bit.ly/428iVh4" target="_blank" rel="noopener noreferrer"> <button className="buttonFirst">Book a Slot</button></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <HomeHeroSlider />
        </>
    )
}
export default HeroHome;
