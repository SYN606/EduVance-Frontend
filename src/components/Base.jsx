import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Messages from './Messages';

const Base = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // Keep track of message type
    const location = useLocation();

    useEffect(() => {
        const message = localStorage.getItem('redirectMessage');
        const messageType = localStorage.getItem('messageType') || 'error'; // Default type is 'error'
        if (message) {
            setErrorMessage(message);
            setMessageType(messageType);
            localStorage.removeItem('redirectMessage');
            localStorage.removeItem('messageType');
        }
    }, [location]);

    const clearMessage = () => {
        setErrorMessage('');
        setMessageType('');
    };

    return (
        <div>
            <Navbar />
            <Messages message={errorMessage} clearMessage={clearMessage} type={messageType} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Base;
