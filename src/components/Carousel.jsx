import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "../css/componants/carousel.css";

const CarouselComponent = ({ items }) => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1, // Show 1 slide on small screens
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1, // Show 1 slide on medium screens
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1, // Show 1 slide on large screens
                        spaceBetween: 30,
                    },
                }}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="carousel-slide">
                            <img src={item.src} alt={item.altText} className="carousel-image" />
                            <div className="carousel-caption">
                                <h5>{item.altText}</h5>
                                <p>{item.caption}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselComponent;
