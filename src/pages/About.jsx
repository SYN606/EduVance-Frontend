import { useEffect } from "react"
import { Link } from "react-router-dom";
import { FaCheckCircle, FaLaptop, FaWifi, FaChalkboardTeacher, FaBuilding, FaCertificate } from 'react-icons/fa'; // Import icons

const About = () => {
    useEffect(() => {
        document.title = "Eduvance - About Us";
    }, []);

    return (
        <div className="bg-bg-500 text-normal-500 pt-10">
            <section className="bg-primary-500 text-light-500 py-16">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">About EduVance</h1>
                    <p className="text-lg">Your Partner in Career Transformation</p>
                </div>
            </section>
            <section className="py-12 bg-light-500">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
                    <p className="text-lg leading-relaxed">
                        At EduVance, we are committed to empowering learners with industry-relevant skills. As a globally recognized leader in training and placement solutions, we hold ISO 9001:2015 and ISO 27001:2013 certifications. Our goal is to bridge the gap between education and employment, ensuring our students thrive in the fast-evolving tech landscape.
                    </p>
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-500 shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Vision</h3>
                        <p className="leading-relaxed">
                            To empower learners with tools and opportunities that pave the way for academic and professional excellence in the global job market.
                        </p>
                    </div>
                    <div className="bg-light-500 shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Mission</h3>
                        <p className="leading-relaxed">
                            Our mission is to bridge the gap between education and industry by offering innovative training solutions, inspiring confidence, and unlocking potential for future success.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-light-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">What Makes Us Unique</h2>
                    <p className="text-lg leading-relaxed">
                        Our uniqueness lies in our commitment to quality, backed by over 8 years of experience and ISO certifications. With a focus on evergreen technologies, we offer courses tailored to meet the dynamic demands of the global job market.
                    </p>
                </div>
            </section>
            <section className="py-12 bg-light">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Impact and Results</h2>
                    <p className="text-lg leading-relaxed text-center">
                        Thousands of engineers have transformed their careers through EduVance. From tailored industrial training to placement success in leading MNCs, our programs are designed for real-world impact.
                    </p>
                </div>
            </section>
            <section className="py-12 bg-light-500">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">Facilities</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <li className="flex items-center bg-white p-4 shadow-md rounded-lg">
                            <FaChalkboardTeacher className="text-accent-500 mr-3" /> Smart classrooms with projectors
                        </li>
                        <li className="flex items-center bg-white p-4 shadow-md rounded-lg">
                            <FaWifi className="text-accent-500 mr-3" /> Wi-Fi-enabled spaces
                        </li>
                        <li className="flex items-center bg-white p-4 shadow-md rounded-lg">
                            <FaBuilding className="text-accent-500 mr-3" /> Air-conditioned rooms
                        </li>
                        <li className="flex items-center bg-white p-4 shadow-md rounded-lg">
                            <FaLaptop className="text-accent-500 mr-3" /> Industry-grade lab setups
                        </li>
                        <li className="flex items-center bg-white p-4 shadow-md rounded-lg">
                            <FaCertificate className="text-accent-500 mr-3" /> Modern training tools and software
                        </li>
                        <li className="flex items-center bg-white p-4 shadow-md rounded-lg">
                            <FaCheckCircle className="text-accent-500 mr-3" /> Comfortable learning environment
                        </li>
                    </ul>
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">What Our Students Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="testimonial bg-white shadow-md rounded-lg p-6">
                            <p className="leading-relaxed italic">"The hands-on training and industry insights at EduVance equipped me for a career I had only dreamed of before."</p>
                            <span className="block mt-4 text-right text-sm font-bold">- A Happy Graduate</span>
                        </div>
                        <div className="testimonial bg-white shadow-md rounded-lg p-6">
                            <p className="leading-relaxed italic">"EduVance' expert trainers and state-of-the-art facilities made all the difference in my professional journey."</p>
                            <span className="block mt-4 text-right text-sm font-bold">- A Satisfied Professional</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-accent-500 text-light-500 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
                    <p className="text-lg mb-6">Embark on a transformative journey with EduVance. Discover our courses and take the first step toward your dream career.</p>
                    <Link to='c/'>
                        <button className="px-6 py-3 bg-primary-500 text-light-500 font-bold rounded-lg shadow hover:bg-secondary-500">Explore Courses</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About
