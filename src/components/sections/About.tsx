import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';
import { aboutData } from '../../lib/data';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-800/30 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/10 rounded-full filter blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-purple-100/30 dark:bg-purple-900/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg transform rotate-3" />
              <img
                src="/foto1;1.JPG"
                alt="About Me"
                className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-xl transform -rotate-3"
              />
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Who I Am</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {aboutData.bio}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                {aboutData.mission}
              </p>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Education</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{aboutData.education}</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Experience</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{aboutData.experience}</p>
                </div>
              </motion.div>
              
              {/* <motion.div variants={itemVariants} className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                  <Award className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Achievements</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{aboutData.achievements}</p>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;