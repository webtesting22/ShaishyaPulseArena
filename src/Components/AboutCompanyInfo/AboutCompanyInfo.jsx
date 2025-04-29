import React from "react";
import "./AboutCompanyInfo.css";
import { Row, Col } from "antd";

const AboutCompanyInfo = () => {

    const AboutCompanyCardData = [
        {
            title: "Expert Coaching to Unleash Your Potential",
            content: <>
                <p>Shaishya Pulse Arena prides itself on offering elite coaching tailored to every athlete's unique aspirations. Our experienced coaches guide you through customized training, ensuring every session pushes your boundaries further.</p>
            </>,
            subpoints: <>
                <ul>
                    <li><b>Personalized Training Programs:</b> Tailored coaching to match your skill level and ambitions.</li>
                    <li><b>Professional Coaches:</b> Learn from dedicated experts committed to nurturing your talent and passion.</li>
                </ul>
            </>
        },
        {
            title: "A Thriving Community of Passionate Competitors",
            content: <>
                <p>Beyond competition, Shaishya Pulse Arena fosters a community united by shared dedication to sport and personal growth. Our thoughtfully designed spaces encourage meaningful interactions, collaboration, and a collective pursuit of excellence.</p>
            </>,
            subpoints: <>
                <ul>
                    <li><b>Luxurious Café & Lounge Areas:</b> Relax and recharge in sophisticated spaces designed for comfort and conversation.</li>
                    <li><b>Dynamic Event Spaces:</b> Perfect for hosting events, celebrating milestones, and networking with fellow enthusiasts.</li>
                </ul>
            </>
        },
        {
            title: "Designed for Champions",
            content: <>
                <p>Shaishya Pulse Arena is the ultimate destination for:</p>
            </>,
            subpoints: <>
                <ul>
                    <li><b>Professional Athletes:</b> Committed to elite performance and continuous improvement.</li>
                    <li><b>Ambitious Amateurs:</b> Passionate players dedicated to refining their skills and achieving new milestones.</li>
                    <li><b>Emerging Competitors:</b> Athletes transitioning from amateur play to professional excellence.</li>
                </ul>
            </>
        },
        {
            title: "Why Choose Shaishya Pulse Arena?",
            content: <>
            </>,
            subpoints: <>
                <ul>
                    <li><b>Pioneering Sports Innovation:</b> Leading Ahmedabad in embracing emerging global sports trends.</li>
                    <li><b>Luxury and Excellence:</b> Indulge in an exclusive sporting environment designed for maximum comfort and superior performance.</li>
                    <li><b>Community and Camaraderie:</b> Engage in an environment that celebrates competition, connection, and collective growth.</li>
                </ul>
            </>
        },
    ];

    return (
        <div id="AboutCompanyInfoContainer">
            <div className="AboutCompanyInfoContent sectionPadding">
                <div>
                    <span className="StylingTextSpan">About Brand</span>
                    <h2 className="mediumHeading">Expert Coaching to Unleash Your Potential</h2>
                </div><br /><br />
                <Row gutter={[32, 32]} className="FirstRow">
                    {AboutCompanyCardData.slice(2, 4).map((data, index) => (
                        <Col key={index} lg={index % 2 === 0 ? 10 : 14} xl={index % 2 === 0 ? 10 : 14}>
                            <div className="InfoCard">
                                <div>
                                    <h3 className="smallHeading">{data.title}</h3>
                                    <p>{data.content}</p>
                                    <p>{data.subpoints}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row gutter={[32, 32]} className="SecondRow">
                    {AboutCompanyCardData.slice(0, 2).map((data, index) => (
                        <Col key={index} lg={index % 2 === 0 ? 14 : 10} xl={index % 2 === 0 ? 14 : 10}>
                            <div className="InfoCard">
                                <div>
                                    <h3 className="smallHeading">{data.title}</h3>
                                    <p>{data.content}</p>
                                    <p>{data.subpoints}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

            </div>
        </div>
    );
}

export default AboutCompanyInfo;
