"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, {  useMemo, useRef } from "react";
import { FaPlus } from "react-icons/fa6";


gsap.registerPlugin(ScrollTrigger);


  
const text = "Let's have a talk";
const repeatedText = Array(10).fill(text);


const Marquee = () => {

  const containerRef = useRef<HTMLDivElement|null>(null);
    const containerRefReverse = useRef<HTMLDivElement | null>(null)
    const duration:number=50;
    
  useGSAP(() => {
    gsap.set(containerRef.current, { xPercent: 0 });
    gsap.set(containerRefReverse.current, { xPercent: -50 });

    gsap
      .timeline({ defaults: { ease: "none", repeat: -1 } })
      .to(containerRef.current, {
        xPercent: -50,
        duration: duration,
      });

    gsap
      .timeline({ defaults: { ease: "none", repeat: -1 } })
      .to(containerRefReverse.current, {
        xPercent: 0,
        duration: duration,
      });



      // scroll animation 
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "top center",
            toggleActions: "play none play reverse",
            pin: true,
          },
        })
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.4,
          ease: "power1.inOut",
        })
        .to(
          containerRefReverse.current,
          {
            yPercent: -100,
            duration: 0.4,
            ease: "power1.inOut",
          },
          "<"
        );
  }, []);
  

  const list = useMemo(
    () => (
      <div className="flex w-fut items-center gap-10 ">
        {repeatedText.map((word, index) => {
          const isLast = index === repeatedText.length - 1;
          return (
            <div
              key={index}
              className={` relative text-8xl flex items-center justify-center shrink-0  rounded-full text-primary text-nowrap ${
                isLast && "mr-10"
              }`}
            >
              {word}<FaPlus className="text-accent ml-4"/>
            </div>
          );
        })}
      </div>
    ),
    []
  );
  return (
    <div className="relative max-w-full h-full  overflow-hidden my-20">
      <div ref={containerRef} className="flex w-fit h-full">
        {list}
        {list}
      </div>

      {/* Reverse Marquee */}
      <div ref={containerRefReverse} className="flex w-fit absolute top-full ">
        {list}
        {list}
      </div>
    </div>
  );
};

export default Marquee;
