"use client"

import Image from "next/image";
import { useState,useRef,useEffect } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"
import { IoDiamond } from "react-icons/io5";
import clsx from "clsx";
import { useRouter } from "next/navigation";


 



const Product = ({dm,userid,data})=>{

const value = useRef()
const [price,setprice] = useState(0)
const [item,setitem]=useState("")
const [final,setfinal]=useState()
const [cover,setcover]=useState(null)
const [idvalue,setidvalue]=useState(null)
const [kontak,setkontak]=useState()
const [warn,setwarn]=useState(false)
const [payid,setpayid]=useState(null)
const [method,setmethod]=useState("")
const router = useRouter()



useEffect(()=>{
    if(price && item){
        finalvalue()
    }
},[item,price])

const finalvalue = ()=> {
  if(value.current.value < 1){
    value.current.value = 1
  }
    setfinal(price*value.current.value)
}
const handlermin = ()=>{
    
    if(value.current.value < 1){
        value.current.value = 1
    }
    else{
        value.current.value = Number(value.current.value) - 1
    }
    finalvalue()
}

const handlerplus = ()=>{
    value.current.value = Number( value.current.value) + 1
    finalvalue()

}
 
const handlerselect = (ida,product,price)=>{ 
if(idvalue){
    setprice(price),
     setitem(product),
     setcover(ida)
     setwarn(false)
    
}
else{
    setwarn(true)  
}
}

// handler pay
const handlerpay = async()=>{
    if(!payid) return alert("pilih metode pembayaran")
    const response = await fetch(`/api/chekout`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            trakId:parseInt(userid),
            product:item,
            price:final,
            payment:method,
            gameId:idvalue,
            titleGame:data,
            phone:kontak 
        })

    })
    const order = await response.json()
    console.log(order)
    if(order){
        router.push(`/payment/${order.charge.order_id}`)
    }

}



    return(
        <div className=" lg:w-[1200px] w-full  ">
            <div className="w-full bg-second rounded-xl  lg:mt-10 mt-6 flex lg:flex-row flex-col gap-y-4 pl-2 py-2 lg:p-5 ">
                <div className="flex flex-col gap-2 lg:mr-20">
                     <p className="text-lg font-semibold">User ID</p>
                <div className="w-96 ">
                <input
                    type="number"
                    onChange={(e)=>setidvalue(e.target.value)}
                    placeholder="Masukan Id Game" 
                    className="text-white text-md font-semibold p-2 mt-2 w-80 lg:w-full  border-2 rounded-xl focus:border-amber-600 focus:outline-none border-amber-500 placeholder-gray-400  hover:border-gray-500 no-spinner"/>
                </div>
                <p className={clsx(warn ?"text-md font-semibold text-amber-700 shake":"hidden")}>*silakan masukan id dahulu sebelum melanjutkan</p>
                </div>

                <div className="flex flex-col gap-2 ">
                    <p className="text-lg font-semibold">Contact Person</p>
                    <div className="w-96 relative">
                        
                    <input
                    type="number"
                    onChange={(e)=>setkontak(e.target.value)}
                    className="text-white text-md font-semibold p-2 pt-[9px]  lg:pt-2 px-10 mt-2 lg:w-full w-80 border-2 rounded-xl focus:border-amber-600 focus:outline-none border-amber-500 placeholder-gray-400  hover:border-gray-500"/>
                    <span className="absolute top-[18px] pb-4 left-2 font-semibold">+62</span>
                    </div>
                    <p className="text-sm pl-5">*Kami akan menghubungi anda jika terdapat masalah</p>
                </div>               
            </div>
             <div className="w-full  mt-10 mb-15 gap-5 flex lg:flex-row flex-col  justify-between  ">
                <div className="lg:w-[1700px] w-full  ">
                <div className="bg-second w-full rounded-xl">
                        <p className="text-white text-xl font-bold p-5 flex flex-row items-center gap-1"><IoDiamond size={20}/>Best Diamond</p>
                    <div className="w-full grid grid-cols-3 gap-3 px-3 ">
                    {dm.map((item)=>(
                        <button 
                        onClick={()=>{handlerselect(item.id,item.product,item.price)}}
                        
                        key={item.id} className={clsx( "border-3 h-26 overflow-hidden rounded-xl cursor-pointer hover:rotate-4 hover:scale-[108%] shadow-md  rotate-0 transition-all ease-in-out ",cover === item.id? "border-amber-500":"border-transparent")}>
                            <p className="bg-main rounded-t-xl text-start lg:h-15 h-10 lg:text-lg text-md font-semibold lg:px-3 py-3 px-1 text-white">{item.product}</p>
                            <div className="flex flex-row justify-between px-4 py-2">
                                <p>Rp{item.price}</p>
                                <Image src={"/diamond.webp"} width={100} height={100} alt="diamond" className="w-6 h-6 lg:block hidden "/>
                            </div>
                        </button>

                    ))}
                    </div>
                </div>

                    <div className="w-full bg-second rounded-xl mt-10 flex flex-row justify-between items-center p-3">
                        <div className="flex flex-col p-2 gap-1 ">
                            <p className="text-white text-xl font-semibold">Rp {final?final:price}</p>
                            <p className="text-white text-lg font-semibold px-4">{item}</p>

                        </div>


                        <div className="flex flex-row gap-2">
                               <div className="relative">
                            <input
                            min={1}
                            defaultValue={1}
                            onChange={finalvalue}
                            ref={value}
                            type="number"
                            
                            className="border-2 border-amber-500 p-2.5 rounded-xl "/>

                            <div className="flex flex-row gap-2 absolute top-2 right-2">
                                <button
                                onClick={handlermin}
                                className="bg-amber-500 w-7 h-7 flex justify-center items-center my-1  rounded-full hover:bg-amber-500/70 "><AiOutlineMinus size={20}/></button>
                                <button 
                                onClick={handlerplus}
                                className="bg-amber-500 w-7 h-7 flex justify-center items-center  my-1  rounded-full hover:bg-amber-500/70 "><AiOutlinePlus size={20}/></button>
                            </div>

                        </div>
                        <button
                        onClick={()=>handlerpay()}
                        className="bg-amber-500 py-2  px-2 rounded-xl text-white font-semibold hover:bg-amber-500/70">Bayar sekarang</button>

                        </div>
                     
                    </div>
            
                </div>
                <div className="w-full flex justify-end  ">
                      <div className=" lg:w-[28rem] w-full lg:h-[20rem] h-[30rem] bg-second mx-5 lg:mx-0 px-5 rounded-2xl ">
                        <p className="text-xl text-white font-sans p-3 ">Payment metode</p>
                        <button
                        onClick={()=>(setpayid(1),setmethod("qris"))}
                        className={clsx("mt-5 w-full  rounded-2xl bg-main/80 flex flex-row justify-between items-center p-3 border-2   ",payid===1?"border-amber-500":"border-transparent hover:border-gray-400")}>
                        <p className="text-white ">Qriss </p>
                            <div className="text-white flex flex-col ">
                                <p>qriss</p>
                                <p>RP.{final}</p>
                            </div>
                        </button>
                        <button
                         onClick={()=>(setpayid(2),setmethod("qris"))}
                        className={clsx("mt-5 w-full  rounded-2xl bg-main/80 flex flex-row justify-between items-center p-3 border-2   ",payid===2?"border-amber-500":"border-transparent hover:border-gray-400")}>
                        <p className="text-white ">Qriss </p>
                            <div className="text-white flex flex-col ">
                                <p>qriss</p>
                                <p>RP.{final}</p>
                            </div>
                        </button>
                    </div>
                </div>
                

                </div>
        </div>
    )
}

export default Product;