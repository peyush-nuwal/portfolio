"use client";
import { useGSAP } from "@gsap/react";

import React, { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
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
  });
  return (
    <div
      ref={heroRef}
      className="relative scale-y-0 origin-center z-[55] h-screen w-full pt-16 bg-background text-primary flex flex-col gap-3 "
    >
      <div className=" w-full h-1/2 overflow-hidden flex items-end">
        <h1
          ref={firstNameRef}
          className="w-full text-accent text-[8.5rem] lg:text-[15rem] -tracking-[0.5rem]  font-[800] "
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
      <div className=" w-full h-1/2 overflow-hidden flex items-start">
        <h1
          ref={lastNameRef}
          className="w-full text-accent text-end  text-[8.5rem] lg:text-[15rem] -tracking-[0.5rem]  font-[800] "
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-7 lg:mt-10  w-50 lg:w-[35%]   p-[2px] bg-text -rotate-[10deg]"
      >
        <Image
          src="/valo.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
