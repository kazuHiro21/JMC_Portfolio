import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : {}}
      className={`bg-slate-900 border border-slate-800 rounded-none p-6 transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
