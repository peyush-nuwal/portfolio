"use client";
import { useGSAP } from "@gsap/react";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const firstNameRef = useRef<HTMLDivElement | null>(null);
  const lastNameRef = useRef<HTMLDivElement | null>(null);
  const ImgRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const t2 = gsap.timeline({ delay: 6.7 }); //
    t2.to(heroRef.current, {
      scaleY: 1,

      duration: 2,
      ease: "expo.inOut",
    });

    const firstH2 = gsap.utils.selector(firstNameRef.current);
    t2.from(
      firstH2("span"),
      {
        y: "100%",
        duration: 3,
        ease: "expo.inOut",
        stagger: 0.1,
      },
      0.5
    );
    const secondH2 = gsap.utils.selector(lastNameRef.current);
    t2.from(
      secondH2("span"),
      {
        y: "-100%",
        duration: 3,
        ease: "expo.inOut",
        stagger: 0.1,
      },
      0.5
    );
    t2.from(
      ImgRef.current,
      {
        scale: 0,
        rotate: 0,
        duration: 2,
        ease: "expo.inOut",
      },
      0.7
    );

     return () => {
       t2.kill();
     };
  },[]);




   useEffect(() => {
      const hero=heroRef.current;
      if(!hero)return;

      const firstSpans=gsap.utils.selector(firstNameRef.current)("span");
      const lastSpans=gsap.utils.selector(lastNameRef.current)("span");
       
        const firstSpanSetters = Array.from(firstSpans as HTMLSpanElement[]).map((span) =>
          gsap.quickTo(span, "scaleX", {
            duration: 0.5,
            ease: "power2.out",
          })
        );

        const lastSpanSetters = Array.from(lastSpans as HTMLSpanElement[]).map((span) =>
          gsap.quickTo(span, "scaleX", {
            duration: 0.5,
            ease: "power2.out",
          })
        );
      const handleMouseMove=(e:MouseEvent)=>{
        const centerX=window.innerWidth/2;
       
        const distanceFromCenter=Math.abs(centerX-e.clientX);

        const scaleMapped=gsap.utils.mapRange(0,centerX,0.8,1.2,distanceFromCenter);
          const isLeft = e.clientX < centerX;


      firstSpanSetters.forEach(
        (setScaleX: gsap.QuickToFunc, index: number) => {
          const scaleValue =
            index % 2 === 0
              ? isLeft
                ? scaleMapped
                : 1 / scaleMapped
              : isLeft
              ? 1 / scaleMapped
              : scaleMapped;
          setScaleX(scaleValue);
        }
      );
      
         lastSpanSetters.forEach(
           (setScaleX: gsap.QuickToFunc, index: number) => {
             const scaleValue =
               index % 2 === 0
                 ? isLeft
                   ? scaleMapped
                   : 1 / scaleMapped
                 : isLeft
                 ? 1 / scaleMapped
                 : scaleMapped;
             setScaleX(scaleValue);
           }
         );
      }
      
     hero.addEventListener("mousemove", handleMouseMove);

     return () => {
       hero.removeEventListener("mousemove", handleMouseMove);
     };
   }, [])
   
  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative scale-y-0 origin-center z-[55] h-screen w-full pt-16 px-0 lg:px-2 bg-background text-primary flex flex-col gap-28 lg:gap-3 "
    >
      <div className=" w-full h-1/2 overflow-hidden flex items-end">
        <h1
          ref={firstNameRef}
          className="w-full text-accent text-center lg:text-start text-[8rem] lg:text-[15rem] -tracking-[0.5rem] font-[900] lg:font-[800] "
        >
          {"PEYUSH".split("").map((letter, index) => (
            <span
              key={index}
              className={`relative ${
                index % 2 === 0 ? "-z-[10]" : "z-[10]"
              } inline-block`}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <div className=" w-full h-1/2 overflow-hidden flex    items-start">
        <h1
          ref={lastNameRef}
          className="w-full text-accent text-center lg:text-end  text-[8rem] lg:text-[15rem] -tracking-[0.5rem]  font-[900] lg:font-[800] "
        >
          {"NUWAL".split("").map((letter, index) => (
            <span
              key={index}
              className={`relative ${
                index % 2 === 0 ? "-z-[10]" : "z-[10]"
              } inline-block`}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div
        ref={ImgRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-9 md:mt-20  w-[90%] md:w-[40%]   p-[2px] bg-text -rotate-[7deg] lg:-rotate-[10deg]"
      >
        <Image
          src="/pfp.jpg"
          alt=""
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
Hero.displayName = "Hero";
export default Hero;
