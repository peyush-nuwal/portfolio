import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { FaPlus,FaMinus } from "react-icons/fa6";


 interface QuestionProps {
    question:string;
    answer:string;
 }

const Question: React.FC<QuestionProps> = ({question,answer}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={handleClick}
      className="border-b border-b-primary/60 mt-5 cursor-pointer"
    >
      <h1 className="text-xl font-semibold text-primary flex justify-between items-center pb-2 px-2">
        {question}
        <motion.span
          animate={isOpen ? { rotate: 0 } : { rotate: 90 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </motion.span>
      </h1>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-base lg:text-lg font-light leading-tight text-primary/90 max-w-prose lg:max-w-3/5  pt-1 pb-3 overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Question;
