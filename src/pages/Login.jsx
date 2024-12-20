import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Base from '../components/Base';

export default function Login() {
    const [isClose, setIsClose] = useState(true);
    const toggleEye = () => {
        setIsClose(!isClose);
    }
    return (
        <>
            <Base>
                <div className="flex flex-col justify-center min-w-screen overflow-hidden px-2 sm:px-20 md:px-40 min-h-screen">
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-indigo-600/40 ring ring-2 ring-indigo-600 lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                            Sign in
                        </h1>
                        <form className="mt-6">
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 user-invalid-pink"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Password
                                </label>
                                <div className='relative mt-2 flex justify-end items-center'>
                                    <input
                                        type={isClose ? "password" : "text"}
                                        className="block w-full px-4 py-2 pe-10 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 user-invalid-pink"
                                        required
                                    />
                                    <span className='absolute right-2'
                                        onClick={toggleEye}>{isClose ? <FaEyeSlash color="text-gray-800" /> : <FaEye color="text-gray-800" />}</span>
                                </div>
                            </div>
                            <Link
                                to="/forget-password"
                                className="text-xs text-indigo-600 hover:underline"
                            >
                                Forget Password?
                            </Link>
                            <div className="mt-6">
                                <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
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
            </Base>
        </>
    )
}

