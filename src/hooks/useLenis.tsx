import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis(disableScroll: boolean) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const disableScrollRef = useRef(disableScroll);

  useEffect(() => {
    disableScrollRef.current = disableScroll; // keep track of latest disableScroll value
  }, [disableScroll]);

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.1,
    });
    setLenis(lenisInstance);

    // Add RAF to keep checking for scroll updates
    const updateScroll = (time: number) => {
      if (!disableScrollRef.current) {
        lenisInstance.raf(time);
      }
      requestAnimationFrame(updateScroll);
    };

    requestAnimationFrame(updateScroll); // start the scroll loop

    return () => {
      lenisInstance.destroy(); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures it runs only on mount/unmount

  return lenis;
}
