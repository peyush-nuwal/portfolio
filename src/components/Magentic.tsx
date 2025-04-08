import { motion } from 'motion/react';
import React, { useRef, useState } from 'react'
  
  interface MagenticProps { 
     children:React.ReactNode
  }
const Magentic:React.FC<MagenticProps> = ({children}) => {
     const magRef=useRef<HTMLDivElement|null>(null) 
      const [position, setPosition] = useState({ x: 0, y: 0 });


    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!magRef.current) return;

      const { clientX: x, clientY: y } = e;
      const { height, width, left, top } =
     magRef.current?.getBoundingClientRect();
     const factor =3; 
     const middleX = (x - (left + width / 2)) / factor;
     const middleY = (y - (top + height / 2)) / factor;

      setPosition({ x: middleX, y: middleY });
    }; 
     
    const mouseReset = () => {
      setPosition({ x: 0, y: 0 });  
    }

  return (
    <motion.div
      ref={magRef}
      onMouseMove={mouseMove}
      onMouseLeave={mouseReset}
      className="relative" 
      animate={{ x: position.x, y: position.y }}
      transition={{ ease: "linear", duration: 0.1 }}
    >
        {children}
    </motion.div>
  );
}

export default Magentic