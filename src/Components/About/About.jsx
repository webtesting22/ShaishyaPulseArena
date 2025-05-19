import React from "react";
import "./About.css";
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const About = () => {



    const SliderImages = [
        "/Images/1.JPG",
        "/Images/2.JPG",
        "/Images/3.JPG",
        "/Images/4.JPG",
        "/Images/5.JPG",
    ]
    return (
        <div className="AboutContainer">
            <div className="AboutContent sectionPadding">
                <Row>
                    <Col lg={10} mg={24} style={{ width: "100%" }}>
                        <div className="AboutContentLeft">
                            <div style={{ height: "100%", width: "100%" }}>
                                <img src="/Images/3.JPG" alt="about us image" loading="lazy" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={14} mg={24} style={{ width: "100%" }}>
                        <div className="AboutContentRight">
                            <div className="AboutusContentSwiperContainer">
                                <div>
                                    <span className="StylingTextSpan">About Us</span>
                                    <h1 className="mediumHeading" data-aos="fade-up"
                                        data-aos-duration="1000">State of the Art Sports Facilities</h1>
                                    <div className="SwiperContainer"><br /><br />
                                        <div>
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                loop={true}
                                                speed={700}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                // pagination={{
                                                //     clickable: true,
                                                // }}
                                                breakpoints={{
                                                    480: {
                                                        slidesPerView: 1, // Show 1 slide at a time
                                                        spaceBetween: 10, // Reduce space between slides
                                                    },
                                                    768: {
                                                        slidesPerView: 1.5, 
                                                        spaceBetween: 20,
                                                    },
                                                    // When window width is <= 1024px
                                                    1024: {
                                                        slidesPerView: 2, // Show 2 slides at a time
                                                        spaceBetween: 30,
                                                    },
                                                    // When window width is greater than 1024px
                                                    1200: {
                                                        slidesPerView: 2, // Show 2 slides at a time
                                                        spaceBetween: 30,
                                                    }
                                                }}
                                                modules={[Pagination, Autoplay]}
                                                className="mySwiper"
                                            >
                                                {SliderImages.map((item, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div className="AboutSliderImageContainer">
                                                            <img src={item} alt="about us image" loading="lazy" />
                                                            {/* <span>{[index+1]}</span> */}
                                                        </div>
                                                    </SwiperSlide>
                                                ))}

                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                                {/* <br /><br /> */}
                                <div className="AboutBrandTextContainer">
                                    <p data-aos="fade-up"
                                        data-aos-duration="1000">At Shaishya Pulse Arena, sporting innovation is at our core. Experience unparalleled performance.
                                    </p>
                                    <ul>
                                        <li data-aos="fade-up"
                                            data-aos-duration="1200">Advanced, international-standard Padel courts</li>
                                        <li data-aos="fade-up"
                                            data-aos-duration="1200">Cutting-edge, 8-layer Pickleball courts meeting global standards</li>
                                        <li data-aos="fade-up"
                                            data-aos-duration="1200">FIFA-approved turf for Football</li>
                                        <li data-aos="fade-up"
                                            data-aos-duration="1200">Larger and superior Box Cricket turf</li>
                                    </ul>
                                    <p data-aos="fade-up"
                                        data-aos-duration="1400">These premium surfaces are meticulously engineered to enhance your play and ensure utmost safety.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default About;