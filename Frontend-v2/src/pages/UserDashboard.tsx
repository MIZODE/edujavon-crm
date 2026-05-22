import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { 
  Book1 as BookIcon, 
  Timer as ClockIcon, 
  Award as AwardIcon, 
  Activity as ActivityIcon, 
  TickCircle as CheckIcon,
  MessageQuestion as HelpIcon,
  Warning2 as AlertIcon
} from 'iconsax-react';
import { useAppStore } from '../store/useAppStore';
import { useToastStore } from '../store/useToastStore';
import { useNotificationStore } from '../store/useNotificationStore';
import { useNavigate } from 'react-router-dom';

const personalReadingHistory = [
  { name: 'Yan', ball: 10 },
  { name: 'Fev', ball: 20 },
  { name: 'Mar', ball: 35 },
  { name: 'Apr', ball: 60 },
  { name: 'May', ball: 80 },
];

export default function UserDashboard() {
  const navigate = useNavigate();
  const { books, rents } = useAppStore();
  const { addToast } = useToastStore();
  const { addNotification } = useNotificationStore();

  const [activeTab, setActiveTab] = useState<'reading' | 'history'>('reading');
  const [currentUser] = useState({
    name: 'Aziz Raximov',
    score: 80,
    level: 'Havaskor Kitobxon',
    avatarColor: 'from-[#FFD600] to-[#E6C200]'
  });

  // Filter rentals specific to Aziz Raximov
  const myRents = rents.filter(r => r.user === currentUser.name);
  const activeRents = myRents.filter(r => r.status !== 'Returned');
  const historyRents = myRents.filter(r => r.status === 'Returned');
  const totalReadCount = historyRents.length + 3; // Mocked previous reads
  const accruedFine = myRents.reduce((sum, r) => sum + r.fine, 0);

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

  // Handle rental extension
  const handleExtendRental = (_rentId: string, bookTitle: string) => {
    addToast(`"${bookTitle}" kitobining ijarasi 7 kunga muvaffaqiyatli uzaytirildi!`, 'success');
    addNotification({
      title: "Ijara Uzaytirildi",
      message: `"${bookTitle}" kitobi ijara muddati sizning so'rovingizga ko'ra 7 kunga uzaytirildi.`,
      type: "info"
    });
  };

  // Handle request to rent a recommended book
  const handleRequestRent = (bookTitle: string) => {
    addToast(`"${bookTitle}" kitobini ijaraga olish so'rovi kutubxonachiga yuborildi!`, 'success');
    addNotification({
      title: "Ijara So'rovi Yuborildi",
      message: `"${bookTitle}" kitobi uchun ijara so'rovingiz navbatga qo'shildi.`,
      type: "success"
    });
  };

  const quotes = [
    "Kitobsiz uy — qushsiz qafas kabi.",
    "Mutolaa — qalbning ozuqasidir.",
    "Ilm o'rganish igna bilan quduq qazish demakdir, kitob esa eng yaxshi quroldir."
  ];
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  // Simulated recommended books based on interests
  const recommendations = books.filter(b => b.status === 'Mavjud').slice(0, 3);

  return (
    <div className="relative flex flex-col gap-8 w-full max-w-7xl mx-auto pb-12 min-h-screen">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none z-[-1]"></div>
      <div className="absolute top-[30%] -right-20 w-[400px] h-[400px] bg-[#24A1DE]/20 rounded-full blur-[100px] pointer-events-none z-[-1]"></div>

      {/* Hero Header Welcome Card */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-gradient-to-r from-surface-2/80 via-surface-1 to-surface-2 border border-surface-border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-3xl backdrop-blur-2xl"
      >
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-[70px] pointer-events-none z-0"></div>
        <div className="absolute top-4 right-4 z-10 w-12 h-12 bg-surface-2/60 border border-surface-light rounded-2xl flex items-center justify-center shadow-lg rotate-6 hover:rotate-0 transition-all cursor-pointer">
          <img src="https://em-content.zobj.net/source/apple/354/high-voltage_26a1.png" alt="lightning" className="w-6 h-6 drop-shadow-md" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-[#E6C200] shadow-[0_0_25px_rgba(255,214,0,0.3)] flex items-center justify-center border-2 border-surface-0 flex-shrink-0 text-black font-heading text-4xl font-extrabold">
            AR
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center justify-center bg-accent/15 text-accent px-3 py-1 rounded-full font-label text-[10px] font-extrabold uppercase tracking-widest mb-3">
              Klub A'zosi
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-black text-ink mb-2 tracking-tight">
              Salom, {currentUser.name}! <img src="https://em-content.zobj.net/source/apple/354/waving-hand_1f44b.png" alt="wave" className="w-7 h-7 inline-block ml-1 align-bottom drop-shadow-sm" />
            </h1>
            <p className="text-slate text-sm font-medium italic max-w-xl">
              "{quote}"
            </p>
            
            {/* Level Progression */}
            <div className="mt-6 max-w-md bg-surface-0/60 p-4 border border-surface-border rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-slate uppercase font-label font-bold tracking-wider">Daraja:</span>
                <span className="text-xs text-accent font-bold uppercase tracking-wider">{currentUser.level}</span>
              </div>
              <div className="w-full bg-surface-2 rounded-full h-2 overflow-hidden border border-surface-border">
                <div 
                  className="bg-accent h-full rounded-full shadow-[0_0_8px_rgba(255,214,0,0.8)]"
                  style={{ width: `${currentUser.score}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2 text-[10px] text-slate font-number">
                <span>{currentUser.score} / 100 ball</span>
                <span>Keyingi darajagacha 20 ball</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Quick Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <motion.div variants={itemVariants} className="bg-surface-2/50 border border-surface-border p-5 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-all shadow-xl">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-accent/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <div className="flex justify-between items-start mb-3 relative z-10">
            <span className="text-slate font-label text-[10px] font-bold uppercase tracking-widest">Faol ijaralar</span>
            <BookIcon size={20} variant="Bulk" className="text-accent" />
          </div>
          <p className="font-number text-3xl font-black text-ink">{activeRents.length}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-surface-2/50 border border-surface-border p-5 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-all shadow-xl">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-success/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <div className="flex justify-between items-start mb-3 relative z-10">
            <span className="text-slate font-label text-[10px] font-bold uppercase tracking-widest">O'qilgan kitoblar</span>
            <CheckIcon size={20} variant="Bulk" className="text-success" />
          </div>
          <p className="font-number text-3xl font-black text-ink">{totalReadCount}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-surface-2/50 border border-surface-border p-5 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-all shadow-xl">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-warning/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <div className="flex justify-between items-start mb-3 relative z-10">
            <span className="text-slate font-label text-[10px] font-bold uppercase tracking-widest">Mening ballarim</span>
            <AwardIcon size={20} variant="Bulk" className="text-warning" />
          </div>
          <p className="font-number text-3xl font-black text-ink">{currentUser.score}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-surface-2/50 border border-surface-border p-5 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-all shadow-xl">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-error/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <div className="flex justify-between items-start mb-3 relative z-10">
            <span className="text-slate font-label text-[10px] font-bold uppercase tracking-widest">Joriy jarima</span>
            <AlertIcon size={20} variant="Bulk" className="text-error" />
          </div>
          <p className={`font-number text-3xl font-black ${accruedFine > 0 ? 'text-error' : 'text-slate'}`}>
            {accruedFine.toLocaleString()} <span className="text-xs">UZS</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content Splitted Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side (Active Books & History) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-surface-2/50 border border-surface-border rounded-2xl p-6 shadow-2xl backdrop-blur-md">
            
            {/* Tabs Header */}
            <div className="flex justify-between items-center mb-6 border-b border-surface-border pb-4">
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTab('reading')}
                  className={`font-heading text-lg font-bold pb-2 transition-all relative ${
                    activeTab === 'reading' ? 'text-ink' : 'text-slate hover:text-ink'
                  }`}
                >
                  Mutolaadagi Kitoblar ({activeRents.length})
                  {activeTab === 'reading' && (
                    <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab('history')}
                  className={`font-heading text-lg font-bold pb-2 transition-all relative ${
                    activeTab === 'history' ? 'text-ink' : 'text-slate hover:text-ink'
                  }`}
                >
                  Mutolaa Tarixi ({historyRents.length})
                  {activeTab === 'history' && (
                    <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
              </div>
              <button 
                onClick={() => navigate('/books')}
                className="text-xs font-label uppercase tracking-widest text-accent hover:underline hidden sm:block"
              >
                Katalogga o'tish
              </button>
            </div>

            {/* Reading Tab Contents */}
            {activeTab === 'reading' && (
              <div className="flex flex-col gap-4">
                {activeRents.length === 0 ? (
                  <div className="text-center py-10 border border-dashed border-surface-border rounded-xl">
                    <img src="https://em-content.zobj.net/source/apple/354/books_1f4da.png" alt="books" className="w-12 h-12 mx-auto drop-shadow-lg" />
                    <p className="text-slate text-sm font-medium mt-2">Hozirda sizda ijaraga olingan kitoblar mavjud emas.</p>
                    <button 
                      onClick={() => navigate('/books')}
                      className="mt-4 px-4 py-2 bg-accent/15 text-accent rounded-lg font-label text-xs uppercase tracking-widest border border-accent/20 hover:bg-accent/25 transition-all"
                    >
                      Katalogni ko'rish
                    </button>
                  </div>
                ) : (
                  activeRents.map((rent, i) => {
                    const daysLeft = rent.status === 'Overdue' ? -5 : 7; // Mock days
                    const progressPercentage = rent.status === 'Overdue' ? 100 : 50;

                    return (
                      <motion.div 
                        key={rent.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-surface-1 border border-surface-border p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-surface-light transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-12 rounded bg-surface-2 border border-surface-border flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
                            rent.status === 'Overdue' ? 'border-error/20 bg-error/5' : 'border-accent/20'
                          }`}>
                            <img src="https://em-content.zobj.net/source/apple/354/open-book_1f4d6.png" alt="book" className="w-7 h-7 drop-shadow-sm" />
                          </div>
                          <div>
                            <h4 className="font-heading text-sm font-bold text-ink">{rent.book}</h4>
                            <p className="text-slate text-[11px] font-label uppercase tracking-wider mt-0.5">
                              Ijara sanasi: {rent.date}
                            </p>
                          </div>
                        </div>

                        {/* Progress and Actions */}
                        <div className="w-full sm:w-auto flex flex-col sm:items-end gap-3 flex-shrink-0">
                          
                          {/* Days Left Bar */}
                          <div className="w-full sm:w-40 bg-surface-2 rounded-full h-1.5 overflow-hidden border border-surface-border">
                            <div 
                              className={`h-full rounded-full ${rent.status === 'Overdue' ? 'bg-error shadow-[0_0_6px_rgba(239,68,68,0.8)]' : 'bg-success'}`}
                              style={{ width: `${progressPercentage}%` }}
                            ></div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                            <span className={`inline-flex px-2 py-0.5 rounded text-[9px] font-label uppercase tracking-widest font-black ${
                              rent.status === 'Overdue' ? 'bg-error/15 text-error border border-error/20 animate-pulse' : 'bg-success/15 text-success border border-success/20'
                            }`}>
                              {rent.status === 'Overdue' ? 'Muddati o\'tgan' : `${daysLeft} kun qoldi`}
                            </span>
                            
                            <button 
                              onClick={() => handleExtendRental(rent.id, rent.book)}
                              className="px-3 py-1 bg-surface-2 hover:bg-surface-border border border-surface-border text-slate hover:text-ink rounded-lg font-label text-[10px] uppercase tracking-wider transition-all focus:outline-none"
                            >
                              Uzaytirish
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>
            )}

            {/* History Tab Contents */}
            {activeTab === 'history' && (
              <div className="flex flex-col gap-4">
                {historyRents.length === 0 ? (
                  <div className="text-center py-10 text-slate text-sm font-medium border border-dashed border-surface-border rounded-xl">
                    Siz hali qaytargan kitoblar mavjud emas.
                  </div>
                ) : (
                  historyRents.map((rent) => (
                    <div 
                      key={rent.id}
                      className="bg-surface-1/40 border border-surface-border p-4 rounded-xl flex items-center justify-between opacity-80"
                    >
                      <div className="flex items-center gap-3">
                        <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="check" className="w-6 h-6 drop-shadow-sm" />
                        <div>
                          <h4 className="font-heading text-sm font-bold text-slate line-through">{rent.book}</h4>
                          <p className="text-[10px] text-slate font-label uppercase tracking-wider">Topshirildi: {rent.dueDate || 'Kecha'}</p>
                        </div>
                      </div>
                      <span className="text-xs font-number text-success">+15 ball</span>
                    </div>
                  ))
                )}
              </div>
            )}

          </div>

          {/* Reading Statistics AreaChart */}
          <div className="bg-surface-2/50 border border-surface-border rounded-2xl p-6 shadow-2xl backdrop-blur-md">
             <div className="flex justify-between items-center mb-6">
                <div>
                   <h3 className="font-heading text-lg font-bold text-ink">Mutolaa Dinamikangiz</h3>
                   <p className="text-slate text-xs mt-0.5">Oylik kitobxonlik balingiz o'sish ko'rsatkichi</p>
                </div>
                <ActivityIcon size={20} className="text-accent" />
             </div>

             <div className="w-full h-[220px]">
               <ResponsiveContainer width="99%" height="100%">
                 <AreaChart data={personalReadingHistory}>
                   <defs>
                     <linearGradient id="colorPersonalScore" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#FFD600" stopOpacity={0.25}/>
                       <stop offset="95%" stopColor="#FFD600" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                   <XAxis dataKey="name" stroke="rgba(255,255,255,0.15)" tick={{fill: '#71717A', fontSize: 10}} tickLine={false} axisLine={false} />
                   <YAxis stroke="rgba(255,255,255,0.15)" tick={{fill: '#71717A', fontSize: 10}} tickLine={false} axisLine={false} />
                   <Tooltip 
                     contentStyle={{ backgroundColor: '#18181B', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: '#FAFAFA' }}
                     labelStyle={{ color: '#A1A1AA', fontFamily: 'monospace' }}
                   />
                   <Area 
                     type="monotone" 
                     dataKey="ball" 
                     stroke="#FFD600" 
                     strokeWidth={3} 
                     fillOpacity={1} 
                     fill="url(#colorPersonalScore)" 
                     activeDot={{ r: 6 }} 
                   />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
          </div>
        </div>

        {/* Right Side (Recommended & Quick Tools) */}
        <div className="flex flex-col gap-6">
          
          {/* Personalized Book Recommendations */}
          <div className="bg-surface-2/50 border border-surface-border rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none"></div>
            <h3 className="font-heading text-lg font-bold text-ink mb-4">Siz uchun tavsiyalar</h3>
            
            <div className="flex flex-col gap-4">
              {recommendations.map((book) => (
                <div key={book.id} className="bg-surface-1 border border-surface-border p-4 rounded-xl flex gap-3 hover:border-accent/30 transition-all group relative">
                  {/* Styled Perspective Book Cover Effect */}
                  <div className="w-12 h-16 bg-gradient-to-br from-surface-2 to-surface-0 border border-surface-border rounded flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                     <img src="https://em-content.zobj.net/source/apple/354/books_1f4da.png" alt="books" className="w-7 h-7 drop-shadow-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                     <h4 className="font-heading text-xs font-bold text-ink truncate">{book.title}</h4>
                     <p className="text-[10px] text-slate truncate mt-0.5">{book.author}</p>
                     <span className="inline-flex mt-2 text-[8px] bg-accent/10 border border-accent/20 text-accent px-2 py-0.5 rounded-full font-label uppercase tracking-widest font-black">
                        {book.category}
                     </span>
                  </div>
                  
                  {/* Quick Rent Request Button */}
                  <button 
                    onClick={() => handleRequestRent(book.title)}
                    className="absolute right-3 bottom-3 p-1.5 bg-accent text-black hover:bg-gold rounded-lg shadow-md transition-all scale-0 group-hover:scale-100 focus:outline-none"
                    title="Ijaraga olish so'rovi"
                  >
                     <ClockIcon size={14} variant="Bulk" />
                  </button>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => navigate('/books')}
              className="mt-5 w-full py-2.5 bg-accent/10 hover:bg-accent/15 text-accent rounded-xl text-center font-label text-xs uppercase tracking-widest font-bold border border-accent/20 transition-all focus:outline-none"
            >
              Barcha kitoblarni ko'rish
            </button>
          </div>

          {/* Quick Actions / Help Desk */}
          <div className="bg-gradient-to-br from-surface-2/80 to-surface-1 border border-surface-border rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-end">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] pointer-events-none"></div>
            <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent mb-4">
              <HelpIcon size={20} variant="Bulk" />
            </div>
            <h3 className="font-heading text-base font-bold text-ink mb-1">Kutubxonachi yordami</h3>
            <p className="text-slate text-xs font-medium mb-4">
              Savollaringiz bormi? Ijara muddatini uzaytirish yoki boshqa kitoblarni qidirishda yordam kerakmi?
            </p>
            <a 
              href="https://t.me/edujavon_support" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center bg-accent text-black hover:bg-gold font-bold px-4 py-2.5 rounded-xl font-label text-xs uppercase tracking-widest shadow-lg transition-colors text-center w-full"
            >
               Telegram orqali yozish
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
