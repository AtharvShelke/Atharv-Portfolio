'use client';
import { experiencesData } from "@/lib/data";
import SectionHeading from "./SectionHeading"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();
    const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

    // Handle screen size detection
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScreenSize('mobile');
            } else if (width < 1024) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        // Set initial size
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    // Responsive animation variants using state instead of window
    const getItemVariants = (index: number) => ({
        hidden: { 
            opacity: 0, 
            x: screenSize === 'desktop' ? (index % 2 === 0 ? -50 : 50) : 0,
            y: screenSize === 'mobile' ? 50 : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    });

    // Responsive styles based on state
    const getContentStyle = () => ({
        background: theme === 'dark' 
            ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' 
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        boxShadow: theme === 'dark'
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: theme === 'dark' 
            ? '1px solid rgba(148, 163, 184, 0.2)' 
            : '1px solid rgba(148, 163, 184, 0.1)',
        textAlign: "left" as const,
        padding: screenSize === 'mobile' ? "1.25rem 1.5rem" : 
                screenSize === 'tablet' ? "1.5rem 2rem" : "2rem 2.5rem",
        borderRadius: screenSize === 'mobile' ? "1rem" : "1.5rem",
        position: "relative" as const,
        overflow: "hidden" as const,
        margin: screenSize === 'mobile' ? "0 0 1rem 0" : undefined,
        width: screenSize === 'mobile' ? "calc(100% - 40px)" : undefined
    });

    const getIconStyle = () => ({
        background: theme === 'dark'
            ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
            : 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
        color: 'white',
        fontSize: screenSize === 'mobile' ? "1.25rem" : "1.5rem",
        width: screenSize === 'mobile' ? "40px" : "60px",
        height: screenSize === 'mobile' ? "40px" : "60px",
        boxShadow: theme === 'dark'
            ? '0 4px 15px -3px rgba(59, 130, 246, 0.3)'
            : '0 4px 15px -3px rgba(96, 165, 250, 0.3)',
        border: theme === 'dark' 
            ? `${screenSize === 'mobile' ? '2px' : '3px'} solid #1e293b` 
            : `${screenSize === 'mobile' ? '2px' : '3px'} solid white`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });

    return (
        <section ref={ref} id='experience' className="scroll-mt-28 mb-16 sm:mb-28 lg:mb-40 px-3 sm:px-4 lg:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-medium capitalize mb-8 text-center">Experience</h2>
                
                <motion.p 
                    className="text-center text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 lg:mb-12 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My journey through various roles and projects that have shaped my expertise in technology and development.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <VerticalTimeline 
                        lineColor={theme === 'dark' ? '#475569' : '#e2e8f0'}
                        animate={true}
                        className="vertical-timeline-custom"
                    > 
                        {experiencesData.map((exp, index) => (
                            <motion.div 
                                key={index} 
                                variants={getItemVariants(index)}
                            >
                                <VerticalTimelineElement
                                    position={screenSize === 'desktop' ? (index % 2 === 0 ? "left" : "right") : undefined}
                                    contentStyle={getContentStyle()}
                                    contentArrowStyle={{
                                        display: screenSize === 'mobile' ? 'none' : 'block',
                                        borderRight: index % 2 === 0 
                                            ? (theme === 'dark' ? "0.4rem solid #334155" : "0.4rem solid #f8fafc")
                                            : "none",
                                        borderLeft: index % 2 === 1 
                                            ? (theme === 'dark' ? "0.4rem solid #334155" : "0.4rem solid #f8fafc")
                                            : "none",
                                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                                    }}
                                    date={exp.date}
                                    dateClassName={`text-slate-600 dark:text-slate-300 font-medium text-xs sm:text-sm lg:text-base ${theme === 'dark' ? 'dark-theme-date' : ''}`}
                                    icon={exp.icon}
                                    iconStyle={getIconStyle()}
                                    iconClassName="experience-icon"
                                >
                                    {/* Background decoration - hide on mobile */}
                                    {screenSize !== 'mobile' && (
                                        <div className={`absolute top-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-4 ${
                                            index % 2 === 0 ? 'right-0 translate-x-4' : 'left-0 -translate-x-4'
                                        }`}></div>
                                    )}
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2 capitalize leading-tight">
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <p className="font-medium text-slate-700 dark:text-slate-300 !mt-0 text-sm sm:text-base">
                                                {exp.location}
                                            </p>
                                        </div>
                                        <p className="!mt-0 !font-normal text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                                            {exp.description}
                                        </p>
                                        
                                        {/* Skills/Technologies - responsive layout */}
                                        {exp.skills && (
                                            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                                                {exp.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-2 py-1 sm:px-3 sm:py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </VerticalTimelineElement>
                            </motion.div>
                        ))}
                    </VerticalTimeline>
                </motion.div>

                {/* Call to Action - Responsive */}
                <motion.div
                    className="text-center mt-8 sm:mt-12 lg:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 dark:border-slate-600 mx-4 sm:mx-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                            Ready for New Opportunities 🚀
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto">
                            I'm actively seeking internship and full-time opportunities to contribute to innovative projects.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                            >
                                Let's Connect
                            </a>
                            <a
                                href="/Atharv_Shelke_Resume.pdf"
                                download
                                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience;
