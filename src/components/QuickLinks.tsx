import { motion } from 'motion/react';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

interface quickLinkProps {
    name: string;
    link?: string;
    className?:string
}
const QuickLinks: React.FC<quickLinkProps> = ({name,link,className}) => {
  const content= (
    <motion.li
      whileHover="hover"
      className={`links border-b border-b-background/60 pb-1 my-2 flex justify-between items-center overflow-hidden cursor-pointer ${className}`}
    >
      <span className=" relative w-full block  ">
        <motion.span
          initial={{ y: 0 }}
          variants={{ hover: { y: "-100%" } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block"
        >
          {" "}
          {name}
        </motion.span>
        <motion.span
          initial={{ y: "100%" }}
          variants={{ hover: { y: 0 } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block absolute top-0 left-0"
        >
          {" "}
          {name}
        </motion.span>
      </span>
      <span className="relative  text-base lg:text-xl overflow-hidden ">
        <motion.span
          initial={{ y: "0%", x: "0%", rotate: -45 }}
          variants={{ hover: { y: "-120%", x: "120%", rotate: 0 } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block  overflow-hidden"
        >
          <FaArrowRight />
        </motion.span>{" "}
        <motion.span
          initial={{ y: "120%", x: "-120%", rotate: -45 }}
          variants={{ hover: { y: "0%", x: "0%",rotate:-45  } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-0 left-0 leading-0 block  overflow-hidden"
        >
          <FaArrowRight />
        </motion.span>
      </span>
    </motion.li>
  );
  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default QuickLinks