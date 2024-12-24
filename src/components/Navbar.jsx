import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../img/tekNav_logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Array of nav items
    const navItems = [
        { text: "Home", link: "/" },
        { text: "Courses", link: "c/" },
        { text: "Services", link: "/services" },
        { text: "Contact", link: "/contact" },
        { text: "About", link: "/about_us" },
    ];

    return (
        <nav className="bg-background text-text shadow-lg relative z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-2">
                {/* Logo with Text */}
                <div className="flex items-center space-x-2">
                    <img src={LogoImage} alt="Logo" className="object-cover aspect-square w-14" />
                    <Link to="/" className="text-2xl hover:text-accent transition-all duration-300">
                        TekNavigators
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6">
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
                            className="bg-accent text-white px-4 py-2 rounded-md hover:bg-background hover:text-primary transition-all duration-300"
                        >
                            Login
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-background text-center absolute top-16 left-0 w-full overflow-hidden transition-all duration-500 ${isOpen ? "max-h-screen py-4" : "max-h-0"}`}
            >
                <ul className="space-y-4">
                    {navItems.map((item) => (
                        <li key={item.link}>
                            <NavLink
                                to={item.link}
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `block text-lg hover:text-accent transition-all duration-300 ${isActive ? "text-accent font-semibold" : ""
                                    }`
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
                            className="block bg-accent text-white px-4 py-2 rounded-md mx-auto w-24 hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
