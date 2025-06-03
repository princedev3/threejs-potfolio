"use client"
import { navLinks } from '@/constant'
import React from 'react'
import { motion } from "framer-motion";
import { ActiveType, useActiveSection } from '@/utils';

const Navbar = () => {
const {active,setActive} =useActiveSection()

  return (
<div className="fixed md:top-5 left-0 w-full !z-50 md:px-4">
  <div className="flex flex-wrap items-center justify-center gap-3 backdrop-blur-[0.5rem] bg-white/80 px-6 py-4 md:rounded-2xl shadow-md w-full max-w-2xl mx-auto">
    {navLinks.map((item) => (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        key={item.name}
        className={`${
          item.name.toLocaleLowerCase() === active ? "text-black" : "text-black/90"
        } text-xl font-semibold `}
      >
        <h1
        
          onClick={() => 
          {
            setActive(item.name.toLocaleLowerCase() as ActiveType)
              
 const el = document.getElementById(item.name.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          }
          }
          className="cursor-pointer py-1 px-3 rounded-2xl relative capitalize z-50"
        >
          {item.name}
          {active === item.name.toLocaleLowerCase() && (
            <motion.span
              layoutId="active"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="absolute inset-0 bg-gray-100 -z-10 rounded-2xl"
            />
          )}
        </h1>
      </motion.div>
    ))}
  </div>
</div>

  )
}

export default Navbar