import midtransClient from "midtrans-client"
import { NextResponse } from "next/server";
import { prisma } from "lib/prisma"

const midtrans = new midtransClient.CoreApi({
    isProduction: false,
    serverKey: process.env.SECRET,
    clientKey: process.env.NEXT_PUBLIC_CLIENT,
})

export async function POST(req) {
    const {trakId,product,price,payment,gameId,titleGame,phone} = await req.json()

    if (!gameId || !product || !price || !payment || !titleGame) {
  return res.status(400).json({
    message: "Data belum lengkap"
  })
}

function generateInvoice() {
const date = new Date();
const y = date.getFullYear();
const m = String(date.getMonth() + 1).padStart(2, '0');
const d = String(date.getDate()).padStart(2, '0');

const rand = Math.floor(Math.random()*1000)
return `RZT${y}${m}${d}${rand}`;

}


 const createData = {}

if (trakId !== undefined) createData.trakId = trakId
if (product !== undefined) createData.product = product
if (price !== undefined) createData.price = price
if (payment !== undefined) createData.paymentMethod = payment
if (gameId !== undefined) createData.gameId = gameId
if (titleGame !== undefined) createData.titleGame = titleGame
if (phone !== undefined) createData.phone = phone


    let parameter = {
    "payment_type": payment,
    "transaction_details": {
        "gross_amount": price,
        "order_id": generateInvoice(),
    },
    "gopay": {
        "enable_callback": true,                // optional
        "callback_url": "someapps://callback"   // optional
    }
};
    try {
        const charge = await midtrans.charge(parameter)
        const upTransaktion = await prisma.Transaktion.create({
            data:{
                ...createData,
                invoice:charge.order_id,
                url:charge.actions[1].url

            }
        })
        return NextResponse.json({charge})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({error})
    }
    
}