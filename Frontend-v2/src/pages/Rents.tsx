import { motion } from 'framer-motion';
import { Search, AlertCircle, History, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useAppStore } from '../store/useAppStore';
import { useToastStore } from '../store/useToastStore';
import { useNotificationStore } from '../store/useNotificationStore';
import { SlideOver } from '../components/ui/SlideOver';
import { useState } from 'react';

export default function Rents() {
  const { rents, users, books, addRent, returnRent, settings } = useAppStore();
  const { addToast } = useToastStore();
  const { addNotification } = useNotificationStore();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Overdue'>('All');
  const [isAdding, setIsAdding] = useState(false);
  
  const [formData, setFormData] = useState({
    user: '', book: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedUser = users.find(u => u.id === formData.user);
    const selectedBook = books.find(b => b.id === formData.book);
    
    if (!selectedUser || !selectedBook) return;

    addRent({
      id: `RN-${Math.floor(Math.random() * 9000) + 1000}`,
      user: selectedUser.name,
      book: selectedBook.title,
      date: "Hozir",
      dueDate: "Kutilyapti",
      status: 'Active',
      fine: 0
    });
    
    addToast(`Ijara muvaffaqiyatli saqlandi!`, 'success');
    addNotification({
      title: "Yangi Ijara",
      message: `${selectedUser.name} '${selectedBook.title}' kitobini ijaraga oldi.`,
      type: "info"
    });
    setIsAdding(false);
    setFormData({ user: '', book: '' });
  };

  const handleReturn = (id: string, dueDate: string) => {
    // Basic fine logic placeholder: 
    // Usually we compare Date.now() to dueDate, but using mock here.
    const isLate = dueDate === "29 Sen 2025" || Math.random() > 0.7; 
    const calculatedFine = isLate ? settings.finePerDay * 2 : 0; // Simulated 2 days late
    
    returnRent(id, calculatedFine);
    addToast(`Ijara yakunlandi. Jarima: ${calculatedFine} so'm`, calculatedFine > 0 ? 'error' : 'success');
  };

  const overdueCount = rents.filter(r => r.status === 'Overdue').length;

  const filteredRents = rents.filter(r => {
    const matchesSearch = r.user.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.book.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'All' || r.status === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="f lex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold mb-1 text-white drop-shadow-md">Ijaralar Monitoringi</h1>
          <p className="text-[#A1A1AA] font-label text-xs font-medium uppercase tracking-widest">Kutubxonadan tashqaridagi kitoblar auditi</p>
        </div>
        
        <div className="flex gap-3">
          <Button onClick={() => setIsAdding(true)} variant="primary" className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] rounded-xl h-10 px-4 font-label text-[11px] font-medium uppercase tracking-widest shadow-[0_0_20px_rgba(36,161,222,0.4)]">
            <Plus size={16} className="mr-2" /> Yangi Ijara
          </Button>
          <Button 
            onClick={() => setFilterType(filterType === 'Overdue' ? 'All' : 'Overdue')}
            variant="outline" 
            className={`border-error/30 text-error rounded-xl h-10 px-4 font-label text-[11px] font-medium uppercase tracking-widest hover:bg-error/10 ${filterType === 'Overdue' ? 'bg-error/10' : ''}`}
          >
            <AlertCircle size={16} className="mr-2" /> Kechikkanlar (<span className="font-bold">{overdueCount}</span>)
          </Button>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-xl h-10 px-4 font-label text-[11px] font-medium uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <History size={16} className="mr-2" /> Arxivi
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ijara ID, Foydalanuvchi qismi yoki Kitob nomi..." 
            className="w-full bg-[#09090B] border border-white/5 rounded-xl h-12 pl-12 pr-4 text-[13px] font-label font-medium tracking-wide text-white placeholder-slate focus:outline-none focus:border-error/50 focus:ring-1 focus:ring-error/50 transition-all"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-[#71717A] font-label text-[11px] font-medium uppercase tracking-widest">
                <th className="pb-4 pr-4 font-bold">Ijara ID</th>
                <th className="pb-4 px-4 font-bold">Kutubxona A'zosi</th>
                <th className="pb-4 px-4 font-bold">Kitob Nomi</th>
                <th className="pb-4 px-4 font-bold">Sana / Muddat</th>
                <th className="pb-4 px-4 font-bold text-center">Jarima</th>
                <th className="pb-4 pl-4 font-bold text-right">Holat</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredRents.map((rent, i) => (
                <tr key={i} className="border-b border-[white]/5 hover:bg-white/5 transition-colors border-l-4 group" style={{ borderLeftColor: rent.status === 'Overdue' ? '#EF4444' : rent.status === 'Active' ? '#24A1DE' : 'transparent' }}>
                  <td className="py-4 pr-4 pl-4 font-ui text-[#A1A1AA] text-xs font-medium">{rent.id}</td>
                  <td className="py-4 px-4 font-bold text-white">
                    {rent.user}
                  </td>
                  <td className="py-4 px-4 text-slate">{rent.book}</td>
                  <td className="py-4 px-4">
                     <div className="flex flex-col">
                       <span className="font-label text-[#A1A1AA] text-[10px] font-medium uppercase tracking-widest">Olingan: {rent.date}</span>
                       <span className={`text-[13px] font-semibold ${rent.status === 'Overdue' ? 'text-error' : 'text-white'}`}>Tugaydi: {rent.dueDate}</span>
                     </div>
                  </td>
                  <td className="py-4 px-4 font-number text-xl font-semibold tracking-tight text-center">
                    {rent.fine > 0 ? (
                      <span className="text-error">{rent.fine.toLocaleString()} so'm</span>
                    ) : (
                      <span className="text-slate/50 font-normal">-</span>
                    )}
                  </td>
                  <td className="py-4 pl-4 text-right">
                    <div className="flex items-center justify-end gap-3 flex-wrap">
                      <span className={`inline-flex px-3 py-1.5 rounded-md font-label text-[10px] font-bold uppercase tracking-widest ${
                        rent.status === 'Active' ? 'bg-[#24A1DE]/10 text-[#24A1DE] border border-[#24A1DE]/20' : 
                        rent.status === 'Overdue' ? 'bg-error/10 text-error border border-error/20 shadow-[0_0_15px_rgba(239,68,68,0.3)]' :
                        'bg-slate/10 text-slate border border-slate/20'
                      }`}>
                        {rent.status}
                      </span>
                      {rent.status !== 'Returned' && (
                        <button 
                          onClick={() => handleReturn(rent.id, rent.dueDate)}
                          className="bg-white/5 hover:bg-white/10 text-white font-label text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-md border border-white/10 transition-colors"
                        >
                          Qaytarish
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <SlideOver isOpen={isAdding} onClose={() => setIsAdding(false)} title="Yangi Ijara Shartnomasi">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-2">
            <label className="text-[10px] text-slate uppercase tracking-widest font-label ml-2">Foydalanuvchi</label>
            <select 
              required
              className="w-full bg-[#09090B] border border-white/10 rounded-xl h-12 px-4 text-white font-bold focus:border-[#24A1DE] focus:outline-none"
              value={formData.user} onChange={(e) => setFormData({...formData, user: e.target.value})}
            >
              <option value="">A'zoni tanlang</option>
              {users.map(u => <option key={u.id} value={u.id}>{u.name} ({u.id})</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] text-slate uppercase tracking-widest font-label ml-2">Kitob(lar)</label>
            <select 
              required
              className="w-full bg-[#09090B] border border-white/10 rounded-xl h-12 px-4 text-white font-bold focus:border-[#24A1DE] focus:outline-none"
              value={formData.book} onChange={(e) => setFormData({...formData, book: e.target.value})}
            >
              <option value="">Kitobni tanlang</option>
              {books.map(b => <option key={b.id} value={b.id}>{b.title} (Nusxalar: {b.copies})</option>)}
            </select>
          </div>
          
          <div className="pt-6 border-t border-white/10 flex justify-end gap-3 mt-8">
             <Button type="button" variant="outline" className="border-white/10 text-white" onClick={() => setIsAdding(false)}>Bekor qilish</Button>
             <Button type="submit" variant="primary" className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] border-none font-bold">Ijarani Boshlash</Button>
          </div>
        </form>
      </SlideOver>
    </div>
  );
}
