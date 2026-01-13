import History from "@/component/profile/history";
import Image from "next/image";
import { auth } from "@/auth";
import Link from "next/link";
import {IoIosLogIn} from "react-icons/io"



const Page = async ()=>{
    const session = await auth()
    
    return(
        <>
           { session?.user ? <div className="pt-22 bg-main flex flex-col items-center ">
            <div className="pt-36" >
            <div className="w-36 h-36 bg-amber-50 rounded-full overflow-hidden m-auto ">
            <Image src={`/avatar.svg`} width={350} height={350} alt="avatar" className="w-full h-full object-cover "/>
            </div>
            <h1 className="text-3xl text-white font-bold my-5 px-5 p-2 rounded-br-2xl rounded-tl-2xl bg-second shadow-xl ">Hai, Muhammad Reza</h1>
            </div>

            <div className="w-full flex justify-center">
            <History/>
            </div>
            
        </div>
        : <div className="pt-22 bg-main flex flex-col items-center  h-screen">
            <div className="pt-36" >
            <div className="w-36 h-36 bg-amber-50 rounded-full overflow-hidden m-auto ">
            <Image src={`/avatar.svg`} width={350} height={350} alt="avatar" className="w-full h-full object-cover "/>
            </div>
            <h1 className="text-3xl text-white font-bold my-5 px-5 p-2 rounded-br-2xl rounded-tl-2xl bg-second shadow-xl ">Hai,Kamu belum login ni</h1>
            </div>

            <div className="w-full  flex justify-center ">
                <div className="w-[400px] bg-second flex flex-col justify-center  items-center rounded-xl py-10 cursor-pointer  px-10 gap-3">
                    
            <Link 
            href={"/signin "}
            className="bg-amber-500 p-3 rounded-xl text-2xl font-bold w-40 flex justify-center items-center"> <IoIosLogIn size={30}/>Login</Link>
                </div>
            
            </div>
            
        </div>
        }
        </>
  
    )
}

export default Page;