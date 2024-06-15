import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
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

    const navItems = [
        { link: "Home", path: "home" },
        { link: "About", path: "about" },
        { link: "Contact", path: "contact" },
        { link: "Agents", path: "agents" },
    ];

    return (
        <header className= '  w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`container mx-auto  lg:px-14 ${isSticky ? "sticky top-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='text-2xl font-semibold items-center'>
                        <img className='w-32' src={logo} alt="Logo" />
                    </a>

                    <ul className='md:flex space-x-8 hidden'>
                        {navItems.map(({ link, path }) =>
                            <li key={path}>
                                <Link
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className="block  text-secondary hover:text-secondary-hover text-xl font-medium cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link}
                                </Link>
                            </li>
                        )}
                    </ul>

                    <div className='hidden md:flex   space-x-7 items-center'>
                        <a href="/" className=' text-secondary lg:flex items-center hover:text-secondary-hover font-semibold'>Login</a>
                        <button className='group bg-primary text-black py-2 px-4 rounded border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-black font-semibold'>Sign up</button>
                    </div>

                    <div className='md:hidden'>
                        <button className='text-neutralDGray focus:outline-none focus:text-gray-500' onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
                        </button>
                    </div>
                </div>

                <div className={`space-y-4 px-4  py-7 bg-accent list-none ${isMenuOpen ? "block" : "hidden"}`}>
                    {navItems.map(({ link, path }) =>
                        <li key={path}>
                            <Link
                                to={path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                className="block text-base font-medium cursor-pointer text-secondary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </Link>
                        </li>
                    )}
                    <div className='flex flex-col space-y-4'>
                        <a href="/" className='text-secondary hover:text-secondary-hover font-semibold'>Login</a>
                        <button className='group bg-primary text-black py-2 px-4 rounded border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-black font-semibold'>Sign up</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
