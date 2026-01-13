import {FaGoogle} from "react-icons/fa"
import { signIn } from "@/auth"




export const Googlebutton = ()=>{
    return(
        <form 
        action={async()=>{
            "use server"
            await signIn("google",{redirectTo:"/"})
            

        }}>

            <div>
            <button className="flex flex-row p-4 px-4 bg-amber-500 text-2xl font-bold rounded-md cursor-pointer ">
            <FaGoogle size={30}/> Sign In With Google
            </button>
        </div>
        </form>
        
    )
}