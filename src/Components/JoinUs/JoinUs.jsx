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
                                    <img src="/Images/1.JPG" alt="" loading="lazy" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={14} md={24}>
                            <div className="JoinUsRight">
                                <div>
                                    <div>
                                        <span className="StylingTextSpan">Join Us</span>
                                        <h2 className="mediumHeading">Join the sporting revolution</h2>
                                        <p>The mission is to provide world-class sports facilities, organize engaging events, and build a thriving sports community that empowers every player—from amateur to pro.</p>
                                        <p><b>Are you ready to play, connect, and thrive?</b></p>
                                    </div>
                                    <div>
                                        <p>Join Shaishya Pulse Arena today and become part of Ahmedabad's elite sporting movement.</p>
                                        <p><i>Shaishya Pulse Arena – Unite. Play. Thrive.</i></p>
                                        <p>With the cricket line figure.</p>
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