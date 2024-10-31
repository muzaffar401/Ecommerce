"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/Logo.png"
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 px-8 py-6 xl:px-40 lg:pl-[4rem]">
            <div className="flex justify-between items-center">
                {/* Left side: Logo */}
                <div className="text-2xl font-bold">
                    <Image
                        src={logo}
                        alt="logo"
                    />
                </div>

                {/* Search bar for larger screens */}
                <div className="relative hidden lg:block ">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-100 rounded-sm pl-12 pr-5 py-2 text-lg xl:w-[400px]  bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                    <svg width="24" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-70000 text-xl" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="#989898" stroke-width="1.5" stroke-linecap="round"></path></svg>
                </div>

                {/* Right side: Links, search bar, and icons */}
                <div className="flex items-center space-x-8">
                    {/* Nav links */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Blog</a>
                    </div>


                    {/* Icons */}
                    <div className="hidden lg:flex space-x-6 items-center text-2xl">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>

                    {/* Hamburger menu for mobile */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <RxCross1 className="text-3xl" /> : <span className="text-3xl">☰</span>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col space-y-2 mt-4">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Blog</a>

                    {/* Mobile search bar at the bottom */}
                    <div className="relative mt-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 rounded-sm pl-12 pr-5 py-2 text-lg w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                        <svg width="24" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-70000 text-xl" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="#989898" stroke-width="1.5" stroke-linecap="round"></path></svg>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
