import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoImage from '../img/EduVance_logo.png'; // Replace with your logo path

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Logo and Description */}
                    <div className="space-y-4">
                        <img src={LogoImage} alt="Company Logo" className="w-32 object-cover aspect-square mx-auto rounded-full" />
                        <p className="text-sm">
                            EduTech is committed to providing top-quality online education and resources to students worldwide.
                            Our mission is to make learning accessible and engaging for all.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/home" className="hover:text-accent transition-all duration-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-accent transition-all duration-300">About Us</Link>
                            </li>
                            <li>
                                <Link to="/courses" className="hover:text-accent transition-all duration-300">Courses</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-accent transition-all duration-300">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
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

                    {/* Follow Us */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com" className="text-light hover:text-accent transition-all duration-300">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-light hover:text-accent transition-all duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-light hover:text-accent transition-all duration-300">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-light hover:text-accent transition-all duration-300">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 text-center border-t pt-4 text-sm text-gray-500">
                    <p>© {currentYear} EduTech, All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
