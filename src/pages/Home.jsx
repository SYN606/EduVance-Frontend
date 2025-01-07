import { LuAtom, LuGraduationCap, LuMonitor, LuCode, LuUsers } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// ------ ADDITIONAL IMPORTS ------
import skill_india from '../img/logo-nsdc.png';
import msme from '../img/logo-msme.png';
import iso_20001 from '../img/logo-ISO-20001.png';
import iso_9001 from '../img/logo-ISO-9001.png';
import CarouselComponent from '../components/Carousel';
import { Title } from "react-head";

// carousel items
const items = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        altText: "Welcome to EduVance",
        caption: "Slide 1 Caption"
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg",
        altText: "Slide 2",
        caption: "Slide 2 Caption"
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg",
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
                        <div className="mb-3 flex justify-center">{course.icon}</div>
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
    const csUniversities = [
        { name: "Massachusetts Institute of Technology (MIT)", logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/800px-MIT_Seal.svg.png' },

        { name: "Stanford University", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/800px-Seal_of_Leland_Stanford_Junior_University.svg.png' },

        { name: "Carnegie Mellon University (CMU)", logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Carnegie_Mellon_University_seal.svg/800px-Carnegie_Mellon_University_seal.svg.png' },

        { name: "University of California, Berkeley", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/800px-Seal_of_University_of_California%2C_Berkeley.svg.png' },

        { name: "University of Cambridge", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/800px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png' },
    ];

    const aeroUniversities = [
        { name: "California Institute of Technology (Caltech)", logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/800px-Seal_of_the_California_Institute_of_Technology.svg.png' },

        { name: "Massachusetts Institute of Technology (MIT)", logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/800px-MIT_Seal.svg.png' },

        { name: "University of Michigan", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/800px-Seal_of_the_University_of_Michigan.svg.png' },

        { name: "Embry-Riddle Aeronautical University", logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Embry-Riddle_Aeronautical_University_seal.svg/800px-Embry-Riddle_Aeronautical_University_seal.svg.png' },

        { name: "Cranfield University", logo: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Cranfield_University_Arms_2007.jpg' },
    ];
    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-8">
                Training Partners
            </h2>
            <div className="mb-16">
                <h3 className="text-xl font-semibold text-text mb-4">
                    Top Computer Science Colleges
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
                    {csUniversities.map((college, index) => (
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

            <div>
                <h3 className="text-xl font-semibold mb-4 text-text">
                    Top Aeronautics Colleges
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
                    {aeroUniversities.map((college, index) => (
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
            <Title>EduVance - Homepage</Title>
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
