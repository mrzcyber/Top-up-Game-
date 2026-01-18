import Head from "@/component/product/head";
import Product from "@/component/product/product";
import { getdiamond, getgame,getid } from "@/libs/hit-api";
import Image from "next/image";
import { auth } from "@/auth";

const Page = async ({ params }) => {
  const { id } = await params;
  const data = await getgame(id)
  const dm = await getdiamond(id)
  const session = await auth()
  const userid = await getid(session?.user?.email)
  
  


  return (
    <div className="text-white  pt-22 flex flex-col  bg-main relative ">
      <div className="flex flex-col justify-center items-center gap-4  absolute top-96 left-2/5 z-99 animate-[intro2_4s_forwards]">
        <div className="w-48 h-52 border-3 border-amber-500 rounded-xl overflow-hidden   ">
          <Image
            src={data.image}
            width={350}
            height={350}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-3xl font-bold">{data.title} </p>
      </div>
      <div className="w-full flex justify-center  animate-[intro_4s_forwards] ">
        <div className="  flex justify-center w-full lg:mx-10 lg:scale-y-100 scale-y-115  rounded-2xl  transition-all overflow-hidden  lg:mb-0 ">
          <Image
            src={`/logoup.webp`}
            width={1500}
            height={250}
            alt="asset"
            priority
            className=" w-full h-full lg:scale-100 scale-110 object-cover"
          />
        </div>
      </div>

      <div className="w-full flex z-20 justify-center md:pt-[10rem] lg:pt-[16rem] pt-[6rem] ">
        <Head data={data}/>
      </div>
      <div className="w-full flex justify-center  ">
        <Product dm={dm} userid={userid} data={data.title}/>
      </div>
    </div>
  );
};

export default Page;
