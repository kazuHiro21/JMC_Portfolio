import { forwardRef } from 'react';

export const Button = forwardRef(({ className = '', variant = 'primary', children, ...props }, ref) => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all active:scale-95 rounded-none border';
  const variants = {
    primary: 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40',
    ghost: 'bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white border',
    outline: 'bg-transparent border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 border',
  };

  return (
    <button ref={ref} className={`${base} ${variants[variant] ?? variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
});
