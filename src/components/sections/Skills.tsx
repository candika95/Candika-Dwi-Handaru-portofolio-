import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../lib/data';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-zinc-800/30 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/10 rounded-full filter blur-3xl" />
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-purple-100/30 dark:bg-purple-900/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Skills & Expertise</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 capitalize">
                {category}
              </h3>
              
              <div className="space-y-4">
                {skillList.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: inView ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full rounded-full ${getSkillColor(skill.level)}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          {/* <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 text-center mb-8">
            Additional Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Agile', 'UI/UX Design', 'Responsive Design', 'Testing', 'SEO', 'Performance Optimization', 'Accessibility'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white dark:bg-zinc-800 rounded-full shadow-sm text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
              >
                {skill}
              </motion.span>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to determine skill bar color based on level
const getSkillColor = (level: number): string => {
  if (level >= 90) return 'bg-green-500 dark:bg-green-400';
  if (level >= 75) return 'bg-blue-500 dark:bg-blue-400';
  if (level >= 60) return 'bg-purple-500 dark:bg-purple-400';
  if (level >= 40) return 'bg-yellow-500 dark:bg-yellow-400';
  return 'bg-orange-500 dark:bg-orange-400';
};

export default Skills;