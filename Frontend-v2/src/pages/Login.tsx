import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Book as BookOpen } from 'iconsax-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
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

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock login delay
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen w-full bg-surface-0">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-surface-0 items-center justify-center p-12">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-surface-0 via-surface-0/80 to-transparent"></div>
        
        <motion.div 
          className="relative z-10 max-w-lg w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-ink font-display text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">
            Kutubxona
          </motion.h1>
          <motion.p variants={itemVariants} className="text-ink border-l-4 border-accent pl-4 text-xl font-body italic mb-16 opacity-90 drop-shadow-md">
            Bilim boshqaruv platformasi
          </motion.p>
          
          <div className="grid grid-cols-1 gap-4">
            <motion.div variants={itemVariants} className="bg-surface-2/40 backdrop-blur-md border border-surface-border p-6 rounded-card shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500"></div>
              <div className="flex justify-between items-start mb-2 relative z-10">
                <p className="text-slate font-label text-sm uppercase tracking-widest">Jami kitoblar</p>
                <img src="https://em-content.zobj.net/source/apple/354/books_1f4da.png" alt="books emoji" className="w-9 h-9 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="font-number text-5xl text-ink tracking-wider relative z-10">12,847</p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="bg-surface-2/40 backdrop-blur-md border border-surface-border p-6 rounded-card shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-colors">
                <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <p className="text-slate font-label text-[11px] uppercase tracking-widest">Bugungi ijaralar</p>
                  <img src="https://em-content.zobj.net/source/apple/354/fire_1f525.png" alt="fire emoji" className="w-8 h-8 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] group-hover:-rotate-12 transition-transform duration-300" />
                </div>
                <p className="font-number text-4xl text-accent tracking-wider relative z-10">234</p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-surface-2/40 backdrop-blur-md border border-surface-border p-6 rounded-card shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-colors">
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <p className="text-slate font-label text-xs uppercase tracking-widest">Faol a'zolar</p>
                  <img src="https://em-content.zobj.net/source/apple/354/star-struck_1f929.png" alt="star emoji" className="w-8 h-8 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="font-number text-4xl text-ink tracking-wider relative z-10">4,291</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-24 bg-surface-0 relative border-l border-surface-border overflow-hidden transition-colors duration-500">
        {/* Ambient Glow / Nur efekti */}
        <div className="absolute -top-[30%] -right-[30%] w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
        <motion.div 
          className="w-full max-w-sm relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="w-14 h-14 bg-accent inline-flex items-center justify-center mb-8 rounded-xl shadow-[0_0_30px_rgba(255,214,0,0.3)] rotate-3 hover:rotate-0 transition-all duration-300">
            <BookOpen color="currentColor" className="text-black" size={28} variant="Bulk" />
          </div>
          
          <h2 className="font-heading text-4xl text-ink mb-2">Xush kelibsiz</h2>
          <p className="text-slate font-body mb-8">Kutubxona CRM tizimiga kirish uchun tasdiqlang.</p>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <Input 
              type="text" 
              floating 
              label="Telefon raqam yoki unikal ID" 
              placeholder="+998"
              required
            />
            <Input 
              type="password" 
              floating 
              label="Parol"
              required
            />
            
            <div className="flex justify-end pb-2">
              <a href="#" className="font-label text-sm text-slate hover:text-accent font-medium">
                Parolni unutdingizmi?
              </a>
            </div>
            
            <Button type="submit" variant="primary" size="lg" className="w-full text-lg" loading={loading}>
              Kirish
            </Button>
          </form>

          <div className="relative flex py-8 items-center">
            <div className="flex-grow border-t border-surface-2"></div>
            <span className="flex-shrink-0 mx-4 text-slate font-label text-xs uppercase tracking-widest">Demo Kirish (Test)</span>
            <div className="flex-grow border-t border-surface-2"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => { localStorage.setItem('edu_role', 'superadmin'); navigate('/dashboard'); }} 
              className="border-surface-border text-ink hover:border-accent hover:bg-accent/10 hover:text-accent font-label text-[10px] tracking-widest uppercase"
            >
              SuperAdmin
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => { localStorage.setItem('edu_role', 'manager'); navigate('/dashboard'); }} 
              className="border-surface-border text-ink hover:border-[#24A1DE] hover:bg-[#24A1DE]/10 hover:text-[#24A1DE] font-label text-[10px] tracking-widest uppercase"
            >
              Manager
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => { localStorage.setItem('edu_role', 'librarian'); navigate('/dashboard'); }} 
              className="border-surface-border text-ink hover:border-success hover:bg-success/10 hover:text-success font-label text-[10px] tracking-widest uppercase"
            >
              Librarian
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => { localStorage.setItem('edu_role', 'user'); navigate('/dashboard'); }} 
              className="border-surface-border text-ink hover:border-slate hover:bg-surface-border font-label text-[10px] tracking-widest uppercase"
            >
              Foydalanuvchi
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
