interface service{
     title:string,
     description:string,
     speed:number,
}
export const services: service[] = [
  {
    title: "Responsive Web Design",
    description:
      "Crafting sleek, mobile-friendly layouts that look great on all screen sizes using modern CSS techniques.",
    speed: 0.9,
  },
  {
    title: "Frontend Development",
    description:
      "Building dynamic and interactive UIs with React, Next.js, TypeScript, and animation libraries like GSAP and Framer Motion.",
    speed: 1.3,
  },
  {
    title: "UI/UX Enhancement",
    description:
      "Improving user experiences with subtle animations, hover effects, and intuitive navigation.",
    speed: 0.95,
  },
  {
    title: "Performance Optimization",
    description:
      "Boosting website speed by optimizing assets, lazy loading, and minimizing re-renders.",
    speed: 1.3,
  },
  {
    title: "Portfolio Projects",
    description:
      "Creating unique, animated, and polished projects that showcase creativity and coding skills.",
    speed: 1.25,
  },
];