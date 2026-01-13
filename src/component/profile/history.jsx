


const History = ()=>{

    const months = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

    const now = new Date();
    const jam = now.getHours();
    const menit = now.getMinutes();
   const tahun = now.getFullYear();
   const bulan = months[now.getMonth()];
   const tanggal = now.getDate();



    return(
        <div className="w-[1200px] rounded-xl border border-gray-500 overflow-hidden mb-5 bg-second">
            <div className="w-full flex flex-row">
            <div className="flex flex-col justify-around      text-white w-full ">
            <h1 className="bg-main p-2 pt-5 text-xl font-semibold uppercase">invoice</h1>
            <div className="px-2 text-lg font-semibold text-gray-400 pb-3">
                <p>#RS34245</p>
                
             
            </div>
            </div>
            <div className="flex flex-col justify-around      text-white w-full ">
            <h1 className="bg-main p-2 pt-5 text-xl font-semibold uppercase">date</h1>
            <div className="px-2 text-lg font-semibold text-gray-400 pb-3">
                <p>{tanggal} {bulan} {tahun},{jam}:{menit}</p>
                
               
            </div>
            </div>
            <div className="flex flex-col justify-around      text-white w-full ">
            <h1 className="bg-main p-2 pt-5 text-xl font-semibold uppercase">amount</h1>
            <div className="px-2 text-lg font-semibold text-gray-400 pb-3">
                <p>Rp28.000</p>
                
            </div>
            </div>
            <div className="flex flex-col justify-around      text-white w-full ">
            <h1 className="bg-main p-2 pt-5 text-xl font-semibold uppercase">status</h1>
            <div className="px-2 text-lg font-semibold text-gray-400 pb-3">
                <p>Succes</p>
                
            </div>
            </div>
            <div className="flex flex-col justify-around      text-white w-full ">
            <h1 className="bg-main p-2 pt-5 text-xl font-semibold uppercase">actions</h1>
            <div className="px-2 text-lg font-semibold text-gray-400 pb-3">
                <p>See moree..</p>
                
            </div>
            </div>
       
      
            
           
          
         
      

            </div>

        </div>
    )
}

export default History;