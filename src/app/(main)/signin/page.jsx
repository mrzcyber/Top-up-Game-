import {Googlebutton} from "@/component/button-signin.jsx"


const Page = ()=>{
    return(
        <div className="flex  items-center justify-center h-screen">
            <div className="bg-second p-10 rounded-2xl flex flex-col items-center ">
                <div className="w-full flex flex-col pb-5 ">
                         <p className="text-2xl font-bold text-white">SignIn</p>
                <p className="text-white  ">Signin with your account</p>
                </div>
           
            <div>
                <Googlebutton/>
            </div>
            </div>
            
        </div>
    )
}

export default Page