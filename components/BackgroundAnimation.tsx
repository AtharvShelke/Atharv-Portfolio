"use client";

import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <>
      <motion.div
        className="bg-[#fbe2e3] fixed top-0 right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[69.75rem]"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="bg-[#dbd7fb] fixed top-0 left-0 h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[69.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        animate={{
          scale: [1, 1.05, 1],
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>
    </>
  );
}
