import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, educationData } from '../../lib/data';

interface TimelineItemProps {
  title: string;
  period: string;
  organization: string;
  location: string;
  description: string;
  index: number;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  period,
  organization,
  location,
  description,
  index,
  isLeft,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`mb-12 flex flex-col md:flex-row justify-between items-center w-full ${
        isLeft ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="order-1 w-full md:w-5/12"></div>

      <div className="z-10 flex items-center order-1 bg-blue-600 dark:bg-blue-500 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
      </div>

      <motion.div
        whileHover={{ y: -5 }}
        className="order-1 bg-white dark:bg-zinc-800 rounded-lg shadow-md w-full md:w-5/12 px-6 py-4"
      >
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">{title}</h3>
        <h4 className="text-blue-600 dark:text-blue-400 font-medium">{organization}</h4>
        <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 flex justify-between flex-wrap">
          <span>{location}</span>
          <span>{period}</span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug tracking-wide">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/10 rounded-full filter blur-3xl" />
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 bg-purple-100/30 dark:bg-purple-900/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Experience & Education</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 text-center mb-8"
          >
            Experience
          </motion.h3>

          <div className="relative wrap overflow-hidden p-4">
            <div className="hidden md:block absolute h-full border-2 border-blue-200 dark:border-blue-900/30 left-1/2 transform -translate-x-1/2"></div>

            {experienceData.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 text-center mb-8"
          >
            Education
          </motion.h3>

          <div className="relative wrap overflow-hidden p-4">
            <div className="hidden md:block absolute h-full border-2 border-purple-200 dark:border-purple-900/30 left-1/2 transform -translate-x-1/2"></div>

            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
