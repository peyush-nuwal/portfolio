"use client";
import { useEffect, useState, useRef, RefObject } from "react";

interface CursorProps {
  stickyElementRef: RefObject<HTMLDivElement | null>;
}
import {
  motion,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { transform } from "framer-motion";

const Cursor: React.FC<CursorProps> = ({ stickyElementRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);
  const cursorSize = isHovered ? 60 : 20;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  //Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const rotate = (distance: { x: number; y: number }) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (e: MouseEvent) => {
    if(!stickyElementRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, height, width } =
      stickyElementRef.current.getBoundingClientRect();

    //center position of the stickyElement
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
   
      const distance = { x: clientX - center.x, y: clientY - center.y };

      
      rotate(distance);

     
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.15]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 1]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);


      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(
      cursor.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1 },
     
    );
  };

  useEffect(() => {
        if (!stickyElementRef.current) return;

    stickyElementRef.current.addEventListener("mouseenter", manageMouseOver);
    stickyElementRef.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
          if (!stickyElementRef.current) return;

      stickyElementRef.current.removeEventListener("mouseenter", manageMouseOver);
      stickyElementRef.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  const template = ({ rotate, scaleX, scaleY }: { rotate: number; scaleX: number; scaleY: number }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div>
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className="fixed top-0 left-0 z-[55] w-8 h-8  bg-accent rounded-full pointer-events-none mix-blend-difference"
        ref={cursor}
      ></motion.div>
    </div>
  );
};

export default Cursor;
