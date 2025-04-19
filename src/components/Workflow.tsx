import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { JSX, useRef } from "react";
import { IoSearchSharp, IoCodeWorkingSharp } from "react-icons/io5"; // Add any other relevant icons
import { FaLaptopCode } from "react-icons/fa"; // Develop
import { GiRocketFlight } from "react-icons/gi";
gsap.registerPlugin(ScrollTrigger);

interface step {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const steps: step[] = [
  {
    id: 1,
    icon: <IoSearchSharp />,
    title: "Discover",
    description:
      "I begin by understanding the project's goals, audience, and constraints to lay a solid foundation.",
  },
  {
    id: 2,
    icon: <IoCodeWorkingSharp />,
    title: "Plan & Design",
    description:
      "I create wireframes and mockups, planning the layout, colors, and typography to align with the brand.",
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Develop",
    description:
      "With designs ready, I develop the site, ensuring it's responsive, interactive, and cleanly coded.",
  },
  {
    id: 4,
    icon: <MdOutlineRocket />,
    title: "Launch & Refine",
    description:
      "After launch, I monitor performance and optimize for SEO and speed to ensure an excellent user experience.",
  },
];
const Workflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": () => {
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            scrub: 1,
            start: "top 60%",
            end: "top 20%",
          },
        });

        gsap.from(container, {
          scaleX: 0,
          transformOrigin: "center top",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: container,
            scrub: 1,
            start: "top 80%",
           
            end: "top 30%",
          },
        });

        t1.from(".heading-h2 span ,.heading-h1 span", {
          y: 100,
          ease: "power2.inOut",
          stagger: 0.1,
        });

        t1.from(".step-icon span , .step-h1 span ,.step-p p", {
          y: 100,
          ease: "power2.inOut",
        });
      },
      "(max-width: 768px)": () => {
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            scrub: 1,
            start: "top 70%",
            end: "top 40%",
          },
        });

        gsap.from(container, {
          scaleX: 0,
          transformOrigin: "center top",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: container,
            scrub: 1,
            start: "top 80%",
            end: "top 50%",
          },
        });
        t1.from(".heading-h2 span ,.heading-h1 span", {
          y: 100,
          ease: "power2.inOut",
          stagger: 0.1,
        });
        t1.from(".step-icon span , .step-h1 span ,.step-p p", {
          y: 100,
          ease: "power2.inOut",
        });
      },
    });
  });
  return (
    <div className="h-fit lg:h-screen  px-4 py-10  mt-16 lg:mt-20 ">
      <div
        ref={containerRef}
        className="w-full h-full p-4  bg-primary rounded-2xl"
      >
        <div>
          <h2 className="heading-h2 text-neutral-700 font-bold  text-2xl lg:text-4xl overflow-hidden ">
            <span className="block"> How i Work</span>
          </h2>
        </div>
        <div>
          <h1 className="heading-h1 text-background  font-bold  text-3xl lg:text-5xl overflow-hidden ">
            <span className="block"> From Idea to Launch</span>
          </h1>
        </div>
        <div className="mt-10">
          {steps.map((step, idx) => (
            <Step
              key={step.id}
              index={idx}
              icon={step.icon}
              title={step.title}
              desc={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;

interface StepProps {
  index: number;
  icon: JSX.Element;
  title: string;
  desc: string;
}
const Step: React.FC<StepProps> = ({ index, icon, title, desc }) => {
  return (
    <div
      className={`grid grid-cols-6  gap-6 items-center py-4 px-3 lg:px-8 lg:py-8 ${
        index !== 0 && "border-t border-t-black/30"
      }`}
    >
      <div className="step-icon col-span-1 block text-3xl lg:text-5xl text-accent overflow-hidden">
        <span className="block">{icon}</span>
      </div>
      <h1 className=" step-h1 col-span-2  text-xl lg:text-3xl  font-medium break-words overflow-hidden">
        <span className="block">{title}</span>
      </h1>

      <div className="step-p col-start-4 col-span-3 w-full lg:w-3/5 text-xs lg:text-base text-wrap  text-start text-neutral-500 overflow-hidden flex justify-end lg:justify-start  ">
        <p className="block">
          {desc.split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block  mr-1 text-neutral-700 font-medium"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
