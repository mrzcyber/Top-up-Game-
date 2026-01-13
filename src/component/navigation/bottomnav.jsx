import Link from "next/link"
import Image from "next/image"
import { IoMdPerson } from "react-icons/io"
import { IoMdTrophy } from "react-icons/io"


const BottomNav = ()=>{
    return( 
        <div className="bg-main/80  h-15  flex justify-between items-center rounded-4xl px-20 lg:hidden backdrop-blur-sm">
            <div>
                <Link href={`/`} 
                className=" text-white  hover:text-amber-500 after:content-[''] after:block after:pb-1 after:border-b-2 after:border-amber-600 after:scale-x-0 after:transition-transform after:duration-500 after:linear hover:after:scale-x-100 ">
                <IoMdTrophy size={28}/>
                </Link>
            </div>
            <div className="bg-amber-600 w-20 h-20  rounded-full  mb-7 border-1  hover:bg-amber-500 hover:border-gray-400 ">
                <Link className="w-20 h-20 rounded-full overflow-hidden "
                 href={`/`}>
                <Image src={`/logo3.png`} width={100} height={100} alt="logo"/>
                </Link>
            </div>

            <div className=" text-white hover:text-amber-500 after:content-[''] after:block after:pb-1 after:border-b-2 after:border-amber-600 after:scale-x-0 after:transition-transform after:duration-500 after:linear hover:after:scale-x-100 ">
                <IoMdPerson size={28}/>
            </div>


        </div>
    )
}
 
export default BottomNav;

