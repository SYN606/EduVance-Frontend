import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        // Set a message in localStorage for redirect
        localStorage.setItem('redirectMessage', 'You must be logged in to access this page.');
        localStorage.setItem('messageType', 'error'); // Optional: you can use 'error' or 'info' based on the message type

        return <Navigate to="/login" state={{ from: location }} />;
    }

    return element;
};

export default ProtectedRoute;
