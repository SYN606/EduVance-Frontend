import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import PasswordField from '../components/PasswordField';
import { Title } from 'react-head';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Get email and password from state if provided by SignUp
    useEffect(() => {
        if (location.state) {
            setEmail(location.state.email);
            setPassword(location.state.password);
        }
    }, [location]);

    // Function to set JWT tokens in cookies
    const setJwtCookies = (accessToken, refreshToken) => {
        document.cookie = `access_token=${accessToken}; path=/; HttpOnly; Secure; SameSite=Strict`;
        document.cookie = `refresh_token=${refreshToken}; path=/; HttpOnly; Secure; SameSite=Strict`;
    };

    // Function to refresh the access token using the refresh token
    const refreshAccessToken = async () => {
        const refreshToken = getCookie('refresh_token');
        if (!refreshToken) return;

        try {
            const response = await fetch('http://localhost:8000/api/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refresh_token: refreshToken }),
            });

            const data = await response.json();

            if (response.ok) {
                setJwtCookies(data.access_token, refreshToken); // Save new access token in cookies
                return data.access_token; // Return the new access token
            } else {
                throw new Error('Failed to refresh access token');
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            setError('Session expired. Please log in again.');
            return null;
        }
    };

    // Helper function to get a cookie value
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle success, navigate to OTP verification or dashboard
                console.log('Login Successful:', data);

                // Set JWT tokens in cookies
                setJwtCookies(data.access_token, data.refresh_token);

                navigate('/verify_otp'); // Example of redirect after login
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <Title>EduVance - Login into Your account</Title>
            <div className="flex flex-col justify-center min-w-screen overflow-hidden px-2 sm:px-20 md:px-40 min-h-screen">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-indigo-600/40 ring ring-indigo-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                        Sign in
                    </h1>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <InputField
                            inputType="email"
                            inputLabel="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordField
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link
                            to="/forget-password"
                            className="text-xs text-indigo-600 hover:underline"
                        >
                            Forget Password?
                        </Link>
                        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-medium text-indigo-600 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
