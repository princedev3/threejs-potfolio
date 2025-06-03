'use client'
import React, { useRef } from 'react'

 type item =  {
    review: string;
    imgPath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
}
const GlowCard = ({item,children,index}:{item:item,children:React.ReactNode,index:number}) => {
   
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const handleMouseMove = (index:number)=>(e: React.MouseEvent<HTMLDivElement>)=>{
        const card = cardRefs.current[index]
        if (!card) return;
        const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;
    card.style.setProperty("--start", `${angle + 60}`);
    }

  return (
    <div ref={(el) => {cardRefs.current[index] = el}} onMouseMove={handleMouseMove(index)} className='card z-0 card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column'>
         <div className="glow"></div>
         <div className="flex items-center gap-1 mb-4">
            {
                Array.from({length:5},(_,idx)=>(
                    <img src='/images/star.png' key={idx} alt='star'/>
                ))
            }
         </div>
         <div className="mb-5">
            <p className="">{item.review}</p>
         </div>
         {children}
    </div>
  )
}

export default GlowCard