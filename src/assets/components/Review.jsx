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
        <div className="p-4 ">
            <p className="w-full flex justify-center items-center text-sm font-semibold">Testimonials</p>
            <p className="w-full flex justify-center items-center text-[40px] font-bold">What Our Customer Saying</p>
            <div className="w-full flex justify-center items-center">
                <p className="w-[42%]">The jorney from ground breaking reaserch to market ready innovation is both challanging and rewarding.It begins the lab for quriocity and cravity lead to discoveries with transformative pottential.</p>
            </div>

            {/* <div className="flex gap-[15px] w-full"> */}
            <div className="relative py-15">
                <div className="flex gap-[30px] mt-14 w-full justify-center">
                    {reviews?.map((item) => (
                        <div className="w-[350px] h-[150px] bg-white p-3 flex flex-col gap-3 
relative rounded-xl 
shadow-[0_15px_40px_rgba(0,0,0,0.25)]">                        <div className="flex absolute top-2 right-2">
                                {stars.map((star) => (
                                    <img src={star} className="w-[15px]" />
                                ))}
                            </div>


                            <div className="rounded-full w-[65px] h-[65px] overflow-hidden absolute top-[-40px]">
                                <img src={item.image} className="w-full object-cover h-full" />
                            </div>
                            <p className="text-sm mt-5">{
                                item.text}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[12px] font-bold">{
                                        item.name}</p>
                                    <p className="text-[10px]">{
                                        item.role}</p>
                                </div>
                                <div className="flex gap-[5px] items-center">
                                    <BiLike size={15} />
                                    <p className="text-[11px] font-bold">Testimonial</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex  gap-5 w-full justify-end mt-5 absolute right-65 bottom-0">
                    <div className="w-[30px] h-[40px] bg-black flex items-center justify-center rounded-tl-lg rounded-br-lg">
                        <IoArrowBack size={20} color="white" />
                    </div>
                    <div className="w-[30px] h-[40px] bg-black flex items-center justify-center rounded-tl-lg rounded-br-lg">
                        <IoArrowForwardOutline size={20} color="white" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review