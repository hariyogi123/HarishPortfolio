import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none"
    >
      <div className="container mx-auto max-w-5xl pointer-events-auto">
        <div className={`flex items-center justify-between px-8 py-3 rounded-full transition-all duration-300 border border-white/20 ${
          scrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-lg border-border" : "bg-white/60 dark:bg-black/60 backdrop-blur-md"
        }`}>
          <div className="flex items-center gap-3">
             <a href="#" className="font-['Sacramento'] text-3xl font-bold text-[#111827] dark:text-white hover:text-primary transition-colors">
               Harish
             </a>
          </div>
          
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-white transition-colors relative group"
              >
                {link.label}
              </a>
            ))}
            <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 mx-2" />
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[#111827] dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-sm"
            >
               {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#111827] hover:bg-secondary rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 md:hidden pointer-events-auto"
          >
            <div className="bg-white/98 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280] hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">Theme Toggle</span>
                <button className="p-2.5 rounded-full bg-slate-100 text-[#111827]">
                  <Sun size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll Progress Bar (Optional but subtle) */}
      <motion.div
        className="h-[2px] bg-primary/20 origin-left mt-2 mx-auto max-w-[200px] rounded-full"
        style={{ scaleX }}
      />
    </motion.nav>
  );
};

export default Navbar;
