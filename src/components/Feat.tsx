import { useEffect, useRef } from "react";
import gsap from "gsap";



const awards = [
  {
    name: "Site of the Day",
    type: "Awwwards",
    project: "Aurora Design Studio",
    label: "See live",
  },
  {
    name: "Developer Awards",
    type: "Awwwards",
    project: "Nebula Portfolio",
    label: "See live",
  },
  {
    name: "Site of the Day",
    type: "Awwwards",
    project: "Lume Interactive",
    label: "See live",
  },
  {
    name: "Developer Awards",
    type: "Awwwards",
    project: "Zenith Agency",
    label: "See live",
  },
  {
    name: "Site of the Day",
    type: "Awwwards",
    project: "Echo Creative Lab",
    label: "See live",
  },
  {
    name: "Developer Awards",
    type: "Awwwards",
    project: "Stratos Webflow",
    label: "See live",
  },
  {
    name: "Site of the Day",
    type: "Awwwards",
    project: "Monarch Digital",
    label: "See live",
  },
  {
    name: "Developer Awards",
    type: "Awwwards",
    project: "Nexus Innovations",
    label: "See live",
  },
  {
    name: "Site of the Day",
    type: "Awwwards",
    project: "Flux Motion UI",
    label: "See live",
  },
  {
    name: "Developer Awards",
    type: "Awwwards",
    project: "Celestial UX",
    label: "See live",
  },
];
  

  
// Define fixed positions
const POSITIONS = {
  BOTTOM: 0,
  MIDDLE: -80,
  TOP: -160,
};

