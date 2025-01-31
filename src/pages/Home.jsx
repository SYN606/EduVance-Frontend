import { useEffect } from "react";
import { Carousel, CourseCards, CarouselPagination, CarouselBtn, CertificationPartners, TrainingPlans } from "../components";
import { LuAtom, LuGraduationCap, LuMonitor, LuCode, LuUsers } from "react-icons/lu";

const Home = () => {
    const carouselItems = [
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

    const degrees = [
        { icon: <LuAtom size={50} className="text-blue-500" />, title: "B.Sc" },
        { icon: <LuGraduationCap size={50} className="text-blue-500" />, title: "Diploma" },
        { icon: <LuMonitor size={50} className="text-blue-500" />, title: "BCA" },
        { icon: <LuCode size={50} className="text-blue-500" />, title: "MCA" },
        { icon: <LuUsers size={50} className="text-blue-500" />, title: "BBA" },
    ];

    useEffect(() => {
        document.title = "Eduvance - Homepage";
    }, []);


    return (
        <>
            <Carousel items={carouselItems} />
            <CourseCards courses={courses} />
            <div className="container mx-auto py-16 px-4">
                <h2 className="text-center text-3xl font-bold text-blue-700 mb-8">
                    Training Partners
                </h2>
                <div className="mb-16">
                    <h3 className="text-xl font-semibold text-text mb-4">
                        Top Computer Science Colleges
                    </h3>
                    <CarouselPagination items={csUniversities} />
                </div>
                <div className="mb-16">
                    <h3 className="text-xl font-semibold text-text mb-4">
                        Top Aeronautics Colleges
                    </h3>
                    <CarouselPagination items={aeroUniversities} reverse={true} />
                </div>
            </div>
            <CertificationPartners />
            <div className="max-w-3xl mx-auto py-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Who can join our courses?</h2>
                <p className="text-gray-500 mb-6">MCA, B.Tech, MBA & more</p>
                <CarouselBtn items={degrees} />
            </div>
            <TrainingPlans />
        </>
    )
}

export default Home
