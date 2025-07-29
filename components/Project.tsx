"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { BiCalendar } from "react-icons/bi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  link, 
  github,
  date 
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]); // Changed from [0.8, 1] to [0.9, 1]
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]); // Changed from [0.6, 1] to [0.7, 1]

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"> {/* Reduced rounded-3xl to rounded-2xl and shadow-2xl to shadow-xl */}
        
        {/* Image Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600">
          <Image
            src={imageUrl}
            alt={`Preview of ${title}`}
            quality={95}
            width={600} 
            height={300} 
            className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          
          {/* Overlay with Actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-4 right-4 flex gap-2"> 
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300 hover:scale-110" 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink size={16} /> {/* Reduced from size={20} to size={16} */}
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300 hover:scale-110" 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={16} /> {/* Reduced from size={20} to size={16} */}
                </motion.a>
              )}
            </div>
          </div>

          {/* Project Status Badge */}
          <div className="absolute top-4 left-4"> {/* Reduced from top-6 left-6 to top-4 left-4 */}
            <span className="px-2 py-1 text-xs font-medium bg-green-500/90 text-white rounded-full backdrop-blur-sm"> {/* Reduced padding */}
              Completed
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6"> {/* Reduced from p-8 to p-6 */}
          {/* Header */}
          <div className="flex items-start justify-between mb-3"> {/* Reduced from mb-4 to mb-3 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> {/* Reduced from text-2xl md:text-3xl to text-xl md:text-2xl */}
                {title}
              </h3>
              {date && (
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"> {/* Reduced from text-sm to text-xs */}
                  <BiCalendar size={14} /> {/* Reduced from size={16} to size={14} */}
                  <span>{date}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-base"> {/* Reduced from mb-6 text-lg to mb-4 text-base */}
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mb-4"> {/* Reduced from mb-6 to mb-4 */}
            <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider"> {/* Reduced from text-sm mb-3 to text-xs mb-2 */}
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5"> {/* Reduced from gap-2 to gap-1.5 */}
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-xl border border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform duration-200" 
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons - Mobile/Desktop */}
          <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-slate-200 dark:border-slate-600"> {/* Reduced from gap-3 pt-4 to gap-2 pt-3 */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm" 
              >
                <FiExternalLink size={14} /> {/* Reduced icon size */}
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-600 hover:scale-105 transition-all duration-300 text-sm" 
              >
                <FiGithub size={14} /> 
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
