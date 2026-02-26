import React from "react";
import { Assets } from "./Assets/Assets";
const Success = () => {
    return (
        <div
            className="w-full min-h-[400px] lg:min-h-[350px] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-12 text-white relative mt-8 lg:mt-6"
            style={{ backgroundImage: `url(${Assets.successbackground})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-[60%] space-y-4 sm:space-y-6 text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Innovating for tomorrow's
                            <span className="block">Success</span>
                        </h1>
                        <p className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed max-w-none lg:max-w-[90%]">
                            Prime path primary mission to support research and development activites in both the public and private sectors to aiming to enhance the effectiveness of these organizations in carrying out successfull R&D projects.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="bg-[rgb(77,179,242)] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                                Work With Us
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
                        <div className="w-[280px] sm:w-[320px] lg:w-[400px] h-[280px] sm:h-[320px] lg:h-[400px] relative">
                            <img
                                src={Assets.success}
                                alt="Success"
                                className="w-full h-full object-cover rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Success