import { skillIndia, msme, iso20001, iso9001 } from "../assets";

const CertificationPartners = () => {
    const logos = [
        { id: 1, src: skillIndia, alt: "Skill India" },
        { id: 2, src: iso20001, alt: "ISO 20001" },
        { id: 3, src: iso9001, alt: "ISO 9001" },
        { id: 4, src: msme, alt: "MSME" },
    ];

    return (
        <div className="bg-gray-100 p-10 shadow-lg ">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-6">Certification Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {logos.map((logo) => (
                    <div key={logo.id} className="bg-white p-4 flex justify-center items-center rounded-lg shadow-md border border-gray-200">
                        <img src={logo.src} alt={logo.alt} className="max-h-32" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificationPartners
