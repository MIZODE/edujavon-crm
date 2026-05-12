import { motion, AnimatePresence } from 'framer-motion';
import { Scanner } from '@yudiel/react-qr-scanner';
import { CloseSquare as X, Scan } from 'iconsax-react';
import { useState } from 'react';

interface BarcodeScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (result: string) => void;
}

export function BarcodeScanner({ isOpen, onClose, onScan }: BarcodeScannerProps) {
  const [error, setError] = useState<string | null>(null);

  const handleScan = (result: string) => {
    if (result) {
      onScan(result);
      onClose(); // Automatically close after successful scan
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-surface-1 border border-surface-border rounded-3xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden flex flex-col transition-colors duration-500"
          >
            <div className="p-4 border-b border-surface-border flex justify-between items-center bg-surface-2 transition-colors duration-500">
              <div className="flex items-center gap-2 text-ink">
                <Scan color="currentColor" size={18} variant="Bulk" className="text-[#24A1DE]" />
                <h3 className="font-heading text-lg font-bold">Barkod Skaner</h3>
              </div>
              <button onClick={onClose} className="p-2 text-slate hover:text-ink hover:bg-surface-border rounded-full transition-colors focus:outline-none">
                <X color="currentColor" size={18} variant="Bulk" />
              </button>
            </div>
            
            <div className="p-6 relative flex-1 flex flex-col items-center justify-center bg-surface-0 min-h-[300px] transition-colors duration-500">
              {error ? (
                <div className="text-error text-center p-4 border border-error/20 bg-error/10 rounded-xl">
                  <p className="font-bold text-sm">Kameraga ulanishda xato!</p>
                  <p className="text-xs mt-1 opacity-80">{error}</p>
                </div>
              ) : (
                <div className="w-full max-w-[250px] aspect-square rounded-2xl overflow-hidden border-2 border-[#24A1DE] relative shadow-[0_0_30px_rgba(36,161,222,0.3)]">
                  <Scanner 
                    onScan={(result) => handleScan(result[0].rawValue)}
                    onError={(err: unknown) => {
                      const msg = err instanceof Error ? err.message : String(err);
                      setError(msg || 'Noma\'lum xatolik');
                    }}
                    components={{
                      onOff: true,
                      torch: true
                    }}
                  />
                  {/* Scanning Animation line */}
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-0 right-0 h-0.5 bg-accent shadow-[0_0_10px_#FFA500] z-20 pointer-events-none"
                  />
                </div>
              )}
              
              <p className="text-center text-slate text-xs mt-6 px-4">
                Kitobning orqa tomonidagi ISBN shtrixkodini kvadrat markaziga tuting.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
