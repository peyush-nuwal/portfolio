import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis(disableScroll: boolean) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    setLenis(lenisInstance); // Store Lenis instance

    const updateScroll = (time: number) => {
      if (!disableScroll) lenisInstance.raf(time);
    };

    function raf(time: number) {
      updateScroll(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, [disableScroll]);

  return lenis; // Return Lenis instance so we can use lenis.scrollTo()
}
