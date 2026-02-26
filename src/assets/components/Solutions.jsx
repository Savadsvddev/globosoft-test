import React from "react";
import { IoSettings } from "react-icons/io5";
import { BiCoinStack } from "react-icons/bi";
import { IoStatsChartSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";

const Solutions = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex flex-col items-center">
                        Tailored Solutions for 
                        <span className="text-blue-500 mt-2">Your Success</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        The journey from groundbreaking research to market-ready innovation is both challenging and rewarding. It begins in the lab where curiosity and creativity lead to discoveries with transformative potential.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
                    <div className="w-full max-w-[220px] h-[280px] sm:h-[300px] bg-blue-300 rounded-tl-[30px] sm:rounded-tl-[40px] rounded-br-[30px] sm:rounded-br-[40px] flex flex-col items-center justify-end p-4 relative hover:shadow-lg transition-shadow">
                        <p className="text-base sm:text-[18px] font-semibold text-center">Strategic Planning</p>
                        <p className="w-full text-xs sm:text-sm mt-2 text-center">Craft winning strategies for sustainable growth</p>
                        <div className="absolute top-0 left-0 bg-black h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] flex items-center justify-center rounded-tl-[30px] sm:rounded-tl-[40px] rounded-br-[10px]">
                            <IoSettings color="white" size={18} sm:size={22} />
                        </div>
                    </div>
                    
                    <div className="w-full max-w-[220px] h-[280px] sm:h-[300px] bg-yellow-300 rounded-tl-[30px] sm:rounded-tl-[40px] rounded-br-[30px] sm:rounded-br-[40px] flex flex-col items-center justify-end p-4 relative hover:shadow-lg transition-shadow">
                        <p className="text-base sm:text-[18px] font-semibold text-center">Financial Advisory</p>
                        <p className="w-full text-xs sm:text-sm mt-2 text-center">Optimize your financial resources and investments</p>
                        <div className="absolute top-0 left-0 bg-white h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] flex items-center justify-center rounded-tl-[30px] sm:rounded-tl-[40px] rounded-br-[10px]">
                            <BiCoinStack color="black" size={18} sm:size={22} />
                        </div>
                    </div>
                    
                    <div className="w-full max-w-[220px] h-[280px] sm:h-[300px] bg-blue-300 rounded-tl-[30px] sm:rounded-tl-[40px] rounded-br-[30px] sm:rounded-br-[40px] flex flex-col items-center justify-end p-4 relative hover:shadow-lg transition-shadow">
                        <p className="text-base sm:text-[18px] font-semibold text-center">Market Research</p>
                        <p className="w-full text-xs sm:text-sm mt-2 text-center">Gain insights for informed decision-making</p>
                        <div className="absolute top-0 left-0 bg-black h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] flex items-center justify-center rounded-tl-[30px] sm:rounded-tl-[40px] rounded-br-[10px]">
                            <IoStatsChartSharp color="white" size={18} sm:size={22} />
                        </div>
                    </div>
                    
                    <div className="w-full max-w-[220px] h-[280px] sm:h-[300px] bg-blue-300 rounded-tl-[30px] sm:rounded-tl-[40px] rounded-br-[30px] sm:rounded-br-[40px] flex flex-col items-center justify-end p-4 relative hover:shadow-lg transition-shadow">
                        <p className="text-base sm:text-[18px] font-semibold text-center">HR Management</p>
                        <p className="w-full text-xs sm:text-sm mt-2 text-center">Build a motivated and efficient workforce</p>
                        <div className="absolute top-0 left-0 bg-black h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] flex items-center justify-center rounded-tl-[30px] sm:rounded-tl-[40px] rounded-br-[10px]">
                            <HiUsers color="white" size={18} sm:size={22} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Solutions