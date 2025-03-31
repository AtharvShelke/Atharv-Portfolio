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
    <section ref={ref} className="flex flex-col items-center justify-center text-center py-8 w-[80%] sm:w-[60%] scroll-mt-[100rem]" id='home'>
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
        className="mt-14 px-4 text-lg sm:text-2xl font-normal leading-snug sm:leading-[1.4]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hey there, I'm <span className="font-bold">Atharv</span>. <br className="sm:hidden" />
        A passionate <span className="font-bold">Full-Stack Developer</span> crafting engaging
        <span className="font-bold"> web & mobile experiences</span>.
        <br />
        Focused on <span className="font-bold">React (Next.js)</span> & modern tech.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-8'>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none   hover:bg-gray-950  transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="border border-black/50 group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none    transition cursor-pointer "
          href="/Atharv_Shelke_Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="border border-black/50 bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full    transition cursor-pointer borderBlack "
          href="https://www.linkedin.com/in/atharv-shelke/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="border border-black/50 bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full   hover:text-gray-950  transition cursor-pointer borderBlack  "
          href="https://github.com/AtharvShelke"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;