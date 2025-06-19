import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  disabled?: boolean;
  download?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  type = 'button',
  primary = false,
  disabled = false,
  download = false,
  external = false,
  className = '',
  onClick,
}) => {
  const baseStyles = `inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`;
  
  const primaryStyles = primary
    ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600'
    : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-700 focus:ring-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-300';
  
  const disabledStyles = disabled
    ? 'opacity-70 cursor-not-allowed'
    : 'transform hover:-translate-y-1';
  
  const styles = `${baseStyles} ${primaryStyles} ${disabledStyles}`;
  
  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={styles}
        whileHover={{ y: disabled ? 0 : -4 }}
        whileTap={{ y: disabled ? 0 : 2 }}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      type={type}
      className={styles}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ y: disabled ? 0 : -4 }}
      whileTap={{ y: disabled ? 0 : 2 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;