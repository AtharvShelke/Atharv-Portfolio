'use client';
import { links } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div 
        className="fixed w-full md:w-4/5 max-w-[95%] sm:max-w-[36rem] left-1/2 -translate-x-1/2 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-md md:top-6 top-4 h-[3.25rem] rounded-full flex items-center justify-center px-3"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="w-full">
          <ul className="flex items-center justify-center flex-nowrap gap-2 text-[0.9rem] font-medium text-gray-500">
            {links.map((link, i) => (
              <motion.li key={i}
                className="h-full flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link 
                  className={clsx(
                    'flex min-w-[60px] items-center justify-center px-2 py-2 rounded-full transition hover:text-gray-950 relative',
                    { "text-gray-950": activeSection === link.name }
                  )} 
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="bg-gray-200 rounded-full absolute inset-0 -z-10"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
