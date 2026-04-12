import { motion } from 'framer-motion';
import { Search, Filter, Plus, ScanLine } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Books() {
  const books = [
    { id: 'ISBN-1029', title: "Clean Code", author: "Robert C. Martin", copies: 5, category: "Dasturlash", status: 'Mavjud' },
    { id: 'ISBN-6531', title: "Alkimyogar", author: "Paulo Coelho", copies: 2, category: "Badiiy", status: 'Mavjud' },
    { id: 'ISBN-8812', title: "Kichkina Shahzoda", author: "Antuan de Sent-Ekzyuperi", copies: 0, category: "Bolalar", status: 'Tugagan' },
    { id: 'ISBN-1190', title: "Steve Jobs", author: "Walter Isaacson", copies: 3, category: "Biografiya", status: 'Mavjud' },
    { id: 'ISBN-9921', title: "Atomic Habits", author: "James Clear", copies: 12, category: "Rivojlanish", status: 'Mavjud' }
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-heading text-4xl mb-2 text-white drop-shadow-md">Kitoblar Katalogi</h1>
          <p className="text-[#A1A1AA] font-label text-sm uppercase tracking-widest">Kutubxonadagi barcha asarlar bazasi</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="border-white/10 text-white rounded-xl h-10 px-4 font-label text-xs uppercase hover:bg-white/5">
            <Filter size={16} className="mr-2" /> Filtr
          </Button>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 rounded-xl h-10 px-4 font-label text-xs uppercase shadow-[0_0_15px_rgba(255,214,0,0.2)]">
            <ScanLine size={16} className="mr-2" /> Barkod Skaner
          </Button>
          <Button variant="primary" className="bg-accent text-black hover:bg-[#E6C200] rounded-xl h-10 px-4 font-label text-xs uppercase shadow-[0_0_20px_rgba(255,214,0,0.4)]">
            <Plus size={16} className="mr-2" /> Yangi qo'shish
          </Button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#18181B]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
      >
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate" size={18} />
          <input 
            type="text" 
            placeholder="ISBN, Sarlavha yoki Muallif bo'yicha qidiruv..." 
            className="w-full bg-[#09090B] border border-white/5 rounded-xl h-12 pl-12 pr-4 text-sm font-label tracking-widest text-white placeholder-slate focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-medium"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-slate font-label text-[10px] uppercase tracking-widest">
                <th className="pb-4 pr-4 font-bold">ISBN Kode</th>
                <th className="pb-4 px-4 font-bold">Asar Nomi</th>
                <th className="pb-4 px-4 font-bold">Muallif</th>
                <th className="pb-4 px-4 font-bold text-center">Nusxalar</th>
                <th className="pb-4 pl-4 font-bold text-right">Holat</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {books.map((book, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="py-4 pr-4 font-ui text-slate text-xs">{book.id}</td>
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-10 bg-surface-2 rounded flex items-center justify-center text-xs opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0">📖</div>
                    {book.title}
                  </td>
                  <td className="py-4 px-4 text-[#A1A1AA]">{book.author}</td>
                  <td className="py-4 px-4 font-number text-lg text-center text-white">{book.copies}</td>
                  <td className="py-4 pl-4 text-right">
                    <span className={`inline-flex px-3 py-1 rounded-md font-label text-[10px] uppercase tracking-widest font-black ${
                      book.status === 'Mavjud' ? 'bg-success/10 text-success border border-success/20' : 'bg-error/10 text-error border border-error/20'
                    }`}>
                      {book.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
