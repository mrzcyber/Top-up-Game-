"use client";

import { useRouter } from "next/navigation";
import { GoPencil } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { PiGameControllerFill } from "react-icons/pi";
import { GoStar } from "react-icons/go";
import { RingLoader } from "react-spinners";
import { IoMdCloseCircle } from "react-icons/io";
import { useState, useEffect, useRef, useTransition,} from "react";
import clsx from "clsx";
import { cancel, upload,handlerimage, handlerdelete, update,getgame  } from "@/libs/hit-api";



const Gameset = ({datag}) => {
  const [idgame,setidgame] = useState(null)
  const [game, setgame] = useState(null);
  const [delt,setdelt] = useState("")
  const [message, setmessage] = useState("");
  const [loading, setTransition] = useTransition();
  const [img, setimg] = useState(null);
  const ref = useRef();
  const ref2 = useRef()
  const prev  = useRef()
  const router = useRouter();
  let trui = true


  

const getid = async (id)=>{
   const response = await fetch(`/api/upload?id=${id}`,{
      method:"GET"      
  })
  const games = await response.json()
  
  setidgame(games.game)
 
}




  useEffect(() => {
    if (game) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [game]);

  
  

  return (
    <div
      className={clsx(
        " w-full flex flex-col items-center justify-center  pb-10 bg-second",
        game ? "blur-none" : "blur-none"
      )}
    >
     


      <div className="w-[1200px]">
        <div className="pb-5 px-3">
          <p className="text-2xl font-bold text-white flex items-center flex-row gap-2">
            {" "}
            <PiGameControllerFill /> All Game
          </p>
          <p className="font-semibold text-lg text-white/80">
            Explore Our Favorite Game
          </p>
        </div>

        <div className="grid grid-cols-2 md:gap-6  md:grid-cols-3   ">
          {datag.map((games) => (
            <div className="relative" key={games.id}>
              <Link href={`/manage-game/diamond/${games.id}`}>
                <div className="  h-[4.5rem]  md:h-28 bg-black rounded-2xl box-border border-3 cursor-pointer border-transparent   hover:border-amber-600">
                  <div className="flex py-3  ">
                    <div className=" rounded-xl w-13 h-11 md:w-24 md:h-20 border-2 border-amber-50 mx-2   overflow-hidden ">
                      <Image
                        src={games.image}
                        width={100}
                        height={80}
                        alt="produk"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className=" text-sm md:text-xl font-semibold text-white  truncate  ">
                        {games.title}
                      </p>
                      <p className="text-white text-sm  ">{games.developer}</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-row gap-3 text-white     absolute bottom-1 right-2  items-end ml-10">
                <button
                  className="block "
                  onClick={(e) => (getid(games.id), e.stopPropagation(), setgame("update"),router.refresh())}
                >
                  <GoPencil size={26} />
                </button>
                <button
                  className="block  "
                  onClick={(e) => (setdelt(games.id), e.stopPropagation(),router.refresh())}
                >
                  <MdDelete size={26} />
                </button>
                <button
                  className="block  "
                  onClick={(e) => (update({id:games.id,pinned:!games.pinned}), e.stopPropagation(),router.refresh())}
                >
                  <GoStar
                    size={26}
                    className={clsx( games.pinned ? "text-amber-500":"text-white")}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full mt-5 ">
          <button
          onClick={()=>setgame("add")}
          className="text-white font-semibold text-xl shadow-md shadow-gray-500  px-10 py-5 rounded-2xl bg-black border-4 border-transparent hover:border-gray-500">
            Add Game{" "}
          </button>
        </div>
      </div>

      {game === "add" ? (
        <div className="fixed z-50 inset-0 m-auto w-full h-screen border-2  flex justify-center items-center border-amber-500 bg-main/50 backdrop-blur-md text-white ">
          <div className="bg-second rounded-lg relative">
            <div className="text-gray-600   w-full flex justify-end p-3" >
              <button
                className="cursor-pointer hover:text-gray-400"
                onClick={() =>(cancel(img,setimg,setgame))}
              >
                {" "}
                <IoMdCloseCircle size={30}  />
              </button>
            </div>
            <div className="flex flex-row m-10 ">
              <div className="w-62 h-80 border-2 rounded-2xl overflow-hidden">
                <Image
                  src={img ? img : `/Gojo.jpeg`}
                  width={300}
                  height={300}
                  alt="game"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <form className="flex flex-col gap-2 ml-4 ">
                <input
                  type="text"
                  ref={ref}
                  placeholder="Nama Game"
                  className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600 "
                />
                <input
                  type="text"
                  ref={ref2}
                  placeholder="Devoloper"
                  className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600"
                />

                {loading ? (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RingLoader color="#f59e0b" size={100} />{" "}
                  </div>
                ) : null}
                <input
                  type="file"
                  accept="image/*"
                  ref={prev}
                  onChange={()=>{handlerimage({files:prev.current.files,setTransition,setimg,setmessage})}}
                  className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600"
                />
                <button
                  type="submit"
                  placeholder="masukan gambar"
                  className="p-2 cursor-pointer rounded-3xl bg-gray-500 "
                  onClick={()=>(upload({img,game2:ref.current.value,developer:ref2.current.value}),
                                getgame(),router.refresh())}
                 
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      {idgame? (
        <div className="fixed z-50 inset-0 m-auto w-full h-screen border-2  flex justify-center items-center border-amber-500 bg-main/50 backdrop-blur-md text-white ">
          <div className="bg-second rounded-lg relative">
            <div className="text-gray-600   w-full flex justify-end p-3" >
              <button
                className="cursor-pointer hover:text-gray-400"
                onClick={() =>(cancel(img,setimg,setgame,setidgame(null)))}
              >
                {" "}
                <IoMdCloseCircle size={30}  />
              </button>
            </div>
            <div className="flex flex-row m-10 ">
              <div className="w-62 h-80 border-2 rounded-2xl overflow-hidden">
                <Image
                  src={img? img:idgame.image}
                  width={300}
                  height={300}
                  alt="game"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <form className="flex flex-col gap-2 ml-4 ">
                <input
                  type="text"
                  ref={ref}
                  defaultValue={idgame.title}
                  placeholder="Nama Game"
                  className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600 "
                />
                <input
                  type="text"
                  ref={ref2}
                  placeholder="Devoloper"
                  defaultValue={idgame.developer}
                  className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600"
                />

                {loading ? (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RingLoader color="#f59e0b" size={100} />{" "}
                  </div>
                ) : null}
                <input
                  type="file"
                  accept="image/*"
                  ref={prev}
                  onChange={()=>{ handlerimage({files:prev.current.files,setTransition,setimg,setmessage})}}
                  className="border-2 border-amber-500/80 p-2 rounded-xl focus:outline-none focus:border-amber-500 hover:border-gray-600"
                />
                <button
                  type="submit"
                  placeholder="masukan gambar"
                  className="p-2 cursor-pointer rounded-3xl bg-gray-500 "
                  onClick={()=>(update({id:idgame.id,file:img,game2:ref.current.value,developer:ref2.current.value,img:idgame.image}),
                                getgame(),router.refresh())}
                 
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {delt ? (
        <div className="fixed z-50 inset-0 m-auto w-full h-screen border-2  flex justify-center items-center border-amber-500 bg-main/50 backdrop-blur-md text-white ">
          <div className="rounded-2xl p-8 bg-second">
            <p className="text-4xl font-bold ">
              Apakah Kamu Yakin ingin menghapus game ini?
            </p>
            <div className="flex flex-row gap-4 justify-center items-center mt-5">
              <button
                onClick={async() =>{ const back = await handlerdelete(delt);
                  setdelt("")
                  getgame()
                  alert("produk berhasil dihapus")
                }}
                className="py-2 px-9 text-lg font-semibold rounded-2xl border-2 border-amber-500 bg-main hover:bg-gray-500"
              >
                Ya
              </button>
              <button
                onClick={() =>(setdelt(""))}
                className="py-2 px-6 text-lg font-semibold rounded-2xl bg-main border-2 border-amber-500 hover:bg-gray-500"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
  
};

export default Gameset;