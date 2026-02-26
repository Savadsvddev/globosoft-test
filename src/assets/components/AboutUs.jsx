import React from "react";
import { Assets } from "./Assets/Assets";

const Aboutus = () => {
    return (
        <div className="mt-6 px-6 py-4 flex flex-col md:flex-row gap-[30px]">

            <div className="w-full md:w-[50%] h-[450px]">
                <img
                    src={Assets.About}
                    alt="about"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <div className="w-full md:w-[50%] space-y-4 flex flex-col gap-[5px]">
                <p className="text-sm font-bold">
                    About Us
                </p>

                <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                    Innovations In Motion:
                    <span className="block text-blue-500">
                        Lab Bench To Marketplace
                    </span>
                </h1>

                <p className="text-gray-700 leading-relaxed font-semibold">
                    At our consultancy, we specialize in assisting companies throughout
                    their journey of securing European Union funding for research,
                    innovation, and development (R&D) projects. We begin by helping you
                    identify suitable grants, subsidies, and loans available through the
                    European Union's extensive funding programs.
                </p>
                <div className="flex gap-[20px] items-center justify-center ">
                    <div className="flex flex-col items-center text-center space-y-3 max-w-xs">
                        <img
                            src={Assets.Mission}
                            alt="Mission"
                            className="w-[40px]"
                        />

                        <p className="font-semibold text-md">
                            Our Mission
                        </p>

                        <p className="text-gray-600 text-[12px] w-[140px] leading-relaxed">
                            To inspire progress by
                             fostering innovation,
                            empowering businesses.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3 max-w-xs">
                        <img
                            src={Assets.Vission}
                            alt="Mission"
                            className="w-[40px]"
                        />

                        <p className="font-semibold text-md">
                            Vission
                        </p>

                        <p className="text-gray-600 text-[12px] w-[140px] leading-relaxed">
                            To inspire progress by
                             fostering innovation,
                            empowering businesses.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3 max-w-xs">
                        <img
                            src={Assets.Values}
                            alt="Mission"
                            className="w-[40px]"
                        />

                        <p className="font-semibold text-md">
                            Our Values
                        </p>

                        <p className="text-gray-600 text-[12px] w-[140px] leading-relaxed">
                            To inspire progress by
                             fostering innovation,
                            empowering businesses.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Aboutus