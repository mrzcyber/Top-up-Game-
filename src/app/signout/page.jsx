import Signout from "@/component/button-signout"

const Page = ()=>{
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-second p-10 px-28 rounded-2xl flex items-center flex-col ">
                <div className="w-full flex flex-col pb-5 ">
                    <p className="text-2xl font-bold text-white">Sign out</p>
                 <p className="text-white">Sign out your account</p>
                </div>
                
            <div >
                <Signout/>
            </div>
            </div>
           
        </div>
    )
}

export default Page