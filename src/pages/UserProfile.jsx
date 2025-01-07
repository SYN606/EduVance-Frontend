import React from "react";

const UserProfile = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
                {/* Header Section */}
                <div className="flex items-center mb-6">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-blue-500"
                    />
                    <div className="ml-6">
                        <h2 className="text-2xl font-bold text-gray-700">Student Name</h2>
                        <p className="text-gray-500">Registration Number: 12345678</p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold text-gray-600">Email:</h3>
                        <p className="text-gray-700">student.email@example.com</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">Phone Number:</h3>
                        <p className="text-gray-700">+123 456 7890</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">School/College:</h3>
                        <p className="text-gray-700">XYZ University</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">Address:</h3>
                        <p className="text-gray-700">123 Main Street, City, Country</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">Enrolled Course:</h3>
                        <p className="text-gray-700">Computer Science</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">Duration Left:</h3>
                        <p className="text-gray-700">1 year</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
