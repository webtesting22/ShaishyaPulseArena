import React from "react";
import "./HeroHome.css";
import { Row, Col } from "antd";
import HomeHeroSlider from "../HomeHeroSlider/HomeHeroSlider";
const HeroHome = () => {
    return (
        <>
            <div id="HeroHomeContainer">
            <div className="GraphicsShowContainer">
                   <img src="/Images/NewCricketGraphicOnhomepage.jpg" alt="" />
                   </div>
                <div className="HeroHomeContent sectionPadding">
                  
                    <div>
                        <Row>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <div>
                                    <span className="StylingTextSpan">Box Cricket Arena</span>
                                    <h1 className="bigHeading">Master the Art of Box Cricket at Riverside</h1>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <div>
                                    <p><b>Experience Ahmedabad’s Ultimate Sporting Revolution</b></p>
                                    <p>Welcome to Shaishya Pulse Arena—a space meticulously crafted for those who demand excellence, cherish community, and aspire to elevate their athletic journey. Here, ambition meets luxury, transforming every game into an extraordinary experience.
                                    </p>
                                    <div>
                                        <button className="buttonFirst">Book a Slot</button>
                                        <button className="buttonSecond">Membership</button>
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
