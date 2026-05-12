import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'status' | 'outline' | 'solid';
  color?: 'success' | 'warning' | 'error' | 'info' | 'default';
  dot?: boolean;
  pulse?: boolean;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'status', color = 'default', dot, pulse, children, ...props }, ref) => {
    const colors = {
      success: 'bg-success/10 text-success border-success/20',
      warning: 'bg-warning/10 text-warning border-warning/20',
      error: 'bg-error/10 text-error border-error/20',
      info: 'bg-info/10 text-info border-info/20',
      default: 'bg-surface-2 text-ink border-surface-2',
    };
    
    const solidColors = {
      success: 'bg-success text-white border-transparent',
      warning: 'bg-warning text-white border-transparent',
      error: 'bg-error text-white border-transparent',
      info: 'bg-info text-white border-transparent',
      default: 'bg-ink text-white border-transparent',
    }

    const dotColors = {
      success: 'bg-success',
      warning: 'bg-warning',
      error: 'bg-error',
      info: 'bg-info',
      default: 'bg-slate',
    };

    const isSolid = variant === 'solid';

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-label font-bold uppercase tracking-wider',
          variant === 'outline' ? 'border-2 bg-transparent' : 'border border-transparent',
          isSolid ? solidColors[color] : colors[color],
          className
        )}
        {...props}
      >
        {dot && (
          <span className="mr-1.5 flex h-2 w-2 relative">
            {pulse && (
              <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", dotColors[color])}></span>
            )}
            <span className={cn("relative inline-flex rounded-full h-2 w-2", dotColors[color])}></span>
          </span>
        )}
        {children}
      </div>
    );
  }
);
Badge.displayName = 'Badge';
