import { Link } from "react-router-dom";

const CourseCards = ({ courses }) => {
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };
    return (
        <div className="mt-10 container mx-auto">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-6">Our Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-4 rounded-lg border border-gray-200">
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
}

export default CourseCards
