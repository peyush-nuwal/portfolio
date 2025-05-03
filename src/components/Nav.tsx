"use client";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import React, {  useRef, forwardRef } from "react";
import { gsap } from "gsap";
import Magentic from "./Magentic";
import QuickLinks from "./QuickLinks";
import { useScroll } from "@/Context/ScrollContext";
import { social } from "../../public/data/Social";
import { navOptions } from "../../public/data/Navigation";



type NavProps = {
  navOpen: boolean;
  setNavOpen: (val: boolean) => void;
};




const Nav = forwardRef<HTMLDivElement, NavProps>(
  ({ navOpen, setNavOpen }, ref) => {
    
    const navRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLDivElement | null>(null);

    const { scrollToSection } = useScroll();

    const toggleMenu = () => {
    setNavOpen(!navOpen);
    };

    useGSAP(() => {
      const mm = gsap.matchMedia();
      gsap.to(navRef.current, {
        y: 64,
        delay: 8.5,
        duration: 1.5,
        ease: "easeIn",
      });

      if (navOpen) {
        mm.add(
          {
            // desktop
            isDesktop: "(min-width: 801px)",
            // mobile/tablet
            isMobile: "(max-width: 800px)",
          },
          (context) => {
            const { isMobile } = context.conditions as {
              isDesktop: boolean;
              isMobile: boolean;
            };

            if (navOpen) {
              const t1 = gsap.timeline();
              t1.to(menuRef.current, {
                height: isMobile ? "100vh" : "75vh",
                duration: 1.2,
                ease: "power2.inOut",
              })
                .fromTo(
                  videoRef.current,
                  { width: 0 },
                  {
                    width: "auto",
                    duration: 0.8,
                    ease: "power2.inOut",
                  }
                )
                .fromTo(
                  ".nav-links span",
                  { yPercent: 100 },
                  {
                    yPercent: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                  },
                  "<"
                )
                .fromTo(
                  ".nav-socials span",
                  { yPercent: 150 },
                  {
                    yPercent: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                  },
                  "<"
                )
                .to(".nav-cover", {
                  display: "none",
                });
            }
          }
        );
      } else {
        const t1 = gsap.timeline();
        t1.to(".nav-cover", {
          display: "block",
        })
          .to(
            videoRef.current,
            {
              width: 0,
              duration: 0.8,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(
            ".nav-links span",
            {
              yPercent: 100,
              duration: 0.5,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(
            ".nav-socials span",
            {
              yPercent: 100,
              duration: 0.5,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(menuRef.current, {
            height: 0,
            duration: 1.2,
            ease: "power2.inOut",
          });
      }
    }, [navOpen]);

    return (
      <>
        <div
          ref={navRef}
          className="fixed z-[999] -top-16 left-0 h-16 w-screen  flex justify-end items-center px-4 lg:px-6  "
        >
          <Magentic>
            <div
              ref={ref}
              onClick={toggleMenu}
              className="relative z-[999]   flex flex-col justify-center gap-2  w-12 h-12 cursor-pointer group  mix-blend-difference"
            >
              <motion.div
                initial={{ y: [0, 0, 0], rotate: [0, 0, 0] }}
                animate={
                  navOpen
                    ? { y: [0, 6, 6], rotate: [0, 0, 45] }
                    : { y: [6, 6, 0], rotate: [45, 0, 0] }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`  w-12 h-1 ${
                  navOpen ? "bg-background" : "bg-primary"
                } rounded-full  pointer-events-none  group-hover:bg-background transition-colors duration-150 ease-linear mix-blend-difference`}
              />
              <motion.div
                initial={{ y: [0, 0, 0], rotate: [0, 0, 0] }}
                animate={
                  navOpen
                    ? { y: [0, -6, -6], rotate: [0, 0, -45] }
                    : { y: [-6, -6, 0], rotate: [-45, 0, 0] }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`w-12 h-1  ${
                  navOpen ? "bg-background" : "bg-primary"
                }  rounded-full pointer-events-none  transition-colors group-hover:bg-background duration-150 ease-linear mix-blend-difference`}
              />
              <div className=" absolute top-0 right-0 w-16 h-16 hover:scale-200  " />
            </div>
          </Magentic>
        </div>
        <div
          ref={menuRef}
          className=" fixed top-0 left-0 z-[990] h-0  w-full bg-primary flex flex-row lg:flex-col overflow-hidden"
        >
          <div
            className={`h-90 w-full flex flex-col lg:flex-row justify-evenly items-end  ${
              !navOpen && "pointer-event-none select-none"
            } `}
          >
            <div className="w-full lg:w-1/2  h-1/2 lg:h-full   flex items-center justify-start  pl-[5%] ">
              <div ref={videoRef} className=" w-[50%] h-[50%]  overflow-hidden">
                <video
                  src="https://raw.githubusercontent.com/peyush-nuwal/portfolio/master/public/ODETARI.mp4
"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-center  shrink-0 object-cover"
                ></video>
              </div>
            </div>
            <div className="relative z-5 w-full lg:w-1/2  h-1/2 lg:h-full  flex flex-col  pl-[5%] lg:pl-0 justify-center  ">
              {navOptions.map((opt, idx) => (
                <QuickLinks
                  key={idx}
                  name={opt.name}
                  link={opt.path}
                  icon={false}
                  type="route"
                  onClick={() => {
                    toggleMenu();
                    if (opt.path.startsWith("#"))
                      scrollToSection(opt.path.slice(1));
                  }}
                  className="nav-links text-5xl w-fit   lg:text-7xl -mt-2  font-bold border-none pb-0 my-0"
                />
              ))}
              <div className="nav-cover absolute top-0 left-0 z-10  w-full h-full pointer-events-auto  bg-transparent0"></div>
            </div>
          </div>
          <div className="h-full lg:h-[10%]   w-fit lg:w-[98%] mx-auto border-t-none lg:border-t lg:border-t-background  px-2 flex flex-col lg:flex-row justify-start items-end lg:items-center   lg:justify-end  mt-[20%] lg:mt-0 lg:gap-3  ">
            {social.map((social, idx) => (
              <QuickLinks
                key={idx}
                name={social.name}
                link={social.url}
                type="url"
                className="w-full nav-socials text-lg  border-none !pb-0 !my-0 !-mt-3 lg:!mt-0 "
              />
            ))}
          </div>
        </div>
      </>
    );
  }
);

Nav.displayName = "Nav";
export default Nav;
