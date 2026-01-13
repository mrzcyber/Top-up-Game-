"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react";
import { FadeInBox } from "../fadein";
import {IoGameController } from "react-icons/io5"





const Core = ({data=[]})=>{

   

    const [mobile,setmobile]=useState(false)
    const [extra,setextra]=useState(0)
    
    const limit = (mobile ? 9:10)+extra

   
    
 const data2=data.slice(0,limit)

   
    


 useEffect(()=>{
    function handleResize () {
        setmobile(window.innerWidth<768)

    }
    handleResize()
    window.addEventListener("resize",handleResize)
    return ()=>window.removeEventListener("resize",handleResize)
 },[])

 

    return(
       
        <div className=" w-[1200px] md:py-10 py-10    pb-40">
            <div className="pb-5 px-3">
                <p className="text-2xl font-bold text-white flex items-center flex-row gap-2"> <IoGameController /> All Game</p>
                <p className="font-semibold text-lg text-white/80">Explore Our Favorite Game</p>
            </div>
            <div className="  grid grid-cols-3 md:grid-cols-5 md:gap-6  mx-2 md:ml-0  gap-3     ">
                   {data2.map((item)=>(
                <Link 
                href={`/product/${item.id}`}
                key={item.id} className=" cursor-pointer lg:w-[14rem] lg:h-[16rem]  w-[7.5rem] h-[12rem]   rounded-xl overflow-hidden shadow-xl  md:border-4 border-3 border-transparent  border-box  hover:border-amber-600  hover:transition-all duration-500 hover:scale-105 hover:shadow-none  ">
                    <div className=" w-full h-full bg-black " >
                        <FadeInBox>
                    <div className="flex flex-col w-full  ">
                          <div className="md:w-full  md:h-[11rem] h-[7.5rem]   object-cover ">
                            <Image src={item.image} width={350} height={350} alt="produk" className="object-cover w-full h-full rounded-t-lg" />
                        </div>
              
                           <p className="text-white font-semibold mt-2 text-md pt-2  lg:text-xl lg:pl-2 lg:mt-1 line-clamp-2  mx-2">{item.title} </p>
                        
                        
                    </div>
                    </FadeInBox>
                      
                    </div>
                </Link>
            ))}
             
            </div>
            <div className="flex justify-center pt-5">
                <button 
                onClick={()=>setextra(limit)}
                className="cursor-pointer p-2 px-3 text-md bg-second shadow-xl md:p-3 md:px-4 text-white font-semibold md:text-lg  rounded-xl hover:scale-110 transition-all duration-300">
                See More...
            </button>
            </div>
            
           
        </div>
      
    )
}

export default Core;