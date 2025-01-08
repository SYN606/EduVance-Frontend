import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Messages = ({ message, clearMessage, type = 'error' }) => {
    if (!message) {
        return null;  
    }
    let bgColor, iconColor;
    switch (type) {
        case 'success':
            bgColor = 'bg-green-500';
            iconColor = 'text-green-600';
            break;
        case 'info':
            bgColor = 'bg-blue-500';
            iconColor = 'text-blue-600';
            break;
        case 'error':
        default:
            bgColor = 'bg-red-500';
            iconColor = 'text-red-600';
            break;
    }

    return (
        <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 ${bgColor} text-white py-2 px-4 rounded-md z-50 flex items-center justify-between`}>
            <span>{message}</span>
            <button
                className={`ml-4 ${iconColor}`}
                onClick={clearMessage}
            >
                <FaTimes />
            </button>
        </div>
    );
};

export default Messages;
