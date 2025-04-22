import { motion } from "motion/react";
import React, { JSX } from "react";

interface BtnProps {
  title: string | JSX.Element;
  type?: "primary" | "secondary" | "transparent";
  subTitle: string | JSX.Element;
  titleStyle?: string;
  subTitleStyle?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  link?: string; 
}

const Btn: React.FC<BtnProps> = ({
  title,
  type = "primary",
  subTitle,
  titleStyle = "",
  subTitleStyle = "",
  onClick = () => {},
  link, 
}) => {
  const content = (
    <motion.button
      whileHover="hover"
      onClick={onClick}
      className={`relative btn btn-${type} inline-flex flex-col overflow-hidden ${titleStyle}`}
    >
      <motion.span
        initial={{ y: 0 }}
        variants={{ hover: { y: "-110%" } }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="inline-block text-center"
      >
        {title}
      </motion.span>
      <motion.span
        initial={{ y: "110%" }}
        variants={{ hover: { y: 0 } }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`inline-flex absolute top-0 left-0 w-full h-full ${
          type === "primary"
            ? "bg-background text-primary"
            : type === "secondary"
            ? "bg-primary text-background"
            : "bg-primary text-background"
        } items-center justify-center rounded-full ${subTitleStyle}`}
      >
        <div>{subTitle}</div>
      </motion.span>
    </motion.button>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default Btn;
