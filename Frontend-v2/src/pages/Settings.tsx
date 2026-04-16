import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { useToastStore } from '../store/useToastStore';
import { Settings as SettingsIcon, Shield, Sliders, Bell, LayoutGrid, Save, CheckCircle, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';

export default function Settings() {
  const { settings, updateSettings } = useAppStore();
  const { addToast } = useToastStore();
  
  const [localSettings, setLocalSettings] = useState(settings);
  const [activeTab, setActiveTab] = useState('general');

  const handleSave = () => {
    updateSettings(localSettings);
    addToast('Tizim sozlamalari muvaffaqiyatli saqlandi!', 'success');
  };

  const tabs = [
    { id: 'general', icon: <Sliders size={18} strokeWidth={2} />, label: 'Umumiy Sozlamalar' },
    { id: 'roles', icon: <Shield size={18} strokeWidth={2} />, label: 'Rollar va Huquqlar' },
    { id: 'ui', icon: <LayoutGrid size={18} strokeWidth={2} />, label: 'Interfeys Tizimi' },
    { id: 'notifications', icon: <Bell size={18} strokeWidth={2} />, label: 'Bildirishnomalar' },
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-4xl mb-2 text-ink drop-shadow-md transition-colors duration-500">Tizim Sozlamalari</h1>
          <p className="font-label text-sm uppercase tracking-widest text-slate">Kutubxona operatsiyalarini va tizim jarimalarini boshqarish</p>
        </div>
        <Button onClick={handleSave} variant="primary" className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] shadow-[0_0_20px_rgba(36,161,222,0.4)] px-6">
          <Save size={18} strokeWidth={2} className="mr-2" /> Saqlash
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Nav */}
        <div className="col-span-1 bg-surface-2/60 backdrop-blur-xl border border-white/5 rounded-2xl p-4 h-fit shadow-2xl flex flex-col gap-2">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all border ${
                activeTab === tab.id 
                  ? 'bg-surface-border text-ink border-surface-light shadow-md' 
                  : 'hover:bg-surface-border text-slate hover:text-ink border-transparent'
              }`}
            >
               <span className={activeTab === tab.id ? 'text-[#24A1DE]' : ''}>{tab.icon}</span> 
               {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6 relative min-h-[500px]">
           <AnimatePresence mode="wait">
             
           {/* GENERAL TAB */}
           {activeTab === 'general' && (
             <motion.div key="general" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
               {/* Section 1 */}
               <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl relative overflow-hidden transition-colors duration-500">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#24A1DE]/5 rounded-full blur-[80px] pointer-events-none"></div>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10 z-10 relative">
                    <div className="p-2 bg-[#24A1DE]/10 rounded-lg text-[#24A1DE]"><SettingsIcon size={20} strokeWidth={2} /></div>
                    <h2 className="text-xl font-bold text-ink">Loyiha Parametrlari</h2>
                  </div>
                  <div className="space-y-6 max-w-xl z-10 relative">
                     <div className="space-y-2">
                       <label className="text-xs text-slate uppercase tracking-widest font-label">Tizim Nomi</label>
                       <input 
                         type="text" 
                         className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink placeholder-slate focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none font-bold transition-all"
                         value={localSettings.systemName}
                         onChange={(e) => setLocalSettings({...localSettings, systemName: e.target.value})}
                       />
                     </div>
                  </div>
               </div>

               {/* Section 2 */}
               <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl relative overflow-hidden transition-colors duration-500">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-error/5 rounded-full blur-[80px] pointer-events-none"></div>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-border z-10 relative">
                    <div className="p-2 bg-error/10 rounded-lg text-error"><Shield size={20} strokeWidth={2} /></div>
                    <h2 className="text-xl font-bold text-ink">Ijaralar va Jarima (Penalties)</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl text-ink z-10 relative">
                     <div className="space-y-2 relative group">
                       <label className="text-xs text-slate uppercase tracking-widest font-label flex justify-between">
                         <span>Bir Kunlik Jarima Miqdori</span>
                         <span className="text-error font-bold group-hover:scale-110 transition-transform">so'm</span>
                       </label>
                       <div className="relative">
                         <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate font-number text-sm">UZS</span>
                         <input 
                           type="number" min="0" step="500"
                           className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 pl-14 pr-4 text-ink font-number text-lg focus:border-error focus:ring-1 focus:ring-error outline-none transition-all"
                           value={localSettings.finePerDay}
                           onChange={(e) => setLocalSettings({...localSettings, finePerDay: parseInt(e.target.value) || 0})}
                         />
                       </div>
                       <p className="text-[10px] text-slate mt-1">Har bir kechiktirilgan kun uchun mijoz hisobiga yoziladigan summa.</p>
                     </div>

                     <div className="space-y-2 relative group">
                       <label className="text-xs text-slate uppercase tracking-widest font-label flex justify-between">
                         <span>Maks Ruxsat Etilgan Kitoblar</span>
                         <span className="text-[#24A1DE] font-bold">dona</span>
                       </label>
                       <div className="relative">
                         <input 
                           type="number" min="1" max="10"
                           className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink font-number text-lg focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none transition-all text-center"
                           value={localSettings.maxRentsPerUser}
                           onChange={(e) => setLocalSettings({...localSettings, maxRentsPerUser: parseInt(e.target.value) || 1})}
                         />
                       </div>
                       <p className="text-[10px] text-slate mt-1">Bir vaqtning o'zida mijoz nechta kitob olishi mumkin.</p>
                     </div>
                  </div>
               </div>
             </motion.div>
           )}

           {/* ROLES TAB */}
           {activeTab === 'roles' && (
             <motion.div key="roles" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl transition-colors duration-500">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-success/10 rounded-lg text-success"><Shield size={20} strokeWidth={2} /></div>
                    <h2 className="text-xl font-bold text-ink">Ruxsatlar va Rollar Ierarxiyasi</h2>
                  </div>
                 <Button variant="outline" className="h-8 px-3 text-[10px]">Yangi Rol</Button>
               </div>
               
               <div className="space-y-4">
                 {['SuperAdmin', 'Manager', 'Librarian', 'User'].map((r, i) => (
                   <div key={r} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-surface-border rounded-xl bg-surface-1 transition-colors duration-500">
                     <div className="mb-4 md:mb-0">
                       <p className="font-bold text-ink flex items-center gap-2">{r} {i === 0 && <span className="text-[9px] bg-accent/20 text-accent px-1.5 rounded uppercase">Full Access</span>}</p>
                       <p className="text-xs text-slate mt-1 block">Tizimga moslashtirilgan ruxsatnomalar to'plami.</p>
                     </div>
                     <div className="flex gap-2">
                       <label className="flex items-center gap-2 text-xs text-slate cursor-pointer">
                         <input type="checkbox" defaultChecked={i < 3} className="w-4 h-4 rounded bg-surface-0 border-surface-border outline-none focus:ring-0 accent-[#24A1DE] transition-colors duration-300" /> Kitob Qo'shish
                       </label>
                       <label className="flex items-center gap-2 text-xs text-slate cursor-pointer ml-4">
                         <input type="checkbox" defaultChecked={i < 2} className="w-4 h-4 rounded bg-surface-0 border-surface-border outline-none focus:ring-0 accent-[#24A1DE] transition-colors duration-300" /> Foydalanuvchi O'chirish
                       </label>
                     </div>
                   </div>
                 ))}
               </div>
             </motion.div>
           )}

           {/* UI TAB */}
           {activeTab === 'ui' && (
             <motion.div key="ui" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl transition-colors duration-500">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-border">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent"><LayoutGrid size={20} strokeWidth={2} /></div>
                  <h2 className="text-xl font-bold text-ink">Dizayn va Mavzular (Themes)</h2>
                </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div 
                   onClick={() => {
                     setLocalSettings({...localSettings, theme: 'dark'});
                     updateSettings({ theme: 'dark' });
                   }}
                   className={`border-2 rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${localSettings.theme === 'dark' ? 'border-accent bg-surface-border' : 'border-surface-border bg-surface-1 hover:border-surface-light opacity-60'}`}
                 >
                   <Moon size={32} strokeWidth={2} className={localSettings.theme === 'dark' ? 'text-accent' : 'text-slate'} />
                   <p className="font-bold text-ink text-sm">Dark Neon</p>
                   {localSettings.theme === 'dark' && <CheckCircle size={16} strokeWidth={2} className="text-accent absolute top-4 right-4" />}
                 </div>
                 <div 
                   onClick={() => {
                     setLocalSettings({...localSettings, theme: 'light'});
                     updateSettings({ theme: 'light' });
                   }}
                   className={`border-2 rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${localSettings.theme === 'light' ? 'border-accent bg-surface-border' : 'border-surface-border bg-surface-1 hover:border-surface-light opacity-60'}`}
                 >
                   <Sun size={32} strokeWidth={2} className={localSettings.theme === 'light' ? 'text-accent' : 'text-slate'} />
                   <p className="font-bold text-ink text-sm">Light Minimal</p>
                   {localSettings.theme === 'light' && <CheckCircle size={16} strokeWidth={2} className="text-accent absolute top-4 right-4" />}
                 </div>
               </div>
               
               <p className="text-xs text-slate mt-8">Kunduzgi mavzu butun tana qismiga uzluksiz o'tishini ta'minlaydi. Oq fon va oltinrang tus namoyish etiladi.</p>
             </motion.div>
           )}

           {/* NOTIFICATIONS TAB */}
           {activeTab === 'notifications' && (
             <motion.div key="notifications" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl transition-colors duration-500">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-border">
                  <div className="p-2 bg-[#10B981]/10 rounded-lg text-[#10B981]"><Bell size={20} strokeWidth={2} /></div>
                  <h2 className="text-xl font-bold text-ink">Xabarlarni Sozlash (SMS & Telegram)</h2>
                </div>

               <div className="space-y-4">
                 {[
                   { label: 'Yangi Ijaralar uchun Telegram Xabar', state: true },
                   { label: 'Muddat tugashiga 1 kun qolganda SMS eslatma', state: true },
                   { label: 'Jarima hisoblana boshlaganligi haqida Bildirishnoma', state: false },
                   { label: 'Haftalik Hisobot (Admin yordamchisiga)', state: true }
                 ].map((n, i) => (
                   <div key={i} className="flex justify-between items-center p-4 bg-surface-1 border border-surface-border rounded-xl transition-colors duration-500">
                      <p className="text-ink font-medium text-sm">{n.label}</p>
                      <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${n.state ? 'bg-[#10B981]' : 'bg-surface-0 border border-surface-border'}`}>
                         <div className={`w-4 h-4 rounded-full transition-transform ${n.state ? 'bg-surface-1 translate-x-6' : 'bg-slate'}`}></div>
                      </div>
                   </div>
                 ))}
               </div>
             </motion.div>
           )}

           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
