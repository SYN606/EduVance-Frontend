const TrainingPlans = () => {
    const trainingPlans = [
        {
            title: "Summer Training",
            description:
                "Join our summer training programs to gain hands-on experience with real-world projects. Perfect for students looking to boost their skills during the summer break.",
        },
        {
            title: "Winter Training",
            description:
                "Our winter training is designed to provide in-depth knowledge of emerging technologies, preparing you for industry challenges with practical exposure.",
        },
        {
            title: "Corporate Training",
            description:
                "Tailored corporate training programs to empower teams with the latest tools and methodologies, enhancing productivity and delivering business value.",
        },
    ];

    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-2">
                Our Training Plans
            </h2>
            <p className="text-center text-gray-600 mb-8">
                Winter, Summer, In-house Training & More
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded p-6 hover:shadow-2xl transition-shadow duration-300">

                        <div className="bg-blue-500 text-white font-semibold text-lg py-2 text-center rounded">
                            {plan.title}
                        </div>
                        <p className="text-gray-700 mt-4">
                            {plan.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default TrainingPlans
