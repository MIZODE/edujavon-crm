import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Book, User } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { useNavigate } from 'react-router-dom';

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { books, users } = useAppStore();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Escape to close
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    } else {
      setQuery(''); // Reset search when closed
    }
  }, [isOpen]);

  const filteredBooks = query ? books.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.id.toLowerCase().includes(query.toLowerCase())) : [];
  const filteredUsers = query ? users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()) || u.id.toLowerCase().includes(query.toLowerCase())) : [];

  const handleSelect = (path: string) => {
    setIsOpen(false);
    navigate(path);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-2xl bg-[#18181B]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative z-10 flex flex-col"
          >
            <div className="flex items-center px-4 border-b border-white/10 relative shrink-0">
              <Search className="text-[#24A1DE] ml-2" size={20} />
              <input 
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Kitob yoki A'zolarni izlang..."
                className="flex-1 bg-transparent h-16 px-4 text-lg text-white placeholder-slate focus:outline-none font-bold"
              />
              <span className="text-[10px] uppercase font-label bg-white/5 border border-white/10 px-2 py-1 rounded text-slate">esc</span>
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-[#24A1DE]" style={{ width: query ? '100%' : '0%', transition: 'width 0.3s' }}></div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10">
              {query === '' ? (
                <div className="p-8 text-center text-slate flex flex-col items-center">
                  <Search size={48} className="opacity-20 mb-4" />
                  <p className="font-label uppercase tracking-widest text-xs">Nimani izlaymiz?</p>
                </div>
              ) : (
                <div className="py-2">
                  {filteredBooks.length > 0 && (
                    <div className="mb-4">
                      <p className="px-4 text-[10px] uppercase tracking-widest font-label text-slate mb-2">Kitoblar asari</p>
                      {filteredBooks.map(b => (
                        <button key={b.id} onClick={() => handleSelect(`/books/${b.id}`)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group text-left">
                           <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded flex items-center justify-center text-accent"><Book size={18} /></div>
                           <div>
                             <p className="font-bold text-white group-hover:text-accent transition-colors">{b.title}</p>
                             <p className="font-ui text-xs text-slate">{b.id} • {b.category}</p>
                           </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {filteredUsers.length > 0 && (
                    <div>
                      <p className="px-4 text-[10px] uppercase tracking-widest font-label text-slate mb-2">Tizim a'zolari</p>
                      {filteredUsers.map(u => (
                        <button key={u.id} onClick={() => handleSelect(`/users/${u.id}`)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group text-left">
                           <div className="w-10 h-10 bg-[#24A1DE]/10 border border-[#24A1DE]/20 rounded-full flex items-center justify-center text-[#24A1DE]"><User size={18} /></div>
                           <div>
                             <p className="font-bold text-white group-hover:text-[#24A1DE] transition-colors">{u.name}</p>
                             <p className="font-ui text-xs text-slate">{u.id} • {u.role}</p>
                           </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {filteredBooks.length === 0 && filteredUsers.length === 0 && (
                    <p className="text-center text-slate py-8 text-sm">Hech qanday natija topilmadi.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-white/5 bg-[#09090B] flex justify-between shrink-0">
              <div className="flex gap-4">
                <span className="text-[10px] text-slate font-label uppercase tracking-widest flex items-center gap-1"><span className="bg-white/10 px-1.5 rounded text-white">Cmd+K</span> o'chirib yoqish</span>
                <span className="text-[10px] text-slate font-label uppercase tracking-widest flex items-center gap-1"><span className="bg-white/10 px-1.5 rounded text-white text-xs leading-none">↵</span> tanlash</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
