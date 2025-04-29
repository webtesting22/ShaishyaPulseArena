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
        "https://img.freepik.com/free-photo/people-playing-padle-tennis-inside_23-2149444608.jpg?t=st=1745903975~exp=1745907575~hmac=d42e3a2140faf582192be8959a49fe167e5ba6a040513a73172df4e39d1b0103&w=2000",
        "https://cricbuddyapi.cricbuddy.in/VenueImages/139/1393c876f05-bb3f-498b-9d66-80c13176b69b.jpg",
        "https://content.jdmagicbox.com/v2/comp/himatnagar/y9/9999p2772.2772.240425223313.s2y9/catalogue/atri-box-cricket-himatnagar-sports-clubs-Ro4ioxDtfO.jpg",
        "/Images/2.jpeg",
    ]
    return (
        <div className="AboutContainer">
            <div className="AboutContent sectionPadding">
                <Row>
                    <Col lg={10} mg={24} style={{ width: "100%" }}>
                        <div className="AboutContentLeft">
                            <div style={{ height: "100%", width: "100%" }}>

                                <img src="/Images/AboutUsImage.jpg" alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={14} mg={24} style={{ width: "100%" }}>
                        <div className="AboutContentRight">
                            <div className="AboutusContentSwiperContainer">
                                <div>
                                    <span className="StylingTextSpan">About Us</span>
                                    <h1 className="mediumHeading" data-aos="fade-up"
     data-aos-duration="1000">State-of-the-Art Sports Facilities</h1>
                                    <div className="SwiperContainer">      <br /><br />
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
                                                    // When window width is <= 480px
                                                    480: {
                                                        slidesPerView: 1, // Show 1 slide at a time
                                                        spaceBetween: 10, // Reduce space between slides
                                                    },
                                                    // When window width is <= 768px
                                                    768: {
                                                        slidesPerView: 1.5, // Show 1.5 slides at a time
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
                                                            <img src={item} alt="" />
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
     data-aos-duration="1000">At Shaishya Pulse Arena, sporting innovation is at our core. Experience unparalleled performance on our advanced, international-standard 8-layer courts designed for Football, Cricket, Paddle Tennis, and Pickleball. These premium surfaces are meticulously engineered to enhance your play and ensure utmost safety.
                                    </p>
                                    <ul>
                                        <li data-aos="fade-up"
     data-aos-duration="1200"><b>Advanced 8-layer Courts:</b> Maximize your potential on courts that set new standards for safety and performance.</li>
                                        <li data-aos="fade-up"
     data-aos-duration="1200"><b>Comprehensive Sporting Experience:</b> Enjoy world-class facilities for multiple sports under one luxurious roof.</li>
                                    </ul>
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