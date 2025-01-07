import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaTimes } from 'react-icons/fa';

const Base = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();  // useLocation inside the Router context

    useEffect(() => {
        const message = localStorage.getItem('redirectMessage');
        if (message) {
            setErrorMessage(message);
            localStorage.removeItem('redirectMessage');
        }
    }, [location]);

    return (
        <div>
            {/* navbar */}
            <Navbar />

            {/* Error Message */}
            {errorMessage && (
                <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-2 px-4 rounded-md z-50 flex items-center justify-between">
                    <span>{errorMessage}</span>
                    <button
                        className="ml-4 text-white"
                        onClick={() => setErrorMessage('')}
                    >
                        <FaTimes />
                    </button>
                </div>
            )}

            <Outlet />
            <Footer />
        </div>
    );
};

export default Base;
