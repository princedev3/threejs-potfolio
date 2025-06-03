"use client"
import Contact from '@/components/contact/contact'
import Experience from '@/components/experience/experience'
import Hero from '@/components/hero/hero'
import Marque from '@/components/marque/marque'
import Projects from '@/components/projects/projects'
import { useGsapSectionTracker } from '@/utils/gsap'
import React from 'react'

const Page = () => {
  useGsapSectionTracker(["home" , "work" , "experience" ,"skills" ,"contact"])
  return (
    
    <div className={`pt-10`}>
      <div id='home' className="">
     <Hero />
      </div>
      <div className="" id='experience'><Experience/></div>
      <div className="" id='work'><Projects/></div>
      <div className="" id='skills'><Marque/></div>
      <div className="" id='contact'><Contact/></div>
     
     
     
     
    </div>
  )
}

export default Page