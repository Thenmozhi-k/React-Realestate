import React, { useState, useEffect, useContext } from 'react';
import logo from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; // Importing RouterLink from react-router-dom
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from './AuthContext';
import {user} from '../assets/user.avif'


const Nav = () => {
    const { user, logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Define your navItems with correct paths and links
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Property", path: "/list" },
        { link: "Contact", path: "/contact" },
        
    ];

    const renderUserSection = () => {
        if (user) {
            return (
                <div className='flex items-center space-x-4'>
                    <img className='w-10 h-10 rounded-full' src={user} alt="User" /> {/* Use user.img for user avatar */}
                    <span className='text-secondary font-semibold'>{user.name}</span>
                    <div className='relative'>
                        <RouterLink to='/profile' className='profile group bg-primary text-black py-2 px-4 rounded border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-black font-semibold flex items-center'>
                            <span>Profile</span>
                            <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                                3
                            </div>
                        </RouterLink>
                    </div>
                    <button onClick={logout} className='text-secondary hover:text-secondary-hover font-semibold'>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='flex space-x-7 items-center'>
                    <RouterLink to="/login" className='text-secondary lg:flex items-center hover:text-secondary-hover font-semibold'>Login</RouterLink>
                    <RouterLink to="/signup" className='group bg-primary text-black py-2 px-4 rounded border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-black font-semibold'>
                        Sign up
                    </RouterLink>
                </div>
            );
        }
    };

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 md:pr-4 pr-4'>
            <nav className={`container mx-auto mt-0 ${isSticky ? "sticky top-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <RouterLink to="/" className='text-2xl font-semibold items-center'>
                        <img className='w-32 h-32' src={logo} alt="Logo" />
                    </RouterLink>

                    <ul className='md:flex space-x-8 hidden'>
                        {navItems.map(({ link, path }) =>
                            <li key={path}>
                                <RouterLink
                                    to={path}
                                    className="block text-secondary hover:text-secondary-hover text-xl font-medium cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link}
                                </RouterLink>
                            </li>
                        )}
                    </ul>

                    <div className='hidden md:flex'>
                        {renderUserSection()}
                    </div>

                    <div className='md:hidden flex items-center space-x-4'>
                        {user && (
                            <img className='w-8 h-8 rounded-full' src={user} alt="User" />
                        )}
                        <button className='text-neutralDGray focus:outline-none focus:text-gray-500' onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
                        </button>
                    </div>
                </div>

                <div className={`space-y-4 px-4 py-7 bg-accent list-none ${isMenuOpen ? "block" : "hidden"}`}>
                    {navItems.map(({ link, path }) =>
                        <li key={path}>
                            <RouterLink
                                to={path}
                                className="block text-base font-medium cursor-pointer text-secondary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </RouterLink>
                        </li>
                    )}
                    <div className='flex flex-col space-y-4'>
                        {renderUserSection()}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
