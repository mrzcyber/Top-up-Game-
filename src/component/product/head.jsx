"use client"

import Image from "next/image";
import { IoIosRocket } from "react-icons/io";
import {IoChatboxEllipses} from "react-icons/io5"
import {IoLockClosed } from "react-icons/io5"
import { useEffect } from "react";



const Head = ({data})=>{
    useEffect(()=>{
        window.scrollTo(0,0)

    },[])

    return(
         <div className="w-[1200px] md:h-56 h-36 flex flex-col   rounded-xl relative  ">
            
            <div className="md:w-48 md:h-52 w-28 h-32 border-2 border-amber-500 rounded-xl overflow-hidden absolute left-4 md:left-10 md:bottom-8 bottom-6 z-5 ">
                <Image src={data.image} width={1000} height={2000} alt="image product" className="w-full h-full object-cover animate-[fadein_1s_linear_3s_forwards] opacity-0"/>
            </div>
            <div className="bg-second w-full absolute bottom-0 rounded-xl md:h-48 ">
                <div className="md:ml-64 ml-[8.5rem]  md:pt-6 pt-1  flex flex-col">
                    <div className="flex flex-col animate-[fadein_500ms_linear_4s_forwards] opacity-0 ">
                        <h1 className="md:text-3xl font-bold text-2xl">{data.title}</h1>
                        <p className="font-semibold md:text-xl text-lg">{data.developer}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-2 md:p-4 md:pr-4 pb-2 px-1 animate-[fadein_500ms_linear_5s_forwards] opacity-0">
                        <p className=" text-[10px] md:text-sm bg-amber-500/80 md:px-3 md:py-3 py-1 px-2 rounded-xl font-semibold flex flex-row md:gap-2 items-center  "> <IoIosRocket size={18}/> Fast Process</p>
                        <p className=" text-[10px] md:text-sm bg-amber-500/80 md:px-3 md:py-3 py-1 px-2 rounded-xl font-semibold flex flex-row md:gap-2 items-center"> <IoLockClosed size={18}/> Safety Guaranteed</p>
                        <p className=" text-[10px] md:text-sm bg-amber-500/80 md:px-3 md:py-3 py-1 px-2 rounded-xl font-semibold flex flex-row md:gap-2 items-center"> <IoChatboxEllipses size={18}/> Customer Service 24/7</p>
                    </div>
                </div>

            </div>
        
      </div>
    )
}

export default Head;