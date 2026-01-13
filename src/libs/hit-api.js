
export const dynamic = 'force-dynamic'


export const cancel = async (img,setimg,setgame)=>{
    if(!img){
      setgame?.("")
       
    } 

    const response = await fetch(`/api/upload?url=${img}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
        
    })
    setimg?.(null)
    setgame?.("")
    
    
      
}


    export const upload = async({img,game2,developer})=>{
      
      const response = await fetch("/api/upload",{
          method:"POST",
          body:JSON.stringify({
              file:img,
              game:game2,
              developer:developer
          }),
          headers:{
              "Content-Type":"application/json"
          }
          
      })
      .then((res)=>res.json())
      .then((data)=>{
          console.log("result",data)
          })
      .catch(err=> console.log(err))
    }
  


export const handlerimage = ( {files,setTransition,setimg,setmessage}) => {
    if (!files) return null;
    const file = files[0]

    const formData = new FormData();
    formData.set("file", file);
    setTransition(async()=>{

       try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        
        const data = await response.json();
        if (response.status !== 200) {
          setmessage(data.message);
          
        }
        setimg(data.url)
        
      } catch (error) {
        console.log(error);
      }
    })
     
  };

 export const handlerdelete = async (id)=>{
    const response = await fetch(`/api/upload/games?id=${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
        
    })
    const ress = await response.json()
    return ress
  }

  export const update = async({id,file,game2,developer,img,pinned})=>{

    const response = await fetch("/api/upload/games",{
      cache:"no-store",
        method:"PUT",
        body:JSON.stringify({
            id:id,
            file:file,
            game:game2,
            developer:developer,
            pinned:pinned
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    const ress = await response.json()
    if(ress.status === 200){
      const response = await fetch(`/api/upload?url=${img}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
      })
    }
    return ress
     

  }

  

   export const getgame = async (id)=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload?id=${id}`,{
      method:"GET"      
  })
  const games = await response.json()
  
  return games.game
 
}

export const getbanner = async ()=>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload/banner`,{
    method:"GET"      
})
const banner = await response.json()

return banner.banner


}
export const getdiamond = async(id) =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload/diamond?id=${id}`,{
    method:"GET"      
})
const diamond = await response.json()

return diamond.diamond

}

export const deldiamond = async(id)=>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload/diamond?id=${id}`,{
    method:"DELETE"
  })
  const ress = await response.json()
  return ress
}

export const updiamond = async(id,Product,price)=>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload/diamond`,{
    method:"PUT",
    body:JSON.stringify({
      id:id,
      product:Product,
      price:price
    }),
    headers:{
      "Content-Type":"application/json"
    }
  })
  const ress = await response.json()
  return ress
}

export const getid = async (mail)=>{
  if(!mail)return 
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user?mail=${mail}`,{
    method:"GET"
  })
  const iduser = await response.json()
  return iduser.iduser.id

}
