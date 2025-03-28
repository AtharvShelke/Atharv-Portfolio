'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from 'react';
import { useSectionInView } from '@/lib/hooks';
const Intro = () => {
   
    const {ref} = useSectionInView("Home", 0.3);
    return (
        <section ref={ref} className="flex flex-col items-center justify-center text-center py-8 w-[60%] scroll-mt-[100rem]" id='home'>
            {/* Profile Picture with Animation */}
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                >
                    <Image
                        src="/ghost_pfp.jpg"
                        alt="Atharv's Profile Picture"
                        width={192}
                        height={192}
                        quality={100}
                        priority
                        className="rounded-full border-[6px] border-white object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    />
                </motion.div>

                {/* Waving Hand Emoji */}
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 140, delay: 0.5 }}
                    className="absolute -bottom-2 -right-2 text-5xl drop-shadow-md"
                >
                    👋
                </motion.span>
            </div>

            {/* Introductory Text */}
            <motion.h1
                className="mt-14 px-6 sm:text-2xl font-bold leading-snug sm:leading-[1.4] "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                Hey there, I'm Atharv. <br className="sm:hidden" />
                A passionate Full-Stack Developer crafting engaging
                web & mobile experiences.
                <br />
                Focused on React (Next.js) & modern tech.
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-8'>
                <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                    Contact Me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition ' />
                </Link>
                <a href="/CV.pdf" className='group bg-white text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 active:scale-105 transition border border-black/10' download>Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>

                <a href="https://linkedin.com/AtharvShelke" className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-110 active:scale-105 transition border border-black/10' target='_blank'>
                    <BsLinkedin />
                </a>

                <a href="https://github.com/AtharvShelke" className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-110 active:scale-105 transition border border-black/10' target='_blank'>
                    <FaGithubSquare />
                </a>

            </motion.div>
        </section>
    );
};

export default Intro;