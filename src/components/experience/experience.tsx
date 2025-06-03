'use client'
import { expCards } from '@/constant'
import React from 'react'
import GlowCard from '../glow-card'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Experience = () => {
     useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card as HTMLElement, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
     
      gsap.from(text as HTMLElement, {
        opacity: 0,
        xPercent: 0,
       
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text as HTMLElement,
          start: "top 60%",
        },
      });
    }, "<"); 
  }, []);
  useGSAP(() => {
  ScrollTrigger.refresh();
}, []);


  return (
    <div  id='experience' className='px-6 md:px-20 py-16 scroll-mt-28'>
        <h1 className="text-3xl capitalize text-white-50 grid justify-center w-fit rounded-2xl py-3 px-4 font-semibold mx-auto bg-black-50">professional experience</h1>
        <div className="mt-12 relative">
             <div className="relative  xl:space-y-32 space-y-10">
            {
                expCards.map((item,ind)=>(
                    <div key={ind} className='exp-card-wrapper'>
                        <div className="xl:w-2/6">
                           <GlowCard item={item} index={ind} >
                           <div className="max-h-[100px] flex items-center ">
                            <img src={item.imgPath} alt={item.title}  width={item.title==="FullStack Developer"? 40:100} height={20} />
                            <span className="ml-3 text-2xl text-[#17CF97]">{item.title==="FullStack Developer"? "Lolly":""} </span>
                           </div>
                           </GlowCard>
                        </div>
                        <div className="xl:w-4/6">
                            <div className="flex items-start">
                                <div className="timeline-wrapper">
                                    <div className='timeline'/>
                                    <div className='gradient-line w-1 h-full'/>

                                </div>
                                 <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                     <div className="timeline-logo">
                                     <img src={item.logoPath} alt="logo" />
                                 </div>
                                    <div>
                        <h1 className="font-semibold text-3xl capitalize">{item.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{item.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {item.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Experience