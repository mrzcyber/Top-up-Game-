"use client";
import { IoMdPerson } from "react-icons/io";
import { IoEnterOutline } from "react-icons/io5";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import clsx from "clsx";


const Navlink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();
  const {data : session} = useSession()

  

  useEffect(() => {
    function handlerClickOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handlerClickOutside);
    return () => {
      document.removeEventListener("click", handlerClickOutside);
    };
  });

  return (
    
    <div className="flex items-center gap-3 ">
      <ul className="hidden  lg:flex flex-row gap-4  ">
        <li>
          <a
            className="font-semibold text-xl block p-1 0 text-white  hover:text-amber-400 after:content-[''] after:block after:pb-1 after:border-b-2 after:border-amber-500 after:scale-x-0 after:transition-transform after:duration-500 after:linear hover:after:scale-x-100"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-xl block p-1 0 text-white  hover:text-amber-400 after:content-[''] after:block after:pb-1 after:border-b-2 after:border-amber-500 after:scale-x-0 after:transition-transform after:duration-500 after:linear hover:after:scale-x-100"
            href="/"
          >
            Leadherboard
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-xl block p-1 0 text-white  hover:text-amber-400 after:content-[''] after:block after:pb-1 after:border-b-2 after:border-amber-500 after:scale-x-0 after:transition-transform after:duration-500 after:linear hover:after:scale-x-100"
            href="/"
          >
            Profile
          </a>
        </li>

        {session?.user?.role === "admin" ? <li>
          <a
            className="font-semibold text-xl block p-1 0 text-white  hover:text-amber-400 after:content-[''] after:block after:pb-1 after:border-b-2 after:border-amber-500 after:scale-x-0 after:transition-transform after:duration-500 after:linear hover:after:scale-x-100"
            href="/dashboard"
          >
            Dashboard
          </a>
        </li>  : null}
        {session?.user?.role === "admin" ? <li>
          <a
            className="font-semibold text-xl block p-1 0 text-white  hover:text-amber-400 after:content-[''] after:block after:pb-1 after:border-b-2 after:border-amber-500 after:scale-x-0 after:transition-transform after:duration-500 after:linear hover:after:scale-x-100"
            href="/manage-game"
          >
            Manage Game
          </a>
        </li>  : null}
       
      </ul>

      <button
        onClick={() => setIsOpen(true)}
        className={ clsx("hidden rounded-full border-3 border-transparent w-12 h-12  lg:flex items-center justify-center  mb-1  hover:border-amber-500 overflow-hidden transition-all duration-200",session?.user?.image ?  "bg-transparent":"bg-white" ) }
      >
        <Image
          src={session?.user?.image || "/avatar.svg"}
          width={28}
          height={28}
          alt="avatar"
          className="object-cover object-center hidden  lg:block w-full h-full "
        />
      </button>

      {isOpen && (
        <div
          className="bg-white flex flex-col absolute top-3 right-15 h-17 py-2 items-start  rounded-sm "
          ref={inputRef}
        >
          <Link
            href={`/profile`}
            className="text-sm font-semibold top-0 flex p-1 items-center gap-1 hover:text-amber-500 "
            onClick={() => setIsOpen(false)}
          >
            <IoMdPerson /> Profile
          </Link>

        {session?  <Link
            href={`/signout`}
            className="text-sm font-semibold flex gap-1 items-center p-1 hover:text-amber-500 "
            onClick={() => setIsOpen(false)}
          >
            <IoEnterOutline /> Sign Out
          </Link> : <Link
            href={`/signin`}
            className="text-sm font-semibold flex gap-1 items-center p-1 hover:text-amber-500 "
            onClick={() => setIsOpen(false)}
          >
            <IoEnterOutline /> Sign in
          </Link> }

         
        </div>
      )}
    </div>
  );
};

export default Navlink;
