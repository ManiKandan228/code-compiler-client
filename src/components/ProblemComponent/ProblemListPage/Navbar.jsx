// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react'; 
import logo from '../../../assets/logo.png';
import './Navbar.css'; 
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate(); 
    const dropdownRef = useRef(null);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');        
        navigate('/');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

 return (
        <nav className="navbar">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                        <span className="text-xl tracking-tight">Compile X</span>
                    </div>
                    <ul className="nav-links hidden lg:flex ml-14 space-x-12">
                        <li><a href="/">Home</a></li>
                        <li><a href="/problems">Problems</a></li>
                    </ul>
                    <div className="profile-icon relative lg:flex hidden" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="flex items-center">
                            {/* Profile Icon SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2.5c-3 0-9 1.5-9 4.5v1h18v-1c0-3-6-4.5-9-4.5z" />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-content absolute right-0 bg-neutral-900 mt-2 rounded-md shadow-lg z-10">
                                <a href="/profile" className="block px-4 py-2 text-white hover:bg-gray-800">Profile</a>
                                <a href="#" onClick={handleLogout} className="block px-4 py-2 text-white hover:bg-gray-800">Logout</a>
                            </div>
                        )}
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            <li className="py-4"><a href="/">Home</a></li>
                            <li className="py-4"><a href="/problems">Problems</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
