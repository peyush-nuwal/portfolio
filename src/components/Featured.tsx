"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const POSITIONS = {
  TOP: -160,
  MIDDLE: -80,
  BOTTOM: 0,
};

const projects = [
  {
    title: "Bae Project 1",
    label: "Label 1",
    type: "Type 1",
    image: "/bae/bae-1.jpeg",
  },
  {
    title: "Bae Project 2",
    label: "Label 2",
    type: "Type 2",
    image: "/bae/bae-2.jpeg",
  },
  {
    title: "Bae Project 3",
    label: "Label 3",
    type: "Type 3",
    image: "/bae/bae-3.jpeg",
  },
  {
    title: "Bae Project 4",
    label: "Label 4",
    type: "Type 4",
    image: "/bae/bae-4.jpeg",
  },
  {
    title: "Bae Project 5",
    label: "Label 5",
    type: "Type 5",
    image: "/bae/bae-5.jpeg",
  },
  {
    title: "Bae Project 6",
    label: "Label 6",
    type: "Type 6",
    image: "/bae/bae-6.jpeg",
  },
  {
    title: "Bae Project 7",
    label: "Label 7",
    type: "Type 7",
    image: "/bae/bae-7.jpeg",
  },
  {
    title: "Bae Project 8",
    label: "Label 8",
    type: "Type 8",
    image: "/bae/bae-8.jpeg",
  },
  {
    title: "Bae Project 9",
    label: "Label 9",
    type: "Type 9",
    image: "/bae/bae-9.jpeg",
  },
  {
    title: "Bae Project 10",
    label: "Label 10",
    type: "Type 10",
    image: "/bae/bae-10.jpeg",
  },
];

const ProjectItem = ({ index, setHoveredIndex, hoveredIndex }) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.set(wrapperRef.current, { y: POSITIONS.MIDDLE });
  }, []);

  const handleEnter = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const enteredFromTop = e.clientY < rect.top + rect.height / 2;

    gsap.to(wrapperRef.current, {
      y: enteredFromTop ? POSITIONS.TOP : POSITIONS.BOTTOM,
      duration: 0.4,
      ease: "power2.out",
    });

    setHoveredIndex(index);
  };

  const handleLeave = () => {
    gsap.to(wrapperRef.current, {
      y: POSITIONS.MIDDLE,
      duration: 0.4,
      ease: "power2.inOut",
    });

    setHoveredIndex(null);
  };

  const { title, label, type } = projects[index];

  return (
    <div
      ref={containerRef}
      className="award text-4xl font-semibold overflow-hidden h-[80px]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        ref={wrapperRef}
        className="award-wrapper relative will-change-transform translate-y-[-160px]"
      >
        <div className="w-full flex justify-between items-center h-[80px] p-2 cursor-pointer uppercase bg-primary text-background">
          <h1>{title}</h1>
          <h1>{type}</h1>
        </div>
        <div className="w-full flex justify-between items-center h-[80px] p-2 cursor-pointer uppercase bg-background text-primary">
          <h1>project</h1>
          <h1>{label}</h1>
        </div>
        <div className="w-full flex justify-between items-center h-[80px] p-2 cursor-pointer uppercase bg-primary text-background">
          <h1>{title}</h1>
          <h1>{type}</h1>
        </div>
      </div>
    </div>
  );
};

const Featured = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const previewRef = useRef(null);

  useEffect(() => {
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
      img.style.zIndex = Date.now();
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
    <div className="min-h-screen px-4 lg:px-10 py-20 text-primary relative">
      <h1 className="text-6xl mb-10">Recognition and Awards</h1>
      {projects.map((_, i) => (
        <ProjectItem
          key={i}
          index={i}
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
        />
      ))}
      <div
        ref={previewRef}
        className="award-preview fixed bottom-[12px] right-[12px] w-1/3 h-1/3 pointer-events-none z-[1000]"
      ></div>
    </div>
  );
};

export default Featured;
