import {put,del} from "@vercel/blob"
import { NextResponse } from "next/server"
import {prisma} from "../../../../lib/prisma"
import path from "path"


export const PUT = async (req) => {
const form = await req.formData()
const file = form.get("file") 

const name = path.parse(file.name).name;
const ext = path.parse(file.name).ext;
const fullname = `${name}-${Date.now()}${ext}`;



if (file.size === 0 || file.size === undefined){
    return NextResponse.json({message:"Gambar tidak terdeteksi",status:400})
}
if(file.size > 4000000){
    return NextResponse.json({message:"ukuran gambar tidak boleh lebih dari 4MB",status:400})
}

if(!file.type.startsWith("image/")){
return NextResponse.json({message:"hanya boleh gambar",status:400})
}

const blob = await put(fullname,file,{
    access:"public",
    multipart:true
})
return NextResponse.json(blob)
}

export const POST = async (req)=>{
const {file,game,developer} = await req.json()
   

    const newgame = await prisma.Game.create({
        data:{
            title:game,
            image:file,
            developer:developer

        }
    })
    return NextResponse.json({status:200,newgame})

}

export const DELETE = async (req)=>{
    const {searchParams} = new URL(req.url)
    const fileUrl = searchParams.get('url')

    if(!fileUrl) return NextResponse.json({message:"url tidak ditemukan",status:400})
        
        try {
             const blob = await del(fileUrl)
            return NextResponse.json({message:"berhasil dihapus",status:200})
        } 
        catch (error) {
            console.log(error)
        }


}

export const GET = async (req)=>{
    const {searchParams} = new URL(req.url)
    const ids = searchParams.get("id")
    const id = parseInt(ids)


    if(id){
        const game = await prisma.Game.findUnique({
            where:{
                id:id
            }
        })
        return NextResponse.json({status:200,game,id:id})
    }

    const game = await prisma.Game.findMany({
        orderBy:{
            pinned:"desc"
        }
    })
    return NextResponse.json({status:200,game})

}



