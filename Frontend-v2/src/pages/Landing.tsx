import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function Landing() {
  const navigate = useNavigate();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" as const, bounce: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden relative font-body selection:bg-accent selection:text-black">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Header / Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="font-heading text-2xl tracking-wider font-black">
          EDUJAVON
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-label uppercase tracking-widest text-[#A1A1AA] font-bold">
          <a href="#takliflar" className="hover:text-white transition-colors">Takliflar</a>
          <a href="#biz-haqimizda" className="hover:text-white transition-colors">Biz haqimizda</a>
          <a href="#aloqa" className="hover:text-white transition-colors">Aloqa</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        
        <Button 
          variant="primary" 
          className="rounded-full px-8 uppercase tracking-widest shadow-[0_0_20px_rgba(255,214,0,0.4)] hover:shadow-[0_0_35px_rgba(255,214,0,0.6)] font-black text-xs h-10"
          onClick={() => navigate('/login')}
        >
          Kirish
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center pt-16 pb-32 px-4 max-w-7xl mx-auto">
        
        {/* Floating Decorative Elements */}
        {/* Emojis matching the screenshot vibe */}
        <motion.img 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          src="https://em-content.zobj.net/source/apple/354/scroll_1f4dc.png" 
          alt="scroll" 
          className="absolute left-[15%] top-[25%] w-16 h-16 opacity-80 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]" 
        />
        <motion.img 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          src="https://em-content.zobj.net/source/apple/354/sparkles_2728.png" 
          alt="sparkles" 
          className="absolute right-[20%] top-[40%] w-16 h-16 drop-shadow-[0_0_15px_rgba(255,214,0,0.8)]" 
        />
        <motion.img 
          animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }} 
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          src="https://em-content.zobj.net/source/apple/354/open-book_1f4d6.png" 
          alt="book details" 
          className="absolute right-[25%] top-[80%] w-14 h-14 opacity-80 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]" 
        />

        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center justify-center border border-accent/40 bg-accent/10 px-6 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(255,214,0,0.2)]"
        >
          <span className="font-label text-xs font-black uppercase tracking-widest text-[#FFD600]">
            Innovatsion yechim
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="font-heading text-6xl md:text-8xl lg:text-[180px] leading-none tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-6"
            style={{ textShadow: "0 0 60px rgba(255, 214, 0, 0.15)" }}
          >
            EDUJAVON
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A1A1AA] max-w-2xl mx-auto font-label text-xs md:text-sm uppercase tracking-widest leading-relaxed px-4"
          >
            Zamonaviy kutubxona jarayonlarini avtomatlashtirish va kitobxonlar uchun raqamli qulayliklar yaratuvchi yagona platforma.
          </motion.p>
        </div>

        {/* Big Open Book 3D Centerpiece */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto flex items-center justify-center mt-[-40px]"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full z-0 pointer-events-none w-3/4 mx-auto h-3/4"></div>
          {/* Main 3D Book Placeholder: Swapped for uploaded ABook_logo.png */}
          <img 
            src="/ABook_logo.png" 
            alt="EDUJAVON Book Logo" 
            className="w-full max-w-[600px] h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(255,214,0,0.4)] hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer"
          />
        </motion.div>

        {/* Foil/Divider padding */}
        <div className="w-full h-32"></div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto mb-32 z-10 relative"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-white">Bizning Afzalliklarimiz</h2>
            <p className="text-[#A1A1AA] max-w-xl mx-auto font-label text-sm uppercase tracking-widest leading-relaxed">
              Kutubxonangizni raqamli transformatsiya qilish uchun texnologik qulayliklar
            </p>
          </div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6  transition-all">
                <img src="https://em-content.zobj.net/source/apple/354/high-voltage_26a1.png" alt="Chaqmoq" className="w-8 h-8 drop-shadow-lg scale-180 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">To'liq Avtomatlashgan</h3>
              <p className="text-slate text-sm leading-relaxed">Jarayonlarning aksariyati inson omilisiz xatosiz ishlaydi. Ijaralar, jarimalar va a'zolik muddati avtomatik boshqariladi.</p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6  transition-all">
                <img src="https://em-content.zobj.net/source/apple/354/mobile-phone_1f4f1.png" alt="Telefon" className="w-8 h-8 drop-shadow-lg scale-180 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">Barkod & QR Tizimi</h3>
              <p className="text-slate text-sm leading-relaxed">Kitoblarni berish va qaytarib olishni zamonaviy shtrix-kod va QR skanerlar orqali bir necha soniyada bajaring.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6  transition-all">
                <img src="https://em-content.zobj.net/source/apple/354/bar-chart_1f4ca.png" alt="Statistika" className="w-8 h-8 drop-shadow-lg scale-180 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">Real-vaqt Statistikasi</h3>
              <p className="text-slate text-sm leading-relaxed">Kutubxona bo'yicha barcha tahliliy ma'lumotlar jonli efir rejimida sizning asosiy panelingizda ko'rinib turadi.</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Reader Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto mb-32 z-10 relative"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-white">Kitobxonlar Uchun</h2>
            <p className="text-[#A1A1AA] max-w-xl mx-auto font-label text-sm uppercase tracking-widest leading-relaxed">
              O'qish tajribangizni yangi bosqichga olib chiquvchi imkoniyatlar
            </p>
          </div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-accent/10 text-2xl group-hover:scale-110 transition-transform">
                <img src="https://em-content.zobj.net/source/apple/354/robot_1f916.png" alt="Robot" className="w-8 h-8 drop-shadow-md" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">Telegram Verifikatsiya</h3>
              <p className="text-slate text-sm leading-relaxed">Telegram bot orqali tezkor ro'yxatdan o'tish, tasdiqlash va barcha bildirishnomalarni to'g'ridan-to'g'ri qabul qilish.</p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-accent/10 text-2xl group-hover:scale-110 transition-transform">
                <img src="https://em-content.zobj.net/source/apple/354/magnifying-glass-tilted-right_1f50e.png" alt="Qidiruv" className="w-8 h-8 drop-shadow-md" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">Aqlli Qidiruv</h3>
              <p className="text-slate text-sm leading-relaxed">Kitoblarni nomi, muallifi, janri va nashriyoti bo'yicha tez topish. Mukammal filtrlash tizimi.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-accent/10 text-2xl group-hover:scale-110 transition-transform">
                <img src="https://em-content.zobj.net/source/apple/354/direct-hit_1f3af.png" alt="Maqsad" className="w-8 h-8 drop-shadow-md" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">O'qish Maqsadlari</h3>
              <p className="text-slate text-sm leading-relaxed">Oylik yoki yillik o'qish maqsadlarini (masalan, 50 ta kitob) belgilang va natijalarni vizual kuzatib boring.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-accent/10 text-2xl group-hover:scale-110 transition-transform">
                <img src="https://em-content.zobj.net/source/apple/354/star_2b50.png" alt="Yulduz" className="w-8 h-8 drop-shadow-md" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">Sharhlar va Reyting</h3>
              <p className="text-slate text-sm leading-relaxed">O'qigan kitoblarga 1-5 yulduzli baho bering, sharh yozing va boshqa kitobxonlar bilan baham ko'ring.</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto mb-32 z-10 relative"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-white">Qanday Ishlaydi?</h2>
            <p className="text-[#A1A1AA] max-w-xl mx-auto font-label text-sm uppercase tracking-widest leading-relaxed">
              Kitob o'qishni boshlash uchun 4 ta oddiy qadam
            </p>
          </div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"></div>
            
            {[
              { step: 1, title: "Ro'yxatdan o'ting", desc: "Telegram bot orqali atigi 5 soniyada tizimga a'zo bo'ling.", emoji: "rocket_1f680.png" },
              { step: 2, title: "Kitob qidiring", desc: "Aqlli qidiruv yordamida kerakli kitobni toping.", emoji: "magnifying-glass-tilted-right_1f50e.png" },
              { step: 3, title: "Bron qiling", desc: "Kitobni o'zingiz uchun 48 soatga band qiling.", emoji: "pushpin_1f4cc.png" },
              { step: 4, title: "Olib keting", desc: "Filialga borib, QR kod orqali kitobni darhol oling.", emoji: "books_1f4da.png" },
            ].map((item, i) => (
              <motion.div variants={staggerItem} key={i} className="relative z-10 flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#18181B] border-2 border-accent flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,214,0,0.2)] group-hover:shadow-[0_0_40px_rgba(255,214,0,0.6)] group-hover:bg-accent/10 transition-all duration-300">
                  <span className="font-heading text-2xl text-accent group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] transition-all">{item.step}</span>
                </div>
                <div className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-6 w-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:-translate-y-3 transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_15px_40px_rgba(255,214,0,0.15)]">
                  <div className="flex justify-center mb-4">
                    <img src={`https://em-content.zobj.net/source/apple/354/${item.emoji}`} alt="Icon" className="w-10 h-10 drop-shadow-md group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <h3 className="font-heading text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Gamification Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto mb-32 z-10 relative bg-gradient-to-br from-[#18181B]/80 to-[#09090B] border border-accent/20 rounded-[40px] p-8 md:p-16 overflow-hidden shadow-[0_20px_50px_rgba(255,214,0,0.05)]"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center justify-center border border-accent/40 bg-accent/10 px-4 py-1.5 rounded-full mb-6">
                <span className="font-label text-xs font-black uppercase tracking-widest text-[#FFD600]">
                  Gamifikatsiya
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-white leading-tight">O'qishni o'yinga aylantiring!</h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                Kitob o'qish orqali ballar yig'ing, yangi darajalarni oching va maxsus yutuqlarni qo'lga kiriting. Leaderboard orqali do'stlaringiz bilan bellashing va VIP darajalarga erishing.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-5 bg-gradient-to-r from-white/5 to-transparent border-l-2 border-l-accent border-y border-y-white/5 border-r border-r-white/5 rounded-2xl p-5 hover:border-accent/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(255,214,0,0.15)]">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <img src="https://em-content.zobj.net/source/apple/354/glowing-star_1f31f.png" alt="Daraja" className="w-7 h-7 drop-shadow-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Darajalar Tizimi</h4>
                    <p className="text-slate text-sm">Yangi Boshlovchidan tortib Ustoz darajasigacha ko'tariling. Daraja bilan bron limitlaringiz oshadi.</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-gradient-to-r from-white/5 to-transparent border-l-2 border-l-accent border-y border-y-white/5 border-r border-r-white/5 rounded-2xl p-5 hover:border-accent/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(255,214,0,0.15)]">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <img src="https://em-content.zobj.net/source/apple/354/trophy_1f3c6.png" alt="Yutuq" className="w-7 h-7 drop-shadow-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Maxsus Yutuqlar (Badges)</h4>
                    <p className="text-slate text-sm">"Tezkor O'quvchi", "Janr Kashfiyotchisi" kabi unikal yutuqlarni qo'lga kiritib ballaringizni ko'paytiring.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center items-center mt-12 md:mt-0">
              <div className="relative w-full max-w-[300px] md:max-w-sm aspect-square bg-gradient-to-tr from-[#18181B]/90 to-[#18181B]/40 border border-white/10 rounded-full flex items-center justify-center shadow-[inset_0_0_50px_rgba(255,214,0,0.05),0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-4 border border-accent/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-12 border border-accent/40 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                
                <div className="text-center z-10">
                  <div className="mb-4 flex justify-center">
                    <img src="https://em-content.zobj.net/source/apple/354/crown_1f451.png" alt="Toj" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_0_20px_rgba(255,214,0,0.5)]" />
                  </div>
                  <div className="font-heading text-2xl md:text-3xl text-white">#1 O'rin</div>
                  <div className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mt-2">Hafta Chempioni</div>
                </div>
                
                {/* Floating elements */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[10%] right-[5%] md:right-[15%] bg-[#18181B] p-3 rounded-2xl border border-white/10 shadow-xl flex items-center justify-center">
                  <img src="https://em-content.zobj.net/source/apple/354/gem-stone_1f48e.png" alt="Olmos" className="w-8 h-8" />
                </motion.div>
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-[10%] left-[0%] md:left-[5%] bg-[#18181B] p-3 rounded-2xl border border-white/10 shadow-xl flex items-center justify-center">
                  <img src="https://em-content.zobj.net/source/apple/354/direct-hit_1f3af.png" alt="Maqsad" className="w-8 h-8" />
                </motion.div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} className="absolute top-[20%] left-[-5%] md:left-[5%] bg-[#18181B] p-3 rounded-2xl border border-white/10 shadow-xl flex items-center justify-center">
                  <img src="https://em-content.zobj.net/source/apple/354/fire_1f525.png" alt="Olov" className="w-8 h-8" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Librarian Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto mb-32 z-10 relative"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-white">Xodimlar Uchun</h2>
            <p className="text-[#A1A1AA] max-w-xl mx-auto font-label text-sm uppercase tracking-widest leading-relaxed">
              Kutubxonani boshqarishni 10 barobar osonlashtiruvchi vositalar
            </p>
          </div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-accent/10 text-2xl group-hover:scale-110 transition-transform">
                <img src="https://em-content.zobj.net/source/apple/354/package_1f4e6.png" alt="Box" className="w-8 h-8 drop-shadow-md" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">Avtomatlashgan Inventar</h3>
              <p className="text-slate text-sm leading-relaxed">Kitoblarni partiya orqali kiritish, ISBN orqali ma'lumotlarni Google'dan avto-to'ldirish va joylashuvni aniq kuzatish.</p>
            </motion.div>
            
            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-accent/10 text-2xl group-hover:scale-110 transition-transform">
                <img src="https://em-content.zobj.net/source/apple/354/money-bag_1f4b0.png" alt="Money" className="w-8 h-8 drop-shadow-md" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">Jarima va Moliya</h3>
              <p className="text-slate text-sm leading-relaxed">Kechikkan ijaralar uchun jarimalarni avtomatik hisoblash, to'lovlarni qabul qilish va moliyaviy hisobotlar.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-accent/10 text-2xl group-hover:scale-110 transition-transform">
                <img src="https://em-content.zobj.net/source/apple/354/chart-increasing_1f4c8.png" alt="Chart" className="w-8 h-8 drop-shadow-md" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">Murakkab Analitika</h3>
              <p className="text-slate text-sm leading-relaxed">Real-vaqt rejimida kutubxonaga tashriflar, eng ko'p o'qilayotgan janrlar bo'yicha dashboardlar.</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Memberships Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto mb-32 z-10 relative"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-white">A'zolik Darajalari</h2>
            <p className="text-[#A1A1AA] max-w-xl mx-auto font-label text-sm uppercase tracking-widest leading-relaxed">
              O'zingizga mos tarifni tanlang va kitob o'qishdan maksimal zavq oling
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
            {/* Standard */}
            <div className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-[30px] p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative group flex flex-col hover:-translate-y-2">
              <h3 className="font-heading text-2xl text-white mb-2">Standard</h3>
              <p className="text-slate text-sm mb-6">Yangi boshlovchilar va havaskorlar uchun.</p>
              <div className="font-number text-4xl text-white mb-8">Bepul</div>
              
              <ul className="flex flex-col gap-4 text-sm text-slate mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5 opacity-80" />
                  14 kun ijara muddati
                </li>
                <li className="flex items-center gap-3">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5 opacity-80" />
                  Bir vaqtda 3 ta kitob
                </li>
                <li className="flex items-center gap-3">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5 opacity-80" />
                  2 marta muddatni uzaytirish
                </li>
              </ul>
            </div>
            
            {/* Premium */}
            <div className="bg-gradient-to-b from-accent/10 to-[#18181B]/80 backdrop-blur-xl border-t border-t-accent/60 border-x border-x-accent/30 border-b border-b-transparent rounded-[30px] p-10 transform md:-translate-y-6 shadow-[0_20px_50px_rgba(255,214,0,0.2)] relative group flex flex-col hover:-translate-y-8 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-[#000000] px-4 py-1 rounded-full font-label text-[10px] uppercase font-black tracking-widest">
                Eng ommabop
              </div>
              <h3 className="font-heading text-2xl text-white mb-2 text-accent">Premium</h3>
              <p className="text-slate text-sm mb-6">Doimiy izlanuvchan kitobxonlar uchun.</p>
              <div className="font-number text-4xl text-white mb-8">49,000<span className="text-lg text-slate font-sans">/oy</span></div>
              
              <ul className="flex flex-col gap-4 text-sm text-slate mb-8 flex-1 relative z-10">
                <li className="flex items-center gap-3 text-white">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5" />
                  21 kun ijara muddati
                </li>
                <li className="flex items-center gap-3 text-white">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5" />
                  Bir vaqtda 5 ta kitob
                </li>
                <li className="flex items-center gap-3 text-white">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5" />
                  3 marta muddatni uzaytirish
                </li>
                <li className="flex items-center gap-3 text-white">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5" />
                  50% chegirma jarimalarga
                </li>
              </ul>
            </div>
            
            {/* VIP */}
            <div className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/40 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-[30px] p-8 hover:border-accent/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative group flex flex-col hover:-translate-y-2">
              <h3 className="font-heading text-2xl text-white mb-2">VIP</h3>
              <p className="text-slate text-sm mb-6">Cheklovlarsiz va maksimal qulaylik.</p>
              <div className="font-number text-4xl text-white mb-8">99,000<span className="text-lg text-slate font-sans">/oy</span></div>
              
              <ul className="flex flex-col gap-4 text-sm text-slate mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5 opacity-80" />
                  30 kun ijara muddati
                </li>
                <li className="flex items-center gap-3">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5 opacity-80" />
                  Bir vaqtda 10 ta kitob
                </li>
                <li className="flex items-center gap-3">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5 opacity-80" />
                  5 marta muddatni uzaytirish
                </li>
                <li className="flex items-center gap-3">
                  <img src="https://em-content.zobj.net/source/apple/354/check-mark-button_2705.png" alt="Check" className="w-5 h-5 opacity-80" />
                  Jarimalar yo'q
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Usage Section (Rollar) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl mx-auto bg-[#18181B]/40 backdrop-blur-2xl border border-white/5 rounded-[40px] p-8 md:p-16 lg:p-20 shadow-2xl relative"
        >
          {/* Subtle top glow inside the container */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[4px] bg-accent/30 blur-md rounded-full"></div>

          <div className="text-center mb-16 relative">
            <h2 className="font-heading text-4xl md:text-5xl mb-4 tracking-wider uppercase text-white">Foydalanish</h2>
            <p className="text-[#A1A1AA] max-w-lg mx-auto font-label text-sm uppercase tracking-widest leading-relaxed">
              Bu yerda platformadan qanday shaxs sifatida ro'yxatdan o'tish ko'rsatilgan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Card 1: Foydalanuvchi */}
            <div className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/30 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-[40px] p-12 h-[420px] flex flex-col justify-between group hover:border-accent/30 transition-all duration-500 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(255,214,0,0.15)] hover:-translate-y-2">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-all duration-700 pointer-events-none"></div>
              <div className="relative z-10 text-center">
                <img src="https://em-content.zobj.net/source/apple/354/man-student_1f468-200d-1f393.png" alt="O'quvchi" className="w-28 h-28 mx-auto mb-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-heading text-3xl mb-3 text-white">Foydalanuvchi</h3>
                <p className="text-slate text-sm max-w-xs mx-auto">Kitoblar qidirish, bron qilish, ijaralarni kuzatish va sharhlar qoldirish uchun.</p>
              </div>
              <div className="relative z-10 flex justify-center mt-auto w-full">
                <Button 
                  variant="primary" 
                  className="rounded-full w-48 shadow-[0_0_20px_rgba(255,214,0,0.3)] group-hover:shadow-[0_0_30px_rgba(255,214,0,0.5)] font-black text-xs tracking-widest uppercase h-12"
                  onClick={() => navigate('/login?role=foydalanuvchi')}
                >
                  Kirish
                </Button>
              </div>
            </div>

            {/* Card 2: Kutubxonachi */}
            <div className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/30 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-[40px] p-12 h-[420px] flex flex-col justify-between group hover:border-accent/30 transition-all duration-500 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(255,214,0,0.15)] hover:-translate-y-2">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-all duration-700 pointer-events-none"></div>
              <div className="relative z-10 text-center">
                <img src="https://em-content.zobj.net/source/apple/354/woman-office-worker_1f469-200d-1f4bc.png" alt="Kutubxonachi" className="w-28 h-28 mx-auto mb-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-heading text-3xl mb-3 text-white">Kutubxonachi</h3>
                <p className="text-slate text-sm max-w-xs mx-auto">Filialni boshqarish, kitoblarni berish/qaytarish va statistikani ko'rish uchun.</p>
              </div>
              <div className="relative z-10 flex justify-center mt-auto w-full">
                <Button 
                  variant="primary" 
                  className="rounded-full w-48 shadow-[0_0_20px_rgba(255,214,0,0.3)] group-hover:shadow-[0_0_30px_rgba(255,214,0,0.5)] font-black text-xs tracking-widest uppercase h-12"
                  onClick={() => navigate('/login?role=kutubxonachi')}
                >
                  Kirish
                </Button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Padding/Divider before FAQ */}
        <div className="w-full h-16"></div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto mb-32 z-10 relative"
          id="faq"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-white">Ko'p Beriladigan Savollar</h2>
            <p className="text-[#A1A1AA] font-label text-sm uppercase tracking-widest leading-relaxed">
              Tizim haqida barcha javoblar shu yerda
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { q: "Platformadan foydalanish bepulmi?", a: "Ha, tizimdan oddiy o'quvchi sifatida ro'yxatdan o'tish va kitob qidirish mutlaqo bepul. Qo'shimcha qulayliklar uchun Premium va VIP tariflari mavjud." },
              { q: "Kitobni bron qilgandan so'ng qancha vaqtda olib ketishim kerak?", a: "Bron qilingan kitob siz uchun 48 soat davomida saqlab turiladi. Agar bu vaqt ichida olib ketmasangiz, bron avtomatik bekor qilinadi." },
              { q: "Kechikkan kitoblar uchun qanday jarima qo'llaniladi?", a: "Jarima miqdori a'zolik darajangizga bog'liq. Standard tarifda kuniga 1000 so'm, Premiumda 500 so'm. VIP tarifda esa jarima hisoblanmaydi." },
              { q: "Kutubxona xodimlari uchun qanday imkoniyatlar bor?", a: "Xodimlar bar-kod skaner orqali 1 soniyada kitob berishi/qaytarishi, avtomatik statistika yuritishi va barcha filiallarni yagona tizimda boshqarishi mumkin." },
            ].map((faq, i) => (
              <div key={i} className="bg-gradient-to-br from-[#18181B]/80 to-[#18181B]/30 backdrop-blur-xl border-t border-t-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-2xl p-6 hover:border-accent/30 transition-all duration-300">
                <h3 className="font-heading text-xl text-white mb-2 flex items-center gap-3">
                  <span className="text-accent text-2xl leading-none">•</span> {faq.q}
                </h3>
                <p className="text-slate text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Padding/Divider before stats */}
        <div className="w-full h-32"></div>

        {/* Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full relative z-10 max-w-7xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-tr from-[#18181B]/95 to-accent/10 border-t border-t-accent/40 border-x border-x-accent/10 border-b border-b-transparent rounded-[40px] p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 backdrop-blur-3xl shadow-[0_20px_60px_rgba(255,214,0,0.15)] group hover:shadow-[0_20px_80px_rgba(255,214,0,0.2)] transition-all duration-700">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
            
            <div className="relative z-10 md:w-1/3 text-center md:text-left">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">Tizim raqamlarda</h2>
              <p className="text-slate text-sm leading-relaxed">Kutubxonangiz muvaffaqiyatini belgilaydigan kuchli indikatorlar platformaning qanchalik tez ekanligini isbotlaydi.</p>
            </div>
            
            <div className="relative z-10 flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
              <div className="text-center md:text-left">
                <div className="font-number text-5xl md:text-6xl text-white mb-1 drop-shadow-md">100K+</div>
                <div className="font-label text-xs uppercase tracking-widest text-accent font-bold">Kutubxona Bazasi</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-number text-5xl md:text-6xl text-white mb-1 drop-shadow-md">25+</div>
                <div className="font-label text-xs uppercase tracking-widest text-[#A1A1AA] font-bold">Faol Filiallar</div>
              </div>
              <div className="text-center md:text-left w-full col-span-2 md:col-span-1">
                <div className="font-number text-5xl md:text-6xl text-white mb-1 drop-shadow-md">24/7</div>
                <div className="font-label text-xs uppercase tracking-widest text-[#A1A1AA] font-bold">Avto Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="relative w-full border-t border-white/5 bg-[#09090B] pt-16 pb-8 z-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2 text-center md:text-left">
            <div className="font-heading text-3xl tracking-wider font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(255,214,0,0.4)]">
              EDUJAVON
            </div>
            <p className="text-slate text-sm leading-relaxed max-w-sm mx-auto md:mx-0 mb-6 font-medium">
              Zamonaviy kutubxona jarayonlarini tizimlashtirish va osonlashtirish uchun yagona ilg'or platforma.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-label text-xs uppercase tracking-widest text-white font-bold mb-6">Mundarija</h4>
            <ul className="flex flex-col gap-3 font-label text-sm tracking-widest text-slate">
              <li><a href="#" className="hover:text-accent transition-colors">Biz haqimizda</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Takliflar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-label text-xs uppercase tracking-widest text-white font-bold mb-6">Ijtimoiy Tarmoqlar</h4>
            <div className="flex flex-col gap-3 font-label text-sm tracking-widest inline-flex items-center md:items-start">
              <a href="https://t.me/mizode" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate hover:text-accent transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </div>
                <span>Telegram</span>
              </a>
              <a href="https://www.instagram.com/mizodeteam/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate hover:text-accent transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between font-label text-xs uppercase tracking-widest text-slate gap-4">
          <p>© {new Date().getFullYear()} Mizode Team. Barcha huquqlar o'zlashtirilgan.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white transition-colors">Shartlar</a>
          </div>
        </div>
        
      </footer>
</div>
);
}