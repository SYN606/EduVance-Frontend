import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputField from '../components/InputField';
import PasswordField from '../components/PasswordField';
import { Title } from 'react-head';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setError('');
                console.log('Signup Successful:', data);
                setTimeout(() => {
                    navigate('/login', { state: { email, password } });
                }, 2000);
            } else {
                setSuccess(false);
                setError(data.message || 'Signup failed. Please try again.');
            }
        } catch (err) {
            console.error('Error:', err);
            setSuccess(false);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <Title>EduVance - Sign Up for an Account</Title>

            <div className="flex flex-col justify-center min-w-screen overflow-hidden px-2 sm:px-20 md:px-40 min-h-screen">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-indigo-600/40 ring ring-indigo-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                        Sign Up
                    </h1>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        {/* Username Field */}
                        <InputField
                            inputType="text"
                            inputLabel="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        {/* Email Field */}
                        <InputField
                            inputType="email"
                            inputLabel="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Password Field */}
                        <PasswordField
                            inputLabel="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* Confirm Password Field */}
                        <PasswordField
                            inputLabel="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        {/* Error or Success Messages */}
                        {error && (
                            <p className="text-red-500 text-xs mt-2">{error}</p>
                        )}
                        {success && (
                            <p className="text-green-500 text-xs mt-2">
                                Signup successful! Redirecting to login...
                            </p>
                        )}

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    {/* Redirect to Login */}
                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-indigo-600 hover:underline"
                        >
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
