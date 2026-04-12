import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { useToastStore } from '../store/useToastStore';
import { Settings as SettingsIcon, Shield, Sliders, Bell, LayoutGrid, Save } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';

export default function Settings() {
  const { settings, updateSettings } = useAppStore();
  const { addToast } = useToastStore();
  
  const [localSettings, setLocalSettings] = useState(settings);

  const handleSave = () => {
    updateSettings(localSettings);
    addToast('Tizim sozlamalari muvaffaqiyatli saqlandi!', 'success');
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-4xl mb-2 text-white drop-shadow-md">Tizim Sozlamalari</h1>
          <p className="text-[#A1A1AA] font-label text-sm uppercase tracking-widest">Kutubxona operatsiyalarini va tizim jarimalarini boshqarish</p>
        </div>
        <Button onClick={handleSave} variant="primary" className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] shadow-[0_0_20px_rgba(36,161,222,0.4)] px-6">
          <Save size={18} className="mr-2" /> Saqlash
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Nav */}
        <div className="col-span-1 bg-surface-2/60 backdrop-blur-xl border border-white/5 rounded-2xl p-4 h-fit shadow-2xl flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-bold transition-all border border-white/10">
             <Sliders size={18} className="text-[#24A1DE]" /> Umumiy Sozlamalar
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate hover:text-white transition-all border border-transparent">
             <Shield size={18} /> Rollar va Huquqlar
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate hover:text-white transition-all border border-transparent">
             <LayoutGrid size={18} /> Interfeys Tizimi
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate hover:text-white transition-all border border-transparent">
             <Bell size={18} /> Bildirishnomalar
          </button>
        </div>

        {/* Settings Content */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
           
           {/* Section 1 */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
             className="bg-surface-2/60 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#24A1DE]/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                <div className="p-2 bg-[#24A1DE]/10 rounded-lg text-[#24A1DE]"><SettingsIcon size={20} /></div>
                <h2 className="text-xl font-bold text-white">Loyiha Parametrlari</h2>
              </div>

              <div className="space-y-6 max-w-xl">
                 <div className="space-y-2">
                   <label className="text-xs text-slate uppercase tracking-widest font-label">Tizim Nomi</label>
                   <input 
                     type="text" 
                     className="w-full bg-[#09090B] border border-white/10 rounded-xl h-12 px-4 text-white placeholder-slate focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none font-bold"
                     value={localSettings.systemName}
                     onChange={(e) => setLocalSettings({...localSettings, systemName: e.target.value})}
                   />
                 </div>
              </div>
           </motion.div>

           {/* Section 2 */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
             className="bg-surface-2/60 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-error/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                <div className="p-2 bg-error/10 rounded-lg text-error"><Shield size={20} /></div>
                <h2 className="text-xl font-bold text-white">Ijaralar va Jarima (Penalties)</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl text-white">
                 
                 <div className="space-y-2 relative group">
                   <label className="text-xs text-slate uppercase tracking-widest font-label flex justify-between">
                     <span>Bir Kunlik Jarima Miqdori</span>
                     <span className="text-error font-bold group-hover:scale-110 transition-transform">so'm</span>
                   </label>
                   <div className="relative">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate font-number text-sm">UZS</span>
                     <input 
                       type="number" min="0" step="500"
                       className="w-full bg-[#09090B] border border-white/10 rounded-xl h-12 pl-14 pr-4 text-white font-number text-lg focus:border-error focus:ring-1 focus:ring-error outline-none transition-all"
                       value={localSettings.finePerDay}
                       onChange={(e) => setLocalSettings({...localSettings, finePerDay: parseInt(e.target.value) || 0})}
                     />
                   </div>
                   <p className="text-[10px] text-slate mt-1">Har bir kechiktirilgan kun uchun mijoz hisobiga yoziladigan summa.</p>
                 </div>

                 <div className="space-y-2 relative group">
                   <label className="text-xs text-slate uppercase tracking-widest font-label flex justify-between">
                     <span>Maksimal Ruxsat Etilgan Kitoblar</span>
                     <span className="text-[#24A1DE] font-bold">dona</span>
                   </label>
                   <div className="relative">
                     <input 
                       type="number" min="1" max="10"
                       className="w-full bg-[#09090B] border border-white/10 rounded-xl h-12 px-4 text-white font-number text-lg focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none transition-all text-center"
                       value={localSettings.maxRentsPerUser}
                       onChange={(e) => setLocalSettings({...localSettings, maxRentsPerUser: parseInt(e.target.value) || 1})}
                     />
                   </div>
                   <p className="text-[10px] text-slate mt-1">Bir vaqtning o'zida bitta odam nechta kitobni ijaraga ola bilishi mumkinligi limiti.</p>
                 </div>

              </div>
           </motion.div>
        
        </div>
      </div>
    </div>
  );
}
