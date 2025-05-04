import React from "react";
import Btn from "./Btn";
import { BsLinkedin, BsTwitterX, BsDownload } from "react-icons/bs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import {
  backendSkills,
  frontendSkills,
  uiSkills,
} from "../../public/data/Tech";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const quote = `'' My goal is to Write Maintainable, clean  and Understandable code to process development was enjoyable ''`;
  
  
  
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "/resume.pdf";
    link.click();
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
    gsap.from(".card", {
      x: "-100%",
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skill-section",
        start: "top 45%",
        end: "top 5%",
        scrub: 1.8,
      },
    });

    gsap.from(".skill-lines", {
      y: "150%",
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skill-section",
        start: "top 30%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".skill-btn", {
      y: "150%",
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skill-section",
        start: "top 28%",
        end: "top 28%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".skill-quote span", {
      y: "150%",
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skill-section",
        start: "60% 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    });

      return () => {
        ctx && ctx.revert();
      };
  },[]);

  return (
    <section id='skills'
      className="skill-section  p-4  lg:p-10  my-5 lg:my-10 w-full h-screen  flex flex-col lg:flex-row-reverse  text-primary
    "
    >
      <div className="w-full h-fit lg:min-h-full lg:w-1/2  px-2 lg:p-10  flex flex-col overflow-hidden  ">
        <div className="overflow-hidden py-1">
          <h2 className="skill-lines text-4xl lg:text-5xl text-accent font-semibold lg:font-bold ">
            My Tech Arsenal
          </h2>
        </div>
        <div className="overflow-hidden pl-1 lg:pl-2 ">
          <h5 className="skill-lines text-base lg:text-xl group flex items-center gap-1 mt-2 ">
            If you want my resume,
            <Btn
              title="Download"
              subTitle={<BsDownload />}
              type="transparent"
              onClick={handleDownload}
              titleStyle="font-medium !p-0 !px-1 text-base"
            />
          </h5>
        </div>
        <div className="overflow-hidden w-1/2 pl-1 lg:pl-2   ">
          <h5 className="skill-lines w-fit ml-[40%] text-base lg:text-xl group mt-1  flex  text-center  ">
            or
          </h5>
        </div>

        <div className="overflow-hidden pl-1 lg:pl-2  ">
          <h5 className="skill-lines text-base lg:text-xl group mt-1 flex ">
            or you want to have chat with me
          </h5>
        </div>
        <div className=" overflow-hidden  pl-[3%] lg:pl-[7%]  gap-3 mt-2   flex   ">
          <div className="skill-btn">
            <Btn
              title="Linkedin"
              subTitle={<BsLinkedin />}
              type="primary"
              titleStyle="font-medium"
              subTitleStyle="text-xl "
              link="https://www.linkedin.com/in/peyush-nuwal/"
            />
          </div>
          <div className="skill-btn">
            <Btn
              title="Twitter"
              subTitle={<BsTwitterX />}
              type="primary"
              titleStyle="font-medium "
              subTitleStyle="text-xl "
              link="https://www.x.com/Nuwal_Peyush"
            />{" "}
          </div>
        </div>

        <h1 className="text-2xl lg:text-3xl font-semibold w-90 text-center lg:text-center my-auto hidden lg:flex flex-wrap  mx-auto mt-10 ">
          {quote.split(" ").map((cha, idx) => (
            <React.Fragment key={idx}>
              <div className="mr-2 skill-quote overflow-hidden">
                <span
                  className={`inline-block ${
                    [
                      "Write",
                      "Maintainable,",
                      "Clean",
                      "Understandable",
                      "code",
                    ].includes(cha)
                      ? "text-accent"
                      : ""
                  }`}
                >
                  {cha}
                </span>
              </div>

              {(cha === "Clean" || cha === "process") && <br />}
            </React.Fragment>
          ))}
        </h1>
      </div>

      <div className="w-full lg:w-1/2 px-0 lg:px-10">
        <div className="card border border-0.5 border-primary rounded-4xl p-5 mt-10 hover:bg-primary hover:text-black">
          <h4 className="text-2xl font-medium">Front-end</h4>
          <div className="w-full flex flex-wrap items-center mt-2">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 mr-3">
                <span className="text-base lg:text-lg">{skill}</span>
                {index !== frontendSkills.length - 1 && (
                  <span className="text-3xl lg:text-5xl">/</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="card w-full lg:w-2/3 border border-0.5 border-primary rounded-4xl p-5 mt-5 hover:bg-primary hover:text-black">
          <h4 className="text-2xl font-medium">Styling & UI</h4>
          <div className="w-full flex flex-wrap items-center mt-2">
            {uiSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 mr-3">
                <span className="text-base lg:text-lg">{skill}</span>
                {index !== uiSkills.length - 1 && (
                  <span className="text-3xl lg:text-5xl">/</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="card ml-full border border-0.5 border-primary     rounded-4xl p-5 mt-5  hover:bg-primary hover:text-black">
          <h4 className="text-2xl font-medium">Back-end</h4>
          <div className="w-full flex flex-wrap items-center mt-2 ">
            {backendSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 mr-3  ">
                <span className="text-base lg:text-lg">{skill}</span>
                {index !== backendSkills.length - 1 && (
                  <span className="text-3xl lg:text-5xl">/</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Skills.DisplayName="Skills"
export default Skills;
