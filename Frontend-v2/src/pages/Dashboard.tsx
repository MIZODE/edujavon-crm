import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import { DocumentDownload as Download } from 'iconsax-react';
import { useAppStore } from '../store/useAppStore';
import UserDashboard from './UserDashboard';

const rentDynamicsData = [
  { name: 'Yan', ijaralar: 400, qaytarishlar: 240 },
  { name: 'Fev', ijaralar: 300, qaytarishlar: 139 },
  { name: 'Mar', ijaralar: 520, qaytarishlar: 480 },
  { name: 'Apr', ijaralar: 400, qaytarishlar: 390 },
  { name: 'May', ijaralar: 680, qaytarishlar: 480 },
  { name: 'Iyn', ijaralar: 530, qaytarishlar: 580 },
  { name: 'Iyl', ijaralar: 740, qaytarishlar: 630 },
];

const categoryData = [
  { name: 'Dasturlash', value: 400 },
  { name: 'Biznes', value: 300 },
  { name: 'Badiiy', value: 300 },
  { name: 'Psixolog', value: 200 },
];

const COLORS = ['#FFD600', '#24A1DE', '#10B981', '#EF4444'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-1/90 border border-surface-border p-3 rounded-lg shadow-2xl backdrop-blur-md">
        <p className="text-ink font-label text-xs uppercase tracking-widest mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} className="text-sm font-bold" style={{ color: entry.color }}>
            {entry.name}: <span className="font-number">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const { books, users, rents } = useAppStore();
  const navigate = useNavigate();
  const [isExporting, setIsExporting] = useState(false);
  const [role, setRole] = useState('superadmin');

  useEffect(() => {
    const storedRole = localStorage.getItem('edu_role');
    if (storedRole) setRole(storedRole);
  }, []);

  if (role === 'user') {
    return <UserDashboard />;
  }

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert("Hisobot muvaffaqiyatli yuklab olindi (Excel)");
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  };

  const statCards = [
    {
      title: "Jami kitoblar",
      value: books.length.toLocaleString(),
      icon: <img src="https://em-content.zobj.net/source/apple/354/books_1f4da.png" alt="books" className="w-10 h-10 drop-shadow-lg group-hover:scale-110 transition-transform" />,
      glow: "bg-accent/10"
    },
    {
      title: "Faol ijaralar",
      value: rents.filter(r => r.status === 'Active').length.toLocaleString(),
      icon: <img src="https://em-content.zobj.net/source/apple/354/fire_1f525.png" alt="fire" className="w-10 h-10 drop-shadow-lg group-hover:-rotate-12 transition-transform" />,
      glow: "bg-error/10"
    },
    {
      title: "Kechikkan (Overdue)",
      value: rents.filter(r => r.status === 'Overdue').length.toLocaleString(),
      icon: <img src="https://em-content.zobj.net/source/apple/354/alarm-clock_23f0.png" alt="alarm" className="w-10 h-10 drop-shadow-lg group-hover:scale-110 transition-transform" />,
      glow: "bg-warning/10"
    },
    {
      title: "Faol a'zolar",
      value: users.length.toLocaleString(),
      icon: <img src="https://em-content.zobj.net/source/apple/354/star-struck_1f929.png" alt="star" className="w-10 h-10 drop-shadow-lg group-hover:scale-110 transition-transform" />,
      glow: "bg-info/10"
    }
  ];

  const recentRents = rents.slice(0, 4).map(r => ({
    id: r.id, 
    user: r.user, 
    book: r.book, 
    date: r.date, 
    status: r.status
  }));

  return (
    <div className="relative flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12 min-h-screen">
      {/* Atmospheric Background Glow - Increased visibility */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
      <div className="absolute top-[20%] -right-20 w-[500px] h-[500px] bg-[#24A1DE]/30 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold mb-1 text-ink drop-shadow-md">Dashboard</h1>
          <p className="text-slate font-label text-xs font-medium uppercase tracking-widest">Kutubxona boshqaruv markazi</p>
        </div>
        <button 
          onClick={handleExport} 
          disabled={isExporting}
          className="flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-lg font-label text-xs uppercase tracking-widest transition-colors"
        >
          <Download color="currentColor" className="w-4 h-4" />
          {isExporting ? "Yuklanmoqda..." : "Hisobotni Yuklash"}
        </button>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {statCards.map((stat, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className={`bg-surface-2/60 backdrop-blur-xl border border-surface-border p-6 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-all duration-300 shadow-2xl focus:outline-none`}
          >
            <div className={`absolute -right-4 -top-4 w-24 h-24 ${stat.glow} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <p className="text-slate font-label text-xs font-medium uppercase tracking-widest w-2/3 leading-normal">{stat.title}</p>
              {stat.icon}
            </div>
            <p className="font-number text-4xl font-semibold text-ink relative z-10 drop-shadow-sm">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Advanced Analytics Inserted Here */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Main Chart: Area Chart for Rents vs Returns */}
        <div className="lg:col-span-2 bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col min-h-[400px]">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="flex justify-between items-center mb-6">
             <p className="font-label text-xs font-medium uppercase tracking-widest text-ink">Ijara va Qaytarishlar Dinamikasi</p>
             <div className="flex gap-4">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(255,214,0,0.5)]"></div>
                 <span className="text-xs text-slate uppercase font-label">Ijaralar</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#24A1DE] shadow-[0_0_10px_rgba(36,161,222,0.5)]"></div>
                 <span className="text-xs text-slate uppercase font-label">Qaytarishlar</span>
               </div>
             </div>
           </div>
           
           <div className="flex-1 w-full relative z-10">
             <ResponsiveContainer width="99%" height={250}>
               <AreaChart
                 data={rentDynamicsData}
                 margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
               >
                 <defs>
                   <linearGradient id="colorRent" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#FFD600" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#FFD600" stopOpacity={0}/>
                   </linearGradient>
                   <linearGradient id="colorReturn" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#24A1DE" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#24A1DE" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                 <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" tick={{fill: '#71717A', fontSize: 10, fontFamily: 'monospace'}} tickLine={false} axisLine={false} />
                 <YAxis stroke="rgba(255,255,255,0.2)" tick={{fill: '#71717A', fontSize: 10, fontFamily: 'monospace'}} tickLine={false} axisLine={false} />
                 <Tooltip content={<CustomTooltip />} />
                 <Area type="monotone" dataKey="ijaralar" stroke="#FFD600" strokeWidth={3} fillOpacity={1} fill="url(#colorRent)" activeDot={{ r: 6, fill: '#FFD600', stroke: '#000', strokeWidth: 2 }} />
                 <Area type="monotone" dataKey="qaytarishlar" stroke="#24A1DE" strokeWidth={3} fillOpacity={1} fill="url(#colorReturn)" activeDot={{ r: 6, fill: '#24A1DE', stroke: '#000', strokeWidth: 2 }} />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Right Side Stats */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-br from-success/10 to-surface-2 border border-success/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden group transition-colors duration-500">
            <h3 className="font-label text-[10px] font-medium uppercase tracking-widest text-slate mb-1">Muvaffaqiyatli Ijaralar</h3>
            <p className="font-number text-4xl font-semibold text-ink">8,241</p>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-success opacity-50 group-hover:scale-125 transition-transform group-hover:opacity-100">
               <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <p className="text-success font-label text-xs uppercase mt-2 font-bold">+15% Oylik o'sish</p>
          </div>
          
          <div className="bg-gradient-to-br from-error/10 to-surface-2 border border-error/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden group transition-colors duration-500">
            <h3 className="font-label text-[10px] font-medium uppercase tracking-widest text-slate mb-1">Qaytarilmagan Kitoblar</h3>
            <p className="font-number text-4xl font-semibold text-ink">124</p>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-error opacity-50 group-hover:scale-125 transition-transform group-hover:opacity-100">
               <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <p className="text-error font-label text-xs uppercase mt-2 font-bold">-2% Kamayish</p>
          </div>

          <div className="bg-gradient-to-br from-[#24A1DE]/10 to-surface-2 border border-[#24A1DE]/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden group flex-1 flex flex-col justify-end transition-colors duration-500">
            <h3 className="font-label text-[10px] font-medium uppercase tracking-widest text-slate mb-1">Telegram Murojaatlar</h3>
            <p className="font-number text-4xl font-semibold text-ink">459</p>
            <p className="text-[#24A1DE] font-label text-xs uppercase mt-2 font-medium">+12% Kechaga nisbatan</p>
          </div>
        </div>
        
        {/* Bottom Charts */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart: Popular Categories */}
          <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-6 shadow-2xl flex flex-col min-h-[300px] transition-colors duration-500">
             <p className="font-label text-xs font-medium uppercase tracking-widest text-ink mb-4">Eng mashhur yo'nalishlar</p>
             <div className="flex-1 w-full mt-2">
               <ResponsiveContainer width="99%" height={250}>
                 <PieChart>
                   <Pie
                     data={categoryData}
                     cx="50%"
                     cy="45%"
                     innerRadius={55}
                     outerRadius={80}
                     paddingAngle={5}
                     dataKey="value"
                     stroke="none"
                   >
                     {categoryData.map((_entry, index) => (
                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                   </Pie>
                   <Tooltip content={<CustomTooltip />} />
                   <Legend iconType="circle" wrapperStyle={{ fontFamily: 'monospace', fontSize: '12px' }} />
                 </PieChart>
               </ResponsiveContainer>
             </div>
          </div>
          
          {/* Bar Chart: User Demographics / Activity by week */}
          <div className="bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-6 shadow-2xl flex flex-col min-h-[300px] transition-colors duration-500">
             <p className="font-label text-xs font-medium uppercase tracking-widest text-ink mb-4">Haftalik Foydalanuvchi Faolligi</p>
             <div className="flex-1 w-full relative z-10 mt-2">
               <ResponsiveContainer width="99%" height={250}>
                 <BarChart
                   data={rentDynamicsData.slice(0, 5)}
                   margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                   barSize={20}
                 >
                   <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                   <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" tick={{fill: '#71717A', fontSize: 10, fontFamily: 'monospace'}} tickLine={false} axisLine={false} />
                   <YAxis stroke="rgba(255,255,255,0.2)" tick={{fill: '#71717A', fontSize: 10, fontFamily: 'monospace'}} tickLine={false} axisLine={false} />
                   <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255, 255, 255, 0.05)'}} />
                   <Bar dataKey="ijaralar" fill="#10B981" radius={[4, 4, 0, 0]} />
                   <Bar dataKey="qaytarishlar" fill="#FFD600" radius={[4, 4, 0, 0]} />
                 </BarChart>
               </ResponsiveContainer>
             </div>
          </div>
        </div>

      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Table Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-surface-2/60 backdrop-blur-xl border border-surface-border rounded-2xl p-6 shadow-2xl transition-colors duration-500"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-heading text-xl font-bold tracking-tight text-ink/95">So'nggi Ijaralar</h2>
            <button 
              onClick={() => navigate('/rents')}
              className="text-accent font-label text-[11px] font-medium uppercase tracking-widest hover:underline"
            >
              Barchasini ko'rish
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-surface-border text-slate font-label text-[11px] font-medium uppercase tracking-widest">
                  <th className="pb-4 pr-4">ID</th>
                  <th className="pb-4 px-4">Foydalanuvchi</th>
                  <th className="pb-4 px-4">Kitob</th>
                  <th className="pb-4 px-4">Sana</th>
                  <th className="pb-4 pl-4 text-right">Holat</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {recentRents.map((rent, i) => (
                  <tr key={i} className="border-b border-surface-border hover:bg-surface-border/50 transition-colors group">
                    <td className="py-4 pr-4 font-ui text-sage">{rent.id}</td>
                    <td className="py-4 px-4 font-bold text-ink">{rent.user}</td>
                    <td className="py-4 px-4 text-slate">{rent.book}</td>
                    <td className="py-4 px-4 text-slate">{rent.date}</td>
                    <td className="py-4 pl-4 text-right">
                      <span className={`inline-flex px-3 py-1 rounded-full font-label text-[10px] uppercase tracking-widest font-bold ${
                        rent.status === 'Active' ? 'bg-accent/10 text-accent border border-accent/20' :
                        rent.status === 'Overdue' ? 'bg-error/10 text-error border border-error/20' :
                        'bg-success/10 text-success border border-success/20'
                      }`}>
                        {rent.status === 'Overdue' ? 'Kechikkan' : rent.status === 'Returned' ? 'Qaytarilgan' : 'Aktiv'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Info/Promo Card Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-surface-2 to-surface-1 border border-surface-border rounded-2xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-end min-h-[300px] transition-colors duration-500"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute top-6 right-6 z-10 w-16 h-16 bg-surface-2 border border-surface-light rounded-2xl flex items-center justify-center shadow-2xl rotate-12">
            <img src="https://em-content.zobj.net/source/apple/354/mirror-ball_1faa9.png" alt="disco" className="w-8 h-8 drop-shadow-md rotate-12" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center bg-accent/20 text-accent px-3 py-1.5 rounded-md font-label text-[10px] font-bold uppercase tracking-widest mb-4">Yangilik</div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-ink mb-2 leading-tight">Yangi avlod CRM tizimiga xush kelibsiz.</h3>
            <p className="text-slate text-sm font-medium">Innovatsiyalar va foydalanish qulayligining yuksak nuqtasi.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
