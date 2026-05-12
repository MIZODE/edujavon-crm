import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  loading?: boolean;
}

type MotionButtonProps = HTMLMotionProps<"button"> & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-accent text-black font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/40 border border-transparent',
      secondary: 'bg-surface-2 text-ink shadow-sm hover:shadow-md hover:bg-surface-1 border border-transparent',
      ghost: 'bg-transparent text-ink hover:bg-surface-1 border border-transparent',
      danger: 'bg-error text-white shadow-lg shadow-error/30 hover:shadow-xl hover:shadow-error/40 border border-transparent',
      outline: 'bg-transparent text-ink border border-ink/20 hover:border-ink/40 hover:bg-surface-1 shadow-sm',
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 py-2 font-medium',
      lg: 'h-12 px-8 text-lg font-medium',
      icon: 'h-10 w-10 flex items-center justify-center p-0',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          'inline-flex items-center justify-center rounded-btn transition-all font-label font-medium',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent',
          'disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
