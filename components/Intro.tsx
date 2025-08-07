'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from '@/lib/hooks';

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.3);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 scroll-mt-28"
      id='home'
    >
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto">

        {/* Profile Picture with Enhanced Animation */}
        <motion.div
          className="relative mb-8 inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse scale-110"></div>

            {/* Profile Image */}
            <Image
              src="/my-profile.jpg"
              alt="Atharv's Profile Picture"
              width={300}
              height={300}
              quality={100}
              priority
              className="relative w-full h-full rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-2xl"
            />

            {/* Waving Hand Emoji */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 140, delay: 0.5 }}
              className="absolute -bottom-2 -right-2 text-4xl sm:text-5xl bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg border-2 border-slate-200 dark:border-slate-700"
            >
              👋
            </motion.span>
          </div>
        </motion.div>



        {/* Enhanced Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Atharv</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer</span> crafting
            exceptional digital experiences with modern technologies.
          </p>

          <p className="text-lg text-slate-500 dark:text-slate-400 mt-4">
            Specializing in <span className="font-medium">React</span>, <span className="font-medium">Next.js</span>, and <span className="font-medium">AI/ML</span>
          </p>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 flex items-center gap-3 rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Let&apos;s Connect
            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            className="group bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 px-8 py-4 flex items-center gap-3 rounded-2xl font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:scale-105 transition-all duration-300"
            href="/new_assets/AtharvShelke_Resume.pdf"
            download
          >
            Download Resume
            <HiDownload className="group-hover:translate-y-1 transition-transform" />
          </a>

          <div className="flex gap-4">
            <a
              className="group bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110 transition-all duration-300"
              href="https://www.linkedin.com/in/atharv-shelke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-xl text-blue-600" />
            </a>

            <a
              className="group bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110 transition-all duration-300"
              href="https://github.com/AtharvShelke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="text-xl text-slate-700 dark:text-slate-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
