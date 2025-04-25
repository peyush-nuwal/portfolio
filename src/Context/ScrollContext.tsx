"use client";
import { createContext, useContext, useRef, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

type ScrollContextType = {
  scrollToSection: (id: string) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollToSection: () => {},
});

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

 useEffect(() => {
   const lenisInstance = new Lenis({
     duration: 1.2,
    
   });

   setLenis(lenisInstance);
   const rafRef = { current: null as number | null };

   function raf(time: number) {
     lenisInstance.raf(time);
     rafRef.current = requestAnimationFrame(raf);
   }

   rafRef.current = requestAnimationFrame(raf);

   return () => {
     if (rafRef.current) cancelAnimationFrame(rafRef.current);
     lenisInstance.destroy();
   };
 }, []);


  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target && lenis) {
    
      lenis.scrollTo(target, { offset: 200 });
      console.log(target.getBoundingClientRect(), lenis); 
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
