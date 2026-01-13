"use client"
import { useState,useEffect, useRef } from "react"
import {GoPencil} from "react-icons/go"
import {MdDelete} from  "react-icons/md"
import Image from "next/image";
import {IoMdCloseCircle} from "react-icons/io"
import { deldiamond, updiamond } from "@/libs/hit-api";



const Diamond = ({id,diamond})=>{
const [game,setgame]=useState(null)
const [delt,setdelt]=useState(null)
const [edit,setedit]=useState(null)
const refproduk = useRef()
const refprice = useRef()

const data = diamond


const upload = async()=>{
    const produk = refproduk.current.value
const price = refprice.current.value
    const response = await fetch("/api/upload/diamond",{
        method:"POST",
        body:JSON.stringify({product:produk,price:price,gameId:id}),
        headers:{
            "Content-Type":"application/json"
        },
        

})
refproduk.current.value = ""
refprice.current.value = ""
setgame("")
}

        useEffect(()=>{
        if(game){
             window.scrollTo(0,0)
        document.body.style.overflow="hidden"
        }
        else{
            document.body.style.overflow=""
        }
       

        return ()=>{
            document.body.style.overflow=""
        }
       
    },[game])

    return(
        <div className=" w-full pb-10 flex flex-col   gap-5">
         
            <div className="  w-full bg-second border-2 border-gray-400 grid lg:grid-cols-2 grid-cols-1 gap-3 rounded-2xl p-3">
                {data.map((item)=>(
                    <div key={item.id} className=" relative border-2 border-gray-400 flex flex-col items-start justify-center gap-1 rounded-xl ">
                        <div>
                               <p className=" pl-2 text-xl font-bold text-white">{item.product}</p>
                        <p className=" pl-2 text-lg font-semibold text-white">Rp.{item.price}</p> 
                         <div className="flex flex-row gap-3 text-white     absolute bottom-1 right-2  items-end ml-10">
                                                        <button
                                                        className="block "
                                                        onClick={(e)=>(setedit(item.id),e.stopPropagation())}
                                                        ><GoPencil size={26}/></button>
                                                        <button
                                                        className="block  "
                                                        onClick={(e)=>(setdelt(item.id),e.stopPropagation())}
                                                        ><MdDelete size={26}/></button>
                                                     
                                                    </div>
                        </div>
                        
                               
                        
                    
                    </div>
                ))}
                <div className="flex  justify-start items-center w-full mt-5 ">
                    <button 
                    onClick={()=>setgame("add")}
                    className="text-white font-semibold text-xl shadow-md shadow-gray-500  px-8 py-4 rounded-2xl bg-black border-4 border-transparent hover:border-gray-500">Add Game </button>
                </div>
            </div>

                 {game  ? <div className="absolute inset-0 m-auto w-full h-screen border-2  flex justify-center items-center border-amber-500 bg-main/50 backdrop-blur-md text-white ">
                                        <div className="bg-second rounded-lg" > 
                                           
                                              <div>
                
                                                <button className="text-gray-600 w-full flex justify-end p-3" 
                                                onClick={()=>setgame("")}> <IoMdCloseCircle size={30}/></button>
                                              </div>
                                              <div className="flex flex-row m-10 " >
                                                
                                                <form className="flex flex-col gap-2 ml-4 ">
                                                    <input type="text" placeholder="Nama Produk"
                                                    ref={refproduk}
                                                    className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600 "/>
                                                    <input type="text" placeholder="Price" 
                                                    ref={refprice}
                                                    className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600"/>
                                                   
                                                    
                                                    <button 
                                                    onClick={()=>upload()}
                                                    type="submit" placeholder="masukan gambar" className="p-2  rounded-3xl bg-gray-500 hover:bg-amber-500 ">
                                                        Submit
                                                    </button>
                                                </form>
                                                    
                                                
                                              </div>       
                                         </div>
                                             </div> :null}
                
                                             {delt ? <div className="absolute inset-0 m-auto w-full h-screen border-2  flex justify-center items-center border-amber-500 bg-main/50 backdrop-blur-md text-white "> 
                                                
                                                <div className="rounded-2xl p-8 bg-second">
                
                                                    
                                                    <p className="text-4xl font-bold ">
                                                        Apakah Kamu Yakin ingin menghapus game ini?
                                                    </p>
                                                    <div className="flex flex-row gap-4 justify-center items-center mt-5">
                                                        <button
                                                        onClick={()=>(deldiamond(delt),setdelt(null),alert("produk berhasil dihapus"))}
                                                        className="py-2 px-9 text-lg font-semibold rounded-2xl border-2 border-amber-500 bg-main hover:bg-gray-500">
                                                            Ya
                                                        </button>
                                                        <button
                                                        onClick={()=>setdelt(null)}
                                                        className="py-2 px-6 text-lg font-semibold rounded-2xl bg-main border-2 border-amber-500 hover:bg-gray-500">
                                                            Tidak
                                                        </button>
                                                    </div>
                                                    
                                                </div>
                
                
                                             </div> :null}

                                             {edit  ? <div className="absolute inset-0 m-auto w-full h-screen border-2  flex justify-center items-center border-amber-500 bg-main/50 backdrop-blur-md text-white ">
                                        <div className="bg-second rounded-lg" > 
                                           
                                              <div>
                
                                                <button className="text-gray-600 w-full flex justify-end p-3" 
                                                onClick={()=>setedit("")}> <IoMdCloseCircle size={30}/></button>
                                              </div>
                                              <div className="flex flex-row m-10 " >
                                                
                                                <form className="flex flex-col gap-2 ml-4 ">
                                                    <input type="text" placeholder="Nama Produk"
                                                    ref={refproduk}
                                                    className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600 "/>
                                                    <input type="text" placeholder="Price" 
                                                    ref={refprice}
                                                    className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600"/>
                                                   
                                                    
                                                    <button 
                                                    onClick={()=>updiamond(edit,refproduk.current.value,refprice.current.value)}
                                                    type="submit" placeholder="masukan gambar" className="p-2  rounded-3xl bg-gray-500 hover:bg-amber-500 ">
                                                        Submit
                                                    </button>
                                                </form>
                                                    
                                                
                                              </div>       
                                         </div>
                                             </div> :null}
                                
                

        </div>

)
}

export default Diamond;