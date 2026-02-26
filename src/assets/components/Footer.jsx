import React from "react";
import { Assets } from "./Assets/Assets";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[rgb(67,222,239)] text-black px-6 py-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

                {/* Logo + Description */}
                <div className="flex flex-col gap-4">
                    <img src={Assets.Techno} alt="logo" className="w-[180px]" />
                    <p className="text-sm leading-relaxed text-black">
                        Prime Path primary mission is to support research and development
                        activities in both the public and private sectors, aiming to enhance
                        the effectiveness of these organizations in carrying out successful R&D projects.
                    </p>
                </div>

                {/* Pages */}
                <div className="flex flex-col gap-7">
                    <p className="text-lg font-semibold mb-4 mt-12 ">Pages</p>

                    <p>About Us</p>
                    <p>Services</p>
                    <p>Privacy & Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                {/* Office */}
                <div>
                    <p className="text-lg font-semibold mb-4  mt-12">Our Office</p>
                    <p className="text-sm text-black leading-relaxed">
                        4118 Constellation Rd,<br />
                        Lompoc, California 93436,
                        USA
                    </p>
                </div>

                <div>
                    <p className="text-lg font-semibold mb-4  mt-12">Social Media</p>
                    <div className="flex gap-3">
                        <FaSquareFacebook size={30} />
                        <FaXTwitter size={30} />
                        <FaLinkedin size={30} />
                        <IoLogoInstagram size={30} />

                    </div>
                </div>

            </div>


        </footer>
    )
}
export default Footer