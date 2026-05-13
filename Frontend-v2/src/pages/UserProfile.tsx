import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { motion } from 'framer-motion';
import { ArrowLeft2 as ArrowLeft, Award as Trophy, Radar as Target, ShieldSecurity as Shield, Book1 as Book, Clock as Clock } from 'iconsax-react';
import { Button } from '../components/ui/button';

export default function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAppStore(state => state.users.find(u => u.id === id));
  const userRents = useAppStore(state => state.rents.filter(r => r.user === user?.name));
  
  if (!user) return <div className="text-white p-8">Foydalanuvchi topilmadi</div>;

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
          <ArrowLeft color="currentColor" size={24} />
        </button>
        <div>
          <h1 className="font-heading text-3xl mb-1 text-white">{user.name}</h1>
          <p className="text-slate font-label text-sm uppercase tracking-widest">{user.role} — Tizimga kirish: {user.joined}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card & Gamification */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-1 bg-surface-2 rounded-2xl border border-white/10 p-6 flex flex-col items-center shadow-2xl relative overflow-hidden h-fit"
        >
           <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#24A1DE]/20 to-transparent"></div>
           
           <div className="w-24 h-24 rounded-full bg-surface-0 border-4 border-[#24A1DE] flex items-center justify-center font-heading text-4xl text-white shadow-[0_0_20px_rgba(36,161,222,0.3)] z-10 mb-4">
             {user.name.charAt(0)}
           </div>
           
           <h2 className="font-bold text-white text-xl mb-1">{user.name}</h2>
           <p className="text-slate text-sm font-label uppercase tracking-widest mb-6">{user.phone}</p>
           
           {/* Level System */}
           <div className="w-full bg-surface-1 p-4 rounded-xl border border-white/5 mb-6">
             <div className="flex justify-between items-end mb-2">
               <div>
                  <p className="text-slate text-[10px] uppercase font-label">Gamification XP</p>
                  <p className="font-number text-2xl text-accent font-bold">{user.readingScore} <span className="text-sm text-slate font-normal">XP</span></p>
               </div>
               <div className="flex items-center gap-1 text-[#FFD600]">
                  <Trophy color="currentColor" size={16} /> 
                  <span className="font-label text-xs font-bold">Lvl 3</span>
               </div>
             </div>
             
             {/* Progress bar */}
             <div className="w-full bg-surface-0 h-2 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${(user.readingScore / 1000) * 100}%` }}
                 className="h-full bg-gradient-to-r from-accent to-[#24A1DE]"
               />
             </div>
             <p className="text-right text-[10px] text-slate mt-1">1000 XP gacha {1000 - user.readingScore} XP qoldi</p>
           </div>
           
           {/* Badges */}
           <div className="w-full flex justify-between px-2 mb-4">
             <div className="flex flex-col items-center gap-2 group">
               <div className="w-10 h-10 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] group-hover:scale-110 transition-transform"><Book color="currentColor" size={18} /></div>
               <span className="text-[9px] text-slate font-label uppercase text-center">Tez O'quvchi</span>
             </div>
             <div className="flex flex-col items-center gap-2 group">
               <div className="w-10 h-10 rounded-full bg-[#FFD600]/10 border border-[#FFD600]/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform"><Target color="currentColor" size={18} /></div>
               <span className="text-[9px] text-slate font-label uppercase text-center">A'lochi</span>
             </div>
             <div className="flex flex-col items-center gap-2 group opacity-40 grayscale">
               <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><Shield color="currentColor" size={18} /></div>
               <span className="text-[9px] text-slate font-label uppercase text-center">Kitobkuyar</span>
             </div>
           </div>
        </motion.div>
        
        {/* Rents & History */}
        <div className="col-span-1 md:col-span-2">
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-surface-2/60 backdrop-blur border border-white/5 rounded-2xl shadow-xl h-full flex flex-col overflow-hidden"
           >
             <div className="p-6 border-b border-white/5 bg-surface-1 flex justify-between items-center">
               <h3 className="text-white font-label uppercase tracking-widest text-sm">Aktiv Ijaralar va Tarix</h3>
               <Button variant="primary" className="bg-[#24A1DE] text-white h-8 px-4 text-xs">Yangi Ijara</Button>
             </div>
             
             <div className="flex-1 p-6">
               {userRents.length === 0 ? (
                 <div className="h-full flex flex-col items-center justify-center text-slate">
                   <Clock color="currentColor" size={48} className="mb-4 opacity-20" />
                   <p>Foydalanuvchida hozircha ijaralar mavjud emas</p>
                 </div>
               ) : (
                 <div className="space-y-4">
                   {userRents.map((rent, i) => (
                     <div key={i} className={`p-4 rounded-xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
                       rent.status === 'Active' ? 'bg-[#24A1DE]/5 border-[#24A1DE]/20' : 
                       rent.status === 'Overdue' ? 'bg-error/5 border-error/20' : 
                       'bg-white/5 border-white/10'
                     }`}>
                       <div>
                         <span className="text-xs text-slate font-ui block mb-1">{rent.id}</span>
                         <p className="text-white font-bold">{rent.book}</p>
                         <p className="text-xs text-slate mt-1 flex items-center gap-2">
                           <span>Olingan: {rent.date}</span>
                           <span className="w-1 h-1 rounded-full bg-slate"></span>
                           <span className={rent.status === 'Overdue' ? 'text-error font-bold' : ''}>Tugaydi: {rent.dueDate}</span>
                         </p>
                       </div>
                       
                       <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                         <span className={`inline-flex px-3 py-1 rounded-md font-label text-[10px] uppercase tracking-widest font-black ${
                           rent.status === 'Active' ? 'bg-[#24A1DE]/10 text-[#24A1DE]' : 
                           rent.status === 'Overdue' ? 'bg-error/10 text-error' :
                           'bg-slate/10 text-slate'
                         }`}>
                           {rent.status}
                         </span>
                         
                         {rent.status === 'Overdue' && rent.fine > 0 && (
                           <p className="text-error font-number text-sm font-bold border border-error/30 bg-error/10 px-2 rounded">Jarima: {rent.fine} so'm</p>
                         )}
                       </div>
                     </div>
                   ))}
                 </div>
               )}
             </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
