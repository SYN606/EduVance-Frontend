import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const location = useLocation();

    if (!isAuthenticated()) {
        localStorage.setItem('redirectMessage', 'You need to login first for accessing these features');
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return element; // Render the component passed as "element"
};

export default ProtectedRoute;
