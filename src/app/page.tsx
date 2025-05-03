"use client";
import Hero from "@/components/Hero";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const pageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const stickyElementRef = useRef<HTMLDivElement | null>(null);

  const [navOpen, setNavOpen] = useState<boolean>(false)
  const [disableScroll, setDisableScroll] = useState(true);
  const [loading, setLoading] = useState(true);

  const lenis = useLenis(disableScroll);
   

  useGSAP(() => {
    if (!pageRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setDisableScroll(false);
        setLoading(false);
        pageRef.current!.style.overflow = "";
      },
    });

    tl.to({}, { duration: 6 }) // fake 6s loading
      .to(contentRef.current, { opacity: 1, duration: 0.5 }, "-=0.1");
  }, []);

  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: false,
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 4), 
      });
    }

   
  };

  

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
        setLoading(false);

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
      <Nav ref={stickyElementRef} navOpen={navOpen} setNavOpen={setNavOpen} />
      <section id="hero">
        <Hero />
      </section>
      {loading === false && (
        <div ref={contentRef}>
          <section id="about">
            <About />
          </section>
          <Skills />
          <section id="service">
            <Services />
          </section>
          <section id="projects">
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





