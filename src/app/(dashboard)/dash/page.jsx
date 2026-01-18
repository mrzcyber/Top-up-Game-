
import {GrMoney } from 'react-icons/gr'
import {MdSell } from 'react-icons/md'
import {IoMdPerson } from 'react-icons/io'
import Usertrack from '@/component/usertrack'


const Page = ()=>{
    
    
    return(
        <div className="pt-20 pb-10 bg-main ">
            <div className="w-full p-4 text-3xl px-20 font-bold text-white ">
                Dashboard
            </div>
            <div className="w-full p-4 flex flex-col justify-between items-center px-24 ">
               
                <div className=" w-full flex flex-row justify-between items-center">
                    <p className=" w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex justify-center items-center">Harian</p>
                    <p className=" w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex justify-center items-center">Harian</p>
                    <p className=" w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex justify-center items-center">Harian</p>
                </div>

                <div className=" w-full flex flex-row justify-between items-center pt-5">
                    <div className="w-[400px] py-3 shadow-sm shadow-gray-400  bg-second  rounded-xl text-2xl font-bold text-white flex flex-row gap-10">
                        <p className='px-3 py-5 '><GrMoney size={40} /></p>
                        <div className='flex flex-col gap-3'>
                              <p className="px-3">Pendapatan</p>
                        <p className="px-3 text-xl">Rp 1.000.000</p>
                        </div>
                      
                    </div>
                    <div className="w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex flex-row gap-10">
                        <p className='px-3 py-5 '><GrMoney size={40} /></p>
                        <div className='flex flex-col gap-3'>
                              <p className="px-3">Pendapatan</p>
                        <p className="px-3 text-xl">Rp 1.000.000</p>
                        </div>
                      
                    </div>
                    <div className="w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex flex-row gap-10">
                        <p className='px-3 py-5 '><GrMoney size={40} /></p>
                        <div className='flex flex-col gap-3'>
                              <p className="px-3">Pendapatan</p>
                        <p className="px-3 text-xl">Rp 1.000.000</p>
                        </div>
                      
                    </div>
                </div>


                
                 <div className=" w-full flex flex-row justify-between items-center pt-5">
                    <div className="w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex flex-row gap-10">
                        <p className='px-3 py-5 '><MdSell size={40} /></p>
                        <div className='flex flex-col gap-3'>
                              <p className="px-3">Penjualan</p>
                        <p className="px-3 text-xl">1.000 items</p>
                        </div>
                
                     </div>
                    <div className="w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex flex-row gap-10">
                        <p className='px-3 py-5 '><MdSell size={40} /></p>
                        <div className='flex flex-col gap-3'>
                              <p className="px-3">Penjualan</p>
                        <p className="px-3 text-xl">1.000 items</p>
                        </div>
                
                     </div>
                    <div className="w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex flex-row gap-10">
                        <p className='px-3 py-5 '><MdSell size={40} /></p>
                        <div className='flex flex-col gap-3'>
                              <p className="px-3">Penjualan</p>
                        <p className="px-3 text-xl">1.000 items</p>
                        </div>
                
                     </div>
                    </div>

                    <div className=" w-full flex flex-row justify-between items-center pt-5">
                    <div className="w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex flex-row gap-10">
                        <p className='px-3 py-5 '><IoMdPerson  size={40} /></p>
                        <div className='flex flex-col gap-3'>
                              <p className="px-3">Users</p>
                        <p className="px-3 text-xl">1.000 pembeli</p>
                        </div>
                
                     </div>
                    <div className="w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex flex-row gap-10">
                        <p className='px-3 py-5 '><IoMdPerson  size={40} /></p>
                        <div className='flex flex-col gap-3'>
                              <p className="px-3">Users</p>
                        <p className="px-3 text-xl">1.000 pembeli</p>
                        </div>
                
                     </div>
                    <div className="w-[400px] py-3  bg-second shadow-sm shadow-gray-400 rounded-xl text-2xl font-bold text-white flex flex-row gap-10">
                        <p className='px-3 py-5 '><IoMdPerson  size={40} /></p>
                        <div className='flex flex-col gap-3'>
                              <p className="px-3">Users</p>
                        <p className="px-3 text-xl">1.000 pembeli</p>
                        </div>
                
                     </div>
                    </div>

            </div>
            <div className='w-full pt-8 flex justify-center items-center '>
                <Usertrack/>
            </div>
        </div>
    )
}

export default Page