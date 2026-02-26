import React from "react";
import { Assets } from "./Assets/Assets";

const Clients = () => {
    const clientsList = [
        Assets.company5, Assets.company3, Assets.company4, Assets.company2, Assets.company1
    ]

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-base sm:text-lg font-bold text-blue-500 uppercase tracking-wide mb-2">Clients</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">They Trust Us</p>
                    <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                        The journey from groundbreaking research to market-ready innovation is both challenging and rewarding. It begins in the lab where curiosity and creativity lead to discoveries with transformative potential.
                    </p>
                </div>

                {/* Clients Grid */}
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 mt-8 sm:mt-12">
                    {clientsList?.map((item, i) => (
                        <div key={i} className="flex-shrink-0 w-[120px] sm:w-[160px] lg:w-[200px] h-auto flex items-center justify-center">
                            <img 
                                src={item} 
                                alt={`Client ${i + 1}`}
                                className="w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Clients