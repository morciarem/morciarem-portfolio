"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const navLinks = [
    { name: "About me", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Morci Arem
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex flex-row items-center justify-between">
                    <div className="w-auto h-full flex flex-row items-center justify-between md:mr-20 border border-green-700 rounded-full">
                        <div className="h-full rounded-full justify-center items-center flex from-transparent hover:to-green-500 hover:bg-gradient-to-r py-2">
                            <a href="#about-me" className="cursor-pointer px-4 text-white">About me</a>
                        </div>
                        <div className="h-full rounded-full hover:bg-gradient-to-r from-transparent via-green-500 to-transparent py-2 justify-center items-center flex">
                            <a href="#projects" className="cursor-pointer px-4 text-white">Projects</a>
                        </div>
                        <div className="h-full rounded-full from-transparent hover:to-green-500 hover:bg-gradient-to-l py-2 justify-center items-center flex">
                            <a href="#skills" className="cursor-pointer px-4 text-white">Skills</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-5 items-center">
                    <div className="hidden md:flex flex-row gap-5 ">
                        {Socials.map((social) => (
                            <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                                <Image src={social.src} alt={social.name} width={24} height={24} className="hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-green-500/50"/>
                            </a>
                        ))}
                    </div>

                    {/* Hamburger button */}
                    <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            }
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col bg-[#030014] border-t border-green-700 px-6 py-4 gap-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-white hover:text-green-400" onClick={() => setMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-row gap-5 pt-2">
                    
                        {Socials.map((social) => (
                            <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                                <Image src={social.src} alt={social.name} width={24} height={24} className="hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-green-500/50"/>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
