import { IoMdSettings } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FiBox} from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { MdOutlineDiscount } from "react-icons/md";
import { IoBackspaceOutline } from "react-icons/io5";
import Dash from "@/component/dashboard/costumer";


const Page = ()=>{
    return(
        <div className="  w-full ">
            <div className=" w-full grid grid-cols-[350px_1fr] gap-15 bg-gray-700 pb-5 ">
                <div></div>
               <div className="bg-white flex flex-col justify-start items-center gap-y-20 fixed h-full w-[350px] ">
                <p className="mt-10 font-mogra text-4xl font-semibold flex flex-row gap-1 pr-10"><IoMdSettings size={30}/>Dashboard</p>
                <ul className="flex flex-col gap-5">
                    <li className="bg-amber-500 text-lg font-stretch-125%  text-gray-500/80 flex flex-row py-2 px-4 w-60 gap-2 rounded-xl  "> <RxDashboard  size={22} className=" mt-0.5"/> Dashboard</li>
                    <li className="hover:bg-amber-500 hover:transition-all text-gray-500/80 ease-in-out text-lg duration-500 font-stretch-125% flex flex-row py-2 px-4  gap-2 w-60 rounded-xl "> <FiBox  size={22} className=" mt-0.5"/> Product</li>
                    <li className="hover:bg-amber-500 hover:transition-all text-gray-500/80 ease-in-out text-lg duration-500 font-stretch-125% flex flex-row py-2 px-4  gap-2 w-60 rounded-xl "> <LuUsers size={22} className=" mt-0.5"/> Costumers</li>
                    <li className="hover:bg-amber-500 hover:transition-all text-gray-500/80 ease-in-out text-lg duration-500 font-stretch-125% flex flex-row py-2 px-4  gap-2 w-60 rounded-xl "> <MdOutlineDiscount size={22} className=" mt-0.5"/> Income</li>
                
                </ul>
                <p className="mt-80 text-lg font-stretch-125% flex flex-row gap-2 w-60 py-2 px-4 rounded-xl hover:bg-amber-500 hover:transition-all ease-in-out"> <IoBackspaceOutline size={22} className=" mt-1"/>back home</p>

               </div>
               <div>

                <Dash/>
               </div>
            </div>
        </div>
    )
}

export default Page;