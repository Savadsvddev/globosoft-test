import React from "react";
import { Assets } from "./Assets/Assets";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[rgb(67,222,239)] text-black px-4 sm:px-6 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

                    {/* Logo + Description */}
                    <div className="flex flex-col gap-4">
                        <img src={Assets.Techno} alt="logo" className="w-[140px] sm:w-[160px] lg:w-[180px]" />
                        <p className="text-sm leading-relaxed text-black">
                            Prime Path primary mission is to support research and development
                            activities in both the public and private sectors, aiming to enhance
                            the effectiveness of these organizations in carrying out successful R&D projects.
                        </p>
                    </div>

                    {/* Pages */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-lg font-semibold">Pages</p>
                        <div className="flex flex-col gap-3">
                            <p className="cursor-pointer hover:text-blue-700 transition-colors">About Us</p>
                            <p className="cursor-pointer hover:text-blue-700 transition-colors">Services</p>
                            <p className="cursor-pointer hover:text-blue-700 transition-colors">Privacy & Policy</p>
                            <p className="cursor-pointer hover:text-blue-700 transition-colors">Terms & Conditions</p>
                        </div>
                    </div>

                    {/* Office */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-lg font-semibold">Our Office</p>
                        <p className="text-sm text-black leading-relaxed">
                            4118 Constellation Rd,<br />
                            Lompoc, California 93436,<br />
                            USA
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-lg font-semibold">Social Media</p>
                        <div className="flex gap-3">
                            <FaSquareFacebook size={28} className="cursor-pointer hover:text-blue-700 transition-colors" />
                            <FaXTwitter size={28} className="cursor-pointer hover:text-blue-700 transition-colors" />
                            <FaLinkedin size={28} className="cursor-pointer hover:text-blue-700 transition-colors" />
                            <IoLogoInstagram size={28} className="cursor-pointer hover:text-blue-700 transition-colors" />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer