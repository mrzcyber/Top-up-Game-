`use server`
import { prisma } from "lib/prisma"
import { NextResponse } from "next/server"
import {del} from "@vercel/blob"
import { revalidatePath } from "next/cache"


export const DELETE = async (req)=>{
    const {searchParams} = new URL(req.url)
    const aid = searchParams.get(`id`)
    const id = parseInt(aid)

    if(!id) return NextResponse.json({message:"id tidak ditemukan",status:400})



    const deletegame = await prisma.Game.delete({
        where:{
            id:id
        }
    })
    
    const blob = await del(deletegame.image)
    return NextResponse.json({status:200,deletegame,message:"berhasil dihapus"})


    
}

export const PUT = async (req)=>{
    const {id,file,game,developer,pinned} = await req.json()
   
    let updatedata = {}

    if(file) updatedata.image = file
    if(game) updatedata.title = game
    if(developer) updatedata.developer = developer
    if(pinned !== undefined) updatedata.pinned = pinned

    const newgame = await prisma.Game.update({
        where:{id:id},
        data:updatedata
   
    })
    revalidatePath("/manage-game")
    return NextResponse.json({status:200,newgame})
    
}

export const GET = async (req)=>{
    const {searchParams} = new URL(req.url)
    const query = searchParams.get("q")
    

    const games = await prisma.Game.findMany({
        where:{
            title:{
                startsWith:query,
                mode:"insensitive"
            }
        },
        select:{
            id:true,
            title:true,   
        },
        take:8
    })
    if(games.length === 0) return NextResponse.json({status:404,message:"data tidak ditemukan",games})
    return NextResponse.json({status:200,games})

}