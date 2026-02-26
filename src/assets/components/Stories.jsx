import React from "react";
import { Assets } from "./Assets/Assets";

const Stories = () => {

    const stories = [{
        id: 1,
        image: Assets.stories1,
        title1: "Startup mission ",
        title2: "guide to build",
        description: "The journey from groundbreaking research to market ready innovation is both challenging.",
        blog: "BLOG",
        date: "JANUARY 2025",
        icon: Assets.stories3

    },
    {
        id: 2,
        image: Assets.stories4,
        title1: "Startup mission ",
        title2: "guide to build",
        description: "The journey from groundbreaking research to market ready innovation is both challenging.",
        blog: "BLOG",
        date: "JANUARY 2025",
        icon: Assets.stories3

    },
    {
        id: 3,
        image: Assets.stories2,
        title1: "Startup mission ",
        title2: "guide to build",
        description: "The journey from groundbreaking research to market ready innovation is both challenging.",
        blog: "BLOG",
        date: "JANUARY 2025",
        icon: Assets.stories3

    },]

    return (
        <div className="w-full bg-[rgb(232,255,254)] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-sm font-bold text-blue-500 uppercase tracking-wide mb-2">Blogs And News</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                        Top Stories From Our <span className="ml-2 text-blue-500">Prime Path</span>
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-start">
                    {stories.map((item) => (
                        <div key={item.id} className="w-full max-w-[400px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow relative">

                            {/* Image Section */}
                            <div className="relative h-[220px] sm:h-[240px]">
                                <img
                                    src={item.image}
                                    alt="story"
                                    className="w-full h-full object-cover rounded-t-lg"
                                />

                                {/* Featured Badge */}
                                <button className="bg-blue-500 text-white px-3 py-1 text-xs sm:text-sm absolute top-3 left-3 rounded hover:bg-blue-600 transition-colors">
                                    Featured
                                </button>

                                {/* Title Overlay */}
                                <div className="absolute bottom-0 right-0 bg-gray-300 bg-opacity-90 z-30 w-[60%] sm:w-[62%] h-[100%] sm:h-[100%] p-2 flex items-center justify-center
                                    [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%,0_50%)]">
                                    <p className="flex flex-col text-xs sm:text-sm font-semibold">
                                        {item.title1}
                                        <span>{item.title2}</span>
                                    </p>
                                </div>

                                {/* Icon */}
                                <div className="absolute bottom-4 right-4 z-30">
                                    <img src={item.icon} alt="icon" className="w-[80px] sm:w-[108px] h-auto" />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 sm:p-5">
                                <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm">
                                    <p className="font-semibold text-gray-800">{item.blog}</p>
                                    <p className="border-l border-gray-300 pl-2 sm:pl-3 font-semibold text-gray-800">
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Stories