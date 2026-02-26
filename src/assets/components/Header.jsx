import React, { useState } from "react";
import { Assets } from "./Assets/Assets";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src={Assets.Techno} className="w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 object-contain" alt="Logo" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <p className="cursor-pointer hover:text-blue-500 transition-colors">Home</p>
                        <p className="cursor-pointer hover:text-blue-500 transition-colors">Privacy Policy</p>
                        <p className="cursor-pointer hover:text-blue-500 transition-colors">About</p>
                        <p className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
                            Services <span><IoIosArrowDown/></span>
                        </p>
                        <p className="cursor-pointer hover:text-blue-500 transition-colors">Imprints</p>
                        <p className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
                            Blogs <span><IoIosArrowDown/></span>
                        </p>
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:block">
                        <button className="bg-[rgb(77,179,242)] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Get An Appointment
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 transition-colors"
                        >
                            {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200">
                        <nav className="flex flex-col gap-4 px-4 py-4">
                            <p className="cursor-pointer hover:text-blue-500 transition-colors py-2">Home</p>
                            <p className="cursor-pointer hover:text-blue-500 transition-colors py-2">Privacy Policy</p>
                            <p className="cursor-pointer hover:text-blue-500 transition-colors py-2">About</p>
                            <p className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors py-2">
                                Services <span><IoIosArrowDown/></span>
                            </p>
                            <p className="cursor-pointer hover:text-blue-500 transition-colors py-2">Imprints</p>
                            <p className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors py-2">
                                Blogs <span><IoIosArrowDown/></span>
                            </p>
                            <button className="bg-[rgb(77,179,242)] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full">
                                Get An Appointment
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Header