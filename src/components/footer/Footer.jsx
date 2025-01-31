import { Link } from "react-router-dom";
import { Logo } from "..";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const quickLinks = [
        { text: "Home", link: "/" },
        { text: "About Us", link: "/about_us" },
        { text: "Courses", link: "/c/" },
        { text: "Contact", link: "/contact" },
    ];

    const followLinks = [
        { link: "https://facebook.com", icon: <FaFacebookF size={24} /> },
        { link: "https://x.com", icon: <FaTwitter size={24} /> },
        { link: "https://linkdin.com", icon: <FaLinkedinIn size={24} /> },
        { link: "https://instagram.com", icon: <FaInstagram size={24} /> },
    ];

    return (
        <footer className="py-8 bg-dark-500 text-light-500">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Logo className="w-32 mx-auto" />
                        <p className="text-sm">
                            EduTech is committed to providing top-quality online education and resources to students worldwide. Our mission is to make learning accessible and engaging for all.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(item => <li key={item.link}>
                                <Link to={item.link} className="hover:text-accent-500 transition-colors duration-200">
                                    {item.text}</Link>
                            </li>)}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Contact Information</h3>
                        <p className="text-sm">
                            <strong>Email:</strong> support@edutech.com
                        </p>
                        <p className="text-sm">
                            <strong>Phone:</strong> +123 456 7890
                        </p>
                        <p className="text-sm">
                            <strong>Address:</strong> 123 Education St, Learning City, Country
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex space-x-6">
                            {followLinks.map(item =>
                                <a key={item.link} href={item.link} className="text-light-500 hover:text-accent-500 transition-colors duration-200">
                                    {item.icon}</a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center border-t pt-4 text-sm text-gray-500">
                    <p>© 2025 EduTech, All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

