import { motion, AnimatePresence } from 'framer-motion';
import { useNotificationStore } from '../../store/useNotificationStore';
import { BellRing, ShieldAlert, CheckCircle, Info, CheckCheck } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const { notifications, markAsRead, markAllAsRead } = useNotificationStore();
  const panelRef = useRef<HTMLDivElement>(null);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute top-12 right-0 w-80 sm:w-96 bg-surface-1/95 backdrop-blur-3xl border border-surface-border rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col origin-top-right transition-colors duration-500"
        >
          <div className="flex items-center justify-between p-4 border-b border-surface-border bg-surface-2/50 transition-colors duration-500">
            <h3 className="font-bold text-ink flex items-center gap-2">
              <BellRing size={16} strokeWidth={2} className="text-[#24A1DE]" /> Bildirishnomalar
            </h3>
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="text-[10px] uppercase font-label tracking-widest text-[#24A1DE] hover:text-ink transition-colors flex items-center gap-1 focus:outline-none"
              >
                <CheckCheck size={12} strokeWidth={2} /> Barchasini o'qish
              </button>
            )}
          </div>
          
          <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-surface-border flex-col">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-slate flex flex-col items-center">
                <BellRing size={32} strokeWidth={2} className="opacity-20 mb-3" />
                <p className="text-sm">Hozircha hech qanday xabarlar yo'q</p>
              </div>
            ) : (
              <div className="divide-y divide-surface-border">
                {notifications.map((notif) => (
                  <div 
                    key={notif.id}
                    onClick={() => {
                       if (!notif.read) markAsRead(notif.id);
                    }}
                    className={`p-4 flex gap-4 cursor-pointer transition-colors ${notif.read ? 'bg-transparent opacity-60 hover:opacity-100 hover:bg-surface-border' : 'bg-surface-border/50 hover:bg-surface-border'}`}
                  >
                     <div className={`p-2 rounded-full h-fit flex-shrink-0 ${
                        notif.type === 'alert' ? 'bg-error/10 text-error' :
                        notif.type === 'success' ? 'bg-success/10 text-success' :
                        'bg-[#24A1DE]/10 text-[#24A1DE]'
                     }`}>
                         {notif.type === 'alert' && <ShieldAlert size={16} strokeWidth={2} />}
                         {notif.type === 'success' && <CheckCircle size={16} strokeWidth={2} />}
                         {notif.type === 'info' && <Info size={16} strokeWidth={2} />}
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                           <h4 className={`text-sm font-bold ${notif.read ? 'text-slate' : 'text-ink'}`}>{notif.title}</h4>
                           {!notif.read && <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1"></span>}
                        </div>
                        <p className={`text-xs ${notif.read ? 'text-slate/60' : 'text-slate'} mb-2 leading-relaxed`}>{notif.message}</p>
                        <span className="text-[10px] uppercase font-label tracking-widest text-slate/50">{notif.time}</span>
                     </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
