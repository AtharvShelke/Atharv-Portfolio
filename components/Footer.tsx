'use client';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="mb-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Atharv Shelke
            </div>
            <p className="text-slate-400">
              Full-Stack Developer & AI Enthusiast
            </p>
          </div>
          
          <div className="border-t border-slate-800 pt-6">
            <p className="text-sm text-slate-500 mb-2">
              &copy; 2025 Atharv Shelke. All rights reserved.
            </p>
            <p className="text-xs text-slate-600">
              Built with <span className="text-red-400">♥</span> using React, Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer;
