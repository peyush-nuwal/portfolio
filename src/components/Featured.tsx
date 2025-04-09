import { motion } from 'motion/react';
import React from 'react'

const Featured = () => {
  return (
    <div className="my-2 text-primary">
     {/* Heading */}
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
            Featured Projects
          </motion.span>
          <motion.span
            variants={{
              hover: { y: "-100%" },
            }}
            initial={{ y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block"
          >
            Featured Projects
          </motion.span>
        </div>
      </motion.h1>
        {/* Projects Grid */}
        <section className='w-full'>
            <h1>Hello</h1>
        </section>

       {/* Preview Window  */}
      <div className=''></div>
    </div>
  );
}

export default Featured