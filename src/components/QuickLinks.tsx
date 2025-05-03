import { motion } from "motion/react";

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface QuickLinkProps {
  name: string;
  link?: string;
  className?: string;
  icon?: boolean;
  type?: "default" | "url" | "route";
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
const QuickLinks: React.FC<QuickLinkProps> = ({
  name,
  link,
  className,
  icon = true,
  type = "default",
  onClick=()=>{},
}) => {
  const content = (
    <motion.div
      whileHover="hover"
      onClick={onClick}
      className={` border-b border-b-background/60 pb-1 my-2 flex gap-1 justify-between items-center overflow-hidden cursor-pointer ${className}`}
    >
      <span className=" relative w-full block  ">
        <motion.span
          initial={{ y: 0 }}
          variants={{ hover: { y: "-100%" } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block"
        >
          {name}
        </motion.span>
        <motion.span
          initial={{ y: "100%" }}
          variants={{ hover: { y: 0 } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block absolute top-0 left-0"
        >
          {name}
        </motion.span>
      </span>
      {icon && (
        <span className="relative w-fit h-full text-base lg:text-xl  flex flex-col items-center justify-center overflow-hidden  ">
          <motion.span
            initial={{ y: "0%", x: "0%", rotate: -45 }}
            variants={{ hover: { y: "-75%", x: "80%", rotate: -45 } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center h-full w-full      "
          >
            <FaArrowRight />
          </motion.span>{" "}
          <motion.span
            initial={{ y: "75%", x: "-80%", rotate: -45 }}
            variants={{ hover: { y: "0%", x: "0%", rotate: -45 } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 leading-0 h-full w-full   flex items-center justify-center "
          >
            <FaArrowRight />
          </motion.span>
        </span>
      )}
    </motion.div>
  );

  if (type === "url" && link) {
    const isExternal = link.startsWith("http");
    return isExternal ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
     <a href={link}>
      {content}
     </a>
    );
  }

  if (type === "route" && link) {
    return <Link href={link}>{content}</Link>;
  }

  return content;
};

export default QuickLinks;
