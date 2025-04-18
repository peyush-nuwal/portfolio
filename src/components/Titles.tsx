import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface Service {
  title: string;
  description: string;
  speed: number;
}
interface TitlesProps {
  data: Service[];

  setSelectedProject: (value: number | null) => void;
}
const Titles: React.FC<TitlesProps> = ({ data, setSelectedProject }) => {
  return (
    <>
      {data.map((item, index) => (
        <Title
          key={index}
          title={item.title}
          index={index}
          speed={item.speed}
          setSelectedProject={setSelectedProject}
        />
      ))}
    </>
  );
};

export default Titles;



interface TitleProps {
  title: string;
  index: number;
  speed: number;
  setSelectedProject: (value: number | null) => void;
}


const Title:React.FC<TitleProps>=({title,index,speed,setSelectedProject})=>{
   const titleRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0 )`;
  return(
    <div
      ref={titleRef}
      onMouseEnter={() => setSelectedProject(index)}
      onMouseLeave={() => setSelectedProject(null)}
      className={` relative text-4xl lg:text-7xl font-bold uppercase   py-4 px-4 lg:px-6 border-b-[0.1px]  border-primary border-t-[0.1px] ${
        index === 0 ? "border-t-primary" : " border-t-transparent"
      } `}
    >
      <div className="relative inline-block ">
        <motion.div
          style={{
            clipPath: clip,
            willChange: "clip-path",
            mixBlendMode: "normal",
          }}
          className="absolute top-0 left-0 z-10"
        >
          <p className="text-primary ">{title}</p>
        </motion.div>

        <p className=" relative z-0 block text-black ">{title}</p>
      </div>
    </div>
  )
}