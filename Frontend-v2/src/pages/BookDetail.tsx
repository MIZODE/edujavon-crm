import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, Star, Clock, Copy, Edit3 } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useAppStore(state => state.books.find(b => b.id === id));
  
  if (!book) return <div className="text-white p-8">Kitob topilmadi</div>;

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="font-heading text-3xl mb-1 text-white">{book.title}</h1>
          <p className="text-slate font-label text-sm uppercase tracking-widest">{book.author} — {book.category}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-1 bg-surface-2 rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] pointer-events-none"></div>
           <div className="w-40 h-56 bg-surface-1 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative mb-6">
             <BookOpen size={48} className="text-accent/50 mb-4" />
             <p className="font-heading text-sm text-white px-2 leading-tight">{book.title}</p>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
           </div>
           
           <div className="w-full flex justify-between px-4 mt-2">
             <div className="text-center">
               <p className="text-slate text-[10px] uppercase font-label">Nusxalar</p>
               <p className="font-number text-2xl text-white">{book.copies}</p>
             </div>
             <div className="text-center">
               <p className="text-slate text-[10px] uppercase font-label">Reyting</p>
               <p className="font-number text-2xl text-accent flex items-center gap-1 justify-center"><Star size={14} fill="currentColor" /> 4.8</p>
             </div>
           </div>
           
           <Button variant="primary" className="w-full mt-6 bg-accent text-black font-bold h-12 uppercase text-sm">Ijara Berish</Button>
        </motion.div>
        
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-surface-1/60 backdrop-blur border border-white/5 p-6 rounded-2xl shadow-xl flex-1"
           >
             <div className="flex justify-between items-center mb-6">
               <h3 className="text-white font-label uppercase tracking-widest text-sm">Kutubxonadagi Nusxalari (Copies)</h3>
               <Button variant="outline" className="border-accent/30 text-accent h-8 px-3 text-[10px]"><Edit3 size={14} className="mr-2"/> Tahrirlash</Button>
             </div>
             
             <div className="space-y-3">
                {Array.from({length: book.copies > 3 ? 3 : Math.max(1, book.copies)}).map((_, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Copy size={16} className="text-slate" />
                      <div>
                        <p className="text-white font-ui text-xs">{book.id}-CP{i+1}</p>
                        <p className="text-slate text-[10px]">Stelaj: A-12, Qator: 4</p>
                      </div>
                    </div>
                    <span className="text-success text-[10px] uppercase font-bold bg-success/10 px-2 py-1 rounded">Joyida</span>
                  </div>
                ))}
             </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }} transition={{delay: 0.1}}
             className="bg-surface-1/60 backdrop-blur border border-white/5 p-6 rounded-2xl shadow-xl"
           >
             <h3 className="text-white font-label uppercase tracking-widest text-sm mb-4">Ijara Tarixi (So'nggi 3 ta)</h3>
             <div className="divide-y divide-white/5">
                <div className="py-3 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-bold">Firdavs Asadov</span>
                    <span className="text-slate text-[10px] flex items-center gap-1"><Clock size={10}/> 12 Okt 2025 qaytargan</span>
                  </div>
                  <span className="text-success text-[10px] uppercase border border-success/30 px-2 py-1 rounded">Vaqtida</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-bold">Sardor Ikromov</span>
                    <span className="text-slate text-[10px] flex items-center gap-1"><Clock size={10}/> 05 Sen 2025 qaytargan</span>
                  </div>
                  <span className="text-error text-[10px] uppercase border border-error/30 px-2 py-1 rounded">Kechikkan (2 kun)</span>
                </div>
             </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
