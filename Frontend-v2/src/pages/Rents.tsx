import { motion } from 'framer-motion';
import { Search, AlertCircle, CalendarClock, History } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Rents() {
  const rents = [
    { id: 'RN-1029', user: "Aziz Raximov", book: "Clean Code", date: "05 Okt 2025", dueDate: "19 Okt 2025", status: 'Active', fine: 0 },
    { id: 'RN-6531', user: "Dilnoza Murodova", book: "Atomic Habits", date: "01 Okt 2025", dueDate: "15 Okt 2025", status: 'Active', fine: 0 },
    { id: 'RN-8812', user: "Sardor Ikromov", book: "Alkimyogar", date: "15 Sen 2025", dueDate: "29 Sen 2025", status: 'Overdue', fine: 15000 },
    { id: 'RN-1190', user: "Olim Olimov", book: "Harry Potter", date: "10 Sen 2025", dueDate: "24 Sen 2025", status: 'Returned', fine: 0 },
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="f lex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold mb-1 text-white drop-shadow-md">Ijaralar Monitoringi</h1>
          <p className="text-[#A1A1AA] font-label text-xs font-medium uppercase tracking-widest">Kutubxonadan tashqaridagi kitoblar auditi</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="border-error/30 text-error rounded-xl h-10 px-4 font-label text-[11px] font-medium uppercase tracking-widest hover:bg-error/10">
            <AlertCircle size={16} className="mr-2" /> Kechikkanlar (<span className="font-bold">12</span>)
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
            placeholder="Ijara ID, Foydalanuvchi gismi yoki Kitob nomi..." 
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
              {rents.map((rent, i) => (
                <tr key={i} className="border-b border-[white]/5 hover:bg-white/5 transition-colors border-l-4 group cursor-pointer" style={{ borderLeftColor: rent.status === 'Overdue' ? '#EF4444' : rent.status === 'Active' ? '#24A1DE' : 'transparent' }}>
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
                    <span className={`inline-flex px-3 py-1.5 rounded-md font-label text-[10px] font-bold uppercase tracking-widest ${
                      rent.status === 'Active' ? 'bg-[#24A1DE]/10 text-[#24A1DE] border border-[#24A1DE]/20' : 
                      rent.status === 'Overdue' ? 'bg-error/10 text-error border border-error/20 shadow-[0_0_15px_rgba(239,68,68,0.3)]' :
                      'bg-slate/10 text-slate border border-slate/20'
                    }`}>
                      {rent.status}
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
