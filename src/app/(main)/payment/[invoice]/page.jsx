import {prisma} from "lib/prisma"
import { notFound } from "next/navigation"
import Image from "next/image"
import Timer from "@/component/paymentcomp/timer"
import Pay from "@/component/paymentcomp/pay"

const Page =async ({params})=>{
    const {invoice} = await params

    const check = await prisma.Transaktion.findUnique({
        where:{
            invoice:invoice
        },
        select:{
            invoice:true,
            url:true
        }
    })
    if(!check){
        notFound()
    }
  

    return(
        <div className="pb-10 pt-24 bg-second flex flex-col items-center justify-center">
            <div className="w-full max-w-xl h-[45rem] overflow-hidden">
                            {/* <Timer invoice={invoice} /> for advance set ui payment */}
                            <Image src={check.url} width={300} height={400} alt="qriss" className="w-full h-full object-cover"/>
            </div>
            
            <p className="text-white text-xl font-semibold">*scan for payment with qris</p>
                                {/* <Pay check={check} /> */}
               
        </div>
    )

}

export default Page;