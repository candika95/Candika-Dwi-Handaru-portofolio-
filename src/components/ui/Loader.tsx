import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-zinc-900 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5
          }}
          className="w-16 h-16 mx-auto mb-4"
        >
          <div className="w-full h-full rounded-full border-4 border-t-blue-600 border-r-purple-600 border-b-teal-600 border-l-blue-200 dark:border-l-blue-900 animate-spin" />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-700 dark:text-zinc-300 font-medium"
        >
          Loading Portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;