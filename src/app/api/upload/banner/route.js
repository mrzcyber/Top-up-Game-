import { NextResponse } from "next/server"
import  {prisma} from "../../../../../lib/prisma"
import {del} from "@vercel/blob"



export const POST = async (req)=>{
   const {file} = await req.json()
    
     const newbaner = await prisma.Banner.create({
    data:{
        banner:file
    }
   })
   return NextResponse.json({status:200,newbaner})
   

}

export const GET = async (req)=>{
    const banner = await prisma.Banner.findMany()
    return NextResponse.json({status:200,banner})
}

export const DELETE = async (req)=>{
const {searchParams} = new URL(req.url)
const aid = searchParams.get(`id`)
const id = parseInt(aid)

if(!id) return NextResponse.json({message:"id tidak ditemukan",status:400})

    const deletebaner = await prisma.Banner.delete({
        where:{
            id:id
        }
    })
const blob = await del(deletebaner.banner)
return NextResponse.json({status:200,deletebaner,message:"berhasil dihapus"})

 }


 export const PUT = async (req)=>{
    const {id,file,url} = await req.json()

    const updatebaner = await prisma.Banner.update({
        where:{
            id:id
        },
        data:{
            banner:file
        }
    })
    const blob = await del(url)
    return NextResponse.json({status:200,updatebaner})
 

 }