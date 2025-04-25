"use client";
import Hero from "@/components/Hero";
import { useLayoutEffect, useRef, useState } from "react";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import About from "@/components/About";
import useLenis from "@/hooks/useLenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "@/components/Loader";
import Skills from "@/components/Skills";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import Marquee from "@/components/Marquee";

export default function Home() {
  const stickyElementRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [disableScroll, setDisableScroll] = useState(true);
  const lenis = useLenis(disableScroll);
  const [showContent, setShowContent] = useState(false);

  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: false,
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 4), 
      });
    }

    window.scrollTo(0, 0);
  };
  useLayoutEffect(() => {
    const page=pageRef.current
    
    if(!page)return;
   
    page.style.overflow = "hidden";
    handleScrollToTop();
  }, [lenis]);

  useGSAP(() => {
    const page = pageRef.current;
     

     if (!page) return;
    
     
    gsap.from(page, {
      duration: 7,
      onStart: () => {
        handleScrollToTop();
      },
      onComplete: () => {
        
        setDisableScroll(false);
        setShowContent(true);

        page.style.overflow = "";
      },
    });
    gsap.from(contentRef.current, {
      opacity: 0,
      delay: 6.9,
      duration: 0.1,
    });
  });


  return (
    <main ref={pageRef} className=" h-full w-full">
      <Loader />
      <Nav
        ref={stickyElementRef}
      
      />
      <Hero />
      {showContent && (
        <div ref={contentRef}>
          <section id="about">
            <About />
          </section>
          <Skills />
          <section id="service">
            <Services />
          </section>
          <section id="project">
            <Featured />
          </section>
          <Workflow />
          <Marquee />
          <section id="faq">
            <Faq />
          </section>
          <section id="contact">
            <Footer />
          </section>
        </div>
      )}

      {/* Cursor component*/}
      <Cursor stickyElementRef={stickyElementRef} />
    </main>
  );
}
