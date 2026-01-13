import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";



const Signout=()=>{
    return(
        <form
        action={async()=>{
            "use server"
            await signOut({redirect:false})
            revalidatePath("/")
            redirect("/")
        }}>

              <div>
            <button
            className="flex flex-row p-4 px-8 bg-amber-500 text-2xl font-bold rounded-md cursor-pointer ">
            
            Sign out account
            </button>
        </div>
        </form>
      
    )
}

export default Signout