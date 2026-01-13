import {prisma} from "lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req){
const {searchParams} = new URL(req.url)
const mail = searchParams.get("mail")
if (mail === undefined) return 

try {
    const iduser = await prisma.User.findUnique({
        where:{
            email:mail
        },
        select:{
            id:true
        }
    })
return NextResponse.json({status:200,iduser})
} catch (error) {
    console.log(error)
}

}