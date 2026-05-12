import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { useToastStore } from '../store/useToastStore';
import { Setting as SettingsIcon, ShieldSecurity as Shield, Setting4 as Sliders, Notification as Bell, Category as LayoutGrid, Save2 as Save, TickCircle as CheckCircle, Moon as Moon, Sun1 as Sun, Data as Database, DocumentDownload as Download, Timer as History } from 'iconsax-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';

export default function Settings() {
  const { settings, updateSettings } = useAppStore();
  const { addToast } = useToastStore();
  
  const [localSettings, setLocalSettings] = useState(settings);
  const [activeTab, setActiveTab] = useState('general');
  const [newRoleName, setNewRoleName] = useState('');
  const [isAddingRole, setIsAddingRole] = useState(false);

  const handleSave = () => {
    updateSettings(localSettings);
    addToast('Tizim sozlamalari muvaffaqiyatli saqlandi!', 'success');
  };

  const tabs = [
    { id: 'general', icon: <Sliders color="currentColor" size={18} variant="Bulk" />, label: 'Umumiy Sozlamalar' },
    { id: 'roles', icon: <Shield color="currentColor" size={18} variant="Bulk" />, label: 'Rollar va Huquqlar' },
    { id: 'ui', icon: <LayoutGrid color="currentColor" size={18} variant="Bulk" />, label: 'Interfeys Tizimi' },
    { id: 'notifications', icon: <Bell color="currentColor" size={18} variant="Bulk" />, label: 'Bildirishnomalar' },
    { id: 'backup', icon: <Database color="currentColor" size={18} variant="Bulk" />, label: 'Integratsiya & Backup' },
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-4xl mb-2 text-ink drop-shadow-md transition-colors duration-500">Tizim Sozlamalari</h1>
          <p className="font-label text-sm uppercase tracking-widest text-slate">Kutubxona operatsiyalarini va tizim jarimalarini boshqarish</p>
        </div>
        <Button onClick={handleSave} variant="primary" className="bg-[#24A1DE] text-white hover:bg-[#1E8BBF] shadow-[0_0_20px_rgba(36,161,222,0.4)] px-6">
          <Save color="currentColor" size={18} variant="Bulk" className="mr-2" /> Saqlash
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
                    <div className="p-2 bg-[#24A1DE]/10 rounded-lg text-[#24A1DE]"><SettingsIcon color="currentColor" size={20} variant="Bulk" /></div>
                    <h2 className="text-xl font-bold text-ink">Loyiha Parametrlari</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-10 relative">
                     <div className="space-y-2">
                       <label className="text-xs text-slate uppercase tracking-widest font-label">Tizim Nomi</label>
                       <input 
                         type="text" 
                         className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink placeholder-slate focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none font-bold transition-all"
                         value={localSettings.systemName}
                         onChange={(e) => setLocalSettings({...localSettings, systemName: e.target.value})}
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs text-slate uppercase tracking-widest font-label">Tizim Tili</label>
                       <select 
                         className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none font-bold transition-all appearance-none cursor-pointer"
                         value={localSettings.language}
                         onChange={(e) => setLocalSettings({...localSettings, language: e.target.value})}
                       >
                         <option value="uz">O'zbek (UZ)</option>
                         <option value="en">English (EN)</option>
                         <option value="ru">Русский (RU)</option>
                       </select>
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs text-slate uppercase tracking-widest font-label">Asosiy Valyuta</label>
                       <select 
                         className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none font-bold transition-all appearance-none cursor-pointer"
                         value={localSettings.currency}
                         onChange={(e) => setLocalSettings({...localSettings, currency: e.target.value})}
                       >
                         <option value="UZS">UZS - So'm</option>
                         <option value="USD">USD - Dollar</option>
                       </select>
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs text-slate uppercase tracking-widest font-label">Ish Vaqti</label>
                       <input 
                         type="text" 
                         className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink placeholder-slate focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none font-bold transition-all"
                         value={localSettings.workingHours}
                         onChange={(e) => setLocalSettings({...localSettings, workingHours: e.target.value})}
                         placeholder="09:00 - 18:00"
                       />
                     </div>
                  </div>
               </div>

               {/* Section 2 */}
               <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl relative overflow-hidden transition-colors duration-500">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-error/5 rounded-full blur-[80px] pointer-events-none"></div>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-border z-10 relative">
                    <div className="p-2 bg-error/10 rounded-lg text-error"><Shield color="currentColor" size={20} variant="Bulk" /></div>
                    <h2 className="text-xl font-bold text-ink">Ijaralar va Jarima (Penalties)</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-10 relative">
                     <div className="space-y-2 relative group">
                       <label className="text-xs text-slate uppercase tracking-widest font-label flex justify-between">
                         <span>Bir Kunlik Jarima Miqdori</span>
                         <span className="text-error font-bold group-hover:scale-110 transition-transform">{localSettings.currency === 'UZS' ? "so'm" : "$"}</span>
                       </label>
                       <div className="relative">
                         <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate font-number text-sm">{localSettings.currency}</span>
                         <input 
                           type="number" min="0" step={localSettings.currency === 'UZS' ? "500" : "1"}
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

               {/* Section 3: Contact */}
               <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl relative overflow-hidden transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-border z-10 relative">
                    <div className="p-2 bg-info/10 rounded-lg text-info"><Bell color="currentColor" size={20} variant="Bulk" /></div>
                    <h2 className="text-xl font-bold text-ink">Aloqa Ma'lumotlari</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-10 relative">
                     <div className="space-y-2">
                       <label className="text-xs text-slate uppercase tracking-widest font-label">Qo'llab-quvvatlash Telefoni</label>
                       <input 
                         type="text" 
                         className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink placeholder-slate focus:border-info focus:ring-1 focus:ring-info outline-none font-bold transition-all"
                         value={localSettings.contactPhone}
                         onChange={(e) => setLocalSettings({...localSettings, contactPhone: e.target.value})}
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs text-slate uppercase tracking-widest font-label">Kutubxona Elektron Pochtasi</label>
                       <input 
                         type="email" 
                         className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink placeholder-slate focus:border-info focus:ring-1 focus:ring-info outline-none font-bold transition-all"
                         value={localSettings.contactEmail}
                         onChange={(e) => setLocalSettings({...localSettings, contactEmail: e.target.value})}
                       />
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
                     <div className="p-2 bg-success/10 rounded-lg text-success"><Shield color="currentColor" size={20} variant="Bulk" /></div>
                     <h2 className="text-xl font-bold text-ink">Ruxsatlar va Rollar Ierarxiyasi</h2>
                   </div>
                  <Button variant="outline" className="h-8 px-3 text-[10px]" onClick={() => setIsAddingRole(!isAddingRole)}>Yangi Rol</Button>
                </div>
                
                <div className="space-y-4">
                  {isAddingRole && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 p-4 border border-accent/30 bg-accent/5 rounded-xl">
                      <input 
                        type="text" 
                        placeholder="Rol nomi..." 
                        className="bg-surface-1 border border-surface-border rounded-lg h-9 px-3 text-sm text-ink outline-none focus:border-accent w-48"
                        value={newRoleName}
                        onChange={(e) => setNewRoleName(e.target.value)}
                      />
                      <Button 
                        size="sm" 
                        variant="primary" 
                        onClick={() => {
                          if (newRoleName.trim()) {
                            setLocalSettings({
                              ...localSettings, 
                              rolesPermissions: {
                                ...localSettings.rolesPermissions,
                                [newRoleName]: { canAddBook: false, canDeleteUser: false }
                              }
                            });
                            setNewRoleName('');
                            setIsAddingRole(false);
                          }
                        }}
                      >Qo'shish</Button>
                    </motion.div>
                  )}

                  {Object.keys(localSettings.rolesPermissions || {}).map((r, i) => (
                    <div key={r} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-surface-border rounded-xl bg-surface-1 transition-colors duration-500">
                      <div className="mb-4 md:mb-0">
                        <p className="font-bold text-ink flex items-center gap-2">{r} {i === 0 && <span className="text-[9px] bg-accent/20 text-accent px-1.5 rounded uppercase">Full Access</span>}</p>
                        <p className="text-xs text-slate mt-1 block">Tizimga moslashtirilgan ruxsatnomalar to'plami.</p>
                      </div>
                      <div className="flex gap-2">
                        <label className="flex items-center gap-2 text-xs text-slate cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={localSettings.rolesPermissions[r].canAddBook}
                            onChange={(e) => {
                               const updated = { ...localSettings.rolesPermissions };
                               updated[r].canAddBook = e.target.checked;
                               setLocalSettings({ ...localSettings, rolesPermissions: updated });
                            }}
                            className="w-4 h-4 rounded bg-surface-0 border-surface-border outline-none focus:ring-0 accent-[#24A1DE] transition-colors duration-300" 
                          /> Kitob Qo'shish
                        </label>
                        <label className="flex items-center gap-2 text-xs text-slate cursor-pointer ml-4">
                          <input 
                            type="checkbox" 
                            checked={localSettings.rolesPermissions[r].canDeleteUser}
                            onChange={(e) => {
                               const updated = { ...localSettings.rolesPermissions };
                               updated[r].canDeleteUser = e.target.checked;
                               setLocalSettings({ ...localSettings, rolesPermissions: updated });
                            }}
                            className="w-4 h-4 rounded bg-surface-0 border-surface-border outline-none focus:ring-0 accent-[#24A1DE] transition-colors duration-300" 
                          /> Foydalanuvchi O'chirish
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
                  <div className="p-2 bg-accent/10 rounded-lg text-accent"><LayoutGrid color="currentColor" size={20} variant="Bulk" /></div>
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
                   <Moon color="currentColor" size={32} variant="Bulk" className={localSettings.theme === 'dark' ? 'text-accent' : 'text-slate'} />
                   <p className="font-bold text-ink text-sm">Dark Neon</p>
                   {localSettings.theme === 'dark' && <CheckCircle color="currentColor" size={16} variant="Bulk" className="text-accent absolute top-4 right-4" />}
                 </div>
                 <div 
                   onClick={() => {
                     setLocalSettings({...localSettings, theme: 'light'});
                     updateSettings({ theme: 'light' });
                   }}
                   className={`border-2 rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${localSettings.theme === 'light' ? 'border-accent bg-surface-border' : 'border-surface-border bg-surface-1 hover:border-surface-light opacity-60'}`}
                 >
                   <Sun color="currentColor" size={32} variant="Bulk" className={localSettings.theme === 'light' ? 'text-accent' : 'text-slate'} />
                   <p className="font-bold text-ink text-sm">Light Minimal</p>
                   {localSettings.theme === 'light' && <CheckCircle color="currentColor" size={16} variant="Bulk" className="text-accent absolute top-4 right-4" />}
                 </div>
               </div>
               
               <p className="text-xs text-slate mt-8">Kunduzgi mavzu butun tana qismiga uzluksiz o'tishini ta'minlaydi. Oq fon va oltinrang tus namoyish etiladi.</p>
             </motion.div>
           )}

           {/* NOTIFICATIONS TAB */}
           {activeTab === 'notifications' && (
             <motion.div key="notifications" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
               <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-border">
                    <div className="p-2 bg-[#10B981]/10 rounded-lg text-[#10B981]"><Bell color="currentColor" size={20} variant="Bulk" /></div>
                    <h2 className="text-xl font-bold text-ink">Xabarlarni Sozlash (SMS & Telegram)</h2>
                  </div>

                 <div className="space-y-4">
                   {[
                     { label: 'Yangi Ijaralar uchun Telegram Xabar', key: 'notifyNewRent' },
                     { label: 'Muddat tugashiga 1 kun qolganda SMS eslatma', key: 'notifyOverdueWarning' },
                     { label: 'Jarima hisoblana boshlaganligi haqida Bildirishnoma', key: 'notifyFineStarted' },
                     { label: 'Haftalik Hisobot (Admin yordamchisiga)', key: 'notifyWeeklyReport' }
                   ].map((n) => (
                     <div key={n.key} className="flex justify-between items-center p-4 bg-surface-1 border border-surface-border rounded-xl transition-colors duration-500">
                        <p className="text-ink font-medium text-sm">{n.label}</p>
                        <div 
                          onClick={() => setLocalSettings({...localSettings, [n.key]: !localSettings[n.key as keyof typeof localSettings]})}
                          className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${localSettings[n.key as keyof typeof localSettings] ? 'bg-[#10B981]' : 'bg-surface-0 border border-surface-border'}`}
                        >
                           <div className={`w-4 h-4 rounded-full transition-transform ${localSettings[n.key as keyof typeof localSettings] ? 'bg-surface-1 translate-x-6' : 'bg-slate'}`}></div>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-border">
                    <div className="p-2 bg-[#24A1DE]/10 rounded-lg text-[#24A1DE]"><SettingsIcon color="currentColor" size={20} variant="Bulk" /></div>
                    <h2 className="text-xl font-bold text-ink">API Kalitlar va Tokenlar</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-4">
                       <h3 className="text-sm font-bold text-ink">Telegram Bot Sozlamalari</h3>
                       <div className="space-y-2">
                         <label className="text-xs text-slate uppercase tracking-widest font-label">Bot Token</label>
                         <input 
                           type="text" 
                           className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink placeholder-slate focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none font-bold transition-all"
                           value={localSettings.telegramBotToken}
                           onChange={(e) => setLocalSettings({...localSettings, telegramBotToken: e.target.value})}
                           placeholder="123456789:ABCdefGHIjklMNOpqrSTUvwxYZ"
                         />
                       </div>
                       <div className="space-y-2">
                         <label className="text-xs text-slate uppercase tracking-widest font-label">Admin Chat ID</label>
                         <input 
                           type="text" 
                           className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink placeholder-slate focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none font-bold transition-all"
                           value={localSettings.telegramChatId}
                           onChange={(e) => setLocalSettings({...localSettings, telegramChatId: e.target.value})}
                           placeholder="Masalan: 987654321"
                         />
                       </div>
                     </div>
                     <div className="space-y-4">
                       <h3 className="text-sm font-bold text-ink">SMS Gateway Sozlamalari</h3>
                       <div className="space-y-2">
                         <label className="text-xs text-slate uppercase tracking-widest font-label">Eskiz.uz API Key</label>
                         <input 
                           type="password" 
                           className="w-full bg-surface-1 border border-surface-border rounded-xl h-12 px-4 text-ink placeholder-slate focus:border-[#24A1DE] focus:ring-1 focus:ring-[#24A1DE] outline-none font-bold transition-all"
                           value={localSettings.smsApiKey}
                           onChange={(e) => setLocalSettings({...localSettings, smsApiKey: e.target.value})}
                           placeholder="••••••••••••••••••••••••"
                         />
                       </div>
                     </div>
                  </div>
               </div>
             </motion.div>
           )}

           {/* BACKUP & SECURITY TAB */}
           {activeTab === 'backup' && (
             <motion.div key="backup" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
               <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-border relative z-10">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent"><Database color="currentColor" size={20} variant="Bulk" /></div>
                    <h2 className="text-xl font-bold text-ink">Ma'lumotlarni Nusxalash (Backup)</h2>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between bg-surface-1 border border-surface-border p-6 rounded-xl relative z-10">
                    <div>
                      <h3 className="text-ink font-bold mb-1">To'liq Zaxira Nusxasi</h3>
                      <p className="text-slate text-xs">Barcha kitoblar, foydalanuvchilar va ijaralar tarixini .json yoki .sql formatida yuklab oling.</p>
                      <p className="text-[10px] text-slate mt-2">So'nggi nusxa: <span className="text-[#24A1DE] font-bold">Hech qachon olinmagan</span></p>
                    </div>
                    <Button variant="primary" className="bg-[#24A1DE] hover:bg-[#1E8BBF] text-white flex gap-2 whitespace-nowrap">
                      <Download color="currentColor" size={16} variant="Bulk" /> SQL yuklab olish
                    </Button>
                  </div>
               </div>

               <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-8 shadow-2xl transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-border">
                    <div className="p-2 bg-error/10 rounded-lg text-error"><History color="currentColor" size={20} variant="Bulk" /></div>
                    <h2 className="text-xl font-bold text-ink">Tizim Loglari (Audit)</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { action: "Yangi rol qo'shildi: 'Kassir'", user: "SuperAdmin", time: "10 daqiqa oldin" },
                      { action: "Tizim sozlamalari o'zgartirildi (Jarima miqdori)", user: "Manager", time: "2 soat oldin" },
                      { action: "Kitob o'chirildi (ISBN-4432)", user: "SuperAdmin", time: "Kechagi kun, 15:30" },
                    ].map((log, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-surface-1 border border-surface-border rounded-xl">
                        <div>
                          <p className="text-ink text-sm font-bold">{log.action}</p>
                          <p className="text-slate text-[10px] uppercase font-label tracking-widest mt-1">Boshqardi: <span className="text-[#24A1DE]">{log.user}</span></p>
                        </div>
                        <span className="text-slate text-xs font-number">{log.time}</span>
                      </div>
                    ))}
                  </div>
               </div>
             </motion.div>
           )}

           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
