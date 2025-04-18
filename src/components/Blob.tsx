import { motion } from "framer-motion";

export default function Blob() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full absolute top-0 left-0 z-0 pointer-events-none"
    >
      {/* Main Blob */}
      <motion.path
        key="animated-blob"
        fill="#ec4e39"
        initial={{
          d: "M200,130 C280,100 320,170 310,220 C300,270 250,310 190,300 C140,290 90,240 100,180 C110,120 140,140 200,130 Z",
        }}
        animate={{
          d: [
            "M200,130 C280,100 320,170 310,220 C300,270 250,310 190,300 C140,290 90,240 100,180 C110,120 140,140 200,130 Z",
            "M200,130 C270,90 330,160 300,230 C290,280 240,310 180,290 C130,270 80,220 100,160 C130,120 150,130 200,130 Z",
            "M200,130 C280,110 330,180 310,220 C290,250 250,310 190,300 C140,290 90,250 110,190 C120,140 140,150 200,130 Z",
            "M200,130 C260,100 320,170 300,220 C280,280 240,300 190,290 C150,280 100,230 110,170 C120,130 140,140 200,130 Z",
            "M200,130 C280,100 320,170 310,220 C300,270 250,310 190,300 C140,290 90,240 100,180 C110,120 140,140 200,130 Z",
          ],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Small Blob 1 (Floating) */}
      <motion.circle
        cx="100"
        cy="70"
        r="18"
        fill="#ec4e39"
        animate={{
          cx: [100, 120, 110, 100],
          cy: [70, 90, 80, 70],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Blob 2 (Merging & popping out) */}
      <motion.circle
        cx="250"
        cy="160"
        r="10"
        fill="#ec4e39"
        animate={{
          cx: [250, 220, 200, 250],
          cy: [160, 180, 200, 160],
          r: [10, 8, 0, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Blob 3 (Floating) */}
      <motion.circle
        cx="290"
        cy="320"
        r="14"
        fill="#ec4e39"
        animate={{
          cx: [290, 280, 300, 290],
          cy: [320, 310, 300, 320],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Blob 4 (Merging) */}
      <motion.circle
        cx="160"
        cy="260"
        r="12"
        fill="#ec4e39"
        animate={{
          cx: [160, 180, 200, 160],
          cy: [260, 240, 200, 260],
          r: [12, 10, 0, 12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Blob 5 (Floating) */}
      <motion.circle
        cx="320"
        cy="100"
        r="8"
        fill="#ec4e39"
        animate={{
          cx: [320, 330, 310, 320],
          cy: [100, 110, 90, 100],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* New Small Blob 6 (Merging and Shrinking) */}
      <motion.circle
        cx="350"
        cy="180"
        r="20"
        fill="#ec4e39"
        animate={{
          cx: [350, 330, 320, 350],
          cy: [180, 190, 180, 180],
          r: [20, 18, 10, 20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* New Small Blob 7 (Floating & Moving Away) */}
      <motion.circle
        cx="70"
        cy="250"
        r="15"
        fill="#ec4e39"
        animate={{
          cx: [70, 50, 60, 70],
          cy: [250, 230, 240, 250],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* New Small Blob 8 (Merging & Expanding) */}
      <motion.circle
        cx="250"
        cy="100"
        r="12"
        fill="#ec4e39"
        animate={{
          cx: [250, 230, 210, 250],
          cy: [100, 120, 130, 100],
          r: [12, 14, 18, 12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Large Merging Blob 9 */}
      <motion.circle
        cx="180"
        cy="60"
        r="25"
        fill="#ec4e39"
        animate={{
          // starts at (180,60), moves into the main center (200,200), then returns
          cx: [180, 200, 180],
          cy: [60, 200, 60],
          // radius shrinks to 0 as it "merges" then grows back
          r: [25, 0, 25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large Merging Blob 10 */}
      <motion.circle
        cx="60"
        cy="180"
        r="30"
        fill="#ec4e39"
        animate={{
          // similar pattern but with a slightly different path
          cx: [60, 200, 60],
          cy: [180, 200, 180],
          r: [30, 0, 30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}
