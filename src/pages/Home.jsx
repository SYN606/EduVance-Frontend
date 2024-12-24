import { LuAtom, LuGraduationCap, LuMonitor, LuCode, LuUsers } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import skill_india from '../img/logo-nsdc.png';
import msme from '../img/logo-msme.png';
import iso_20001 from '../img/logo-ISO-20001.png';
import iso_9001 from '../img/logo-ISO-9001.png';
import CarouselComponent from '../components/Carousel';
// images for training partners
import iul_logo from '../img/iul_logo.png'
import bbd_logo from '../img/bbdu-logo.png'
import goel_logo from '../img/goel_logo.png'
import bansal_logo from '../img/bansal_logo.png'
import rr_logo from '../img/rr_logo.png'
import sr_logo from '../img/sr_logo.png'
import hewett_logo from '../img/hewett_logo.png'
import gp_gonda from '../img/gp_gonda_logo.png'
import jlnp from '../img/jlnp_logo.png'
import gp_ayodhya from '../img/gp_ayodhya.png'
import gp_basti from '../img/gp_basti.png'
import gp_gorakhpur from '../img/gp_gorakhpur.png'

// carousel items
const items = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/16952014/pexels-photo-16952014/free-photo-of-coast.jpeg",
        altText: "Welcome to Teknavigators",
        caption: "Slide 1 Caption"
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/16952016/pexels-photo-16952016/free-photo-of-coast.jpeg",
        altText: "Slide 2",
        caption: "Slide 2 Caption"
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/19887096/pexels-photo-19887096/free-photo-of-a-boat-on-the-beach-with-a-blanket-and-a-bag.jpeg",
        altText: "Slide 3",
        caption: "Slide 3 Caption"
    }
];

