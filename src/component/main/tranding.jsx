

import Image from "next/image";
import Link from "next/link";






const resoure = [
    {id:1, img:`/Gojo.jpeg`},
    {id:2, img:`/Gojo.jpeg`},
    {id:3, img:`/Gojo.jpeg`},
    {id:4, img:`/Gojo.jpeg`},
    {id:5, img:`/Gojo.jpeg`},
    {id:6, img:`/Gojo.jpeg`},
]

const Tranding = async ()=>{
   

   

    return(
         <div className="w-[1200px] flex  flex-col mb-4 ">
            <div className="px-3 flex  pt-3 md:py-5 flex-col md:w-full   ">
                <h1 className="text-white text-xl md:text-2xl  font-bold ">Trending🔥</h1>
            <p className="text-sm md:text-lg font-semibold text-white/80">Enjoy your top up with RezaTopup</p>
            </div>
            
            <div className="grid grid-cols-2 md:gap-6 gap-3 px-2  md:grid-cols-3   " >
                {resoure.map((trand)=>(
                    <Link  href={`/product/${trand.id}`} key={trand.id} >
                        
                        <div 
                        href={`/product/${trand.id}`}
                        className="  md:h-28 bg-black rounded-2xl box-border border-3 cursor-pointer border-transparent  hover:border-amber-600 transition hover:scale-105  duration-300 ease-linear  animate-[fadein_800ms_linear_forwards]  ">
                        
                    <div className="flex md:py-3 py-2  ">
                        <div className=" rounded-xl w-13 h-12 md:w-28 md:h-24 lg:pb-4  mr-2   overflow-hidden "> 
                            <Image src={trand.img} width={100} height={80} alt="produk" className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <p className=" text-sm md:text-xl font-semibold text-white uppercase truncate  ">Honor of King</p>
                            <p className="text-white text-sm  ">level infinity</p>
                        </div>
                      
                        </div>

                            

                        </div>
                    </Link>
                ))}

            </div>
 
            
            
         </div>
    )
}

export default Tranding;