"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import { IoHome } from "react-icons/io5";
import Navlink from "./navlink";
import BottomNav from "./bottomnav";


const Navbar = () => {
 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <div className="bg-main/95 backdrop-blur-sm h-15 flex-row items-center justify-between w-full inline-flex lg:px-8 z-40 fixed border-b-2 border-gray-500/90 py-10">
      {isMobile ? (
        <button className="bg-white p-2 border-2 rounded-full hover:border-amber-500 ml-10 ">
          <IoHome size={20} />
        </button>
      ) : (
        <div>
          <Link href={`/`} >
            <Image src={`/logo.png`} width={200} height={200} alt="logo" className="pt-4" />
          </Link>
        </div>
      )}

      <div>
        <Search />
      </div>
      <div>
        <Navlink />
      </div>
     
    </div>
  <div className=" fixed bottom-10 z-10 left-0 w-full border-2 border-gray-500 shadow-2xl  rounded-4xl lg:hidden ">
        <BottomNav />
      </div>
   </>
  );
};

export default Navbar;
