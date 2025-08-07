'use client';
import SectionHeading from "./SectionHeading";
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";
import {  FaBrain, FaGamepad, FaRocket, FaHeart, FaLightbulb } from 'react-icons/fa';
import { HiAcademicCap, HiCode, HiSparkles } from 'react-icons/hi';

const About = () => {
    const { ref } = useSectionInView("About", 0.5);

    const journey = [
        { 
            icon: <HiAcademicCap />, 
            title: "CS Engineering Student", 
            desc: "Building strong foundations in computer science",
            color: "from-blue-500 to-cyan-500"
        },
        { 
            icon: <HiCode />, 
            title: "Full-Stack Developer", 
            desc: "Creating end-to-end web solutions",
            color: "from-purple-500 to-pink-500"
        },
        { 
            icon: <HiSparkles />, 
            title: "AI/ML Enthusiast", 
            desc: "Exploring the future of intelligent systems",
            color: "from-green-500 to-teal-500"
        },
    ];

    const values = [
        { icon: <FaLightbulb />, label: "Innovation", desc: "Always exploring new technologies" },
        { icon: <FaBrain />, label: "Problem Solving", desc: "Love tackling complex challenges" },
        { icon: <FaGamepad />, label: "Gaming", desc: "Relaxing through virtual adventures" },
    ];

    const achievements = [
        { number: "7+", label: "Projects Completed" },
        { number: "2+", label: "Years Learning" },
        { number: "∞", label: "Passion Level" },
    ];

    return (
        <motion.section
            ref={ref}
            className="mb-28 w-full max-w-6xl mx-auto px-4 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">About Me</h2>
            
            {/* Personal Introduction */}
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Hi! I'm a passionate CS Engineering student who believes in the power of code to 
                    <span className="font-semibold text-blue-600 dark:text-blue-400"> solve real-world problems</span>. 
                    My journey spans from building intuitive web applications to exploring the fascinating world of 
                    <span className="font-semibold text-purple-600 dark:text-purple-400"> Artificial Intelligence</span>.
                </p>
                
                {/* Achievement Stats */}
                <div className="flex justify-center gap-8 md:gap-12 mt-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {achievement.number}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                {achievement.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
                className="mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-2xl font-bold text-center mb-10 text-slate-900 dark:text-white">
                    My Journey
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {journey.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center relative overflow-hidden">
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} text-white mb-4`}>
                                        <div className="text-2xl">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                                        {step.title}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Values & Interests */}
            <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
                    What Drives Me
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-600"
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-3xl mb-4 text-blue-600 dark:text-blue-400">
                                {value.icon}
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                                {value.label}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-blue-200 dark:border-slate-600">
                    <div className="flex items-center justify-center gap-3 text-slate-700 dark:text-slate-300">
                        <FaRocket className="text-blue-500 text-xl" />
                        <span className="font-medium">Currently seeking internship opportunities to contribute and grow</span>
                        <FaHeart className="text-red-500 text-xl" />
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default About;
