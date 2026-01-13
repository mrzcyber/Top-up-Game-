"use client"
import { useState } from "react"
import Image from "next/image"
import clsx from "clsx"




const Pay = ({check})=>{
const [detail,setdetail] = useState(false)

    return(
        <div className="grid-cols-[1fr_1fr] w-full px-10 grid ">

        <div className=" flex flex-col gap-8">
        <div className="flex flex-row mt-8 ">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                              <p className="text-white text-lg">payment methode</p>  
                              <p className="text-white text-xl font-semibold">payment methode</p>  
                            </div>
                            <div className="space-y-2">
                                                          <div className="grid grid-cols-[120px_1fr] gap-3 items-center">
                            <span className="text-white">Payment Ne</span>
                            <span className="truncate text-white"> Rintisan Teman Bermain
                            </span>
                        </div>
                                                          <div className="grid grid-cols-[120px_1fr] gap-3 items-center">
                            <span className="text-white">Paent Name</span>
                            <span className="truncate text-white"> Rintisan Teman Bermain
                            </span>
                        </div>
                                                          <div className="grid grid-cols-[120px_1fr] gap-3 items-center">
                            <span className="text-white">Payment Name</span>
                            <span className="truncate text-white"> Rintisan Teman Bermain
                            </span>
                        </div>
                                                          <div className="grid grid-cols-[120px_1fr] gap-3 items-center">
                            <span className="text-white">Payment Name</span>
                            <span className="truncate text-white"> Rintisan Teman Bermain
                            </span>
                        </div>

                            </div>

                          
                            
                        </div>
                        
                            <div className="flex flex-col gap-4 border-2 border-amber-500">
                               <div className="w-60 h-60 p-3 ">
                    <Image src={check.url} width={300} height={400} alt="qriss" className="w-full object-cover"/>
                </div> 
                            <a> download qriss</a>
                            </div>
                         
            
                     </div>


                            
                                <div className="flex flex-row justify-between p-3 rounded-2xl bg-main">
                                    <p>total payment</p>
                                    <p>Rp.12000</p>
                                </div>
                                <div className="bg-main rounded-2xl  pb-4  flex-col gap-4 text-white text-xl font-semibold ">
                                    <div className="bg-black/80  rounded-2xl flex flex-row justify-between">
                                    <p className="p-4">payment detail</p>
                                    <button
                                    onClick={()=>setdetail(!detail)}
                                    className="p-4 cursor-pointer">^</button>
                                    </div>

                                    <div className={clsx(detail? "animate-[sedetail_1s_forwards]" : "animate-[offdetail_1s_forwards]")} >
                                         <div className=" p-4 flex flex-row justify-between truncate">
                                    <p>subtotal</p>
                                    <button>Rp.10000</button>
                                    </div>
                                    <div className="p-4 flex flex-row justify-between">
                                    <p>discount</p>
                                    <button>Rp.7000</button>
                                    </div>
                                    <div className="p-4 flex flex-row justify-between">
                                    <p>discount</p>
                                    <button>Rp.7000</button>
                                    </div>
                                    <div className="p-4 flex flex-row justify-between">
                                    <p>discount</p>
                                    <button>Rp.7000</button>
                                    </div>
                                    </div>

                                   

                            </div>
                        </div>

                     <div className="other">
                        <div className="text-white p-4 rounded-2xl border flex flex-col  border-amber-500">
                           <p className="p-2 border-b border-amber-500 text-2xl font-semibold" >produk details</p>

                           <div className="flex flex-row gap-4">
                            <div className="w-48 h-48 rounded-2xl border-2 border-amber-500">
                                <Image src={`/megumi.webp`} width={300} height={300} alt="produk" className="object-cover w-full"/>
                            </div>
                           <div className="pt-2 ">
                            <p className="text-3xl font-semibold">Mobile Legends</p>
                            <p className="text-2xl font-semibold"> 1x5 diamonds </p>
                           </div>
                           <div className="space-y-2">
                            <div className="grid grid-cols-[120px_1fr] text-xl font">
                                <p>user id</p>
                                <p>45676533</p>
                            </div>
                            <div className="grid grid-cols-[120px_1fr] text-xl">
                                <p>whatapps number</p>
                                <p>456765335656</p>
                            </div>
                            <div className="grid grid-cols-[120px_1fr] text-xl">
                                <p>username</p>
                                <p>kingrez</p>
                            </div>
                           </div>
                            </div>
                        </div>
                       <div className="bg-main rounded-2xl  pb-4  flex-col gap-4 text-white text-xl font-semibold ">
                                    <div className="bg-black/80  rounded-2xl flex flex-row justify-between">
                                    <p className="p-4">payment detail</p>
                                    <button
                                    onClick={()=>setdetail(!detail)}
                                    className="p-4 cursor-pointer">^</button>
                                    </div>

                                    <div className={clsx(" flex flex-col gap-2",detail? "animate-[sedetail_1s_forwards]" : "animate-[offdetail_1s_forwards]")} >
                                        <p>cara melakukaan pembayaran e wallet di 1 hp</p>
                                        <ul>
                                            <li>Screenshot QR code pembayaran</li>
                                            <li>{`Buka e-wallet (OVO / GoPay / DANA / ShopeePay / LinkAja)`}</li>
                                            <li>Tekan tombol scan</li>
                                            <li>Pilih upload gambar atau ambil gambar dari gallery</li>
                                            <li>Lalu pilih gambar yang tadi di screenshot</li>
                                            <li>Lakukan pembayaran</li>
                                            <li>Diamond akan langsung masuk, silahkan dicek di game</li>
                                        </ul>
                                    </div>
                                    
                                    </div>
                     </div>

                     </div>
    )
}

export default Pay