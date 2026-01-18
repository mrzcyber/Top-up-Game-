

import Image from "next/image";
import Slider from "@/component/main/slider";
import Tranding from "@/component/main/tranding";
import TextSlide from "@/component/main/textslide";
import Core from "@/component/main/core";
import { getbanner, getgame } from "@/libs/hit-api";



export default async function Home () {

  const data = await getgame()
  const sliders = await getbanner()
  

  return (
    <div className="bg-main">
      <div className=" relative w-full flex justify-center overflow-hidden md:pt-30 pt-20 bg-black">
       
        <Slider sliders={sliders}/>
      </div>

      <div className="  rounded-t-xl bg-cover flex justify-center  w-full py-3">
        <Tranding />
      </div>

         <div className="w-full flex justify-center ">
                <TextSlide/>
            </div>

            <div className="w-full flex justify-center ">
              <Core data={data}/>
            </div>

    </div>
  );
}