// Courses Cards
const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "Computer Basics",
            description: "Learn the fundamentals of computers, including hardware and software basics.",
            image: "https://images.pexels.com/photos/23731974/pexels-photo-23731974/free-photo-of-a-stony-seashore.jpeg",
        },
        {
            id: 2,
            title: "Web Development",
            description: "Dive into the world of web development with HTML, CSS, JavaScript, and modern frameworks.",
            image: "https://images.pexels.com/photos/23731974/pexels-photo-23731974/free-photo-of-a-stony-seashore.jpeg",
        },
        {
            id: 3,
            title: "CyberSecurity",
            description: "Understand how to secure networks, systems, and data from cyber threats.",
            image: "https://images.pexels.com/photos/23731974/pexels-photo-23731974/free-photo-of-a-stony-seashore.jpeg",
        },
        {
            id: 4,
            title: "Mechanical and Civil Engineering",
            description: "Explore the principles and practices of mechanical and civil engineering.",
            image: "https://images.pexels.com/photos/23731974/pexels-photo-23731974/free-photo-of-a-stony-seashore.jpeg",
        },
    ];

    return (
        <div className="mt-10 container mx-auto">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-6">Our Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-4 rounded-lg border">
                        <img src={course.image} alt={course.title} className="w-full h-44 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h5 className="text-xl font-bold text-blue-600">{course.title}</h5>
                            <p className="text-gray-600">{course.description.substring(0, 42)}...</p>
                            <Link to={`/c/${generateSlug(course.title)}`} className="block mt-4">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">Explore</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Certification Partners
const CertificationPartners = () => {
    const logos = [
        { id: 1, src: skill_india, alt: "Skill India" },
        { id: 2, src: iso_20001, alt: "ISO 20001" },
        { id: 3, src: iso_9001, alt: "ISO 9001" },
        { id: 4, src: msme, alt: "MSME" },
    ];

    return (
        <div className="bg-gray-100 p-10 shadow-lg mt-10">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-6">Certification Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {logos.map((logo) => (
                    <div key={logo.id} className="bg-white p-4 flex justify-center items-center rounded-lg shadow-md border">
                        <img src={logo.src} alt={logo.alt} className="max-h-32" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const CourseCarousel = () => {
    const courses = [
        { icon: <LuAtom size={50} className="text-blue-500" />, title: "B.Sc" },
        { icon: <LuGraduationCap size={50} className="text-blue-500" />, title: "Diploma" },
        { icon: <LuMonitor size={50} className="text-blue-500" />, title: "BCA" },
        { icon: <LuCode size={50} className="text-blue-500" />, title: "MCA" },
        { icon: <LuUsers size={50} className="text-blue-500" />, title: "BBA" },
    ];

    return (
        <div className="max-w-3xl mx-auto py-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Who can join our courses?</h2>
            <p className="text-gray-500 mb-6">MCA, B.Tech, MBA & more</p>
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
                {courses.map((course, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center p-4">
                        <div className="mb-3">{course.icon}</div>
                        <p className="text-lg font-medium">{course.title}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const TrainingPlans = () => {
    const trainingPlans = [
        {
            title: "Summer Training",
            description:
                "Join our summer training programs to gain hands-on experience with real-world projects. Perfect for students looking to boost their skills during the summer break.",
        },
        {
            title: "Winter Training",
            description:
                "Our winter training is designed to provide in-depth knowledge of emerging technologies, preparing you for industry challenges with practical exposure.",
        },
        {
            title: "Corporate Training",
            description:
                "Tailored corporate training programs to empower teams with the latest tools and methodologies, enhancing productivity and delivering business value.",
        },
    ];

    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-2">
                Our Training Plans
            </h2>
            <p className="text-center text-gray-600 mb-8">
                Winter, Summer, In-house Training & More
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded p-6 hover:shadow-2xl transition-shadow duration-300">

                        <div className="bg-blue-500 text-white font-semibold text-lg py-2 text-center rounded">
                            {plan.title}
                        </div>
                        <p className="text-gray-700 mt-4">
                            {plan.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};


const TrainingPartners = () => {
    const graduationColleges = [
        { name: "Integral University", logo: iul_logo },
        { name: "BBD University", logo: bbd_logo },
        { name: "Goel Group of Institutions", logo: goel_logo },
        { name: "Bansal IET", logo: bansal_logo },
        { name: "RR Group of Institution", logo: rr_logo },
        { name: "SR Group of Institution", logo: sr_logo },
    ];

    const diplomaColleges = [
        { name: "Hewett Polytechnic", logo: hewett_logo },
        { name: "Government Polytechnic Gonda", logo: gp_gonda },
        { name: "JawaharLal Nehru Polytechnic", logo: jlnp },
        { name: "Government Polytechnic Faizabad(Ayodhya)", logo: gp_ayodhya },
        { name: "Government Polytechnic Basti", logo: gp_basti },
        { name: "Government Polytechnic Gorakhpur", logo: gp_gorakhpur },
    ];
    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-8">
                Training Partners
            </h2>

            {/* Graduation Colleges Carousel */}
            <div className="mb-16">
                <h3 className="text-xl font-semibold text-text mb-4">
                    Graduation Colleges
                </h3>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    slidesPerView={3}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="my-8"
                >
                    {graduationColleges.map((college, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center bg-white rounded-lg py-6 hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={college.logo}
                                    alt={college.name}
                                    className="w-32 h-32 mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {college.name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Diploma Colleges Carousel */}
            <div>
                <h3 className="text-xl font-semibold mb-4 text-text">
                    Diploma Colleges
                </h3>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    slidesPerView={3}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        reverseDirection: true, // Reverse direction for this carousel
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="my-8"
                >
                    {diplomaColleges.map((college, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center bg-white rounded-lg py-6 hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={college.logo}
                                    alt={college.name}
                                    className="w-32 h-32 mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {college.name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            <Helmet>
                
            </Helmet>
            <CarouselComponent items={items} />
            <Courses />
            <TrainingPartners />
            <CertificationPartners />
            <CourseCarousel />
            <TrainingPlans />
        </>
    );
};

export default Home;
