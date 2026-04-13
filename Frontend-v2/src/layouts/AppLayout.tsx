import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookCopy, Users, CalendarCheck, Settings, LogOut, Bell, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { CommandPalette } from '../components/ui/CommandPalette';
import { ToastProvider } from '../components/ui/ToastProvider';
import { NotificationPanel } from '../components/ui/NotificationPanel';
import { useNotificationStore } from '../store/useNotificationStore';

export default function AppLayout() {
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const unreadCount = useNotificationStore(state => state.notifications.filter(n => !n.read).length);

  const [role, setRole] = useState('superadmin');

  useEffect(() => {
    const storedRole = localStorage.getItem('edu_role');
    if (storedRole) setRole(storedRole);
  }, []);

  const roleLabels: Record<string, { title: string; subtitle: string; color: string }> = {
    superadmin: { title: 'Qahramon (Superadmin)', subtitle: 'Tizim Boshqaruvchisi', color: 'from-accent to-error' },
    manager: { title: 'Diyorbek (Manager)', subtitle: 'Filial Boshqaruvchisi', color: 'from-[#24A1DE] to-[#12587A]' },
    librarian: { title: 'Malika (Librarian)', subtitle: 'Kutubxonachi', color: 'from-success to-emerald-800' },
    user: { title: 'Aziz R. (User)', subtitle: 'Oddiy a\'zo', color: 'from-slate to-surface-2' }
  };

  const currentRoleInfo = roleLabels[role] || roleLabels.superadmin;

  const adminNav = [
    { name: 'Bosh Panel', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Kitoblar', path: '/books', icon: BookCopy },
    { name: "A'zolar", path: '/users', icon: Users },
    { name: 'Ijaralar', path: '/rents', icon: CalendarCheck },
  ];

  const userNav = [
    { name: 'Katalog', path: '/books', icon: BookCopy },
    { name: 'Mening Ijaralarim', path: '/rents', icon: CalendarCheck },
  ];

  const navItems = role === 'user' ? userNav : adminNav;

  const handleKeyboardTrigger = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'k', metaKey: true, ctrlKey: true }));
  };

  return (
    <div className="flex h-screen bg-[#000000] text-white font-body selection:bg-accent selection:text-black overflow-hidden">
      
      <ToastProvider />
      <CommandPalette />

      {/* Sidebar Navigation */}
      <aside className="w-64 flex flex-col bg-[#09090B] border-r border-white/5 relative z-20">
        <div className="h-20 flex items-center px-8 border-b border-white/5">
          <span className="font-heading text-2xl font-bold tracking-widest text-white shadow-accent drop-shadow-[0_0_15px_rgba(255,214,0,0.3)] cursor-pointer" onClick={() => navigate('/')}>
            EDUJAVON
          </span>
        </div>
        
        <div className="flex-1 py-8 px-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center gap-4 px-4 py-3 rounded-xl font-label text-[12px] font-medium uppercase tracking-widest transition-all duration-300 ${
                    isActive 
                      ? 'bg-accent/10 text-accent border border-accent/20 shadow-[0_0_15px_rgba(255,214,0,0.15)]' 
                      : 'text-slate hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <Icon size={18} />
                <span className="mt-0.5">{item.name}</span>
              </NavLink>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/5">
          <NavLink
            to="/settings"
            className={({ isActive }) => 
              `flex items-center gap-4 px-4 py-3 rounded-xl font-label text-[12px] font-medium uppercase tracking-widest transition-all duration-300 ${
                isActive ? 'bg-accent/10 text-accent border border-accent/20' : 'text-slate hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <Settings size={18} />
            <span className="mt-0.5">Sozlamalar</span>
          </NavLink>
          
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-4 px-4 py-3 mt-2 w-full text-left rounded-xl font-label text-[12px] font-medium uppercase tracking-widest text-error hover:bg-error/10 transition-colors"
          >
            <LogOut size={18} />
            <span className="mt-0.5">Tizimdan chiqish</span>
          </button>
        </div>
      </aside>

      {/* Main Content Space */}
      <div className="flex-1 flex flex-col relative w-full overflow-hidden">
        
        {/* Topbar Header */}
        <header className="h-20 bg-[#09090B]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 z-20">
          <div className="flex-1 max-w-md relative">
            <div 
              onClick={handleKeyboardTrigger}
              className="flex items-center gap-2 bg-[#18181B] border border-white/5 rounded-full px-4 h-10 w-full text-[13px] font-label font-medium tracking-wide text-slate cursor-pointer hover:border-accent/50 transition-all group"
            >
              <Search size={16} className="text-slate group-hover:text-white transition-colors" />
              <span>QIDIRUV...</span>
              <div className="ml-auto flex gap-1">
                <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/5 text-slate">Cmd + K</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative text-slate hover:text-white transition-colors"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-error rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] text-[8px] font-bold text-white flex items-center justify-center">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
              <NotificationPanel 
                isOpen={isNotificationOpen} 
                onClose={() => setIsNotificationOpen(false)} 
              />
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex items-center gap-3">
               <div className="text-right hidden sm:block">
                 <p className="font-label text-[11px] font-semibold uppercase tracking-widest text-white/95">{currentRoleInfo.title}</p>
                 <p className="text-[#A1A1AA] text-xs font-medium">{currentRoleInfo.subtitle}</p>
               </div>
               <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${currentRoleInfo.color} shadow-[0_0_15px_rgba(255,214,0,0.15)] border-2 border-surface-0`}></div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </main>
        
        {/* Globl Desktop subtle glow bottom-right for some character */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      </div>
    </div>
  );
}
