// import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Linkedin, Download } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15
      }
    }
  };

  const circle1Variants = {
    animate: {
      scale: [1, 1.2, 1],
      x: [-10, 10, -10],
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const circle2Variants = {
    animate: {
      scale: [1, 1.3, 1],
      x: [10, -10, 10],
      y: [10, -10, 10],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 overflow-hidden">
      {/* Enhanced Background with Rotating Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
        <motion.div
          variants={circle1Variants}
          animate="animate"
          className="absolute top-20 left-1/4 w-72 h-72 bg-blue-200/20 dark:bg-blue-400/10 rounded-full filter blur-3xl"
        />
        <motion.div
          variants={circle2Variants}
          animate="animate"
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-200/20 dark:bg-purple-400/10 rounded-full filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column with Staggered Text */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                Available for Internships
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Candika</span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-zinc-700 dark:text-zinc-300 mb-6">
              Lifelong Learner
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg">
              I craft innovative solutions using cutting-edge technologies, driven by a passion for technology and continuous learning.            </motion.p>
            {/* Buttons with Hover Effects */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mt-6"
            >
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Button href="#contact" primary>
                  <span>Get in touch</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05, rotate: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Button href="/resume.pdf" download>
                  <Download size={16} className="mr-2" />
                  <span>Download Resume</span>
                </Button>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Button href="https://linkedin.com/in/candika-dwi-handaru" external>
                  <Linkedin size={16} className="mr-2" />
                  <span>LinkedIn</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column with Enhanced Image Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.4, type: 'spring', bounce: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <img
                src="/AZA048671.jpg"
                alt="Profile"
                className="absolute inset-4 object-cover rounded-full border-8 border-white dark:border-zinc-800 shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} className="text-zinc-500 dark:text-zinc-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;