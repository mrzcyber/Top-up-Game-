import {GiDiamondTrophy} from "react-icons/gi"

const data = [
  {"nama": "Rudi Hartono", "transaksi": 99900},
  {"nama": "Budi Santoso", "transaksi": 99800},
  {"nama": "Hadi Prasetyo", "transaksi": 92700},
  {"nama": "Lina Marlina", "transaksi": 88100},
  {"nama": "Dian Saputra", "transaksi": 82000},
  {"nama": "Kiki Amalia", "transaksi": 74200},
  {"nama": "Tomi Kurniawan", "transaksi": 71600},
  {"nama": "Farhan Nugraha", "transaksi": 65400},
  {"nama": "Qori Maulida", "transaksi": 62400},
  {"nama": "Indra Wijaya", "transaksi": 58300},
  {"nama": "Nando Firmansyah", "transaksi": 55600},
  {"nama": "Putri Ayuningtyas", "transaksi": 47800},
  {"nama": "Andi Pratama", "transaksi": 45200},
  {"nama": "Mira Anggraini", "transaksi": 36400},
  {"nama": "Sinta Wulandari", "transaksi": 33100},
  {"nama": "Citra Lestari", "transaksi": 31700},
  {"nama": "Gina Rahmawati", "transaksi": 23800},
  {"nama": "Oki Pradana", "transaksi": 22900},
  {"nama": "Eka Ramadhani", "transaksi": 17600},
  {"nama": "reza", "transaksi": 12000},
  {"nama": "Joko Setiawan", "transaksi": 10500}
]




const Page = ()=>{
    return(
        <div className="w-full  pt-22 pb-10 flex flex-col items-center justify-center "> 
        <p><GiDiamondTrophy size={70} className="text-amber-500"/></p>
        <p className="text-white md:text-5xl font-bold">Leadherboard</p>
        <p className="text-white md:text-xl font-semibold md:w-[800px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident vitae assumenda neque nulla perferendis unde aut saepe pariatur distinctio minus, accusamus nostrum! Labore cumque dolores odio quo suscipit eos!</p>
        <div className="border-t-2 border-amber-500 md:w-[1000px] w-[400px] flex flex-col gap-4  justify-center items-center mt-5 pt-5 ">
            {data.map((item,index)=>(
                <div key={index} className="text-white md:w-[800px] w-[300px] flex flex-row justify-between p-3 md:px-10  bg-second rounded-xl shadow-xl ">

                    <p className="md:text-2xl font-semibold ">{index <= 2 ? `#${index+1}`:`${index+1}`}.{item.nama}</p>
                    <p className="md:text-2xl font-semibold ">Rp{item.transaksi}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Page;