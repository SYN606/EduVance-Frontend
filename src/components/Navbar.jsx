import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../img/EduVance_logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { text: "Home", link: "/" },
        { text: "Courses", link: "/c/" },
        { text: "Services", link: "/services" },
        { text: "Contact", link: "/contact" },
        { text: "About", link: "/about_us" },
    ];

    return (
        <div className="relative mb-16">
            <nav className="bg-background text-text shadow-md fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex items-center justify-between px-6 py-2">
                    {/* Logo with Text */}
                    <div className="flex items-center sm:space-x-3">
                        <img
                            src={LogoImage}
                            alt="Logo"
                            className="object-cover aspect-square rounded-full md:w-14 w-12 transition-all duration-300"
                        />
                        <Link
                            to="/"
                            className="text-3xl font-bold hover:text-accent transition-all duration-300"
                        >
                            EduVance
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            {navItems.map((item) => (
                                <li key={item.link}>
                                    <NavLink
                                        to={item.link}
                                        className={({ isActive }) =>
                                            `hover:text-accent transition-all duration-300 ${isActive ? "text-accent font-semibold" : ""
                                            }`
                                        }
                                    >
                                        {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Link
                                to="/login"
                                className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-background hover:text-primary transition-all duration-300"
                            >
                                Login
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden bg-background text-center absolute top-16 left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen py-4" : "max-h-0"}`}
                >
                    <ul className="space-y-6">
                        {navItems.map((item) => (
                            <li key={item.link}>
                                <NavLink
                                    to={item.link}
                                    onClick={toggleMenu}
                                    className={({ isActive }) =>
                                        `block text-lg font-medium py-2 hover:text-accent transition-all duration-300 ${isActive ? "text-accent font-semibold" : ""}`
                                    }
                                >
                                    {item.text}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/login"
                                onClick={toggleMenu}
                                className="block bg-accent text-white px-6 py-2 rounded-lg mx-auto w-28 hover:bg-white hover:text-primary transition-all duration-300"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
