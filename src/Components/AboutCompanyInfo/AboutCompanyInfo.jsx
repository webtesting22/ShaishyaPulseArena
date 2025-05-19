import React from "react";
import "./AboutCompanyInfo.css";
import { Row, Col } from "antd";
import { MdOutlineQuestionMark } from "react-icons/md";

const AboutCompanyInfo = () => {

    const AboutCompanyCardData = [
        {
            title: <>Why Choose Shaishya Pulse Arena<MdOutlineQuestionMark /></>,
            content: <>
            </>,
            subpoints: <>
                <ul>
                    <li><b>World-Class Facilities:</b> Experience premium, international-standard courts and turfs designed for Padel, Pickleball, Football, and Box Cricket.
                        
                    </li>
                    <li><b>Community Spirit:</b> Join a vibrant, sports-loving community where passion for the game meets camaraderie.</li>
                    <li><b>Safety First:</b> Play with confidence on surfaces engineered for performance and safety.
                        Inclusive for All: Whether you’re a pro athlete or just playing for fun, we have something for everyone.
                    </li>
                    <li><b>Fitness & Fun Combined:</b> Embrace an active lifestyle in an energetic and inspiring environment.</li>
                </ul>
            </>
        },
        {
            title: "Designed for Champions",
            content: <>
            Shaishya Pulse Arena is the ultimate destination for:
            </>,
            subpoints: <>
                <ul>
                    <li><b>Ambitious Amateurs:</b> Passionate players hungry to learn and improve, and who are dedicated to refining their skills and achieving new milestones.
                    </li>
                    <li><b>Emerging Competitors:</b> Athletes transitioning from amateur play to professional excellence.</li>
                    <li><b>Professional Athletes:</b> Focused on sharpening their competitive edge, and committed to elite performance and continuous improvement.</li>
                </ul>
            </>
        },
        {
            title: "Expert Coaching to Unleash Your Potential",
            content: <>
               Shaishya Pulse Arena prides itself on offering elite coaching tailored to every athlete's unique aspirations. Our experienced coaches guide you through customized training, ensuring every session pushes your boundaries further.
            </>,
            subpoints: <>
                <ul>
                    <li>Personalized Training Programs: Tailored coaching to match your skill level and ambitions.</li>
                    <li>Professional Coaches: Learn from dedicated experts committed to nurturing your talent and passion.
                    </li>
                </ul>
            </>
        },



        {
            title: "A Thriving Community of Passionate Competitors",
            content: <>
                Beyond competition, Shaishya Pulse Arena fosters a community united by shared dedication to sport and personal growth. Our thoughtfully designed spaces encourage meaningful interactions, collaboration, and a collective pursuit of excellence.
                    It’s a place where players form bonds, teams become families, and the spirit of sport comes alive through shared experience.
            </>,
            subpoints: <>
                <ul>
                    <li>Community-Centric Facilities: Café, lounge, and event zones designed for connection.</li>
                    <li>Vibrant Events & Tournaments: Fuel your fire with regular leagues, workshops, and themed playdays.
                    </li>
                </ul>
            </>
        },
        


    ];

    return (
        <div id="AboutCompanyInfoContainer">
            <div className="AboutCompanyInfoContent sectionPadding">
                <div>
                    {/* <span className="StylingTextSpan">About Brand</span> */}
                    <h2 className="mediumHeading" style={{color:"rgb(4, 173, 153)"}}>A High Energy sports experience</h2>
                </div><br /><br />
                {/* First Row: One full-width column (24) */}
                <Row gutter={[32, 32]} className="FirstRow">
                    <Col span={24} data-aos="fade-up" data-aos-duration="1000">
                        <div className="InfoCard">
                            <div>
                                <h3 className="smallHeading" style={{color:"white"}}>{AboutCompanyCardData[0].title}</h3>
                                <p style={{color:"white"}}>{AboutCompanyCardData[0].content}</p>
                                <p style={{color:"white"}}>{AboutCompanyCardData[0].subpoints}</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Second Row: Three equal columns (8 + 8 + 8) */}
                <Row gutter={[32, 32]} className="SecondRow">
                    {AboutCompanyCardData.slice(1, 4).map((data, index) => (
                        <Col key={index}  xs={24} sm={24} md={8} lg={8} xl={8} data-aos="fade-up" data-aos-duration={`${1000 + index * 500}`}>
                            <div className="InfoCard">
                                <div>
                                    <h3 className="smallHeading" style={{color:"white"}}>{data.title}</h3>
                                    <p style={{color:"white"}}>{data.content}</p>
                                    <p style={{color:"white"}}>{data.subpoints}</p>
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
