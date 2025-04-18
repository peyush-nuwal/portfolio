import { motion } from 'motion/react';
import React from 'react'

const Achievement = () => {
  // const certificates = [
  //   {
  //     title: "ReactJS Certificate",
  //     provider: "HackerRank",
  //     date: "Jan 2024",
  //     link: "#",
  //     message: "View",
  //   },
  //   {
  //     title: "JavaScript Essentials",
  //     provider: "Codecademy",
  //     date: "Dec 2023",
  //     link: "#",
  //     message: "Completed",
  //   },
  //   {
  //     title: "CSS Mastery",
  //     provider: "freeCodeCamp",
  //     date: "Nov 2023",
  //     link: "#",
  //     message: "eted",
  //   },
  //   {
  //     title: "NodeJS Certification",
  //     provider: "Udemy",
  //     date: "Feb 2024",
  //     link: "#",
  //     message: "View",
  //   },
  // ];

  return (
    <div className={`w-full min-h-[50vh] h-fit `}>
      {" "}
      <motion.h1
        whileHover="hover"
        className=" w-fit text-accent font-bold  text-3xl lg:text-5xl px-4 lg:px-8 py-1 mb-0 mb-5 lg:mb-16 group overflow-hidden cursor-pointer hover:text-accent about_h1 flex gap-1  items-center mix-blend-difference"
      >
        <span className="inline-block stroke-text text-background group-hover:text-accent text-4xl  lg:text-6xl ">
          /
        </span>
        <div className="h-10 lg:h-12  flex flex-col overflow-hidden ">
          <motion.span
            variants={{
              hover: { y: "-100%" },
            }}
            initial={{ y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block "
          >
            what I unlocked
          </motion.span>
          <motion.span
            variants={{
              hover: { y: "-100%" },
            }}
            initial={{ y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block"
          >
            My Achievements
          </motion.span>
        </div>
      </motion.h1>
      {/* certification section */}
       
    </div>
  );
}

export default Achievement

//  <div className=''>
//         {certificates.map((cert, index) => (
//           <motion.div
//             key={index}
//             whileHover="hover"
//             className={`relative w-full p-6 flex justify-between items-center border-b border-b-primary border-t   ${
//               index === 0 ? "border-t-primary" : "border-transparent"
//             } text-primary`}
//           >
//             <h3 className=" text-2xl font-semibold text-nowrap ">
//               {cert.title}
//             </h3>

//             <p className="text-base absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2  ">{`${cert.provider} — ${cert.date}`}</p>

//             <motion.a
//               href={cert.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className=" text-primary text-4xl mr-10 flex items-center justify-start gap-2"
//             >
//               <div className="w-full relative overflow-hidden">
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   variants={{ hover: { y: 0 } }}
//                   transition={{ duration: 0.3, ease: "easeInOut" }}
//                   className="block text-2xl w-full h-full  "
//                 >
//                   {cert.message}
//                 </motion.span>
//               </div>
//               <motion.span
//                 variants={{
//                   hover: { rotate: 90 },
//                 }}
//                 initial={{ rotate: 45 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="inline-block"
//               >
//                 <FaArrowUp />
//               </motion.span>
//             </motion.a>
//           </motion.div>
//         ))}
//       </div>