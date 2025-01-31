import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = ({ items }) => {
    return (
        <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden z-10 ">
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="w-full h-full max-w-screen-2xl mx-auto"
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 1, spaceBetween: 20 },
                    1024: { slidesPerView: 1, spaceBetween: 0 },
                }}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative w-full h-full">
                            <img
                                src={item.src}
                                alt={item.altText}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white shadow-lg px-4 py-2 bg-white/30 backdrop-blur-md rounded-lg max-w-[700px] w-4/5">
                                <h5 className="text-[6vw] md:text-2xl font-bold mb-2">{item.altText}</h5>
                                <p className="text-[4vw] md:text-xl">{item.caption}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
