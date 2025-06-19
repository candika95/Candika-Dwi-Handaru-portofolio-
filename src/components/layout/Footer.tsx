import React from 'react';
import { socialLinks } from '../../lib/data';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-800/50 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              © Candika Dwi Handaru. All rights reserved.
            </motion.p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700/50 text-center"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Designed and built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;