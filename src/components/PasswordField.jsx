import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordField = ({ inputLabel = "Password" }) => {
    const [isClose, setIsClose] = useState(true);
    return (
        <div className="mb-2">
            <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
            >
                {inputLabel}
            </label>
            <div className='relative mt-2 flex justify-end items-center'>
                <input
                    type={isClose ? "password" : "text"}
                    className="block w-full px-4 py-2 pe-10 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 user-invalid-pink"
                    required
                />
                <span className='absolute right-2 cursor-pointer'
                    onClick={() => setIsClose(!isClose)}>{isClose ? <FaEyeSlash /> : <FaEye />}</span>
            </div>
        </div>
    )
}

export default PasswordField
