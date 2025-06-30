'use client'
import React,{useRef} from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderContainerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
  
    const tl = gsap.timeline({ delay: 1 });

    tl.to(
      loaderRef.current,
      {
        width: "100vw",
        duration: 6,
        ease: "expo.inOut",
      },
      0
    );

    const progress = { count: 0 };
    tl.to(
      progress,
      {
        count: 100,

        duration: 5,
        ease: "expo.inOut",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = `/${Math.round(progress.count)}`;
          }
        },
      },
      0
    );

    tl.to(
      loaderRef.current,
      {
        height: "100vh",
        duration: 2,
        ease: "expo.inOut",
      },
      6
    );

    const q = gsap.utils.selector(loaderContainerRef.current);
    tl.to(
      q("h2"),
      {
        opacity: 0,
      },
      6
    );

    tl.to(
      loaderContainerRef.current,
      {
        display: "none",
       
      },
      7.9
    );
      return () => tl.kill();
  },[]);
  return (
    <div
      ref={loaderContainerRef}
      className="w-screen h-screen fixed top-0 bg-white"
    >
      <div className="fixed top-0 left-0 w-[30%] lg:w-[10%] h-screen  z-50  ">
        <div
          ref={loaderRef}
          className="absolute top-1/2 -translate-y-1/2 w-full h-10 bg-background text-accent flex items-center justify-between gap-3 px-3 overflow-hidden"
        >
          <h2 className="text-xl font-medium ">Loading</h2>
          <h2 ref={countRef} className="text-xl font-medium ">
            /0
          </h2>
        </div>
      </div>
    </div>
  );
};
Loader.displayName = "Loader";
export default Loader