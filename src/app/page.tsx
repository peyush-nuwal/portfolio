'use client'
import Hero from "@/components/Hero";
import {  useEffect, useRef, useState } from "react";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import About from "@/components/About";
import useLenis from "@/hooks/useLenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "@/components/Loader";
import Skills from "@/components/Skills";
import Featured from "@/components/Featured";


export default function Home() {
    const stickyElementRef = useRef<HTMLDivElement|null>(null);
    const pageRef = useRef<HTMLDivElement|null>(null);
       const [disableScroll, setDisableScroll] = useState(true); 
        const lenis = useLenis(disableScroll); 

         useEffect(() => {
           if (lenis) {
             lenis.scrollTo(0, {
               immediate: false, 
               duration: 1.5,
               easing: (t) => 1 - Math.pow(1 - t, 4), // 
             });
           }

          window.scrollTo(0, 0);
         }, [lenis]); 

    useGSAP(() => {
      gsap.from(pageRef.current, {
       
      
        duration: 7,
       
        onComplete: () => {
          setDisableScroll(false); 
          document.body.style.overflow = ""; 
        },
      });
   
    });

  return (
    <main ref={pageRef} className=" h-full w-full">
      <Loader />
      <Nav ref={stickyElementRef} />
      <Hero />
      <About />
      <Skills />
      <Featured/>
      {/* Cursor component*/}
      <Cursor stickyElementRef={stickyElementRef} />
    </main>
  );
}

