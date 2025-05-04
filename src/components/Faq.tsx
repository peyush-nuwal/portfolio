import React, { useRef } from 'react'
import Question from './Question';
import Btn from './Btn';
import { FaArrowRight } from "react-icons/fa";
import {  FaRegCommentDots } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Qna } from '../../public/data/Qna';


gsap.registerPlugin(ScrollTrigger);




const Faq = () => {
  const sectionRef=useRef<HTMLDivElement | null>(null);

   useGSAP(()=>{
      const mm = gsap.matchMedia();
      const faqSection = sectionRef.current;
      if (!faqSection) return;
      mm.add("(min-width: 800px)", () => {

        const t1=gsap.timeline({
          scrollTrigger: {
            trigger: faqSection,
            start: "top 50%",
            end: "bottom 30%",
            toggleActions: "play none play reverse",
           
          }
          })

        t1.from(".faq-h1 span", {
          yPercent: 100,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        })
          .from(
            ".faq-question",
            {
              y: 50,
              opacity: 0,
              duration: 0.6,
              stagger: 0.2,
              ease: "power2.out",
            },
            "<"
          )
          .from(
            ".faq-p span span",
            {
              yPercent: 100,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.4"
          ).from(
            ".faq-btn span",
            {
              yPercent: 100,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.3"
          );
      });


      // ____mobile screen animation____
      mm.add("(max-width: 799px)", () => {
        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: faqSection,
            start: "top 50%",
            end: "bottom 30%",
            toggleActions: "play none play reverse",
           
          },
        });

        t2.from(".faq-h1 span", {
          yPercent: 100,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        })
         
          .from(
            ".faq-p span span",
            {
              yPercent: 100,
              duration: 0.3,
              ease: "power2.out",
            },
           
          )
          .from(
            ".faq-btn span",
            {
              yPercent: 100,
              duration: 0.3,
              ease: "power2.out",
            },
           
          )
           .from(
            ".faq-question",
            {
              y: 30,
              opacity: 0,
              duration: 0.4,
              stagger: 0.15,
              ease: "power2.out",
            },
            
          )
      });

   })
  return (
    <section id="faq"
      ref={sectionRef}
      className="text-primary h-fit lg:min-h-[70vh] lg:h-max  flex flex-col lg:flex-row px-4 lg:px-6 my-10 lg:my-16"
    >
      <div className="w-full lg:w-2/5 text-4xl lg:text-5xl font-semibold flex flex-col  p-0 lg:p-8">
        <h1 className="faq-h1 overflow-hidden ">
          <span className="block">Got Questions?</span>
        </h1>
        <h1 className="faq-h1 overflow-hidden">
          <span className="block">I&apos;ve Got Answers</span>
        </h1>
        <p className="faq-p text-sm lg:text-lg font-light text-primary/80 mt-1 lg:mt-4 max-w-md flex flex-wrap">
          {`These are some of the most common things people ask me — from what I do to what drives me. If you're curious, you'll find your answers here.`
            .split(" ")
            .map((word, index) => (
              <span key={index} className="block list-none overflow-hidden">
                <span className="inline-block ml-1">{word}</span>
              </span>
            ))}
        </p>
        <div className="faq-btn overflow-hidden">
          <span className="block ">
            <Btn
              title={
                <span className="flex items-center gap-2">
                  More FAQ <FaRegCommentDots />
                </span>
              }
              subTitle={
                <span className="flex items-center gap-2">
                  Let&apos;s Talk
                  <FaArrowRight />
                </span>
              }
              link={"https://www.linkedin.com/in/peyush-nuwal/"}
              type={"transparent"}
              titleStyle=" w-fit mt-0 lg:mt-4 text-base lg:text-xl "
            />
          </span>
        </div>
      </div>
      {/* -------question and answer--------- */}
      <div className="w-full lg:w-3/5 mt-6 lg:mt-10">
        {Qna.map((ques, index) => (
          <div className="faq-question overflow-hidden" key={index}>
            <Question question={ques.question} answer={ques.answer} />
          </div>
        ))}
      </div>
    </section>
  );
}

Faq.DisplayName='faq'
export default Faq