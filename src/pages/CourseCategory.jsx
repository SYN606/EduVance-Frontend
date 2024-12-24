import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CourseCat() {
    const [courses, setCourses] = useState([]);

    // Simulate fetching data from the backend
    useEffect(() => {
        // Dummy data to simulate the backend response
        const dummyData = [
            {
                id: 1,
                name: "React JS for Beginners",
                slug: "react-js-for-beginners",
                description: "Learn the basics of React JS and build dynamic web applications.",
                duration: "4 weeks",
                details: "This course covers React components, JSX, state, props, and basic hooks with hands-on projects.",
            },
            {
                id: 2,
                name: "Advanced JavaScript",
                slug: "advanced-javascript",
                description: "Master JavaScript with advanced concepts and real-world projects.",
                duration: "6 weeks",
                details: "Topics include closures, async programming, and JavaScript design patterns.",
            },
            {
                id: 3,
                name: "Web Development Bootcamp",
                slug: "web-development-bootcamp",
                description: "Comprehensive training in HTML, CSS, JavaScript, and responsive design.",
                duration: "12 weeks",
                details: "Learn everything about front-end and back-end web development with practical projects.",
            },
            {
                id: 4,
                name: "Python for Data Science",
                slug: "python-for-data-science",
                description: "Kickstart your data science journey with Python programming.",
                duration: "8 weeks",
                details: "Covers data analysis, visualization, and machine learning basics using Python.",
            },
            {
                id: 5,
                name: "Cloud Computing Essentials",
                slug: "cloud-computing-essentials",
                description: "Understand cloud computing fundamentals with AWS, Azure, and Google Cloud.",
                duration: "5 weeks",
                details: "Covers cloud services, virtualization, and deployment of cloud applications.",
            },
        ];

        // Simulate API call delay
        setTimeout(() => {
            setCourses(dummyData);
        }, 500);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold text-blue-600">Computer Courses</h1>
                <p className="text-gray-700">Explore the best courses for your career!</p>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div
                        key={course.slug}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2>
                        <p className="text-gray-600 mt-2">{course.description}</p>
                        <Link
                            to={`/courses/${course.slug}`}
                            className="text-blue-500 font-medium mt-4 inline-block"
                        >
                            View Details →
                        </Link>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default CourseCat;
