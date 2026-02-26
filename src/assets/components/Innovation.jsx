import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Assets } from "./Assets/Assets";
const Innovation = () => {
    return (
        <div className="w-full bg-[rgb(218,235,248,1)] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    
                    {/* Left Content */}
                    <div className="flex-1 w-full">
                        <div className="flex flex-col gap-6 sm:gap-8">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
                                From Research to Reality :
                                <span className="block">Commercializing Innovation</span>
                            </h1>
                            
                            <div className="flex flex-col gap-4 sm:gap-6">
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center lg:text-left">
                                    The Journey From Groundbreaking Research To Market-Ready Innovation Is
                                    Both Challenging And Rewarding. It Begins In The Lab, Where Curiosity And
                                    Creativity Lead To Discoveries With Transformative Potential.
                                </p>
                                
                                <div className="flex justify-center lg:justify-start">
                                    <button className="px-6 py-3 bg-[rgb(77,179,242)] text-white rounded-tl-xl rounded-br-xl hover:bg-blue-600 transition-colors">
                                        Let's Get Started
                                    </button>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
                                    <p className="text-xl sm:text-2xl font-bold text-center">
                                        1000+
                                        <span className="block text-sm sm:text-base font-normal">
                                            Happy Clients
                                        </span>
                                    </p>

                                    <p className="text-xl sm:text-2xl font-bold text-center">
                                        25+
                                        <span className="block text-sm sm:text-base font-normal">
                                            Experience
                                        </span>
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-2 cursor-pointer group">
                                    <p className="text-blue-500 text-sm sm:text-base group-hover:text-blue-600 transition-colors">Read More</p>
                                    <div className="p-[2px] rounded-full bg-gradient-to-r from-black to-blue-600">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                            <GoArrowRight size={14} sm:size={18} className="text-blue-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Image */}
                    <div className="flex-1 w-full lg:max-w-[50%]">
                        <div className="p-[1px] bg-gradient-to-r from-blue-500 to-gray-400 rounded-tl-[60px] sm:rounded-tl-[75px] lg:rounded-tl-[90px] rounded-br-[60px] sm:rounded-br-[75px] lg:rounded-br-[90px]">
                            <img
                                src={Assets.Innovation}
                                alt="Innovation"
                                className="w-full h-full object-cover rounded-tl-[60px] sm:rounded-tl-[75px] lg:rounded-tl-[90px] rounded-br-[60px] sm:rounded-br-[75px] lg:rounded-br-[90px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Innovation