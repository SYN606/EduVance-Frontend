import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaShieldAlt, FaDesktop, FaCog } from "react-icons/fa";

const Courses = () => {
    const categories = [
        {
            name: "Computer Basics",
            icon: <FaDesktop className="text-4xl text-[#ec7932]" />,
            courses: [
                { title: "Introduction to Computers", description: "Learn the basics of computer hardware and software.", image: "https://via.placeholder.com/400x250?text=Computer+Basics" },
                { title: "MS Office Suite", description: "Get familiar with Microsoft Office tools like Word, Excel, and PowerPoint.", image: "https://via.placeholder.com/400x250?text=MS+Office+Suite" },
                { title: "Basic Programming", description: "An introductory course to programming concepts.", image: "https://via.placeholder.com/400x250?text=Basic+Programming" },
                { title: "Computer Networks", description: "Learn the fundamentals of computer networking and protocols.", image: "https://via.placeholder.com/400x250?text=Computer+Networks" },
                { title: "Database Basics", description: "Understand the basics of databases, SQL, and data management.", image: "https://via.placeholder.com/400x250?text=Database+Basics" }
            ]
        },
        {
            name: "Cyber Security",
            icon: <FaShieldAlt className="text-4xl text-[#ec7932]" />,
            courses: [
                { title: "Introduction to Cyber Security", description: "Learn the fundamentals of cyber security and how to protect systems.", image: "https://via.placeholder.com/400x250?text=Cyber+Security" },
                { title: "Network Security", description: "Explore network security concepts and strategies to safeguard networks.", image: "https://via.placeholder.com/400x250?text=Network+Security" },
                { title: "Ethical Hacking", description: "Learn the art of penetration testing and ethical hacking.", image: "https://via.placeholder.com/400x250?text=Ethical+Hacking" },
                { title: "Cyber Threats and Attacks", description: "Learn about various cyber threats and how to mitigate them.", image: "https://via.placeholder.com/400x250?text=Cyber+Threats+and+Attacks" },
                { title: "Digital Forensics", description: "Study the techniques of collecting and analyzing digital evidence.", image: "https://via.placeholder.com/400x250?text=Digital+Forensics" }
            ]
        },
        {
            name: "Web Development",
            icon: <FaLaptopCode className="text-4xl text-[#ec7932]" />,
            courses: [
                { title: "HTML & CSS Basics", description: "Learn how to structure and style webpages using HTML and CSS.", image: "https://via.placeholder.com/400x250?text=HTML+%26+CSS+Basics" },
                { title: "JavaScript Fundamentals", description: "An introduction to JavaScript programming for web development.", image: "https://via.placeholder.com/400x250?text=JavaScript+Fundamentals" },
                { title: "Full Stack Web Development", description: "Learn both frontend and backend web development.", image: "https://via.placeholder.com/400x250?text=Full+Stack+Development" },
                { title: "Responsive Web Design", description: "Learn how to design websites that work well on all devices.", image: "https://via.placeholder.com/400x250?text=Responsive+Web+Design" },
                { title: "React.js Basics", description: "An introductory course on React.js for building dynamic UIs.", image: "https://via.placeholder.com/400x250?text=React.js+Basics" }
            ]
        },
        {
            name: "Mechanical & Civil Engineering",
            icon: <FaCog className="text-4xl text-[#ec7932]" />,
            courses: [
                { title: "Introduction to Mechanical Engineering", description: "Learn about the basics of mechanical systems and machinery.", image: "https://via.placeholder.com/400x250?text=Mechanical+Engineering" },
                { title: "Structural Analysis", description: "A course focused on understanding the analysis of structures in civil engineering.", image: "https://via.placeholder.com/400x250?text=Structural+Analysis" },
                { title: "Construction Management", description: "Learn the basics of construction project management.", image: "https://via.placeholder.com/400x250?text=Construction+Management" },
                { title: "Fluid Mechanics", description: "Study the behavior of fluids in motion and at rest.", image: "https://via.placeholder.com/400x250?text=Fluid+Mechanics" },
                { title: "Building Materials", description: "Learn about the materials used in construction and their properties.", image: "https://via.placeholder.com/400x250?text=Building+Materials" }
            ]
        }
    ];


    return (
        <div className="bg-[#fbf4f6] min-h-screen">
            <div className="container mx-auto p-8">
                <h1 className="text-5xl font-extrabold text-[#083763] text-center mb-12">Our Courses</h1>
                {categories.map((category, index) => (
                    <div key={index} className="mb-16">
                        <Link
                            to={`/c/${category.name.replace(/\s+/g, '-').toLowerCase()}`}
                            className="text-[#ec7932] mt-4 inline-block hover:text-[#db8d84] transition duration-300"
                        >
                            <div className="flex items-center mb-6">
                                {category.icon}
                                <h2 className="text-4xl font-semibold text-[#083763] ml-4">{category.name}</h2>
                            </div>
                        </Link>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.courses.map((course, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-56 object-cover rounded-lg mb-6"
                                    />
                                    <h3 className="text-3xl font-medium text-[#083763] mb-4">{course.title}</h3>
                                    <p className="text-[#6c5e78] mb-6">{course.description}</p>
                                    <Link
                                        to={`/c/${category.name.replace(/\s+/g, '-').toLowerCase()}/${course.title.replace(/\s+/g, '-').toLowerCase()}`}
                                        className="text-[#ec7932] inline-block hover:text-[#db8d84] transition duration-300"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
