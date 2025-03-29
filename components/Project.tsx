"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLink } from "react-icons/bi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, link}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Optimize scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 ">
        
        {/* Text Content */}
        <div className=" pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <header>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </header>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          {link?(<a href={link} className="mt-1 leading-relaxed flex items-center gap-1"><BiLink/>{link}</a>):('')}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <Image
          src={imageUrl}
          alt={`Preview of ${title}`}
          quality={95}
          priority
          width={450}
          height={280}
          className="absolute hidden sm:block top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl transition 
            group-hover:scale-105 group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:-rotate-2
            group-even:group-hover:translate-x-4 group-even:group-hover:translate-y-4 group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
