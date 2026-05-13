import { motion } from 'framer-motion';
import { SearchNormal as Search, FilterSearch as Filter, Add as Plus, Scan, Book as BookOpen } from 'iconsax-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAppStore } from '../store/useAppStore';
import { useToastStore } from '../store/useToastStore';
import { useNotificationStore } from '../store/useNotificationStore';
import { SlideOver } from '../components/ui/SlideOver';
import { BarcodeScanner } from '../components/ui/BarcodeScanner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Books() {
  const { books, addBook } = useAppStore();
  const { addToast } = useToastStore();
  const { addNotification } = useNotificationStore();
  const [isAdding, setIsAdding] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    id: '', title: '', author: '', copies: 1, category: 'Badiiy'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBook({
      ...formData,
      id: formData.id || `ISBN-${Math.floor(Math.random() * 9000) + 1000}`,
      status: formData.copies > 0 ? 'Mavjud' : 'Tugagan'
    });
    addToast(`${formData.title} kitobi muvaffaqiyatli saqlandi!`, 'success');
    addNotification({
      title: "Yangi Kitob Kiritildi",
      message: `'${formData.title}' asari bazaga qo'shildi.`,
      type: "success"
    });
    setIsAdding(false);
    setFormData({ id: '', title: '', author: '', copies: 1, category: 'Badiiy' });
  };

  const handleScan = (result: string) => {
    // Topilgan barcode qidiruv inputiga yoziladi, state o'zgaradi.
    setSearchQuery(result);
    addToast(`${result} kodi skanerlandi!`, 'success');
  };

  const filteredBooks = books.filter(b => 
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-heading text-4xl mb-2 text-ink drop-shadow-md">Kitoblar Katalogi</h1>
          <p className="text-slate font-label text-sm uppercase tracking-widest">Kutubxonadagi barcha asarlar bazasi</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="border-surface-light text-ink rounded-xl h-10 px-4 font-label text-xs uppercase hover:bg-surface-border">
            <Filter color="currentColor" size={16} variant="Bulk" className="mr-2" /> Filtr
          </Button>
          <Button onClick={() => setIsScannerOpen(true)} variant="outline" className="border-accent text-accent hover:bg-accent/10 rounded-xl h-10 px-4 font-label text-xs uppercase shadow-[0_0_15px_rgba(255,214,0,0.2)]">
            <Scan color="currentColor" size={16} variant="Bulk" className="mr-2" /> Barkod Skaner
          </Button>
          <Button 
            onClick={() => setIsAdding(true)}
            variant="primary" 
            className="bg-accent text-black hover:bg-[#E6C200] rounded-xl h-10 px-4 font-label text-xs uppercase shadow-[0_0_20px_rgba(255,214,0,0.4)]"
          >
            <Plus color="currentColor" size={16} variant="Bulk" className="mr-2" /> Yangi qo'shish
          </Button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-6 shadow-2xl transition-colors duration-500"
      >
        <div className="relative mb-6">
          <Search color="currentColor" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate" size={18} variant="Bulk" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ISBN, Sarlavha yoki Muallif bo'yicha qidiruv..." 
            className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 pl-12 pr-4 text-sm font-label tracking-widest text-ink placeholder-slate focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-medium"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-surface-border text-slate font-label text-[10px] uppercase tracking-widest">
                <th className="pb-4 pr-4 font-bold">ISBN Kode</th>
                <th className="pb-4 px-4 font-bold">Asar Nomi</th>
                <th className="pb-4 px-4 font-bold">Muallif</th>
                <th className="pb-4 px-4 font-bold text-center">Nusxalar</th>
                <th className="pb-4 pl-4 font-bold text-right">Holat</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredBooks.map((book, i) => (
                <tr 
                  key={i} 
                  onClick={() => navigate(`/books/${book.id}`)}
                  className="border-b border-surface-border hover:bg-surface-border/50 transition-colors group cursor-pointer"
                >
                  <td className="py-4 pr-4 font-ui text-slate text-xs">{book.id}</td>
                  <td className="py-4 px-4 font-bold text-ink flex items-center gap-3">
                    <div className="w-8 h-10 bg-surface-1 border border-surface-light rounded flex items-center justify-center text-accent opacity-50 group-hover:opacity-100 group-hover:border-accent/40 shadow-lg transition-all flex-shrink-0">
                       <BookOpen color="currentColor" size={18} variant="Bulk" />
                    </div>
                    <div>
                      <p>{book.title}</p>
                      <p className="text-[10px] text-slate font-label uppercase tracking-widest mt-0.5">{book.category}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate">{book.author}</td>
                  <td className="py-4 px-4 font-number text-lg text-center text-ink">{book.copies}</td>
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

      <SlideOver isOpen={isAdding} onClose={() => setIsAdding(false)} title="Yangi Asar Qo'shish">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input 
            floating label="ISBN Barkod" placeholder="ISBN-..." 
            value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})}
          />
          <Input 
            floating label="Asar sarlavhasi" placeholder="Kitob nomini kiriting" required 
            value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
          <Input 
            floating label="Muallif" placeholder="Kim tomonidan yozilgan?" required
            value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})}
          />
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
               <label className="text-[10px] text-slate uppercase tracking-widest font-label ml-2">Nusxalar soni</label>
               <input 
                 type="number" min="0" required
                 className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink font-number focus:border-accent focus:outline-none"
                 value={formData.copies} onChange={(e) => setFormData({...formData, copies: parseInt(e.target.value) || 0})}
               />
             </div>
             <div className="space-y-1">
               <label className="text-[10px] text-slate uppercase tracking-widest font-label ml-2">Kategoriya</label>
               <select 
                 className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink font-label text-sm uppercase tracking-widest focus:border-accent focus:outline-none"
                 value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
               >
                 <option value="Badiiy">Badiiy</option>
                 <option value="Dasturlash">Dasturlash</option>
                 <option value="Bolalar">Bolalar</option>
                 <option value="Psixologiya">Psixologiya</option>
               </select>
             </div>
          </div>
          <div className="pt-6 border-t border-surface-light flex justify-end gap-3 mt-8">
             <Button type="button" variant="outline" className="border-surface-border text-ink" onClick={() => setIsAdding(false)}>Bekor qilish</Button>
             <Button type="submit" variant="primary" className="bg-accent text-black font-bold hover:bg-gold">Ma'lumotlar bazasiga saqlash</Button>
          </div>
        </form>
      </SlideOver>

      <BarcodeScanner 
        isOpen={isScannerOpen} 
        onClose={() => setIsScannerOpen(false)} 
        onScan={handleScan} 
      />
    </div>
  );
}
