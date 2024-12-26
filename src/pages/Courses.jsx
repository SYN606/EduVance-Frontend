import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaLaptopCode, FaShieldAlt, FaDesktop, FaCog } from "react-icons/fa";

const Courses = () => {
    const [coursesData, setCoursesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/courses/")
            .then((response) => {
                setCoursesData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error fetching data", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="bg-background min-h-screen pt-16">
            <div className="container mx-auto p-8">
                <h1 className="text-5xl font-bold text-text text-center mb-12">Our Courses</h1>
                {coursesData.map((courseCategory, index) => (
                    <div key={index} className="mb-16">
                        <Link
                            to={`/c/${courseCategory.slug}`}
                            className="text-primary mt-4 inline-block hover:text-accent transition duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <FaDesktop className="text-4xl text-primary" />
                                <h2 className="text-4xl font-semibold text-text-color ml-4">{courseCategory.name}</h2>
                            </div>
                        </Link>
                        {courseCategory.courses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {courseCategory.courses.map((course, courseIndex) => (
                                    <div key={courseIndex} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                                        <img
                                            src={`http://127.0.0.1:8000${course.main_image}`}
                                            alt={course.slug}
                                            className="w-full h-56 object-cover rounded-lg mb-6"
                                        />
                                        <h3 className="text-3xl font-medium text-text-color mb-4">{course.course_title}</h3>
                                        <p className="text-secondary mb-6">{course.description}</p>
                                        <Link
                                            to={`/c/${courseCategory.slug}/${course.slug}`}
                                            className="text-primary inline-block hover:text-accent transition duration-300"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-secondary">No courses available in this category.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
