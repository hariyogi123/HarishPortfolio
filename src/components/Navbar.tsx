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

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const isDark = root.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  const isDarkTheme = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed top-6 left-0 right-0 z-[100] px-6"
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`flex items-center justify-between px-6 py-2.5 rounded-full transition-all duration-300 border border-white/20 shadow-lg ${
          scrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl border-border" : "bg-white/60 dark:bg-black/60 backdrop-blur-md"
        }`}>
          <div className="flex items-center gap-3">
             <a href="#" className="font-['Sacramento'] text-3xl font-bold text-[#111827] dark:text-white hover:text-primary transition-colors">
               Harish
             </a>
          </div>
          
          {/* Desktop Navigation */}
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
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[#111827] dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-sm cursor-pointer"
            >
               {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Navigation Interface */}
          <div className="flex md:hidden items-center gap-1">
            <button 
              onClick={toggleTheme}
              className="p-3 text-[#111827] dark:text-white transition-all active:scale-90 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-[#111827] dark:text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-full left-6 right-6 mt-4 md:hidden"
          >
            <div className="bg-white/95 dark:bg-slate-900/95 border border-border/50 rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col gap-6 backdrop-blur-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {/* Secondary theme toggle inside menu for accessibility */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280] dark:text-[#94A3B8]">THEME TOGGLE</span>
                <button 
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[#111827] dark:text-white transition-all shadow-sm cursor-pointer z-[101]"
                >
                  {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[2px] bg-primary/20 origin-left mt-2 mx-auto max-w-[200px] rounded-full"
        style={{ scaleX }}
      />
    </motion.nav>
  );
};

export default Navbar;
