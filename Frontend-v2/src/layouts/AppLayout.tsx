import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  Category as LayoutDashboard, 
  Book as BookOpen, 
  Profile2User as Users, 
  CalendarTick as CalendarCheck, 
  Setting as Settings, 
  Logout as LogOut, 
  Notification as Bell, 
  SearchNormal as Search,
  HambergerMenu as MenuIcon,
  ArrowLeft2,
  ArrowRight2,
  CloseSquare
} from 'iconsax-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CommandPalette } from '../components/ui/CommandPalette';
import { ToastProvider } from '../components/ui/ToastProvider';
import { NotificationPanel } from '../components/ui/NotificationPanel';
import { useAppStore } from '../store/useAppStore';
import { useNotificationStore } from '../store/useNotificationStore';

export default function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { settings } = useAppStore();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    return localStorage.getItem('sidebar_collapsed') === 'true';
  });
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const unreadCount = useNotificationStore(state => state.notifications.filter(n => !n.read).length);

  // Sync theme to root html tag
  useEffect(() => {
    if (settings.theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [settings.theme]);

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
    { name: 'Kitoblar', path: '/books', icon: BookOpen },
    { name: "A'zolar", path: '/users', icon: Users },
    { name: 'Ijaralar', path: '/rents', icon: CalendarCheck },
  ];

  const userNav = [
    { name: 'Bosh Panel', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Katalog', path: '/books', icon: BookOpen },
    { name: 'Mening Ijaralarim', path: '/rents', icon: CalendarCheck },
  ];

  const navItems = role === 'user' ? userNav : adminNav;

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => {
      const newState = !prev;
      localStorage.setItem('sidebar_collapsed', String(newState));
      return newState;
    });
  };

  const handleKeyboardTrigger = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'k', metaKey: true, ctrlKey: true }));
  };

  // Bottom navigation items (maximum 4 items)
  const bottomNavItems = [
    { name: 'Bosh Panel', path: '/dashboard', icon: LayoutDashboard },
    { name: role === 'user' ? 'Katalog' : 'Kitoblar', path: '/books', icon: BookOpen },
    { name: role === 'user' ? 'Ijaralarim' : 'Ijaralar', path: '/rents', icon: CalendarCheck },
    { name: 'Sozlamalar', path: '/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-surface-0 text-ink font-body selection:bg-accent/30 selection:text-ink overflow-hidden transition-colors duration-500">
      
      <ToastProvider />
      <CommandPalette />

      {/* 1. Desktop Sidebar Navigation (Hidden on mobile) */}
      <aside 
        className={`hidden lg:flex flex-col bg-surface-1 border-r border-surface-border relative z-20 transition-all duration-500 ${
          isSidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-surface-border overflow-hidden">
          {!isSidebarCollapsed && (
            <span 
              className="font-heading text-2xl font-bold tracking-widest text-ink shadow-accent drop-shadow-[0_0_15px_rgba(255,214,0,0.3)] cursor-pointer whitespace-nowrap" 
              onClick={() => navigate('/')}
            >
              EDUJAVON
            </span>
          )}
          {isSidebarCollapsed && (
            <span 
              className="font-heading text-xl font-bold text-accent mx-auto cursor-pointer"
              onClick={() => navigate('/')}
            >
              EJ
            </span>
          )}
          
          {/* Collapse Button */}
          {!isSidebarCollapsed && (
            <button 
              onClick={toggleSidebar}
              className="p-1.5 rounded-lg border border-surface-border hover:bg-surface-border text-slate hover:text-ink transition-colors"
            >
              <ArrowLeft2 size={16} />
            </button>
          )}
        </div>
        
        {/* Navigation Links */}
        <div className="flex-1 py-8 px-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-label text-[12px] font-medium uppercase tracking-widest transition-all duration-300 border focus:outline-none relative group ${
                  isActive 
                    ? 'bg-accent/10 text-accent border-accent/20 shadow-[0_0_15px_rgba(255,214,0,0.15)]' 
                    : 'border-transparent text-slate hover:bg-surface-border hover:text-ink'
                }`}
              >
                <Icon color="currentColor" size={18} variant="Bulk" className="flex-shrink-0" />
                {!isSidebarCollapsed && <span className="mt-0.5">{item.name}</span>}
                
                {/* Collapsed Tooltip */}
                {isSidebarCollapsed && (
                  <div className="absolute left-24 bg-surface-2 border border-surface-border text-ink text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl z-30 uppercase tracking-widest">
                    {item.name}
                  </div>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Collapsed Expand Toggle inside footer when collapsed */}
        {isSidebarCollapsed && (
          <div className="p-4 flex justify-center border-t border-surface-border">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-lg border border-surface-border hover:bg-surface-border text-slate hover:text-ink transition-colors"
            >
              <ArrowRight2 size={16} />
            </button>
          </div>
        )}

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-surface-border">
          <NavLink
            to="/settings"
            className={({ isActive }) => 
              `flex items-center gap-4 px-4 py-3 rounded-xl font-label text-[12px] font-medium uppercase tracking-widest transition-all duration-300 border focus:outline-none relative group ${
                isActive ? 'bg-accent/10 text-accent border-accent/20' : 'border-transparent text-slate hover:bg-surface-border hover:text-ink'
              }`
            }
          >
            <Settings color="currentColor" size={18} variant="Bulk" className="flex-shrink-0" />
            {!isSidebarCollapsed && <span className="mt-0.5">Sozlamalar</span>}
            
            {isSidebarCollapsed && (
              <div className="absolute left-24 bg-surface-2 border border-surface-border text-ink text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl z-30 uppercase tracking-widest">
                Sozlamalar
              </div>
            )}
          </NavLink>
          
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-4 px-4 py-3 mt-2 w-full text-left rounded-xl font-label text-[12px] font-medium uppercase tracking-widest text-error hover:bg-error/10 transition-colors relative group"
          >
            <LogOut color="currentColor" size={18} variant="Bulk" className="flex-shrink-0" />
            {!isSidebarCollapsed && <span className="mt-0.5">Tizimdan chiqish</span>}
            
            {isSidebarCollapsed && (
              <div className="absolute left-24 bg-surface-2 border border-error/20 text-error text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl z-30 uppercase tracking-widest">
                Tizimdan chiqish
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* 2. Mobile Left Drawer Navigation (Slide-over drawer) */}
      <AnimatePresence>
        {isMobileDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileDrawerOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Drawer */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-72 bg-surface-1 border-r border-surface-border shadow-3xl z-50 flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="h-20 flex items-center justify-between px-6 border-b border-surface-border bg-surface-2">
                <span className="font-heading text-xl font-bold tracking-widest text-ink">
                  EDUJAVON
                </span>
                <button 
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="w-10 h-10 rounded-full hover:bg-surface-border flex items-center justify-center text-slate hover:text-ink transition-colors"
                >
                  <CloseSquare size={20} variant="Bulk" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-6 px-4 flex flex-col gap-2 overflow-y-auto">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileDrawerOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl font-label text-[12px] font-medium uppercase tracking-widest transition-all duration-300 border focus:outline-none ${
                        isActive 
                          ? 'bg-accent/10 text-accent border-accent/20 shadow-[0_0_15px_rgba(255,214,0,0.15)]' 
                          : 'border-transparent text-slate hover:bg-surface-border hover:text-ink'
                      }`}
                    >
                      <Icon color="currentColor" size={18} variant="Bulk" />
                      <span className="mt-0.5">{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-surface-border bg-surface-2/40">
                <NavLink
                  to="/settings"
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center gap-4 px-4 py-3 rounded-xl font-label text-[12px] font-medium uppercase tracking-widest transition-all duration-300 border focus:outline-none ${
                      isActive ? 'bg-accent/10 text-accent border-accent/20' : 'border-transparent text-slate hover:bg-surface-border hover:text-ink'
                    }`
                  }
                >
                  <Settings color="currentColor" size={18} variant="Bulk" />
                  <span className="mt-0.5">Sozlamalar</span>
                </NavLink>
                
                <button 
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    navigate('/login');
                  }}
                  className="flex items-center gap-4 px-4 py-3 mt-2 w-full text-left rounded-xl font-label text-[12px] font-medium uppercase tracking-widest text-error hover:bg-error/10 transition-colors"
                >
                  <LogOut color="currentColor" size={18} variant="Bulk" />
                  <span className="mt-0.5">Tizimdan chiqish</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Space */}
      <div className="flex-1 flex flex-col relative w-full overflow-hidden">
        
        {/* Topbar Header */}
        <header className="h-20 bg-surface-1/80 backdrop-blur-md border-b border-surface-border flex items-center justify-between px-4 sm:px-8 z-20 transition-colors duration-500">
          
          <div className="flex items-center gap-4 flex-1">
            {/* Hamburger Trigger for Mobile */}
            <button 
              onClick={() => setIsMobileDrawerOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-surface-border hover:bg-surface-border text-slate hover:text-ink transition-all flex items-center justify-center focus:outline-none"
            >
              <MenuIcon size={20} variant="Bulk" />
            </button>

            {/* Quick Search */}
            <div className="flex-1 max-w-md relative hidden sm:block">
              <div 
                onClick={handleKeyboardTrigger}
                className="flex items-center gap-2 bg-surface-2 border border-surface-border rounded-full px-4 h-10 w-full text-[13px] font-label font-medium tracking-wide text-slate cursor-pointer hover:border-accent/50 transition-all group"
              >
                <Search color="currentColor" size={16} variant="Bulk" className="text-slate group-hover:text-ink transition-colors" />
                <span>QIDIRUV...</span>
                <div className="ml-auto flex gap-1">
                  <span className="text-[10px] bg-surface-border px-2 py-0.5 rounded border border-surface-border text-slate group-hover:text-ink transition-colors">Cmd + K</span>
                </div>
              </div>
            </div>

            {/* Mobile Small Search Icon button */}
            <button 
              onClick={handleKeyboardTrigger}
              className="sm:hidden p-2 rounded-xl border border-surface-border text-slate hover:text-ink"
            >
              <Search size={20} variant="Bulk" />
            </button>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative text-slate hover:text-ink transition-colors p-2"
              >
                <Bell color="currentColor" size={20} variant="Bulk" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-error rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] text-[8px] font-bold text-white flex items-center justify-center">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
              <NotificationPanel 
                isOpen={isNotificationOpen} 
                onClose={() => setIsNotificationOpen(false)} 
              />
            </div>
            <div className="h-8 w-px bg-surface-border"></div>
            <div className="flex items-center gap-3">
               <div className="text-right hidden sm:block">
                 <p className="font-label text-[11px] font-semibold uppercase tracking-widest text-ink">{currentRoleInfo.title}</p>
                 <p className="text-sage text-xs font-medium">{currentRoleInfo.subtitle}</p>
               </div>
               <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${currentRoleInfo.color} shadow-[0_0_15px_rgba(255,214,0,0.15)] border-2 border-surface-0`}></div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 relative z-10 pb-28 lg:pb-8">
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

      {/* 3. Floating Bottom Navigation Bar (Visible only on mobile/tablet) */}
      <nav className="fixed bottom-5 left-4 right-4 h-16 bg-surface-1/80 border border-surface-border rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-md z-40 flex lg:hidden items-center justify-around px-4 transition-colors duration-500">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 relative ${
                isActive 
                  ? 'text-accent' 
                  : 'text-slate hover:text-ink'
              }`}
            >
              <Icon color="currentColor" size={20} variant={isActive ? "Bulk" : "Outline"} />
              <span className="text-[9px] font-label font-bold uppercase tracking-wider mt-1 opacity-70 scale-90">{item.name.split(' ')[0]}</span>
              
              {isActive && (
                <motion.div 
                  layoutId="bottomTabIndicator"
                  className="absolute -bottom-1.5 w-6 h-1 bg-accent rounded-full shadow-[0_0_8px_rgba(255,214,0,0.8)]"
                />
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
