"use client";

import { IoMdSearch } from "react-icons/io";
import { useState,useEffect } from "react";
import Link from "next/link";



const Search = () => {
  const [query,setquery] = useState("")
  const [game,setgame] = useState(null)
  const [message,setmessage]=useState(null)
  

useEffect(()=>{
  if(query<2 || !query){
    setgame(null)
    setmessage(null)
    return
  }
  const search = setTimeout(async()=>{
    const response = await fetch(`/api/upload/games?q=${query}`)
    const data = await response.json()
    
      setgame(data.games)
      setmessage(data.message ?? null)
    
  },1000)

  return ()=>clearTimeout(search)
},[query])


  return (
    <div className="relative w-64 lg:w-96">
      <input
        type="text"
        value={query}
        placeholder="Search"
        className="p-1 py-2 w-full border-2 rounded-md focus:border-amber-600 focus:outline-none border-amber-500 placeholder-gray-400 text-white hover:border-gray-500"
        onChange={(e)=>setquery(e.target.value)}
      />
      <button className="text-gray-500 absolute top-2  right-2 cursor-pointer">
        <IoMdSearch size={28} />
      </button>
      {query && game &&(
        <div className="w-64 lg:w-96 rounded-md  absolute mt-1 flex flex-col bg-second">
          
          
        { message &&  (<p className="font-bold border border-amber-400 p-2 rounded-md text-white hover:bg-main ">{message}</p>)}
        
      { game.map((item)=>(
          <Link 
          onClick={()=>setquery("")}
          key={item.id} href={`/product/${item.id}`}>
          <p className="font-bold border border-amber-400 p-2 rounded-md text-white hover:bg-main ">{item.title}</p>
          </Link>
        ))}

        </div>
     )}
     
    </div>
  );
};

export default Search;
