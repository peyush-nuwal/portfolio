"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import Descriptions from "./Descriptions";
import Titles from "./Titles";
import Blob from "./Blob";
import { services } from "../../public/data/Services";

gsap.registerPlugin(ScrollTrigger);


export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="service"
      ref={sectionRef}
      className="relative w-full  h-[60vh] lg:h-screen   text-primary px-6 my-3 lg:my-6  overflow-hidden"
    >
      <div className="absolute top-0 left-0 z-20 w-full h-screen    ">
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
              What I Do
            </motion.span>
            <motion.span
              variants={{
                hover: { y: "-100%" },
              }}
              initial={{ y: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="inline-block"
            >
              My Services
            </motion.span>
          </div>
        </motion.h1>
        <div className="mt-5 lg:mt-12 relative">
          <Titles data={services} setSelectedProject={setSelectedProject} />
          <Descriptions data={services} selectedProject={selectedProject} />
        </div>
      </div>

      {/* background with blob */}
      <div className="relative z-0 w-full h-screen overflow-hidden blur-xl ml-0  lg:ml-[15%] ">
        <Blob />
      </div>
    </section>
  );
}
