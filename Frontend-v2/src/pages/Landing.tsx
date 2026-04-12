  import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function Landing() {
  const navigate = useNavigate();

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
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-center font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-12"
          style={{ textShadow: "0 0 60px rgba(255, 214, 0, 0.15)" }}
        >
          EDUJAVON
        </motion.h1>

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#18181B]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-accent/30 transition-colors shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6  transition-all">
                <img src="https://em-content.zobj.net/source/apple/354/high-voltage_26a1.png" alt="Chaqmoq" className="w-8 h-8 drop-shadow-lg scale-180 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">To'liq Avtomatlashgan</h3>
              <p className="text-slate text-sm leading-relaxed">Jarayonlarning aksariyati inson omilisiz xatosiz ishlaydi. Ijaralar, jarimalar va a'zolik muddati avtomatik boshqariladi.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#18181B]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-accent/30 transition-colors shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6  transition-all">
                <img src="https://em-content.zobj.net/source/apple/354/mobile-phone_1f4f1.png" alt="Telefon" className="w-8 h-8 drop-shadow-lg scale-180 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">Barkod & QR Tizimi</h3>
              <p className="text-slate text-sm leading-relaxed">Kitoblarni berish va qaytarib olishni zamonaviy shtrix-kod va QR skanerlar orqali bir necha soniyada bajaring.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#18181B]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-accent/30 transition-colors shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6  transition-all">
                <img src="https://em-content.zobj.net/source/apple/354/bar-chart_1f4ca.png" alt="Statistika" className="w-8 h-8 drop-shadow-lg scale-180 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">Real-vaqt Statistikasi</h3>
              <p className="text-slate text-sm leading-relaxed">Kutubxona bo'yicha barcha tahliliy ma'lumotlar jonli efir rejimida sizning asosiy panelingizda ko'rinib turadi.</p>
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
            <div className="bg-[#18181B]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-10 h-[400px] flex flex-col justify-between group hover:border-accent/30 transition-all duration-500 relative overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,214,0,0.15)]">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-all duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-3xl mb-2 text-white">Foydalanuvchi</h3>
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
            <div className="bg-[#18181B]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-10 h-[400px] flex flex-col justify-between group hover:border-accent/30 transition-all duration-500 relative overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,214,0,0.15)]">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-all duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-3xl mb-2 text-white">Kutubxonachi</h3>
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
          <div className="bg-gradient-to-r from-accent/10 via-[#18181B]/80 to-[#18181B]/80 border border-accent/20 rounded-[40px] p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 backdrop-blur-3xl shadow-[0_20px_50px_rgba(255,214,0,0.1)]">
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