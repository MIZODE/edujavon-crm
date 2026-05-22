import { motion } from 'framer-motion';
import { SearchNormal as Search, Warning2 as AlertCircle, Timer as History, Add as Plus } from 'iconsax-react';
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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold mb-1 text-ink drop-shadow-md">Ijaralar Monitoringi</h1>
          <p className="text-slate font-label text-xs font-medium uppercase tracking-widest">Kutubxonadan tashqaridagi kitoblar auditi</p>
        </div>
        
        <div className="flex gap-3">
          <Button onClick={() => setIsAdding(true)} variant="primary" className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] rounded-xl h-10 px-4 font-label text-[11px] font-medium uppercase tracking-widest shadow-[0_0_20px_rgba(36,161,222,0.4)]">
            <Plus color="currentColor" size={16} variant="Bulk" className="mr-2" /> Yangi Ijara
          </Button>
          <Button 
            onClick={() => setFilterType(filterType === 'Overdue' ? 'All' : 'Overdue')}
            variant="outline" 
            className={`border-error/30 text-error rounded-xl h-10 px-4 font-label text-[11px] font-medium uppercase tracking-widest hover:bg-error/10 ${filterType === 'Overdue' ? 'bg-error/10' : ''}`}
          >
            <AlertCircle color="currentColor" size={16} variant="Bulk" className="mr-2" /> Kechikkanlar (<span className="font-bold">{overdueCount}</span>)
          </Button>
          <Button variant="outline" className="border-surface-light text-ink hover:bg-surface-border rounded-xl h-10 px-4 font-label text-[11px] font-medium uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <History color="currentColor" size={16} variant="Bulk" className="mr-2" /> Arxivi
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
            placeholder="Ijara ID, Foydalanuvchi qismi yoki Kitob nomi..." 
            className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 pl-12 pr-4 text-[13px] font-label font-medium tracking-wide text-ink placeholder-slate focus:outline-none focus:border-error/50 focus:ring-1 focus:ring-error/50 transition-all"
          />
        </div>

        {/* Desktop View Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-surface-border text-slate font-label text-[11px] font-medium uppercase tracking-widest">
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
                <tr key={i} className="border-b border-surface-border hover:bg-surface-border/50 transition-colors border-l-4 group" style={{ borderLeftColor: rent.status === 'Overdue' ? '#EF4444' : rent.status === 'Active' ? '#24A1DE' : 'transparent' }}>
                  <td className="py-4 pr-4 pl-4 font-ui text-sage text-xs font-medium">{rent.id}</td>
                  <td className="py-4 px-4 font-bold text-ink">
                    {rent.user}
                  </td>
                  <td className="py-4 px-4 text-slate">{rent.book}</td>
                  <td className="py-4 px-4">
                     <div className="flex flex-col">
                       <span className="font-label text-sage text-[10px] font-medium uppercase tracking-widest">Olingan: {rent.date}</span>
                       <span className={`text-[13px] font-semibold ${rent.status === 'Overdue' ? 'text-error' : 'text-ink'}`}>Tugaydi: {rent.dueDate}</span>
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
                          className="bg-surface-border/50 hover:bg-surface-border text-ink font-label text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-md border border-surface-border transition-colors"
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

        {/* Mobile View: Touch-friendly Card List */}
        <div className="grid grid-cols-1 gap-4 md:hidden mt-2">
          {filteredRents.map((rent, i) => (
            <div 
              key={i} 
              className="bg-surface-1 border border-surface-border p-4 rounded-xl flex flex-col gap-4 border-l-4 group" 
              style={{ borderLeftColor: rent.status === 'Overdue' ? '#EF4444' : rent.status === 'Active' ? '#24A1DE' : 'transparent' }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-ui text-slate text-[10px] font-medium block">{rent.id}</span>
                  <h4 className="font-heading text-sm font-bold text-ink mt-1">{rent.user}</h4>
                  <p className="text-xs text-slate mt-0.5">{rent.book}</p>
                </div>
                <span className={`inline-flex px-2 py-1 rounded text-[9px] uppercase tracking-widest font-black ${
                  rent.status === 'Active' ? 'bg-[#24A1DE]/15 text-[#24A1DE] border border-[#24A1DE]/20' : 
                  rent.status === 'Overdue' ? 'bg-error/15 text-error border border-error/20' :
                  'bg-slate/15 text-slate border border-slate/20'
                }`}>
                  {rent.status}
                </span>
              </div>

              <div className="flex justify-between items-end border-t border-surface-border/40 pt-3">
                <div className="text-[10px] text-slate font-label uppercase tracking-widest flex flex-col gap-0.5">
                  <span>Olingan: {rent.date}</span>
                  <span className={rent.status === 'Overdue' ? 'text-error font-bold animate-pulse' : ''}>Tugaydi: {rent.dueDate}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {rent.fine > 0 && (
                    <span className="text-error font-number text-xs font-bold mr-2">{rent.fine.toLocaleString()} UZS</span>
                  )}
                  {rent.status !== 'Returned' && (
                    <button 
                      onClick={() => handleReturn(rent.id, rent.dueDate)}
                      className="bg-surface-border/50 hover:bg-surface-border text-ink font-label text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-md border border-surface-border transition-colors focus:outline-none"
                    >
                      Qaytarish
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <SlideOver isOpen={isAdding} onClose={() => setIsAdding(false)} title="Yangi Ijara Shartnomasi">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-2">
            <label className="text-[10px] text-slate uppercase tracking-widest font-label ml-2">Foydalanuvchi</label>
            <select 
              required
              className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink font-bold focus:border-[#24A1DE] focus:outline-none"
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
              className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink font-bold focus:border-[#24A1DE] focus:outline-none"
              value={formData.book} onChange={(e) => setFormData({...formData, book: e.target.value})}
            >
              <option value="">Kitobni tanlang</option>
              {books.map(b => <option key={b.id} value={b.id}>{b.title} (Nusxalar: {b.copies})</option>)}
            </select>
          </div>
          
          <div className="pt-6 border-t border-surface-light flex justify-end gap-3 mt-8">
             <Button type="button" variant="outline" className="border-surface-border text-ink" onClick={() => setIsAdding(false)}>Bekor qilish</Button>
             <Button type="submit" variant="primary" className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] border-none font-bold">Ijarani Boshlash</Button>
          </div>
        </form>
      </SlideOver>
    </div>
  );
}
