'use client'
import { useGSAP } from '@gsap/react'
import { motion } from 'motion/react'
import React, { useState, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import Magentic from './Magentic';






const Nav = forwardRef<HTMLDivElement>((props, ref) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navRef=useRef<HTMLDivElement|null>(null)    ;
   
   const handleHamburger=()=>{
      setNavOpen(!navOpen)
   } 
   useGSAP(()=>{
      gsap.from(navRef.current,{
         y:-60,
         delay:8.5,
         duration:1.5,
         ease:'easeIn'
      })
   })
  return (
    <div
      ref={navRef}
      className="fixed z-[999] top-0 left-0 h-16 w-screen  flex justify-end items-center px-4 lg:px-6   "
    >
      
      <Magentic>
        <div
          ref={ref}
          onClick={handleHamburger}
          className="relative z-[999]   flex flex-col justify-center gap-2  w-12 h-12 cursor-pointer group "
        >
          <motion.div
            initial={{ y: [0, 0, 0], rotate: [0, 0, 0] }}
            animate={
              navOpen
                ? { y: [0, 6, 6], rotate: [0, 0, 45] }
                : { y: [6, 6, 0], rotate: [45, 0, 0] }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="  w-12 h-1 bg-primary rounded-full  pointer-events-none  group-hover:bg-background transition-colors duration-150 ease-linear"
          />
          <motion.div
            initial={{ y: [0, 0, 0], rotate: [0, 0, 0] }}
            animate={
              navOpen
                ? { y: [0, -6, -6], rotate: [0, 0, -45] }
                : { y: [-6, -6, 0], rotate: [-45, 0, 0] }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-12 h-1 bg-primary rounded-full pointer-events-none group-hover:bg-background transition-colors duration-150 ease-linear"
          />
          <div className=" absolute top-0 right-0 w-16 h-16 hover:scale-200  " />
        </div>
      </Magentic>
    </div>
  );
})

export default Nav