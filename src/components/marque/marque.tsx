"use client"
import React from 'react'

const Marque = () => {
  const skillList = [
    "python","javascript",'tailwind css','three js','gsap','nextjs','react','typescript','scrum','jira','slack','figma','git','prisma orm','nodejs','vercel'
  ]
  return (
    <div  id='skills' className='md:my-10 relative scroll-mt-28'>
         <h1 className="text-3xl mt-10 capitalize  text-white-50 grid justify-center w-fit rounded-2xl py-3 px-4 font-semibold mx-auto bg-black-50">Skills</h1>
        <div className='gradient-edge'/>
        <div className='gradient-edge'/>
        <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
               {
                skillList.map(item=>(
                 <span
  key={item}
  className="flex min-w-[160px] px-4 py-2 text-xl font-medium text-white bg-gradient-to-r from-baseGreen to-gray-500 border border-gray-300 rounded-xl shadow-lg shadow-gray-200/50 capitalize items-center justify-center transition-all duration-300 hover:shadow-gray-300/70"
>
  {item}
</span>
                ))
               }
              
            </div>
        </div>
    </div>
  )
}

export default Marque