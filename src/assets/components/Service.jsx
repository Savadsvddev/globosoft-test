// import React from "react";
// import { Assets } from "./Assets/Assets";
// import { LuArrowLeft } from "react-icons/lu";
// import { LuArrowRight } from "react-icons/lu";

// const Service = () => {
//     const serviceData = [
//         {
//             image: Assets.Consult,
//             title: "Consulting",
//             des: "At our consultancy, we specialize in assisting companies throughout their journey of securing European Union funding for research, innovation, and development (R&D) projects."
//         },
//         {
//             image: Assets.Distribute,
//             title: "Distribution",
//             des: "At our consultancy, we specialize in assisting companies throughout their journey of securing European Union funding for research, innovation, and development (R&D) projects."
//         },
//         {
//             image: Assets.Research,
//             title: "Research management",
//             des: "At our consultancy, we specialize in assisting companies throughout their journey of securing European Union funding for research, innovation, and development (R&D) projects."
//         }
//     ]

//     return (
//         <div className="w-full h-[520px] bg-black text-white py-[25px]">
//             <div className="w-full flex items-center justify-center text-sm">
//                 <p >Our Services</p>
//             </div>
//             <div className="w-full flex items-center justify-center text-[37px]">
//                 <p>  Turning Research into Revenue     </p>
//             </div>
//             <div className="flex gap-[20px] items-center justify-center">
//                 {serviceData?.map((item, i) => (
//                     <div className="w-[420px] h-[330px] bg-[rgb(113,113,114)]">
//                         <img src={item.image} className="w-[100%] h-[130px]" />
//                         <div className="flex flex-col px-[20px] gap-[10px] mt-[10px] items-center">
//                             <p className="text-[19px] font-bold">{item.title}</p>
//                             <p>{item.des}</p>
//                         </div>
//                     </div>
//                 ))}


//             </div>

//             <div className="flex  items-center justify-between mt-[20px] ">
//                 <button className="bg-white text-black p-[8px] rounded-tl-[20px] rounded-br-[20px]">view more services</button>
//                 <div className="flex gap-[10px]">
//                     <div className="w-[50px] h-[50px] bg-gray-900 flex items-center justify-center">
//                         <LuArrowLeft size={20} />
//                     </div>
//                     <div className="w-[50px] h-[50px] bg-gray-900 flex items-center justify-center">
//                         <LuArrowRight size={20} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Service 


import React from "react";
import { Assets } from "./Assets/Assets";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const Service = () => {
    const serviceData = [
        {
            image: Assets.Consult,
            title: "Consulting",
            des: "At our consultancy, we specialize in assisting companies throughout their journey of securing European Union funding for research, innovation, and development (R&D) projects."
        },
        {
            image: Assets.Distribute,
            title: "Distribution",
            des: "At our consultancy, we specialize in assisting companies throughout their journey of securing European Union funding for research, innovation, and development (R&D) projects."
        },
        {
            image: Assets.Research,
            title: "Research Management",
            des: "At our consultancy, we specialize in assisting companies throughout their journey of securing European Union funding for research, innovation, and development (R&D) projects."
        }
    ];

    return (
        <div className="w-full bg-black text-white py-10">

            <div className="max-w-7xl mx-auto px-8">

                <div className="text-center space-y-2">
                    <p className="text-sm  tracking-wide text-gray-400">
                        Our Services
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Turning Research into Revenue
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
                    {serviceData.map((item, i) => (
                        <div
                            key={i}
                            className="w-full md:w-[380px] bg-[rgb(113,113,114)] rounded-xl overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[150px] object-cover"
                            />
                            <div className="p-5 space-y-3 text-center">
                                <p className="text-lg font-semibold">{item.title}</p>
                                <p className="text-sm text-gray-200 leading-relaxed">
                                    {item.des}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between mt-10">

                    {/* Button Left */}
                    <button className="bg-white text-black px-5 py-2 rounded-tl-[20px] rounded-br-[20px] hover:bg-gray-200 transition">
                        View More Services
                    </button>

                    {/* Arrows Right */}
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-900 hover:bg-gray-700 transition flex items-center justify-center rounded-md cursor-pointer">
                            <LuArrowLeft size={20} />
                        </div>
                        <div className="w-12 h-12 bg-gray-900 hover:bg-gray-700 transition flex items-center justify-center rounded-md cursor-pointer">
                            <LuArrowRight size={20} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;