import React from "react";
import { BiLike } from "react-icons/bi";
import { Assets } from "./Assets/Assets";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
const Review = () => {

    const stars = [Assets.star, Assets.star, Assets.star, Assets.star, Assets.star, Assets.star]

    const reviews = [
        {
            image: Assets.review1,
            text: "They suggested resort was stunning and the activities were perfect for all ages . we`ll cherish these memories forever!",
            name: "Kyle Roberts DVM",
            role: "Customer web consultant"
        },
        {
            image: Assets.review2,
            text: "They suggested resort was stunning and the activities were perfect for all ages . we`ll cherish these memories forever!",
            name: "Kyle Roberts DVM",
            role: "Customer web consultant"
        },
        {
            image: Assets.review3,
            text: "They suggested resort was stunning and the activities were perfect for all ages . we`ll cherish these memories forever!",
            name: "Kyle Roberts DVM",
            role: "Customer web consultant"
        }
    ]

    return (
        <div className="px-4 sm:px-6 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Testimonials</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">What Our Customer Saying</p>
                    <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        The journey from groundbreaking research to market-ready innovation is both challenging and rewarding. It begins in the lab where curiosity and creativity lead to discoveries with transformative potential.
                    </p>
                </div>

                {/* Reviews Container */}
                <div className="relative">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
                        {reviews?.map((item, index) => (
                            <div key={index} className="w-full max-w-[350px] bg-white p-4 sm:p-6 flex flex-col gap-4 relative rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                                
                                {/* Stars */}
                                <div className="flex absolute top-3 right-3 gap-1">
                                    {stars.map((star, starIndex) => (
                                        <img key={starIndex} src={star} className="w-[12px] sm:w-[15px]" alt="star" />
                                    ))}
                                </div>

                                {/* Profile Image */}
                                <div className="rounded-full w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] overflow-hidden absolute top-[-30px] left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg">
                                    <img src={item.image} className="w-full object-cover h-full" alt={item.name} />
                                </div>
                                
                                {/* Review Text */}
                                <p className="text-sm sm:text-base mt-8 text-gray-700 leading-relaxed">
                                    {item.text}
                                </p>
                                
                                {/* Customer Info */}
                                <div className="flex items-center justify-between pt-2">
                                    <div>
                                        <p className="text-sm sm:text-base font-bold text-gray-900">{item.name}</p>
                                        <p className="text-xs sm:text-sm text-gray-600">{item.role}</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <BiLike size={16} sm:size={18} className="text-blue-500" />
                                        <p className="text-xs sm:text-sm font-bold text-gray-900">Testimonial</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div className="flex justify-center mt-8 lg:mt-12 gap-4">
                        <button className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] bg-black flex items-center justify-center rounded-tl-lg rounded-br-lg hover:bg-gray-800 transition-colors">
                            <IoArrowBack size={18} sm:size={20} color="white" />
                        </button>
                        <button className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] bg-black flex items-center justify-center rounded-tl-lg rounded-br-lg hover:bg-gray-800 transition-colors">
                            <IoArrowForwardOutline size={18} sm:size={20} color="white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review