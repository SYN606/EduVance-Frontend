import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

const CarouselPagination = ({ items, reverse = false }) => {
    return (
        <Swiper
            spaceBetween={30}
            loop={true}
            slidesPerView={3}
            speed={800}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: reverse,
            }}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="my-8 !py-2"
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="text-center bg-white rounded-lg py-6 hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="w-32 h-32 mx-auto mb-4 object-scale-down"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">
                            {item.name}
                        </h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CarouselPagination
