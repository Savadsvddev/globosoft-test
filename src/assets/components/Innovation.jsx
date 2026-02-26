import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Assets } from "./Assets/Assets";
const Innovation = () => {
    return (
        <div className="w-full h-[500px] bg-[rgb(218,235,248,1)] flex py-[30px] px-[80px]">

            <div className="flex flex-col gap-[75px]">
                <h1 className="text-3xl font-bold flex flex-col mt-[40px]">From Research to Reality :
                    <span className="text-3xl font-bold">Commercializing Innovation</span>
                </h1>
                <div className="w-full sm:w-[50%] md:w-[49%] lg:w-[60%] xl:w-[50%] flex flex-col gap-[16px] items-start ">
                    <p className="text-gray-700 text-base md:text-sm leading-relaxed text-start">
                        The Journey From Groundbreaking Research To Market-Ready Innovation Is
                        Both Challenging And Rewarding. It Begins In The Lab, Where Curiosity And
                        Creativity Lead To Discoveries With Transformative Potential.
                    </p>
                    <button className="px-4 py-1 bg-[rgb(77,179,242)]  text-white flex items-center-justify-center rounded-tl-xl rounded-br-xl">
                        Let`s Get Started
                    </button>
                </div>
                <div className="flex items-center gap-[30px]">
                    <p className="text-2xl font-bold flex flex-col">
                        1000+
                        <span className="text-sm font-normal">
                            Happy Clients
                        </span>
                    </p>

                    <p className="text-2xl font-bold flex flex-col">
                        25+
                        <span className="text-sm font-normal">
                            Experience
                        </span>
                    </p>
                    <div className="flex items-center gap-[10px]" >
                        <p className="text-blue-500 ">Read More</p>
                        <div className="p-[2px] rounded-full bg-gradient-to-r from-black to-blue-600">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                <GoArrowRight size={18} className="text-blue-600" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[50%] p-[1px] bg-gradient-to-r from-blue-500 to-gray-400 rounded-tl-[90px] rounded-br-[90px]">
                <img
                    src={Assets.Innovation}
                    alt="Innovation"
                    className="w-full h-full object-fit rounded-tl-[90px] rounded-br-[90px]"
                />
            </div>
        </div>
    )
}
export default Innovation