import { motion } from 'framer-motion';
import { MagnifyingGlass, UserPlus, FileXls } from '@phosphor-icons/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAppStore } from '../store/useAppStore';
import { useToastStore } from '../store/useToastStore';
import { useNotificationStore } from '../store/useNotificationStore';
import { SlideOver } from '../components/ui/SlideOver';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const { users, addUser } = useAppStore();
  const { addToast } = useToastStore();
  const { addNotification } = useNotificationStore();
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', phone: '', role: 'Foydalanuvchi'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({
      ...formData,
      id: `USR-${Math.floor(Math.random() * 9000) + 1000}`,
      readingScore: 0,
      joined: 'Bugun'
    });
    addToast(`${formData.name} tizimga a'zo qilindi!`, 'success');
    addNotification({
      title: "Yangi A'zo",
      message: `${formData.name} tizimga '${formData.role}' sifatida qo'shildi.`,
      type: "info"
    });
    setIsAdding(false);
    setFormData({ name: '', phone: '', role: 'Foydalanuvchi' });
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.phone.includes(searchQuery)
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-heading text-4xl mb-2 text-ink drop-shadow-md">A'zolar va Xodimlar</h1>
          <p className="text-slate font-label text-sm uppercase tracking-widest">Tizimning barcha a'zolari bazasi</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="border-success/30 text-success rounded-xl h-10 px-4 font-label text-xs uppercase hover:bg-success/10">
            <FileXls size={16} weight="duotone" className="mr-2" /> Excel Export
          </Button>
          <Button 
            onClick={() => setIsAdding(true)}
            variant="primary" 
            className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] rounded-xl h-10 px-4 font-label text-xs uppercase shadow-[0_0_20px_rgba(36,161,222,0.4)]"
          >
            <UserPlus size={16} weight="bold" className="mr-2" /> A'zo qo'shish
          </Button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-6 shadow-2xl transition-colors duration-500"
      >
        <div className="relative mb-6">
          <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate" size={18} weight="duotone" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ism, Telefon yoki ID orqali qidiruv..." 
            className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 pl-12 pr-4 text-sm font-label tracking-widest text-ink placeholder-slate focus:outline-none focus:border-[#24A1DE]/50 focus:ring-1 focus:ring-[#24A1DE]/50 transition-all font-medium"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-surface-border text-slate font-label text-[10px] uppercase tracking-widest">
                <th className="pb-4 pr-4 font-bold">Foydalanuvchi</th>
                <th className="pb-4 px-4 font-bold">Rol</th>
                <th className="pb-4 px-4 font-bold">Telefon</th>
                <th className="pb-4 px-4 font-bold text-center">Score</th>
                <th className="pb-4 px-4 font-bold">Qo'shilgan sana</th>
                <th className="pb-4 pl-4 font-bold text-right">Harakat</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredUsers.map((user, i) => (
                <tr 
                  key={i} 
                  onClick={() => navigate(`/users/${user.id}`)}
                  className="border-b border-surface-border hover:bg-surface-border/50 transition-colors group cursor-pointer"
                >
                  <td className="py-4 pr-4 pl-4">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-surface-2 to-surface-0 border border-surface-light flex items-center justify-center font-heading text-ink shadow-lg group-hover:border-[#24A1DE]/50 transition-colors">
                         {user.name.charAt(0)}
                       </div>
                       <div>
                         <p className="font-bold text-ink mb-0.5">{user.name}</p>
                         <p className="font-ui text-[10px] text-slate">{user.id}</p>
                       </div>
                     </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-3 py-1 rounded-md font-label text-[10px] uppercase tracking-widest font-black ${
                      user.role === 'SuperAdmin' ? 'bg-accent/10 text-accent border border-accent/20' : 
                      user.role === 'Manager' ? 'bg-[#24A1DE]/10 text-[#24A1DE] border border-[#24A1DE]/20' : 
                      user.role === 'Librarian' ? 'bg-success/10 text-success border border-success/20' : 
                      'bg-slate/10 text-slate border border-slate/20'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-ui text-sage">{user.phone}</td>
                  <td className="py-4 px-4 font-number text-lg text-center text-ink">{user.readingScore}</td>
                  <td className="py-4 px-4 text-slate text-xs uppercase tracking-widest">{user.joined}</td>
                  <td className="py-4 pl-4 text-right">
                    <button className="text-slate hover:text-[#24A1DE] transition-colors p-2 hover:bg-surface-border rounded-lg">
                      Tahrirlash
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <SlideOver isOpen={isAdding} onClose={() => setIsAdding(false)} title="Tizimga A'zo Qo'shish">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input 
            floating label="To'liq ismi" placeholder="Ism va Familiya" required 
            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <Input 
            floating label="Telefon Raqam" placeholder="+998" required
            value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <div className="space-y-1">
            <label className="text-[10px] text-slate uppercase tracking-widest font-label ml-2">Tizimdagi Roli</label>
            <select 
              className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink font-label text-sm uppercase tracking-widest focus:border-[#24A1DE] focus:outline-none"
              value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="Foydalanuvchi">Foydalanuvchi</option>
              <option value="Librarian">Kutubxonachi</option>
              <option value="Manager">Filial Boshqaruvchisi</option>
            </select>
          </div>
          
          <div className="pt-6 border-t border-surface-light flex justify-end gap-3 mt-8">
             <Button type="button" variant="outline" className="border-surface-border text-ink" onClick={() => setIsAdding(false)}>Bekor qilish</Button>
             <Button type="submit" variant="primary" className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] border-none font-bold">A'zoni Saqlash</Button>
          </div>
        </form>
      </SlideOver>
    </div>
  );
}
