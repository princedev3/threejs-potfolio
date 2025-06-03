"use client"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ActiveType, useActiveSection } from ".";



export default function useSectionInview(setionName:ActiveType,threshold=0.5){

    const {ref,inView}= useInView({
        threshold
    })
    const{active,setActive,timeOfLastClick,setTimeOfLastClick}=  useActiveSection()

    useEffect(()=>{
        if(inView && Date.now()-timeOfLastClick>1000 ){
                 setActive(setionName)
        }
    },[ref,inView,timeOfLastClick,setTimeOfLastClick,setActive,active])

    return {
        ref,
    }
}

