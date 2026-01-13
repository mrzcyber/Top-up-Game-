import Image from "next/image";
import {IoMdPerson } from 'react-icons/io'

const data = [
    {id:1,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},
    {id:2,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},
    {id:3,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},
    {id:4,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},
    {id:5,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},
    {id:6,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},
    {id:7,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},
    {id:8,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},
    {id:9,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},
    {id:10,name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",image:"/avatar.svg"},


]

 

const Usertrack = ()=>{
    return(
        <div className="flex flex-col justify-center  w-full mx-24 items-center">
        <p className="text-4xl font-bold text-start  pb-5 flex w-full flex-row items-center gap-3  text-white"> <IoMdPerson  size={40}/> User Transaktion</p>
        <div className="w-full  p-4 grid grid-cols-3 gap-5 px-10 shadow-sm shadow-gray-400 rounded-2xl">
              
                                {data.map((item)=>(
                                        <div key={item.id} className="w-full py-3 bg-second rounded-xl border border-gray-300  font-bold text-white flex flex-row ">
                                            <div className='w-15 rounded-full bg-amber-50 overflow-hidden  h-15 mx-2'>
                                        <Image src={item.image} width={350} height={350} alt="avatar" className="w-full object-cover object-center"/>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                          <p className="text-lg">{item.name}| {item.email}</p>
                                    <p className="text-md">{item.invoice} </p>
                                    </div>
                                        </div>
                                 
                                ))}
                                   
                                
                                 
            
          
         
             

        </div>
        </div>
    )
}

export default Usertrack;