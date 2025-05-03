"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import { projects } from "../../public/data/Projects";
 
const POSITIONS = {
  TOP: -160,
  MIDDLE: -80,
  BOTTOM: 0,
};



interface ProjectItemProps {
  index: number;
  setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
const ProjectItem:React.FC<ProjectItemProps> = ({ index, setHoveredIndex }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.set(wrapperRef.current, { y: POSITIONS.TOP });
  }, []);

  
  //  if (!containerRef.current || !wrapperRef.current) return;


  //     const rect = containerRef.current.getBoundingClientRect();

  //     const enteredFromTop = e.clientY < rect.top + rect.height / 2;

  //     gsap.to(wrapperRef.current, {
  //       y: enteredFromTop ? POSITIONS.BOTTOM : POSITIONS.TOP,
  //       duration: 0.4,
  //       ease: "power2.out",
  //     });

  //     setHoveredIndex(index);
    
  // };

  // const handleLeave = () => {
  //   gsap.to(wrapperRef.current, {
  //     y: POSITIONS.MIDDLE,
  //     duration: 0.4,
  //     ease: "power2.inOut",
  //   });

  //   setHoveredIndex(null);
  // };
const handleEnter = () => {
  gsap.to(wrapperRef.current, {
    y: POSITIONS.MIDDLE, 
    duration: 0.4,
    ease: "power2.out",
  });
  setHoveredIndex(index);
};

  const handleLeave = (e: React.MouseEvent) => {
    if (!containerRef.current || !wrapperRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const exitedToTop = e.clientY < rect.top + rect.height / 2;

    gsap.to(wrapperRef.current, {
      y: exitedToTop ? POSITIONS.TOP : POSITIONS.BOTTOM,
      duration: 0.4,
      ease: "power2.inOut",
    });

    setHoveredIndex(null);
  };


  const { title, label, url } = projects[index];
  const isFirst = index === 0;

  return (
     <a href={url} target="_blank" rel="noopener noreferrer">
      <div
      ref={containerRef}
      className={`award  text-2xl lg:text-4xl  font-semibold overflow-hidden h-[80px] border-b-2 border-b-primary border-t-2 ${
        isFirst ? "border-t-primary" : "border-t-transparent"
      }`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        ref={wrapperRef}
        className={`award-wrapper relative will-change-transform translate-y-[-160px]   `}
      >
        <div className="w-full flex justify-between items-center h-[80px] p-2 cursor-pointer uppercase px-4 lg:px-10 bg-background text-primary">
          <h1>bae-project{index}</h1>
          <h1>{label} upper</h1>
        </div>
        <div
          className={`w-full flex justify-between items-center h-[80px] p-2 cursor-pointer uppercase   bg-primary text-background px-4 lg:px-10 border-b-2 border-b-primary  `}
        >
          <h1>{title}</h1>
         
            <h1>See live</h1>
       
        </div>
        <div className="w-full flex justify-between items-center h-[80px] p-2 cursor-pointer uppercase  px-4 lg:px-10 bg-background text-primary">
          <h1>bae-project{index}</h1>
          <h1>{label} </h1>
        </div>
      </div>
    </div>
    </a>
  );
};

const Featured = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number |null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(!previewRef.current) return;

    if (hoveredIndex !== null) {
      const img = document.createElement("img");
      img.src = projects[hoveredIndex].image;
      img.style.position = "absolute";
      img.style.bottom = "12px";
      img.style.right = "12px";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.style.willChange = "transform";
      img.style.zIndex = Date.now().toString();;
      img.style.transform = "scale(0)";

      previewRef.current.appendChild(img);

      gsap.to(img, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        transformOrigin: "center",
      });
    } else {
      const previewImages = previewRef.current.querySelectorAll("img");
      previewImages.forEach((img) => {
        gsap.to(img, {
          scale: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => img.remove(),
        });
      });
    }
  }, [hoveredIndex]);

 

  return (
    <div className="min-h-screen  py-20 text-primary relative">
      <motion.h1
        whileHover="hover"
        className=" w-fit text-accent font-bold  text-3xl lg:text-5xl px-4 lg:px-8 py-1 mb-5 lg:mb-16 group overflow-hidden cursor-pointer hover:text-accent about_h1 flex gap-1  items-center mix-blend-difference"
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
            look what I made
          </motion.span>
          <motion.span
            variants={{
              hover: { y: "-100%" },
            }}
            initial={{ y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block"
          >
            My Featured Projects
          </motion.span>
        </div>
      </motion.h1>
      {projects.map((_, i) => (
        <ProjectItem key={i} index={i} setHoveredIndex={setHoveredIndex} />
      ))}
      <div
        ref={previewRef}
        className="award-preview fixed bottom-[12px] right-[12px] w-1/3 h-1/3 pointer-events-none z-[1000]"
      >
       
      </div>
    </div>
  );
};

export default Featured;
