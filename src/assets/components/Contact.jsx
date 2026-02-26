import React from "react";
import { SlCallIn } from "react-icons/sl";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


const Contact = () => {
    return (
        <div className="w-full bg-[rgb(3,7,79)] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    
                    {/* Left side - Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start text-center sm:text-left">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <SlCallIn size={18} sm:size={20} color="white" />
                            <p className="text-sm sm:text-base">Call Us: 02457788</p>
                        </div>
                        <p className="text-sm sm:text-base">Example@gmail.com</p>
                    </div>

                    {/* Right side - Social Media + Question */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-right">
                        <div className="flex gap-3 sm:gap-4">
                            <IoLogoFacebook size={18} sm:size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
                            <RiInstagramFill size={18} sm:size={20} className="cursor-pointer hover:text-pink-400 transition-colors" />
                            <FaTwitter size={18} sm:size={20} className="cursor-pointer hover:text-blue-300 transition-colors" />
                            <IoLogoYoutube size={18} sm:size={20} className="cursor-pointer hover:text-red-500 transition-colors" />
                        </div>
                        <p className="text-sm sm:text-base">? Have any question</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact