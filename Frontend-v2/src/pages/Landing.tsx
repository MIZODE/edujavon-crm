import { motion, useScroll, useTransform, useSpring, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useRef } from 'react';

// Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Landing() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  // const y = useTransform(springScroll, [0, 1], ["0%", "50%"]);
  
  // Custom Parallax Ref
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.9]);
  const heroY = useTransform(heroProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-[#000000] text-ink min-h-screen overflow-hidden selection:bg-accent/30 selection:text-accent font-body relative">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]" style={{ scaleX: springScroll }} />

      {/* Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-accent/5 blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-accent/3 blur-[150px] mix-blend-screen" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(1.5rem,5vw,4rem)] py-[clamp(1rem,3vw,1.5rem)] backdrop-blur-md bg-black/20 border-b border-white/5"
      >
        <div className="font-heading text-[clamp(1.25rem,3vw,1.75rem)] font-extrabold tracking-[0.2em] text-white">
          EDUJAVON<span className="text-accent">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-[clamp(2rem,4vw,3rem)] font-label text-[11px] uppercase tracking-[0.25em] text-slate font-bold">
          <a href="#about" className="hover:text-accent transition-colors duration-300 relative group">
            Biz Haqimizda
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#features" className="hover:text-accent transition-colors duration-300 relative group">
            Afzalliklar
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#how-it-works" className="hover:text-accent transition-colors duration-300 relative group">
            Qanday Ishlaydi
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#memberships" className="hover:text-accent transition-colors duration-300 relative group">
            Tariflar
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#faq" className="hover:text-accent transition-colors duration-300 relative group">
            FAQ
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <Button 
          variant="primary" 
          className="rounded-none px-8 py-6 uppercase tracking-[0.2em] font-black text-[10px] bg-accent text-black hover:bg-white transition-all duration-500 overflow-hidden relative group border-none shadow-[0_0_20px_rgba(255,214,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          onClick={() => navigate('/login')}
        >
          <span className="relative z-10">Tizimga Kirish</span>
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
        </Button>
      </motion.nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center pt-20 px-[clamp(1rem,5vw,4rem)] overflow-hidden">
          <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-[clamp(2rem,6vw,3rem)]"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(255,214,0,0.8)]" />
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-white">EDUJAVON v2.0 Live</span>
            </motion.div>

            <div className="relative mb-[clamp(2rem,5vw,3rem)]">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-extrabold text-[clamp(3.5rem,12vw,14rem)] leading-[0.85] tracking-tighter text-white uppercase"
              >
                
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-accent bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] drop-shadow-[0_0_40px_rgba(255,214,0,0.2)]">
                  Edujavon
                </span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-[600px] text-[clamp(0.875rem,2vw,1.125rem)] text-slate font-label font-medium tracking-[0.05em] leading-relaxed mb-[clamp(3rem,8vw,5rem)]"
            >
              Raqamli kutubxona boshqaruvi. Kitobxonlar va kutubxonachilar uchun yagona, mukammal ishlangan platforma.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative w-full max-w-[800px] aspect-[16/9] mx-auto group"
            >
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-[3rem] group-hover:bg-accent/30 transition-colors duration-700" />
              <div className="relative w-full h-full rounded-[2rem] border border-white/10 bg-[#09090B]/80 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-accent/30 transition-all duration-700 flex items-center justify-center">
                 <img src="/ABook_logo.png" alt="Edujavon Logo" className="w-[clamp(200px,40vw,400px)] h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,214,0,0.3)] group-hover:scale-105 group-hover:drop-shadow-[0_20px_60px_rgba(255,214,0,0.5)] transition-all duration-1000" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT US / MORE INFO */}
        <section id="about" className="py-[clamp(5rem,15vw,10rem)] px-[clamp(1rem,5vw,4rem)] max-w-[1400px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,8vw,6rem)] items-center"
          >
            <div>
              <div className="font-label text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-4">Biz Haqimizda</div>
              <h2 className="font-heading font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white uppercase tracking-tighter mb-6 leading-[0.9]">
                Kutubxona <br/><span className="text-slate">Yangi Davrda</span>
              </h2>
              <p className="text-slate text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed mb-6">
                Edujavon – shunchaki dastur emas, balki an'anaviy kutubxona jarayonlarini to'liq raqamlashtiruvchi ekotizimdir. Biz kitobxonlar va kutubxonachilar o'rtasidagi ko'prikni yaratamiz, jarayonlarni tezlashtiramiz va o'qish madaniyatini zamonaviy usulda targ'ib qilamiz.
              </p>
              <div className="flex gap-4">
                <div className="border border-white/10 bg-[#09090B] px-6 py-4 rounded-[1.5rem] hover:border-accent/30 transition-colors duration-300 flex-1">
                  <div className="font-heading text-3xl text-accent mb-1">Missiya</div>
                  <div className="text-slate text-xs font-label uppercase tracking-widest">O'qishni osonlashtirish</div>
                </div>
                <div className="border border-white/10 bg-[#09090B] px-6 py-4 rounded-[1.5rem] hover:border-accent/30 transition-colors duration-300 flex-1">
                  <div className="font-heading text-3xl text-accent mb-1">Maqsad</div>
                  <div className="text-slate text-xs font-label uppercase tracking-widest">Bilimga tezkor yo'l</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] border border-white/10 bg-[#09090B]/50 overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(255,214,0,0.05)] group">
               {/* Decorative Abstract Library Representation */}
               <div className="absolute inset-0 bg-accent/5 blur-[50px] rounded-full group-hover:bg-accent/10 transition-colors duration-700" />
               <motion.div 
                 animate={{ y: [0, -10, 0] }} 
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="w-[60%] h-[60%] border border-accent/20 rounded-[2rem] bg-black/50 backdrop-blur-md rotate-[-6deg] absolute"
               />
               <motion.div 
                 animate={{ y: [0, 10, 0] }} 
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="w-[60%] h-[60%] border border-white/10 rounded-[2rem] bg-[#09090B]/80 backdrop-blur-xl rotate-[3deg] relative flex items-center justify-center shadow-xl group-hover:border-accent/30 transition-colors duration-700"
               >
                 <img src="https://em-content.zobj.net/source/apple/354/books_1f4da.png" alt="Books" className="w-16 h-16 drop-shadow-[0_10px_20px_rgba(255,214,0,0.5)]" />
               </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FEATURES GRID */}
        <section id="features" className="py-[clamp(5rem,15vw,10rem)] px-[clamp(1rem,5vw,4rem)] max-w-[1600px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(1rem,3vw,2rem)]"
          >
            {/* Header Block */}
            <motion.div variants={fadeUp} className="md:col-span-12 flex flex-col md:flex-row justify-between items-end gap-8 mb-[clamp(2rem,6vw,4rem)]">
              <div>
                <h2 className="font-heading font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight text-white uppercase mb-4">
                  Kelajak <br/><span className="text-accent">Standarti</span>
                </h2>
              </div>
              <p className="max-w-sm text-slate text-sm font-label uppercase tracking-[0.1em] leading-relaxed pb-2 border-b border-white/10">
                An'anaviy kutubxona tizimlarini butunlay o'zgartiruvchi texnologiyalar.
              </p>
            </motion.div>

            {/* Bento Grid Items */}
            <motion.div variants={fadeUp} className="md:col-span-8 bg-[#09090B] border border-white/5 hover:border-accent/20 rounded-[2.5rem] p-[clamp(2.5rem,6vw,4rem)] relative overflow-hidden group transition-colors duration-500 min-h-[400px] flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-all duration-700" />
              <div className="absolute top-[2.5rem] right-[2.5rem] text-accent">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] text-white mb-4 relative z-10">To'liq Avtomatizatsiya</h3>
              <p className="text-slate text-[clamp(0.875rem,1.5vw,1rem)] max-w-md leading-relaxed relative z-10">
                Inson omilisiz xatosiz ishlovchi jarayonlar. Ijaralar, jarimalar va a'zolik muddati avtomatik boshqariladi.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-4 bg-[#09090B] border border-white/5 hover:border-accent/20 rounded-[2.5rem] p-[clamp(2.5rem,6vw,4rem)] relative overflow-hidden group transition-colors duration-500 min-h-[400px] flex flex-col justify-end">
              <div className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] bg-white/5 blur-[50px] rounded-full group-hover:bg-accent/10 transition-all duration-700" />
              <div className="absolute top-[2.5rem] left-[2.5rem] text-white/50 group-hover:text-accent transition-colors duration-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01"/><path d="M7 12h10"/></svg>
              </div>
              <h3 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] text-white mb-4 relative z-10">Barkod & QR</h3>
              <p className="text-slate text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed relative z-10">
                Shtrix-kod orqali soniyalarda kitob berish va qabul qilish.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-4 bg-accent text-black rounded-[2.5rem] p-[clamp(2.5rem,6vw,4rem)] relative overflow-hidden group min-h-[400px] flex flex-col justify-between shadow-[0_0_40px_rgba(255,214,0,0.15)]">
              <div className="font-label text-[10px] uppercase tracking-[0.2em] font-black border border-black/20 self-start px-4 py-2 rounded-full">Analitika</div>
              <div>
                <h3 className="font-heading font-extrabold text-[clamp(1.5rem,3vw,2.5rem)] mb-4">Jonli <br/>Statistika</h3>
                <p className="text-black/70 text-[clamp(0.875rem,1.5vw,1rem)] font-medium leading-relaxed">
                  Barcha ma'lumotlar real vaqtda dashboardda.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-8 bg-[#09090B] border border-white/5 hover:border-accent/20 rounded-[2.5rem] p-[clamp(2.5rem,6vw,4rem)] relative overflow-hidden group transition-colors duration-500 min-h-[400px] flex flex-col justify-end items-end text-right">
              <div className="absolute inset-0 bg-[url('https://em-content.zobj.net/source/apple/354/robot_1f916.png')] bg-no-repeat bg-[center_left_10%] bg-[length:150px] opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700" />
              <h3 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] text-white mb-4 relative z-10">Telegram Integratsiyasi</h3>
              <p className="text-slate text-[clamp(0.875rem,1.5vw,1rem)] max-w-md leading-relaxed relative z-10">
                Bot orqali ro'yxatdan o'tish, ijaralarni kuzatish va eslatmalarni qabul qilish. Hammasi sizning cho'ntagingizda.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* GAMIFICATION / LEADERBOARD SECTION */}
        <section className="relative py-[clamp(5rem,10vw,8rem)] overflow-hidden">
          <div className="absolute inset-0 bg-accent border-y border-accent/20" style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)' }}>
            {/* Inner Dark container matching clip path roughly */}
            <div className="absolute inset-[1px] bg-[#050505]" style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)' }}>
               {/* Content */}
               <div className="max-w-[1400px] mx-auto h-full px-[clamp(1rem,5vw,4rem)] flex flex-col justify-center py-[clamp(4rem,10vw,8rem)]">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(4rem,10vw,8rem)] items-center">
                   
                   <motion.div 
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                   >
                     <div className="font-label text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-6">Gamifikatsiya</div>
                     <h2 className="font-heading text-[clamp(3rem,6vw,5rem)] text-white uppercase leading-[0.9] tracking-tighter mb-8">
                       O'qishni <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">O'yinga</span> Aylantiring
                     </h2>
                     <p className="text-slate text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed mb-12 max-w-lg">
                       Ballar yig'ing, yangi darajalarni oching va maxsus yutuqlarni qo'lga kiriting. Leaderboard orqali do'stlaringiz bilan bellashing.
                     </p>
                     
                     <div className="flex flex-col gap-6">
                       <div className="flex items-center gap-6 group">
                         <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-500">
                           <img src="https://em-content.zobj.net/source/apple/354/trophy_1f3c6.png" className="w-8 h-8 drop-shadow-[0_5px_15px_rgba(255,214,0,0.3)] group-hover:scale-110 transition-transform" alt="Trophy" />
                         </div>
                         <div>
                           <div className="text-white font-heading text-xl mb-1 group-hover:text-accent transition-colors">Maxsus Yutuqlar</div>
                           <div className="text-slate text-sm">"Tezkor O'quvchi", "Kashfiyotchi" badges</div>
                         </div>
                       </div>
                       <div className="flex items-center gap-6 group">
                         <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-500">
                           <img src="https://em-content.zobj.net/source/apple/354/glowing-star_1f31f.png" className="w-8 h-8 drop-shadow-[0_5px_15px_rgba(255,214,0,0.3)] group-hover:scale-110 transition-transform" alt="Star" />
                         </div>
                         <div>
                           <div className="text-white font-heading text-xl mb-1 group-hover:text-accent transition-colors">Darajalar Tizimi</div>
                           <div className="text-slate text-sm">Bron limitlaringizni oshirib boring</div>
                         </div>
                       </div>
                     </div>
                   </motion.div>

                   <motion.div 
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                     className="relative flex items-center justify-center"
                   >
                     <div className="relative w-[clamp(300px,40vw,500px)] aspect-square rounded-full border border-white/5 bg-gradient-to-tr from-[#09090B] to-[#18181B] flex items-center justify-center shadow-[0_0_100px_rgba(255,214,0,0.05)]">
                        <motion.div 
                          animate={{ rotate: 360 }} 
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-4 rounded-full border border-accent/20 border-dashed"
                        />
                        <motion.div 
                          animate={{ rotate: -360 }} 
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-12 rounded-full border border-white/5"
                        />
                        
                        <div className="text-center z-10 flex flex-col items-center">
                          <img src="https://em-content.zobj.net/source/apple/354/crown_1f451.png" alt="Toj" className="w-24 h-24 drop-shadow-[0_0_30px_rgba(255,214,0,0.4)] mb-4" />
                          <div className="font-heading text-4xl text-white">#1 O'RIN</div>
                          <div className="font-label text-accent text-[10px] tracking-[0.2em] uppercase font-bold mt-2">Hafta Chempioni</div>
                        </div>
                     </div>
                   </motion.div>

                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-[clamp(5rem,15vw,10rem)] px-[clamp(1rem,5vw,4rem)] max-w-[1400px] mx-auto">
          <div className="text-center mb-[clamp(4rem,8vw,6rem)]">
            <h2 className="font-heading font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white uppercase tracking-tighter mb-6">
              Qanday <span className="text-accent">Ishlaydi</span>
            </h2>
            <p className="text-slate font-label uppercase tracking-[0.1em] text-sm">4 oddiy qadam bilan boshlang</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          >
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

            {[
              { step: "01", title: "Ro'yxatdan O'tish", desc: "Telegram bot orqali atigi 5 soniyada.", emoji: "rocket_1f680.png" },
              { step: "02", title: "Qidiruv", desc: "Aqlli qidiruv yordamida kitob topish.", emoji: "magnifying-glass-tilted-right_1f50e.png" },
              { step: "03", title: "Bron", desc: "48 soatga o'zingiz uchun band qiling.", emoji: "pushpin_1f4cc.png" },
              { step: "04", title: "Qabul", desc: "QR kod orqali filialdan darhol oling.", emoji: "books_1f4da.png" }
            ].map((item, i) => (
              <motion.div variants={fadeUp} key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-[100px] h-[100px] rounded-full bg-[#000000] border-2 border-white/10 group-hover:border-accent flex items-center justify-center mb-8 transition-colors duration-500 relative">
                  <img src={`https://em-content.zobj.net/source/apple/354/${item.emoji}`} alt={item.title} className="w-12 h-12 filter grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(255,214,0,0.2)] group-hover:drop-shadow-[0_10px_25px_rgba(255,214,0,0.5)] transition-all duration-500" />
                  <div className="absolute -bottom-4 bg-accent text-black font-number text-xs font-black px-3 py-1 rounded-full">{item.step}</div>
                </div>
                <h3 className="font-heading text-xl text-white mb-3">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* MEMBERSHIPS */}
        <section id="memberships" className="py-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,5vw,4rem)] bg-[#09090B]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[clamp(4rem,8vw,6rem)] gap-8">
              <div>
                <h2 className="font-heading font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white uppercase tracking-tighter mb-4">
                  A'zolik <br/><span className="text-accent">Tariflari</span>
                </h2>
              </div>
              <p className="text-slate font-label uppercase tracking-[0.1em] text-sm max-w-sm text-right">
                O'zingizga eng mosini tanlang
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Standard */}
              <div className="border border-white/10 bg-[#000000] p-[clamp(2.5rem,4vw,3.5rem)] rounded-[2.5rem] flex flex-col hover:border-white/30 transition-colors duration-300">
                <div className="font-heading text-2xl text-white mb-2">Standard</div>
                <div className="text-slate text-sm mb-8">Boshlovchilar uchun</div>
                <div className="font-heading text-5xl text-white mb-8">Bepul</div>
                <ul className="flex flex-col gap-4 text-slate text-sm font-medium flex-1 border-t border-white/5 pt-8">
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 14 kun ijara</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 3 ta kitob limiti</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 2 marta uzaytirish</li>
                </ul>
              </div>

              {/* Premium */}
              <div className="border border-accent bg-[#000000] p-[clamp(2.5rem,4vw,3.5rem)] rounded-[2.5rem] flex flex-col relative shadow-[0_0_30px_rgba(255,214,0,0.1)] md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-accent text-black font-label text-[10px] uppercase font-black tracking-widest px-5 py-2 rounded-bl-[1.5rem] rounded-tr-[2.4rem]">Ommabop</div>
                <div className="font-heading text-2xl text-accent mb-2">Premium</div>
                <div className="text-slate text-sm mb-8">Faol kitobxonlar uchun</div>
                <div className="font-heading text-5xl text-white mb-8">49k<span className="text-lg text-slate font-sans">/oy</span></div>
                <ul className="flex flex-col gap-4 text-white text-sm font-medium flex-1 border-t border-white/10 pt-8">
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 21 kun ijara</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 5 ta kitob limiti</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 3 marta uzaytirish</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 50% jarima chegirmasi</li>
                </ul>
              </div>

              {/* VIP */}
              <div className="border border-white/10 bg-[#000000] p-[clamp(2.5rem,4vw,3.5rem)] rounded-[2.5rem] flex flex-col hover:border-white/30 transition-colors duration-300">
                <div className="font-heading text-2xl text-white mb-2">VIP</div>
                <div className="text-slate text-sm mb-8">Cheklovlarsiz o'qish</div>
                <div className="font-heading text-5xl text-white mb-8">99k<span className="text-lg text-slate font-sans">/oy</span></div>
                <ul className="flex flex-col gap-4 text-slate text-sm font-medium flex-1 border-t border-white/5 pt-8">
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 30 kun ijara</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 10 ta kitob limiti</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> 5 marta uzaytirish</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> Jarimalar bekor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-[clamp(5rem,15vw,10rem)] px-[clamp(1rem,5vw,4rem)] max-w-[1000px] mx-auto">
          <div className="text-center mb-[clamp(4rem,8vw,6rem)]">
            <h2 className="font-heading font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white uppercase tracking-tighter mb-6">
              Ko'p Beriladigan <span className="text-accent">Savollar</span>
            </h2>
            <p className="text-slate font-label uppercase tracking-[0.1em] text-sm">Barcha javoblar bitta joyda</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col gap-4"
          >
            {[
              { q: "Platformadan foydalanish bepulmi?", a: "Ha, tizimdan oddiy o'quvchi sifatida ro'yxatdan o'tish va kitob qidirish mutlaqo bepul. Qo'shimcha qulayliklar uchun Premium va VIP tariflari mavjud." },
              { q: "Kitobni bron qilgandan so'ng nima bo'ladi?", a: "Bron qilingan kitob siz uchun 48 soat davomida saqlab turiladi. Agar bu vaqt ichida filialdan olib ketmasangiz, bron avtomatik bekor qilinadi." },
              { q: "Kechikkan kitoblar uchun jarima qanday hisoblanadi?", a: "Jarima miqdori a'zolik darajangizga bog'liq. Standard tarifda kuniga belgilangan miqdorda, Premiumda 50% chegirma bilan. VIP tarifda esa jarima hisoblanmaydi." },
              { q: "Kutubxona xodimlari uchun qanday qulayliklar bor?", a: "Xodimlar bar-kod skaner orqali soniyalarda kitob berishi/qaytarishi, avtomatik statistika yuritishi va barcha filiallarni yagona tizimda boshqarishi mumkin." }
            ].map((faq, i) => (
              <motion.div variants={fadeUp} key={i} className="group border border-white/10 bg-[#09090B] rounded-[2.5rem] p-[clamp(2rem,4vw,3rem)] hover:border-accent/30 transition-colors duration-500">
                <div className="font-heading text-[clamp(1.25rem,2vw,1.5rem)] text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {faq.q}
                </div>
                <div className="text-slate text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* STATS CINEMATIC POSTER */}
        <section className="py-[clamp(5rem,15vw,10rem)] px-[clamp(1rem,5vw,4rem)]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[1400px] mx-auto bg-[#09090B] border border-white/10 rounded-[2rem] overflow-hidden relative"
          >
            {/* Massive Background Text */}
            <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none opacity-[0.02]">
              <span className="font-heading text-[30vw] leading-none font-black text-white whitespace-nowrap select-none">STATS</span>
            </div>
            
            <div className="relative z-10 p-[clamp(3rem,8vw,6rem)]">
              <div className="text-center mb-[clamp(4rem,8vw,6rem)]">
                <div className="font-label text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-4">Platforma Kuchi</div>
                <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] text-white uppercase tracking-tighter">
                  Tizim Raqamlarda
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10 py-10">
                <div className="flex flex-col items-center justify-center py-8 group">
                  <div className="font-heading text-[clamp(4rem,8vw,6rem)] text-white mb-2 group-hover:scale-110 group-hover:text-accent transition-all duration-500">100K+</div>
                  <div className="font-label text-[10px] uppercase tracking-[0.2em] text-slate font-bold">Kutubxona Bazasi</div>
                </div>
                <div className="flex flex-col items-center justify-center py-8 group">
                  <div className="font-heading text-[clamp(4rem,8vw,6rem)] text-white mb-2 group-hover:scale-110 group-hover:text-accent transition-all duration-500">25+</div>
                  <div className="font-label text-[10px] uppercase tracking-[0.2em] text-slate font-bold">Faol Filiallar</div>
                </div>
                <div className="flex flex-col items-center justify-center py-8 group">
                  <div className="font-heading text-[clamp(4rem,8vw,6rem)] text-white mb-2 group-hover:scale-110 group-hover:text-accent transition-all duration-500">24/7</div>
                  <div className="font-label text-[10px] uppercase tracking-[0.2em] text-slate font-bold">Avto Monitoring</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#000000] border-t border-white/10 pt-24 pb-8 px-[clamp(1rem,5vw,4rem)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="font-heading text-2xl font-extrabold tracking-[0.2em] text-white mb-6">
              EDUJAVON<span className="text-accent">.</span>
            </div>
            <p className="text-slate text-sm leading-relaxed max-w-sm font-medium">
              Kutubxona jarayonlarini tizimlashtirish uchun yagona ilg'or platforma.
            </p>
          </div>
          <div>
            <div className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Menyular</div>
            <ul className="flex flex-col gap-4 text-slate text-sm">
              <li><a href="#about" className="hover:text-accent transition-colors">Biz haqimizda</a></li>
              <li><a href="#features" className="hover:text-accent transition-colors">Afzalliklar</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">Qanday ishlaydi</a></li>
              <li><a href="#memberships" className="hover:text-accent transition-colors">Tariflar</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Aloqa</div>
            <ul className="flex flex-col gap-4 text-slate text-sm">
              <li><a href="https://t.me/mizode" className="hover:text-accent transition-colors">Telegram</a></li>
              <li><a href="https://instagram.com/mizodeteam" className="hover:text-accent transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate text-[10px] font-label uppercase tracking-[0.1em]">
          <div>© {new Date().getFullYear()} Mizode Team.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik</a>
            <a href="#" className="hover:text-white transition-colors">Shartlar</a>
          </div>
        </div>
      </footer>
    </div>
  );
}