"use client"

import { useInView } from "react-intersection-observer"

export  function FadeInBox({children}){
    const {ref,inView}=useInView({
        triggerOnce : true,
        threshold:0.1
    })

    return(
        <div 
        ref={ref}
        className={`opacity-0 ${inView ? 'animate-[fadein_1s_linear_forwards]' : ''}`}>
            {children}
        </div>
    )
}