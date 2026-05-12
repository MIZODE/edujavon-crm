import { motion, AnimatePresence } from 'framer-motion';
import { useToastStore } from '../../store/useToastStore';
import { TickCircle as CheckCircle, Warning2 as AlertCircle, InfoCircle as Info, CloseSquare as X } from 'iconsax-react';

export function ToastProvider() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed top-4 right-4 z-[200] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 min-w-[300px] border rounded-xl shadow-2xl backdrop-blur-xl ${
              toast.type === 'success' ? 'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]' :
              toast.type === 'error' ? 'bg-[#EF4444]/10 border-[#EF4444]/30 text-[#EF4444]' :
              'bg-[#24A1DE]/10 border-[#24A1DE]/30 text-[#24A1DE]'
            }`}
          >
            {toast.type === 'success' && <CheckCircle color="currentColor" size={20} variant="Bulk" />}
            {toast.type === 'error' && <AlertCircle color="currentColor" size={20} variant="Bulk" />}
            {toast.type === 'info' && <Info color="currentColor" size={20} variant="Bulk" />}
            
            <span className="flex-1 font-bold text-sm">{toast.message}</span>
            
            <button 
              onClick={() => removeToast(toast.id)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors opacity-70 hover:opacity-100 focus:outline-none"
            >
              <X color="currentColor" size={14} variant="Bulk" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
