import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { Logo } from "..";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { text: "Home", link: "/" },
        { text: "Courses", link: "/c/" },
        { text: "Services", link: "/services" },
        { text: "Contact", link: "/contact" },
        { text: "About", link: "/about_us" },
    ];

    const toggleMenu = () => { setIsOpen(!isOpen); }

    return (
        <nav className="bg-bg-500 text-normal-500 shadow-md w-full sticky top-0 z-20 ">
            <div className="container mx-auto flex items-center justify-between px-6 py-2">
                <div className="flex items-center sm:space-x-3">
                    <Logo className="md:w-14 w-12" />
                    <Link to="/" className="text-3xl font-bold hover:text-accent-500">EduVance</Link>
                </div>
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navItems.map(item => <li key={item.link}>
                            <NavLink to={item.link} className={({ isActive }) => `hover:text-accent-500 duration-200 transition-colors
                                ${isActive && "text-accent-500 font-semibold"} `}>
                                {item.text}
                            </NavLink>
                        </li>)}
                    </ul>
                    <div>
                        <Link to="/login" className="bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-bg-500 hover:text-primary-500 duration-200">
                            Login </Link>
                    </div>
                </div>
                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center">
                    <button type="button" onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {/* mobile menu */}
            <div className={`lg:hidden bg-bg-500 text-center absolute top-16 w-full overflow-hidden transition-all duration-500 ease-in-out
                ${isOpen ? "max-h-screen py-4" : "max-h-0"}`}>
                <ul className="space-y-6">
                    {navItems.map(item => <li key={item.link}>
                        <NavLink to={item.link} onClick={toggleMenu} className={({ isActive }) => `block text-lg font-medium py-2 hover:text-accent-500 transition-colors duration-200
                            ${isActive && "text-accent-500 font-semibold"}`}>
                            {item.text}
                        </NavLink>
                    </li>)}
                    <li>
                        <Link to="/login" onClick={toggleMenu} className="block bg-accent-500 text-white px-6 py-2 rounded-lg mx-auto w-28 hover:bg-white hover:text-primary-500 transition-colors duration-200">
                            Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
