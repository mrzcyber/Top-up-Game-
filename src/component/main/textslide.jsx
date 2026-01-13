const TextSlide = () => {
  return (
    <div
      className="overflow-hidden py-4 bg-main/90 relative  w-[1200px]
        before:absolute before:top-0 before:w-15 before:h-full before:content-[''] before:z-10 before:left-0 before:bg-linear-to-l before:from-[] before:to-main
            after:absolute after:top-0 after:w-15 after:h-full after:content-[''] after:z-10 after:right-0 after:bg-linear-to-r after:from-[] after:to-main
          
   " >
      <div className=" flex w-[200%] animate-[slide_30s_infinite_linear] hover:[animation-play-state:paused]">
        <div className="flex items-center  justify-around max-w-full bg-amber-500 text-white">
          <p className="mx-16  p-3 text-[20px] text-xl font-bold uppercase whitespace-nowrap">
            
            Ingat Top Up Game?
          </p>
          <p className="md:mx-16  p-3 text-[20px] text-xl font-bold uppercase whitespace-nowrap">
            Ingat Reza Top up
          </p>
          <p className="md:mx-16  p-3 text-[20px] text-xl font-bold uppercase whitespace-nowrap">
            Ingat Top Up Game?
          </p>
            <p className="md:mx-16  p-3 text-[20px] text-xl font-bold uppercase whitespace-nowrap">
            Ingat Reza Top up
          </p>
     
        
          
        
      
       
        
       
        </div>
        <div
          className="flex items-center justify-around max-w-full text-white bg-amber-500"
          aria-hidden="true"
        >
          <p className="md:mx-16  p-3  text-[20px] text-xl font-bold uppercase whitespace-nowrap ">
            Ingat Reza Top Up
          </p>
          <p className="md:mx-16  p-3  text-[20px] text-xl font-bold whitespace-nowrap uppercase">
            Ingat Top Up Game?
          </p>
          <p className="md:mx-16  p-3  text-[20px] text-xl font-bold whitespace-nowrap uppercase">
            Ingat Reza Top Up
          </p>
           <p className="md:mx-16  p-3  text-[20px] text-xl font-bold whitespace-nowrap uppercase">
            Ingat Top Up Game?
          </p>
     
        
       
         
         
        </div>
      </div>
    </div>
  );
};

export default TextSlide;
