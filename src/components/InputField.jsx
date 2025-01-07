const InputField = ({ inputType = "email", inputLabel = "Email", value, onChange }) => {
    return (
        <div className="mb-2">
            <label
                htmlFor={inputLabel.toLowerCase()}
                className="block text-sm font-semibold text-gray-800"
            >
                {inputLabel}
            </label>
            <input
                type={inputType}
                id={inputLabel.toLowerCase()}
                value={value}
                onChange={onChange}
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
            />
        </div>
    );
};

export default InputField;
