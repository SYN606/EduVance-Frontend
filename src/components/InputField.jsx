
const InputField = ({ inputType = "email", inputLabel = "Email" }) => {
    return (
        <div className="mb-2">
            <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
            >
                {inputLabel}
            </label>
            <input
                type={inputType}
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 user-invalid-pink"
                required
            />
        </div>
    )
}

export default InputField
