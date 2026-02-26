import React from "react";
import { Assets } from "./Assets/Assets";

const Clients = () => {
    const Clients = [
        Assets.company5, Assets.company3, Assets.company4, Assets.company2, Assets.company1
    ]

    return (

        <div className="flex flex-col p-5 ">

            <p className="flex items-center justify-center text-[18px] font-bold text-blue-500">Clients</p>
            <p className="flex items-center justify-center text-[37px] font-semibold">They Trust Us</p>
            <div className="w-full flex items-center justify-center">
                <p className="w-[40%] text-[18px] ">The jorney from ground breaking reaserch to market ready innovation is both challanging and rewarding.It begins the lab for quriocity and cravity lead to discoveries with transformative pottential.</p>
            </div>
            <div className="flex gap-[70px] justify-center items-center mt-[50px]">
                {Clients?.map((item, i) => (
                    <img src={item} key={i}
                        className="w-[200px]" />
                ))}
            </div>


        </div>
    )
}
export default Clients