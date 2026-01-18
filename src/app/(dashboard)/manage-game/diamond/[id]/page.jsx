import Diamond from "@/component/manage/diamond";
import { getdiamond } from "@/libs/hit-api";


const Page = async ({params})=>{
    const {id} = await params
    const diamond = await getdiamond(id)
      return(
        <div className="pt-22">
              <p className="text-3xl font-bold text-white w-full pl-2 pb-3 ">  Produk</p> 
            <div>
            <Diamond id={id} diamond={diamond}/>
       </div>
        </div>
        
      )
    
}

export default Page;