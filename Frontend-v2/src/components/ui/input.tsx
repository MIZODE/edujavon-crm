import { type InputHTMLAttributes, forwardRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { Eye, EyeOff } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  floating?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, floating, type, id, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    const [showPassword, setShowPassword] = useState(false);
    
    const isPassword = type === 'password';
    const currentType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
      <div className={cn('relative w-full', className)}>
        {!floating && label && (
          <label htmlFor={inputId} className="block text-sm font-label font-medium text-slate mb-1">
            {label}
          </label>
        )}
        
        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            type={currentType}
            className={cn(
              'peer flex h-12 w-full rounded-input border bg-surface-card px-3 py-2 text-sm text-ink placeholder-transparent',
              'shadow-sm focus-visible:outline-none focus-visible:border-accent focus-visible:ring-4 focus-visible:ring-accent/10 transition-all',
              'disabled:cursor-not-allowed disabled:opacity-50 font-body',
              error ? 'border-error focus-visible:border-error focus-visible:ring-error/20' : 'border-surface-2 hover:border-slate/30',
              floating && 'pt-5 pb-1',
              isPassword && 'pr-10',
              !floating && 'placeholder-slate/50'
            )}
            placeholder={floating ? label : props.placeholder}
            {...props}
          />
          
          {floating && label && (
            <label
              htmlFor={inputId}
              className={cn(
                'absolute left-3 top-3 -translate-y-1/2 text-sm text-slate transition-all pointer-events-none font-label font-medium',
                'peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base',
                'peer-focus:top-3 peer-focus:text-xs peer-focus:text-accent'
              )}
            >
              {label}
            </label>
          )}

          {isPassword && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate hover:text-ink transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>

        {(error || helperText) && (
          <p className={cn('mt-1 text-xs font-label', error ? 'text-error' : 'text-slate')}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
