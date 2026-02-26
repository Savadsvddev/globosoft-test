import React from "react";
import { Assets } from "./Assets/Assets";

const Aboutus = () => {
    return (
        <div className="mt-6 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

                    {/* Image Section */}
                    <div className="w-full lg:w-[45%] h-[300px] sm:h-[350px] lg:h-[450px]">
                        <img
                            src={Assets.About}
                            alt="about"
                            className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-[55%] space-y-6 sm:space-y-8">
                        <div className="space-y-4">
                            <p className="text-sm font-bold text-blue-500 uppercase tracking-wide">
                                About Us
                            </p>

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                Innovations In Motion:
                                <span className="block text-blue-500">
                                    Lab Bench To Marketplace
                                </span>
                            </h1>

                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                At our consultancy, we specialize in assisting companies throughout
                                their journey of securing European Union funding for research,
                                innovation, and development (R&D) projects. We begin by helping you
                                identify suitable grants, subsidies, and loans available through the
                                European Union's extensive funding programs.
                            </p>
                        </div>

                        {/* Mission, Vision, Values */}
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center">
                            <div className="flex flex-col items-center text-center space-y-3 max-w-[150px]">
                                <img
                                    src={Assets.Mission}
                                    alt="Mission"
                                    className="w-[40px] h-[40px] object-contain"
                                />

                                <p className="font-semibold text-base sm:text-lg">
                                    Our Mission
                                </p>

                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    To inspire progress by
                                    fostering innovation,
                                    empowering businesses.
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center text-center space-y-3 max-w-[150px]">
                                <img
                                    src={Assets.Vission}
                                    alt="Vision"
                                    className="w-[40px] h-[40px] object-contain"
                                />

                                <p className="font-semibold text-base sm:text-lg">
                                    Vision
                                </p>

                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    To inspire progress by
                                    fostering innovation,
                                    empowering businesses.
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center text-center space-y-3 max-w-[150px]">
                                <img
                                    src={Assets.Values}
                                    alt="Values"
                                    className="w-[40px] h-[40px] object-contain"
                                />

                                <p className="font-semibold text-base sm:text-lg">
                                    Our Values
                                </p>

                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    To inspire progress by
                                    fostering innovation,
                                    empowering businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutus