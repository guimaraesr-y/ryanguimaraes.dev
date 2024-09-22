'use client';

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`bg-slate-800/50 w-full fixed top-0 left-0 z-30 shadow-md backdrop-blur-lg transition duration-300`} >
            <div className="md:max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home">
                            <Image src="/imgs/logo-1x-compressed.gif" width={150} height={50} alt="Logo" priority={true} />
                        </a>
                    </div>

                    {/* Menu for Desktop */}
                    <div className="hidden md:flex items-center space-x-8 color-gray-400">
                        <a href="#sobre" className="hover:text-slate-500 font-semibold transition-colors duration-300">
                            SOBRE
                        </a>
                        <a href="#skills" className="hover:text-slate-500 font-semibold transition-colors duration-300">
                            SKILLS
                        </a>
                        <a href="#contato" className="hover:text-slate-500 font-semibold transition-colors duration-300">
                            CONTATO
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-gray-300 hover:text-slate-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-gray-400">
                        <a href="#sobre" className="block hover:bg-gray-100 px-3 py-2 rounded-md text-base font-semibold">
                            SOBRE
                        </a>
                        <a href="#skills" className="block hover:bg-gray-100 px-3 py-2 rounded-md text-base font-semibold">
                            SKILLS
                        </a>
                        <a href="#contato" className="block hover:bg-gray-100 px-3 py-2 rounded-md text-base font-semibold">
                            CONTATO
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
