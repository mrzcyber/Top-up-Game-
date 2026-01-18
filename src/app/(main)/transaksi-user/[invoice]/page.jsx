import Image from "next/image";


const Transaksi = {id:1,payment:"gopay",name:"rezaaa",email:"mrzvyber@gmail.com",invoice:"#RS34245",status:"berhasil", produk:"1000 Diamonds",game:"mobile legends",phone:12123121,gameid:"12345678",price:230000}
    


const Page = ()=>{
    return(
        <div className="w-full h-screen flex justify-center flex-col gap-5 items-center">
            <p className="text-white text-3xl font-bold">User Transaktion</p>

            <div className="bg-main p-10 rounded-2xl shadow-sm flex flex-row justify-center items-start  shadow-gray-400">
                <div className="flex flex-col justify-center items-center text-white ">
                    <div>
                        <p className="text-white text-xl font-semibold">User Detail</p>
                          <div className="text-white text-lg   font-stretch-125% pt-3 ">
                    <p className="flex flex-row justify-between items-center "> <span>Name  </span> {Transaksi.name}</p>
                    <p className="flex flex-row pt-1 justify-between items-center gap-5"> <span>Gmail  </span> {Transaksi.email}</p>
                    <p className="flex flex-row pt-1 justify-between items-center gap-5"> <span>Phone  </span> {Transaksi.phone}</p>

                    <p className="flex flex-row pt-1 justify-between items-center "> <span>Invoice  </span> {Transaksi.invoice}</p>
                    <p className="flex flex-row pt-1 justify-between items-center "> <span>Payment  </span> {Transaksi.payment}</p>
                    <p className="flex flex-row pt-1 justify-between items-center "> <span>Total  </span> Rp{Transaksi.price}</p>
                    <p className="flex flex-row pt-1 justify-between items-center "> <span>Status  </span> {Transaksi.status}</p>

                
                   
                    
                </div>
                    </div>
                   


                </div>

                <div className="w-full px-10 flex flex-col justify-center  text-white">
                    <p className="text-white text-xl font-semibold">Game Detail</p>
                    
                        <div className=" font-stretch-125% pt-3 text-white text-lg  " >
                            <p className="flex flex-row  justify-between items-center gap-x-10"> <span>Game</span> {Transaksi.game}</p>
                            <p className="flex flex-row pt-1 justify-between items-center"> <span>Produk</span> {Transaksi.produk}</p>
                            <p className="flex flex-row pt-1 justify-between items-center"> <span>IDgame</span> {Transaksi.gameid}</p>
                            
                        </div>
                    
                </div>


            </div>

        </div>
    )
}

export default Page; 