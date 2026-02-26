import React from "react";
import { IoSettings } from "react-icons/io5";
import { BiCoinStack } from "react-icons/bi";
import { IoStatsChartSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";

const Solutions = () => {
    return (
        <div>
            <h2 className="text-[40px] w-full flex align-center justify-center font-bold">Tailored Solutions for <span className="text-blue-500 ml-2"> Your Success</span></h2>
            <div className=" flex items-center justify-center w-full">
                <p className="w-[30%]">The jorney from ground breaking reaserch to market ready innovation is both challanging and rewarding.It begins the lab for quriocity and cravity lead to discoveries with transformative pottential.</p>
            </div>
            <div className="p-4 flex gap-[20px] justify-center">
                <div className="w-[220px] h-[300px] bg-blue-300 rounded-tl-[40px] rounded-br-[40px] flex flex-col items-center  justify-end p-3 relative">
                    <p className="text-[20px] font-semibold">Strategic Planning</p>
                    <p className="w-full text-sm mt-[10px]">craft winning strategies for sustainable growth</p>
                    <div className="absolute top-0 left-0 bg-black h-[70px] w-[70px] flex items-center justify-center rounded-tl-[40px] rounded-br-[10px]">
                        <IoSettings color="white " size={22} />
                    </div>
                </div>
                <div className="w-[220px] h-[300px] bg-yellow-300 rounded-tl-[40px] rounded-br-[40px] flex flex-col items-center  justify-end p-3 relative">
                    <p className="text-[20px] font-semibold">Financial Advisory</p>
                    <p className="w-full text-sm mt-[10px]">Optimize your financial resources and investments</p>
                    <div className="absolute top-0 left-0 bg-white h-[70px] w-[70px] flex items-center justify-center rounded-tl-[40px] rounded-br-[10px]">
                        <BiCoinStack color="black " size={22} />
                    </div>
                </div>
                <div className="w-[220px] h-[300px] bg-blue-300 rounded-tl-[40px] rounded-br-[40px] flex flex-col items-center  justify-end p-3 relative">
                    <p className="text-[20px] font-semibold">Market Research</p>
                    <p className="w-full text-sm mt-[10px]">Gain insights for informed desicion-making</p>
                    <div className="absolute top-0 left-0 bg-black h-[70px] w-[70px] flex items-center justify-center rounded-tl-[40px] rounded-br-[10px]">
                        <IoStatsChartSharp color="white " size={22} />
                    </div>
                </div>
                <div className="w-[220px] h-[300px] bg-blue-300 rounded-tl-[40px] rounded-br-[40px] flex flex-col items-center  justify-end p-3 relative">
                    <p className="text-[20px] font-semibold">HR Management</p>
                    <p className="w-full text-sm mt-[10px]">Build a motivated and efficient work force</p>
                    <div className="absolute top-0 left-0 bg-black h-[70px] w-[70px] flex items-center justify-center rounded-tl-[40px] rounded-br-[10px]">
                        <HiUsers color="white " size={22} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Solutions