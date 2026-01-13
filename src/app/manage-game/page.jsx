
import Gameset from "@/component/manage/gameset";
import { getbanner, getgame } from "@/libs/hit-api";
import Slide from "@/component/manage/slide";




const Page = async()=>{
  const datag = await getgame()
  const sliders = await getbanner()


  return(
    <div className="pt-22 bg-second min-h-screen">
      <p className="text-3xl font-bold pl-5 text-white "> Manage Game</p>
     <div  > 
          <Slide sliders={sliders}/>
      </div>

      <div >
        <Gameset datag={datag}/>
      </div>
      
    </div>
  )
}

export default Page;


