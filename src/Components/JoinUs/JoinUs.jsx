import React from "react";
import { Row, Col } from "antd";
import "./JoinUs.css";
const JoinUs = () => {
    return (
        <div id="JoinUsContainer">
            <div className="JoinUsContent sectionPadding">
                <div>
                    <Row>
                        <Col lg={10} md={24}>
                            <div className="JoinUsLeft">
                                <div>
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/abVPqcP5HTvl7Aj7DadU/JoinUsSectionImage copy.png" alt="" loading="lazy" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={14} md={24}>
                            <div className="JoinUsRight">
                                <div>
                                    <div>
                                        <span className="StylingTextSpan">Join Us</span>
                                        <h2 className="mediumHeading">Join the Sporting Revolution</h2>
                                        <p>Step into a community that's not just about playing sports—it's about transforming the sporting experience in Ahmedabad. Every drill, every match, every moment spent here brings you closer to greatness.
                                        </p>
                                        <p><b>Are you ready to play, connect, and thrive?</b></p>
                                    </div>
                                    <div>
                                        <p>Join Shaishya Pulse Arena today and become part of Ahmedabad's elite sporting movement.</p>
                                        <p><i>Shaishya Pulse Arena – Unite. Play. Thrive.</i></p>
                                    </div>
                                    <div>
                                        <img src="/Images/CricketBatsmanGraphic copy.png" alt="join us graphic" loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default JoinUs;