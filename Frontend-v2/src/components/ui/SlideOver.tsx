import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react';
import React, { useEffect } from 'react';

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function SlideOver({ isOpen, onClose, title, children }: SlideOverProps) {
  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Slide Over Panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0.5 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface-1 border-l border-surface-border shadow-[0_0_50px_rgba(0,0,0,0.8)] z-50 flex flex-col"
          >
            {/* Header */}
            <div className="h-20 border-b border-surface-border flex items-center justify-between px-6 bg-surface-2 transition-colors duration-500">
              <h2 className="font-heading text-2xl text-ink">{title}</h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-surface-border flex items-center justify-center text-slate hover:text-ink transition-colors focus:outline-none"
              >
                <X size={20} weight="bold" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-surface-0 relative transition-colors duration-500">
              {/* Internal glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
