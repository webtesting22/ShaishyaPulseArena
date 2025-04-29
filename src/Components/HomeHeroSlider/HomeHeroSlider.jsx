import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const HomeHeroSlider = () => {
    const swiperRef = useRef(null);

    const SliderImages = [
        "/Images/1.jpeg",
        "/Images/2.jpeg",
        "/Images/3.jpeg",
        "/Images/4.jpeg",
    ];

    return (
        <div className="HomeHeroSliderContainer">
            <div className="HomeHeroSliderContent">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={700}
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
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {SliderImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="CarousalImageContainer">
                                <img src={item} alt="" className="SliderImage" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Button */}
                <div className="CarousalButtonContainer">
                    <button className="customPrevBtn" onClick={() => swiperRef.current.swiper.slidePrev()}>
                        <MdOutlineArrowRightAlt />
                    </button>
                    <button className="customNextBtn" onClick={() => swiperRef.current.swiper.slideNext()}>
                        <MdOutlineArrowRightAlt />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeHeroSlider;
