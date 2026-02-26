import React from "react";
import { Assets } from "./Assets/Assets";

const Stories = () => {

    const stories = [{
        id: 1,
        image: Assets.stories1,
        title1: "Startup mission ",
        title2: "guide to build",
        description: "The jorney from ground breaking reaserch to market ready innovation is both challanging.",
        blog: "BLOG",
        date: "JANUARY 2025",
        icon: Assets.stories3

    },
    {
        id: 2,
        image: Assets.stories4,
        title1: "Startup mission ",
        title2: "guide to build",
        description: "The jorney from ground breaking reaserch to market ready innovation is both challanging.",
        blog: "BLOG",
        date: "JANUARY 2025",
        icon: Assets.stories3

    },
    {
        id: 3,
        image: Assets.stories2,
        title1: "Startup mission ",
        title2: "guide to build",
        description: "The jorney from ground breaking reaserch to market ready innovation is both challanging.",
        blog: "BLOG",
        date: "JANUARY 2025",
        icon: Assets.stories3

    },]

    return (
        <div className="w-full  bg-[rgb(232,255,254)] mt-[20px] px-[20px] flex flex-col items-center justify-center py-[30px]">
            <p className="w-full flex justify-center items-center text-sm font-bold">Blogs And News</p>
            <p className="w-full flex justify-center items-center text-[37px] font-semibold">Top Stories From Our <span className="ml-[5px] text-blue-500">Prime Path</span></p>
            <div className="flex gap-[25px]">
                {stories.map((item) => (
                    <div key={item.id} className="w-[400px] h-[300px] bg-white relative">

                        <div className="relative">
                            <img
                                src={item.image}
                                alt="story"
                                className="w-full h-[220px] object-cover p-2"
                            />

                            <div className="absolute bottom-2 right-2 bg-gray-300 z-30 w-[62%] h-[93%] p-2 flex items-center justify-center
        [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%,0_50%)]">
                                <p className="flex flex-col">
                                    {item.title1}
                                    <span>{item.title2}</span>
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-23 right-3  z-30" >
                            <img src={item.icon} alt="icon" className="w-[108px]" />
                        </div>

                        <button className="bg-blue-500 text-white px-3 py-1 absolute top-3 left-5">
                            Featured
                        </button>

                        <p className="text-sm px-2">{item.description}</p>

                        <div className="flex gap-[15px] px-2 mt-[10px]">
                            <p className="text-sm font-semibold">{item.blog}</p>
                            <p className="border-l pl-2 mr-1 text-sm font-semibold">
                                {item.date}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Stories