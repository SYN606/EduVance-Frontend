import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

const CarouselBtn = ({ items }) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className="flex flex-col items-center p-4">
                    <div className="mb-3 flex justify-center">{item.icon}</div>
                    <p className="text-lg font-medium">{item.title}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CarouselBtn
