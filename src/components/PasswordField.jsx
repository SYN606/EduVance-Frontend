import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const PasswordField = ({ inputLabel = "Password", value, onChange }) => {
    const [isClose, setIsClose] = useState(true);

    return (
        <div className="mb-2">
            <label
                htmlFor={inputLabel.toLowerCase().replace(" ", "-")}
                className="block text-sm font-semibold text-gray-800"
            >
                {inputLabel}
            </label>
            <div className="relative mt-2 flex justify-end items-center">
                <input
                    type={isClose ? "password" : "text"}
                    id={inputLabel.toLowerCase().replace(" ", "-")}
                    value={value}
                    onChange={onChange}
                    className="block w-full px-4 py-2 pr-10 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 user-invalid-pink"
                    required
                />
                <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setIsClose(!isClose)}
                >
                    {isClose ? <LuEyeOff size={24} /> : <LuEye size={24} />}
                </span>
            </div>
        </div>
    );
};

export default PasswordField;
