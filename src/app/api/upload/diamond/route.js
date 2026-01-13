import { NextResponse } from "next/server"
import  {prisma} from "../../../../../lib/prisma"

export const POST = async(req)=>{
const {product,price,gameId} = await req.json()
const price2 = parseInt(price)
const gameId2 = parseInt(gameId)

const newproduct = await prisma.Pricelist.create({
    data:{
        product:product,
        price:price2,
        gameId:gameId2
    }

})
return NextResponse.json({status:200,newproduct})

}

export const GET = async (req)=>{
    const {searchParams} =  new URL(req.url)
    const aid = searchParams.get("id")
    const id = parseInt(aid)


    try {
        const diamond = await prisma.Pricelist.findMany({
        where:{
            gameId:id
        }
    })
    return NextResponse.json({status:200,diamond})
    } catch (error) {
        console.log(error)
    }

}

export const DELETE = async(req)=>{
    const {searchParams} = new URL(req.url)
    const aid = searchParams.get("id")
    const id = parseInt(aid)
    try {
        const deldiamond = await prisma.Pricelist.delete({
            where:{
                id:id
            }
        })
        return NextResponse.json({status:200,deldiamond})
    }
     catch (error) {
      console.log(error)  
    }
}

export const PUT = async(req)=>{
    const {id,product,price} = await req.json()

    try {
        const updiamond = await prisma.Pricelist.update({
            where:{
                id:parseInt(id)
            },
            data:{
                product:product,
                price:parseInt(price)
            }
        })
        return NextResponse.json({status:200,updiamond})
    } 
    catch (error) {
    console.log(error)
    
    }
}