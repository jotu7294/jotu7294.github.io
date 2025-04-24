import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resumePDF from '../resources/Joey-Tursi-Resume.pdf';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg shadow-blue-900/10' : 'bg-transparent py-5'
        }`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <div className={`w-8 h-8 rounded-full ${scrolled ? 'bg-gradient-to-r from-blue-400 to-indigo-500' : 'bg-blue-500'} flex items-center justify-center shadow-lg shadow-blue-500/20 overflow-hidden transition-all duration-300`}>
                            <img 
                                src="https://lh3.googleusercontent.com/a/ACg8ocK7K4JM4BBjT9J2WGe7Z2-vgACvuxmOtPeqaogZBQTq0YWUjgAG=s96-c" 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className={`ml-2 font-bold text-lg ${scrolled ? 'text-white' : 'text-blue-300'}`}>Joseph Tursi</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink to="/" label="Home" />
                        <NavLink to="/projects" label="Projects" />
                        <NavLink to="/experience" label="Experience" />
                        <a
                            href={resumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-3 py-2 rounded-md text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            Resume
                        </a>
                        <NavLink to="/contact" label="Contact" />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {menuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
                    <div className="flex flex-col space-y-2 pb-3">
                        <MobileNavLink to="/" label="Home" onClick={() => setMenuOpen(false)} />
                        <MobileNavLink to="/projects" label="Projects" onClick={() => setMenuOpen(false)} />
                        <MobileNavLink to="/experience" label="Experience" onClick={() => setMenuOpen(false)} />
                        <a
                            href="/src/resources/Joey-Tursi-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-200 cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            Resume
                        </a>
                        <MobileNavLink to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
                    </div>
                </div>
            </div>

            {/* Animated indicator line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
            <div className="absolute top-0 right-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
        </nav>
    );
};

// Navigation link component for desktop
const NavLink = ({ to, label }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Link 
            to={to}
            className="relative px-3 py-2 rounded-md text-gray-300 hover:text-white transition-colors duration-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
            <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 ${isHovered ? 'scale-x-100' : ''}`}></div>
        </Link>
    );
};

// Navigation link component for mobile
const MobileNavLink = ({ to, label, onClick }) => (
    <Link 
        to={to}
        className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-200"
        onClick={onClick}
    >
        {label}
    </Link>
);

export default Navbar;