'use client';
import { skillsData } from "@/lib/data"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiMongodb, SiGit, SiDocker, SiAmazon, SiVercel } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.3);

  const skillCategories = [
    {
      category: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: <SiReact />, level: 90, color: "text-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "text-gray-800 dark:text-white" },
        { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, color: "text-cyan-500" },
      ]
    },
    {
      category: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: 75, color: "text-green-600" },
        { name: "Python", icon: <SiPython />, level: 80, color: "text-yellow-500" },
        { name: "Java", icon: <FaJava />, level: 70, color: "text-red-500" },
        { name: "MongoDB", icon: <SiMongodb />, level: 75, color: "text-green-500" },
      ]
    },
    {
      category: "Tools & DevOps",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", icon: <SiGit />, level: 85, color: "text-orange-500" },
        { name: "Docker", icon: <SiDocker />, level: 65, color: "text-blue-600" },
       
        { name: "Vercel", icon: <SiVercel />, level: 80, color: "text-gray-800 dark:text-white" },
      ]
    }
  ];

  return (
    <section ref={ref} id="skills" className="mb-28 max-w-6xl mx-auto scroll-mt-28 px-4">
      <SectionHeading>Technical Skills</SectionHeading>
      
      <motion.p 
        className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My technical toolkit for building modern, scalable applications and solving complex problems.
      </motion.p>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="relative"
          >
            {/* Category Header */}
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                {category.category}
              </h3>
              <div className={`w-20 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center group cursor-pointer"
                >
                  {/* Skill Icon */}
                  <div className={`text-4xl ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    {skill.name}
                  </h4>
                  
                  {/* Proficiency Bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                    />
                  </div>
                  
                  {/* Proficiency Percentage */}
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-blue-200 dark:border-slate-600">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Always Learning 📚
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Currently exploring: <span className="font-semibold">Machine Learning</span>, <span className="font-semibold">Cloud Architecture</span>, and <span className="font-semibold">Advanced React Patterns</span>
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills;
