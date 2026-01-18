import { IoMdSearch } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoBan } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { HiOutlineSwitchVertical } from "react-icons/hi";

const Dash = ()=>{
    return(
        <div className="text-white w-full   ">
          
            <div className="">
                {/* header */}
                <div className="flex flex-row justify-between items-center relative mr-10 mt-10">
                    <p className="text-white text-3xl font-stretch-125% font-semibold ">hello king 👋,</p>
                        <p className="p-1 py-2 w-44 flex flex-row gap-1  rounded-xl bg-white/90 text-gray-500/80 font-stretch-110%"
                         >short by:<button className="flex flex-row gap-1 items-center hover:text-green-500">Daily <HiOutlineSwitchVertical size={20}/></button> </p>
                          
                </div>
                {/* track */}
                <div className=" mr-10 mt-15 bg-white/90 text-black px-10 py-8 flex flex-row  rounded-xl">
                    <div className="flex flex-1 flex-row gap-2 ">
                        <p className="bg-green-300/70 text-green-600 rounded-full p-5"><LuUsers size={35} className=" mt-0.5"/> </p>
                        <div className="flex flex-col gap-1 ">
                            <p className="text-lg font-stretch-110% text-gray-500/80">total costumers</p>
                            <p className="text-3xl font-bold  text-black font-stretch-105% ">5,000</p>
                        </div>
                        <p className="border-r-1 border-gray-500/80 ml-10"></p>
                    </div>
                    <div className="flex flex-1 flex-row gap-2 ">
                        <p className="bg-green-300/70 text-green-600 rounded-full p-5"><IoMdCheckmarkCircleOutline  size={35} className=" mt-0.5"/> </p>
                        <div className="flex flex-col gap-1 ">
                            <p className="text-lg font-stretch-110% text-gray-500/80">Status completed </p>
                            <p className="text-3xl font-bold  text-black font-stretch-105% ">4,900</p>
                        </div>
                        <p className="border-r-1 border-gray-500/80 ml-10"></p>
                    </div>
                    <div className="flex flex-1 flex-row gap-2">
                        <p className="bg-red-300/70 text-red-500 rounded-full p-5"><IoBan size={35} className=" mt-0.5"/> </p>
                        <div className="flex flex-col gap-1 ">
                            <p className="text-lg font-stretch-110% text-gray-500/80">Status uncompleted</p>
                            <p className="text-3xl font-bold  text-black font-stretch-105% ">100</p>
                        </div>
                    </div>
                </div>
                {/* users */}
                <div className="mr-10 mt-15 bg-white/90 px-10 py-8 flex flex-col rounded-xl ">
                <div className="flex flex-row gap-3 justify-between items-center w-full ">
                    <div className="flex flex-col">
                       <p className="text-black/90 font-semibold text-[1.25rem] font-stretch-125%">All Transaktion</p> 
                       <p className="text-sm font-semibold text-green-600">All user transaktion</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="relative">
                         <input
                            type="text"
                            placeholder="Search"
                            className="p-1 py-2 w-56 border-2 border-transparent rounded-xl bg-white/90 focus:border-gray-500 focus:outline-none placeholder-gray-400 text-gray-700 hover:border-gray-500"
                           
                          />
                          <button className="text-gray-500 absolute top-2  right-2 cursor-pointer">
                            <IoMdSearch size={28} />
                          </button>
                    </div>
                       
                          <p className="bg-white/90 py-2.5 rounded-xl px-4 text-gray-500/80 font-stretch-110% ">short by:status <button>^</button></p>
                    </div> 
                </div>
                <table className="w-full text-center border-collapse mt-10">
                    <thead>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-gray-400 font-medium">Invoice</th>
                            <th className="py-4 text-gray-400 font-medium">Game</th>
                            <th className="py-4 text-gray-400 font-medium">Idgame</th>
                            <th className="py-4 text-gray-400 font-medium">Product</th>
                            <th className="py-4 text-gray-400 font-medium">Phone</th>
                            <th className="py-4 text-gray-400 font-medium">Status</th>
                            <th className="py-4 text-gray-400 font-medium">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b  border-gray-50">
                            <td className="py-3 font-semibold  text-gray-800">RZT096434</td>
                            <td className="py-3 font-semibold text-gray-800">Honor of kings</td>
                            <td className="py-3 font-semibold text-gray-800">2628283625</td>
                            <td className="py-3 font-semibold text-gray-800">100 Diamond</td>
                            <td className="py-3 font-semibold text-gray-800">098765434567</td>
                            <td className="py-3 font-semibold text-gray-800 "><p className="bg-green-300 py-2 border-2 border-green-500 rounded-xl">Completed</p></td>
                            <td className="py-3 font-semibold text-gray-800 "><button className="flex flex-row items-center pl-4 gap-1 hover:text-green-500"> <FiEdit size={20}/> Edit </button></td>
                        </tr>
                        <tr className="border-b  border-gray-50">
                            <td className="py-3 font-semibold  text-gray-800">RZT096434</td>
                            <td className="py-3 font-semibold text-gray-800">Honor of kings</td>
                            <td className="py-3 font-semibold text-gray-800">2628283625</td>
                            <td className="py-3 font-semibold text-gray-800">100 Diamond</td>
                            <td className="py-3 font-semibold text-gray-800">098765434567</td>
                            <td className="py-3 font-semibold text-gray-800 "><p className="bg-green-300 py-2 border-2 border-green-500 rounded-xl">Completed</p></td>
                            <td className="py-3 font-semibold text-gray-800 "><button className="flex flex-row items-center pl-4 gap-1 hover:text-green-500"> <FiEdit size={20}/> Edit </button></td>
                        </tr>
                        <tr className="border-b  border-gray-50">
                            <td className="py-3 font-semibold  text-gray-800">RZT096434</td>
                            <td className="py-3 font-semibold text-gray-800">Honor of kings</td>
                            <td className="py-3 font-semibold text-gray-800">2628283625</td>
                            <td className="py-3 font-semibold text-gray-800">100 Diamond</td>
                            <td className="py-3 font-semibold text-gray-800">098765434567</td>
                            <td className="py-3 font-semibold text-gray-800 "><p className="bg-green-300 py-2 border-2 border-green-500 rounded-xl">Completed</p></td>
                            <td className="py-3 font-semibold text-gray-800 "><button className="flex flex-row items-center pl-4 gap-1 hover:text-green-500"> <FiEdit size={20}/> Edit </button></td>
                        </tr>
                        <tr className="border-b  border-gray-50">
                            <td className="py-3 font-semibold  text-gray-800">RZT096434</td>
                            <td className="py-3 font-semibold text-gray-800">Honor of kings</td>
                            <td className="py-3 font-semibold text-gray-800">2628283625</td>
                            <td className="py-3 font-semibold text-gray-800">100 Diamond</td>
                            <td className="py-3 font-semibold text-gray-800">098765434567</td>
                            <td className="py-3 font-semibold text-gray-800 "><p className="bg-green-300 py-2 border-2 border-green-500 rounded-xl">Completed</p></td>
                            <td className="py-3 font-semibold text-gray-800 "><button className="flex flex-row items-center pl-4 gap-1 hover:text-green-500"> <FiEdit size={20}/> Edit </button></td>
                        </tr>
                        <tr className="border-b  border-gray-50">
                            <td className="py-3 font-semibold  text-gray-800">RZT096434</td>
                            <td className="py-3 font-semibold text-gray-800">Honor of kings</td>
                            <td className="py-3 font-semibold text-gray-800">2628283625</td>
                            <td className="py-3 font-semibold text-gray-800">100 Diamond</td>
                            <td className="py-3 font-semibold text-gray-800">098765434567</td>
                            <td className="py-3 font-semibold text-gray-800 "><p className="bg-green-300 py-2 border-2 border-green-500 rounded-xl">Completed</p></td>
                            <td className="py-3 font-semibold text-gray-800 "><button className="flex flex-row items-center pl-4 gap-1 hover:text-green-500"> <FiEdit size={20}/> Edit </button></td>
                        </tr>
                        <tr className="border-b  border-gray-50">
                            <td className="py-3 font-semibold  text-gray-800">RZT096434</td>
                            <td className="py-3 font-semibold text-gray-800">Honor of kings</td>
                            <td className="py-3 font-semibold text-gray-800">2628283625</td>
                            <td className="py-3 font-semibold text-gray-800">100 Diamond</td>
                            <td className="py-3 font-semibold text-gray-800">098765434567</td>
                            <td className="py-3 font-semibold text-gray-800 "><p className="bg-green-300 py-2 border-2 border-green-500 rounded-xl">Completed</p></td>
                            <td className="py-3 font-semibold text-gray-800 "><button className="flex flex-row items-center pl-4 gap-1 hover:text-green-500"> <FiEdit size={20}/> Edit </button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex items-center justify-between px-4 py-1 mt-5  sm:px-6">
  <div className="text-sm text-gray-400">
    Showing data 1 to 8 of <span className="font-semibold">256K</span> entries
  </div>
  <div className="flex items-center gap-2 ">
    <button className="px-3 py-1  border border-gray-200 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
      &lt;
    </button>

    <button className="px-3 py-1 bg-indigo-600 text-white rounded-md font-medium">
      1
    </button>

    <button className="px-3 py-1  border border-gray-200 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
      2
    </button>
    <button className="px-3 py-1  border border-gray-200 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
      3
    </button>
    <button className="px-3 py-1  border border-gray-200 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
      4
    </button>

    <span className="px-2 text-gray-400">...</span>

    <button className="px-3 py-1  border border-gray-200 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
      40
    </button>

    <button className="px-3 py-1  border border-gray-200 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
      &gt;
    </button>
  </div>
</div>

                </div>
            </div>
        </div>
    )
}

export default Dash;