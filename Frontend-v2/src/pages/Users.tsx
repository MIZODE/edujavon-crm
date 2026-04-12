import { motion } from 'framer-motion';
import { Search, UserPlus, FileSpreadsheet, ShieldAlert } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Users() {
  const users = [
    { id: 'USR-8821', name: "Firdavs Asadov", role: "SuperAdmin", readingScore: 500, phone: "+998 90 123 45 67", joined: "12 Mar 2025" },
    { id: 'USR-3412', name: "Diyorbek (Manager)", role: "Manager", readingScore: 250, phone: "+998 99 876 54 32", joined: "15 Apr 2025" },
    { id: 'USR-1192', name: "Malika Nazarova", role: "Librarian", readingScore: 120, phone: "+998 33 000 11 22", joined: "01 May 2025" },
    { id: 'USR-5001', name: "Aziz Raximov", role: "Foydalanuvchi", readingScore: 10, phone: "+998 94 455 66 77", joined: "Bugun" },
    { id: 'USR-5002', name: "Sardor Ikromov", role: "Foydalanuvchi", readingScore: 80, phone: "+998 91 222 33 44", joined: "Kecha" },
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-heading text-4xl mb-2 text-white drop-shadow-md">A'zolar va Xodimlar</h1>
          <p className="text-[#A1A1AA] font-label text-sm uppercase tracking-widest">Tizimning barcha a'zolari bazasi</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="border-success/30 text-success rounded-xl h-10 px-4 font-label text-xs uppercase hover:bg-success/10">
            <FileSpreadsheet size={16} className="mr-2" /> Excel Export
          </Button>
          <Button variant="primary" className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] rounded-xl h-10 px-4 font-label text-xs uppercase shadow-[0_0_20px_rgba(36,161,222,0.4)]">
            <UserPlus size={16} className="mr-2" /> A'zo qo'shish
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
            placeholder="Ism, Telefon yoki ID orqali qidiruv..." 
            className="w-full bg-[#09090B] border border-white/5 rounded-xl h-12 pl-12 pr-4 text-sm font-label tracking-widest text-white placeholder-slate focus:outline-none focus:border-[#24A1DE]/50 focus:ring-1 focus:ring-[#24A1DE]/50 transition-all font-medium"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-slate font-label text-[10px] uppercase tracking-widest">
                <th className="pb-4 pr-4 font-bold">Foydalanuvchi</th>
                <th className="pb-4 px-4 font-bold">Rol</th>
                <th className="pb-4 px-4 font-bold">Telefon</th>
                <th className="pb-4 px-4 font-bold text-center">Score</th>
                <th className="pb-4 px-4 font-bold">Qo'shilgan sana</th>
                <th className="pb-4 pl-4 font-bold text-right">Harakat</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {users.map((user, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="py-4 pr-4">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-surface-2 to-surface-0 border border-white/10 flex items-center justify-center font-heading text-white shadow-lg group-hover:border-[#24A1DE]/50 transition-colors">
                         {user.name.charAt(0)}
                       </div>
                       <div>
                         <p className="font-bold text-white mb-0.5">{user.name}</p>
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
                  <td className="py-4 px-4 font-ui text-[#A1A1AA]">{user.phone}</td>
                  <td className="py-4 px-4 font-number text-lg text-center text-white">{user.readingScore}</td>
                  <td className="py-4 px-4 text-slate text-xs uppercase tracking-widest">{user.joined}</td>
                  <td className="py-4 pl-4 text-right">
                    <button className="text-slate hover:text-[#24A1DE] transition-colors p-2 hover:bg-white/5 rounded-lg">
                      Tahrirlash
                    </button>
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
