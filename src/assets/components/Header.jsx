import React from "react";
import { Assets } from "./Assets/Assets";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    return (
        <div className="flex items-center h-[60px]  justify-evenly mb-[10px]">

            <img src={Assets.Techno} className="w-[200px] h-[120px] " />

            <div className="flex gap-[20px] items-center">
                <p>Home</p>
                <p>Privacy Policy</p>
                <p>About</p>
                <p className="flex items-center gap-[5px]">Services <span><IoIosArrowDown/></span></p>
                <p>Imprints</p>
                <p className="flex items-center gap-[5px]">Blogs  <span><IoIosArrowDown/></span></p>
            </div>
            <button className="bg-[rgb(77,179,242)] text-white px-1 py-1">Get An appoinment</button>
        </div>
    )
}
export default Header