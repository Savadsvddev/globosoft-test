import React from "react";
import { Assets } from "./Assets/Assets";
const Success = () => {
    return (

        <div
            className="w-full h-[350px] bg-cover bg-center flex items-center justify-between px-12 text-white relative mt-[25px]"
            style={{ backgroundImage: `url(${Assets.successbackground})` }}
        >

            <div className="absolute inset-0"></div>

            <div className=" z-10 w-full flex items-center justify-between">

                <div className="max-w-[60%] space-y-4 text-black">
                    <h1 className="text-[40px] font-bold flex flex-col">
                        Innovating for tomorrow's
                        <span>Success</span>
                    </h1>
                    <p className="text-gray-900 text-[20px]">
                        Prime path primary mission to support research and development activites in both the public and private sectors to aiming to enhance the effectiveness of these organizations in carrying out successfull R&D projects.
                    </p>
                    <button className="bg-[rgb(77,179,242)] text-white px-3 py-2">Work With Us  </button>
                </div>

                <div className="w-[400px] h-[400px] absolute right-30 top-[-60px]">
                    <img
                        src={Assets.success}
                        alt="Overlay"
                        className="w-full h-full object-cover rounded-xl "
                    />
                </div>

            </div>
        </div>
    )
}
export default Success