'use client';
import { links } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '@/context/theme-context';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="z-[999] relative">
      <motion.div 
        className="fixed w-full max-w-5xl left-1/2 -translate-x-1/2 top-6 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-2xl px-6 py-3 shadow-lg">
          {/* Logo */}
          <motion.div
            className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            AS
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {links.map((link, i) => (
                <motion.li key={i}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    className={clsx(
                      'px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium relative overflow-hidden group',
                      activeSection === link.name 
                        ? 'text-white' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    )} 
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {link.name === activeSection && (
                      <motion.div
                        layoutId="activeSection"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
