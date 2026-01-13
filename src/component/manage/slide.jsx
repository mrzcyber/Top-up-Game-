"use client"
import Image from "next/image";
import { GoPencil } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { useState,useTransition } from "react";
import { RingLoader } from "react-spinners";
import {IoMdAdd} from "react-icons/io";
import {IoSend} from "react-icons/io5"
import {MdCancel} from "react-icons/md"
import { FiUpload } from 'react-icons/fi';
import { cancel,handlerimage } from "@/libs/hit-api";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";






const Slide =({sliders})=>{
    const [img, setimg] = useState(null);
    const [message, setmessage] = useState("");
    const [loading, setTransition] = useTransition();
    const [form,setform] = useState(false)
    const [del,setdel] = useState(null)
    const [edit,setedit] = useState(null)
    const [ibaner,setibaner] = useState(null)
    const [load,setload] = useState(false)
    const router = useRouter()

    const handlerdelete= async(id)=>{
      setload(true)
      try {
        const response = await fetch(`/api/upload/banner?id=${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const back = await response.json()
      setdel(null)

      }
       catch (error) {
        console.log(error)
      }
      finally{
        setload(false)
      }
      
    }
    

    const handleFileChange = (event) => {
        const file = event.target.files;
        if (file) {
            handlerimage({files:file,setTransition,setimg,setmessage})
            
        } else {
            setimg(null);
        }
    }

    const postbanner = async()=>{
      setload(true)

      try {
         const response = await fetch("/api/upload/banner",{
            method:"POST",
            body:JSON.stringify({file:img}),
            headers:{
                "Content-Type":"application/json"
            },
            
        })
        setimg(null)
        setform(false)

      } catch (error) {
        console.log(error)
      }
      finally{
        setload(false)
      }

       
    }

    const updatebanner = async()=>{
      setload(true)

      try {
        const response = await fetch(`/api/upload/banner`,{
        method:"PUT",
        body:JSON.stringify({id:edit,file:img,url:ibaner}),
      headers:{
        "Content-Type":"application/json"
      }
      })
      const back = await response.json()
      setimg(null)
      setform(false)
      setedit(null)
      } catch (error) {
        console.log(error)
      }
      finally{
        setload(false)
      } 
    }
    
    return(
        <div className="w-full flex flex-col justify-center items-center overflow-hidden ">
            {form ? (
                 
           img ?( <div className="h-[400px] w-[1200px] bg-gray-100 mb-10 flex flex-col justify-center items-center rounded-2xl    shadow-lg"> 
           <Image src={img} alt="test" width={1000} height={400} className="object-cover w-full h-full rounded-2xl"/>
           </div> )
           
           :
            (
              edit ? 
              
            <div className="h-[400px] w-[1200px] bg-gray-100 mb-10 flex flex-col justify-center items-center rounded-2xl border-2 border-dashed border-gray-400 p-8 shadow-lg">   

                  
                    <input
                        id="file-upload" 
                        type="file"
                        accept="image/*"
                        className="hidden" 
                        onChange={handleFileChange} // **Penting: Tambahkan event handler**
                    />

                  
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center p-6 bg-white border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-50 focus-within:ring-2 focus-within:ring-blue-500 transition duration-300 ease-in-out"
                    >

                        {loading ? (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RingLoader color="#f59e0b" size={100} />{" "}
                  </div>
                ) : null}

                
                        
                        <FiUpload className="h-10 w-10 mb-2" /> 

                        <span className="text-lg font-semibold">
                            {/* Teks label bisa berubah tergantung status */}
                            {img ? `File Terpilih: ${img}` : 'Pilih File Gambar'}
                        </span>
                        
                        {!img && (
                            <span className="text-sm text-gray-500 mt-1">testing brooo</span>
                        )}
                        
                    </label>
                    
                    
                    <p className="mt-4 text-sm text-gray-600">
                        **Tipe file yang didukung:** JPEG, PNG, GIF. **Maks:** 5MB.
                    </p>
                    <p className={`mt-2 text-md font-medium ${img ? 'text-green-600' : 'text-red-500'}`}>
                        {img ? 'Status: Berhasil memilih file.' : 'Status: Belum ada file dipilih.'}
                    </p>

                </div> 
              
              :


            <div className="h-[400px] w-[1200px] bg-gray-100 mb-10 flex flex-col justify-center items-center rounded-2xl border-2 border-dashed border-gray-400 p-8 shadow-lg">   

                  
                    <input
                        id="file-upload" 
                        type="file"
                        accept="image/*"
                        className="hidden" 
                        onChange={handleFileChange} // **Penting: Tambahkan event handler**
                    />

                  
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center p-6 bg-white border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-50 focus-within:ring-2 focus-within:ring-blue-500 transition duration-300 ease-in-out"
                    >

                        {loading ? (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RingLoader color="#f59e0b" size={100} />{" "}
                  </div>
                ) : null}

                
                        
                        <FiUpload className="h-10 w-10 mb-2" /> 

                        <span className="text-lg font-semibold">
                            {/* Teks label bisa berubah tergantung status */}
                            {img ? `File Terpilih: ${img}` : 'Pilih File Gambar'}
                        </span>
                        
                        {!img && (
                            <span className="text-sm text-gray-500 mt-1">atau tarik dan lepas di sini</span>
                        )}
                        
                    </label>
                    
                    
                    <p className="mt-4 text-sm text-gray-600">
                        **Tipe file yang didukung:** JPEG, PNG, GIF. **Maks:** 5MB.
                    </p>
                    <p className={`mt-2 text-md font-medium ${img ? 'text-green-600' : 'text-red-500'}`}>
                        {img ? 'Status: Berhasil memilih file.' : 'Status: Belum ada file dipilih.'}
                    </p>

                </div> 
           )
        )
             : 
               (  <div className="relative md:w-[1200px] h-[200px] md:h-[450px] rounded-xl overflow-hidden mb-10     border-1 border-gray-400/30 ">

      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        spaceBetween={50}
        centeredSlides={false}
        pagination={{ clickable: true }}
        navigation={true}

        className="w-full h-full relative "
      >

        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <Image
              src={slider.banner}
              alt="promo"
              fill
              className=" object-cover z-10 rounded-xl"
            />
            
            <div className="flex flex-row gap-3 text-amber-500  z-[10]  absolute top-3 left-2  items-end "
            data-swiper-no-swiping="true">
                            <button
                              className="block z-[100] "
                              onClick={(e) => (setedit(slider.id),setform(true),e.stopPropagation(),setibaner(slider.banner))}
                            >
                              <GoPencil size={35} />
                            </button>
                            <button
                              className="block z-[100] "
                              onClick={(e) => (setdel(slider.id), e.stopPropagation())}
                            >
                              <MdDelete size={35} />
                            </button>
                          </div>

          </SwiperSlide>
        ))}
      </Swiper>

           {del ? <div className="absolute flex flex-col justify-center items-center gap-5 z-[11] inset-0 w-full backdrop-blur-xl  ">
            <p className="text-4xl text-amber-500 font-bold">Do you want to delete this banner?</p>
            <div className="flex flex-row gap-5 ">
              <button 
              onClick={()=>(handlerdelete(del),router.refresh())}
              className=" px-6 text-xl font-bold text-amber-400 border-2 py-1.5 rounded-xl bg-main">Iya</button>
              <button
              onClick={()=>setdel(null)}
              className=" px-4 text-xl font-bold text-amber-400 border-2 py-1.5 rounded-xl bg-main">Tidak</button>
            </div>

              </div>
          :
          null} 


              {load && <div className="absolute flex flex-col justify-center items-center gap-5 z-[11] inset-0 w-full backdrop-blur-xl  ">
            <p className="text-4xl text-amber-500 font-bold">Sedang memperbarui data...</p>
        
              </div>
          }


    </div>
            )}
             
                            
             {img ?
             edit?
              <div className="flex w-[1200px] mb-5 bg-amber-500 rounded-2xl justify-center items-center">
                <button
                           onClick={()=>(setform(!form),updatebanner())}
                           className=" p-3 text-2xl w-full flex flex-row font-bold justify-center items-center ">
                        <IoSend size={30}/>Update
                        </button> 
                      
                        
             </div>
             :
             <div className="flex w-[1200px] mb-5 bg-amber-500 rounded-2xl justify-center items-center">
                <button
                           onClick={()=>(setform(!form),postbanner())}
                           className=" p-3 text-2xl w-full flex flex-row font-bold justify-center items-center ">
                        <IoSend size={30}/>Upload
                        </button> 
                      
                        
             </div> :null }
                         

                   {form? <div className="flex  w-[1200px] bg-amber-500 rounded-2xl justify-center items-center">
                            <button
                           onClick={()=>(setform(null),cancel(img,setimg),setedit(null))}
                           className=" p-3 text-2xl flex flex-row w-full font-bold justify-center ">
                         <MdCancel size={30}/>Cancel
                        </button> 
                        </div>  
                        :
                         <div className="flex w-[1200px] bg-amber-500 rounded-2xl justify-center items-center ">
                        <button
                           onClick={()=>setform(!form)}
                           className=" p-3 text-2xl w-full flex flex-row font-bold justify-center items-center ">
                        <IoMdAdd size={30}/> Add Promotion 
                        </button>  
                        </div>
                      }

                   
            
                   
                              

        </div>
    )
}
export default Slide