import React from "react";
import { SlCallIn } from "react-icons/sl";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


const Contact = () => {
    return (
        <div className="w-full  bg-[rgb(3,7,79)] text-white flex items-center justify-between pt-3 pb-3 pl-[80px] pr-[80px]">
            <div className="flex gap-5">
                <div className="flex gap-[10px] items-center">
                    <SlCallIn size={20} color="white" />
                    <p>Call Us:02457788</p>
                </div>
                <p>Example@gmail.com</p>
            </div>
            <div className="flex gap-[20px]">
                <div className="flex gap-[10px] items-center">
                    <IoLogoFacebook size={20} />
                    <RiInstagramFill size={20} />
                    <FaTwitter size={20} />
                    <IoLogoYoutube size={20} />

                </div>
                <p>? Have any question</p>
            </div>

        </div>
    )
}
export default Contact