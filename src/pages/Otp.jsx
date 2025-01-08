import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OTPPage() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(240);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [sentOtp] = useState('');
    const userId = localStorage.getItem('user_id'); // Get user_id from local storage

    const email = localStorage.getItem('email');

    useEffect(() => {
        if (sentOtp === '') {
        }

        if (timer === 0) {
            setIsTimeUp(true);
            return;
        }

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer, sentOtp]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const otpData = { user_id: userId, otp };  // Create JSON object with user_id and OTP

        try {
            const response = await fetch('http://localhost:8000/api/verify-otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(otpData), // Send JSON object to the backend
                credentials: 'include', // Send cookies if needed
            });

            const data = await response.json();

            if (response.ok) {
                alert("OTP Verified Successfully!");
                navigate('/'); // Redirect to the homepage or any other page on success
            } else {
                alert(data.message || 'Invalid OTP. Please try again.');
            }
        } catch (err) {
            alert('An error occurred. Please try again later.');
        }
    };

    const handleResend = () => {
        if (isTimeUp) {
            alert("Resending OTP...");
            setTimer(240);
            setIsTimeUp(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-background">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-md">
                <h2 className="text-2xl font-semibold text-center text-text mb-6">OTP Verification</h2>
                <p className="text-center text-sm text-secondary mb-4">A One-Time Password (OTP) has been sent to your email: <strong>{email}</strong></p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-text mb-2">Enter OTP</label>
                        <input
                            type="text"
                            value={otp}
                            onChange={handleOtpChange}
                            maxLength={6}
                            placeholder="Enter OTP"
                            disabled={isTimeUp}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-100"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isTimeUp}
                        className={`w-full py-3 text-white font-semibold rounded-md transition duration-200 ${isTimeUp ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-accent'}`}
                    >
                        Submit OTP
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold text-text">
                        Time Left: {formatTime(timer)}
                    </h3>
                    {isTimeUp && <p className="mt-2 text-red-600 text-sm">Time's up! OTP is no longer valid.</p>}
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-secondary">
                        Didn't receive the OTP?
                        <button
                            onClick={handleResend}
                            className={`text-primary font-medium hover:underline ${isTimeUp ? '' : 'cursor-not-allowed text-gray-400'}`}
                            disabled={!isTimeUp}
                        >
                            Resend OTP
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OTPPage;