const Feat: React.FC = () => {
  const awardsListRef = useRef<HTMLDivElement>(null);
  const awardPreviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling.
 

    let lastMousePosition = { x: 0, y: 0 };
    let activeAward: HTMLElement | null = null;
    let ticking = false;
    let mouseTimeOut: number | null = null;

    const awardsList = awardsListRef.current;
    const awardPreview = awardPreviewRef.current;
    if (!awardsList || !awardPreview) return;

    // Remove preview images if the mouse is outside the awards list.
    const animatePreview = () => {
      const listRect = awardsList.getBoundingClientRect();
      if (
        lastMousePosition.x < listRect.left ||
        lastMousePosition.x > listRect.right ||
        lastMousePosition.y < listRect.top ||
        lastMousePosition.y > listRect.bottom
      ) {
        const imgs = awardPreview.querySelectorAll("img");
        imgs.forEach((img) => {
          gsap.to(img, {
            scale: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => img.remove(),
          });
        });
      }
    };

    // Update awards animations based on mouse position.
    const updateAwards = () => {
      animatePreview();
      if (activeAward) {
        const rect = activeAward.getBoundingClientRect();
        const isStillOver =
          lastMousePosition.x >= rect.left &&
          lastMousePosition.x <= rect.right &&
          lastMousePosition.y >= rect.top &&
          lastMousePosition.y <= rect.bottom;
        if (!isStillOver) {
          const wrapper = activeAward.querySelector(
            ".award-wrapper"
          ) as HTMLElement;
          const leavingFromTop =
            lastMousePosition.y < rect.top + rect.height / 2;
          gsap.to(wrapper, {
            y: leavingFromTop ? POSITIONS.TOP : POSITIONS.BOTTOM,
            duration: 0.4,
            ease: "power2.out",
          });
          activeAward = null;
        }
      }
      // For each award, if the mouse is over, animate its wrapper.
      const awardElements = document.querySelectorAll(".award");
      awardElements.forEach((award) => {
        if (award === activeAward) return;
        const rect = award.getBoundingClientRect();
        const isMouseOver =
          lastMousePosition.x >= rect.left &&
          lastMousePosition.x <= rect.right &&
          lastMousePosition.y >= rect.top &&
          lastMousePosition.y <= rect.bottom;
        if (isMouseOver) {
          const wrapper = award.querySelector(".award-wrapper") as HTMLElement;
          gsap.to(wrapper, {
            y: POSITIONS.MIDDLE,
            duration: 0.4,
            ease: "power2.out",
          });
          activeAward = award as HTMLElement;
        }
      });
      ticking = false;
    };

    // Update mouse position and schedule preview image cleanup.
    const onMouseMove = (e: MouseEvent) => {
      lastMousePosition.x = e.clientX;
      lastMousePosition.y = e.clientY;

      if (mouseTimeOut) clearTimeout(mouseTimeOut);
      mouseTimeOut = window.setTimeout(() => {
        const imgs = awardPreview.querySelectorAll("img");
        if (imgs.length > 1) {
          const lastImg = imgs[imgs.length - 1];
          imgs.forEach((img) => {
            if (img !== lastImg) {
              gsap.to(img, {
                scale: 0,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => img.remove(),
              });
            }
          });
        }
      }, 2000);

      animatePreview();
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateAwards);
        ticking = true;
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("scroll", onScroll, { passive: true });

    // Add mouseenter and mouseleave events to each award element.
    const awardElements = document.querySelectorAll(".award");
    awardElements.forEach((award, index) => {
      const wrapper = award.querySelector(".award-wrapper") as HTMLElement;
      let currentPosition = POSITIONS.TOP;
      
      // On mouse enter, animate wrapper and show preview.
      award.addEventListener("mouseenter", (e: MouseEvent) => {
        activeAward = award as HTMLElement;
        const rect = award.getBoundingClientRect();
        // (You can adjust the logic here if needed.)
        gsap.to(wrapper, {
          y: POSITIONS.BOTTOM,
          duration: 0.4,
          ease: "power2.out",
        });
        // Create and animate preview image.
        const img = document.createElement("img");
        img.src = `/bae/bae-${index + 1}.jpeg`;
        Object.assign(img.style, {
          position: "absolute",
          top: "0",
          left: "0",
          transform: "scale(0)",
          zIndex: Date.now().toString(),
        });
        awardPreview.appendChild(img);
        gsap.to(img, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      // On mouse leave, revert the wrapper animation.
      award.addEventListener("mouseleave", (e: MouseEvent) => {
        activeAward = null;
        const rect = award.getBoundingClientRect();
        const leavingFromTop = e.clientY < rect.top + rect.height / 2;
        currentPosition = leavingFromTop ? POSITIONS.TOP : POSITIONS.BOTTOM;
        gsap.to(wrapper, {
          y: currentPosition,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Intro Section */}
      <section className="intro flex justify-center items-center w-screen h-screen">
        <h1 className="text-[72px] font-extrabold uppercase leading-[0.9]">
          Intro
        </h1>
      </section>

      {/* Awards Section */}
      <section className="awards w-screen min-h-screen bg-white">
        <p className="p-5 uppercase text-xl font-bold">
          Recognition and Awards
        </p>
        <div
          ref={awardsListRef}
          className="awards-list border-t border-black"
        ></div>
        <div className="flex flex-col">
          {awards.map((award, index) => (
            <div
              key={index}
              className="award relative h-20"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <div
                className="award-wrapper relative h-60 transition-transform duration-400"
                style={{ transform: "translateY(-160px)" }}
              >
                <div className="award-name flex justify-center items-center h-20 p-1 cursor-pointer border-b border-black bg-[#e3e3db] text-black uppercase">
                  <h1>{award.name}</h1>
                  <h1>{award.type}</h1>
                </div>
                <div className="award-project flex justify-center items-center h-20 p-1 cursor-pointer border-b border-black uppercase">
                  <h1>{award.project}</h1>
                  <h1>{award.label}</h1>
                </div>
                <div className="award-name flex justify-center items-center h-20 p-1 cursor-pointer border-b border-black bg-[#e3e3db] text-black uppercase">
                  <h1>{award.name}</h1>
                  <h1>{award.type}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outro Section */}
      <section className="outro flex justify-center items-center w-screen h-screen">
        <h1 className="text-[72px] font-extrabold uppercase leading-[0.9]">
          Outro
        </h1>
      </section>

      {/* Award Preview Container */}
      <div
        ref={awardPreviewRef}
        className="award-preview fixed bottom-4 right-4 w-[30%] h-[30%] z-20"
      ></div>
    </div>
  );
};

export default Feat;
