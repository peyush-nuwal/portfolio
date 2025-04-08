import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Skills from "./Skills";



gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const maskRef = useRef<HTMLDivElement>(null);

  const underText = `hi,my name is peyush , and i try to make the web a better place by creating dynamic and responsive web applications. i enjoy learning new technologies and continuously improving my skills.`;
   
  const maskText = `hi,my name is peyush , and i try to make the web a better place by creating dynamic and responsive web applications. i enjoy learning new technologies and continuously improving my skills.`;


  useGSAP(()=>{
    gsap.from(".about-reval", {
      y: "100%",
      duration: 0.8,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".about-section",
        start: "60% 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
    gsap.from(".about_h1 div,.about_h1 span", {
      y: "150%",
      duration: 0.8,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".about-section",
        start: "60% 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  })
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      if (!maskRef.current) return;
      const rect = maskRef.current?.getBoundingClientRect();
      const maskSize = isHovered ? 300 : 0;
    const x = e.clientX - rect.left - maskSize / 2;
    const y = e.clientY - rect.top - maskSize / 2;

      gsap.to(maskRef.current, {
        maskPosition: `${x}px ${y}px`,
        WebkitMaskPosition: `${x}px ${y}px`,
        maskSize: `${maskSize}px`,
        WebkitMaskSize: `${maskSize}px`,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", mouseMove);
    return () => document.removeEventListener("mousemove", mouseMove);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true); // Update state first
    gsap.to(maskRef.current, {
      duration: 1,
      ease: "easeInOut",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(maskRef.current, {
      duration: 1,
      ease: "easeInOut",
    });
  };


  return (
    <div className="relative w-full h-screen lg:h-[70vh]    bg-background text-primary py-10 ">
      <motion.h1
        whileHover="hover"
        className=" w-fit text-accent font-bold  text-3xl lg:text-5xl px-4 lg:px-8 py-1 group overflow-hidden cursor-pointer hover:text-accent about_h1 flex gap-1  items-center mix-blend-difference"
      >
        <span className="inline-block stroke-text text-background group-hover:text-accent text-4xl  lg:text-6xl ">
          /
        </span>
        <div className="h-10 lg:h-12  flex flex-col overflow-hidden ">
          <motion.span
            variants={{
              hover: { y: "-100%" },
            }}
            initial={{ y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block "
          >
            About Me
          </motion.span>
          <motion.span
            variants={{
              hover: { y: "-100%" },
            }}
            initial={{ y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block"
          >
            About Me
          </motion.span>
        </div>
      </motion.h1>
      <div className="relative w-full h-1/2  ">
        <div
          ref={maskRef}
          style={{
            maskImage: "url('/mask.svg')",
            WebkitMaskImage: "url('/mask.svg')",
            maskRepeat: "no-repeat",
            maskSize: "0px",
            maskOrigin: "center",
            WebkitMaskOrigin: "center",
          }}
          className="  absolute top-0   z-[500] w-full h-fit flex items-center justify-center bg-accent text-background  pointer-events-none origin-center overflow-hidden about-section "
        >
          <div className="text-4xl lg:text-6xl font-semibold   px-6 lg:px-10 flex flex-wrap   ">
            {underText.split(" ").map((c, idx) => (
              <p key={idx} className="mr-3 overflow-hidden py-[4px]">
                <span
                  className={`inline-block ${
                    c === "passionate" || c === "developer"
                      ? "text-primary"
                      : "text-background"
                  } about-reval`}
                >
                  {c}
                </span>
              </p>
            ))}
          </div>
        </div>

        <div className="absolute top-0 z-0  w-full h-fit flex items-center justify-center place-self-center about-section ">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-4xl lg:text-6xl font-semibold text-primary px-6 lg:px-10 flex flex-wrap   "
          >
            {maskText.split(" ").map((c, idx) => (
              <p key={idx} className="mr-3 overflow-hidden py-[4px]">
                <span
                  className={`inline-block ${
                    c === "creating" || c === "dynamic"
                      ? "text-accent"
                      : "text-primary"
                  } about-reval`}
                >
                  {c}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default About;
