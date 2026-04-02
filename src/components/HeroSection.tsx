import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Download, Sparkles, ExternalLink, Share2, ChevronDown } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const roles = [
  "Innovative Data Analyst",
  "Data Scientist",
  "AI Developer",
  "ML Enthusiast",
];

const stats = [
  { value: "8.8", label: "CGPA" },
  { value: "4th", label: "Year Student" },
  { value: "100%", label: "Focus" },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400/10 dark:bg-blue-900/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-400/10 dark:bg-indigo-900/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Avatar - Static Presentation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 order-1 lg:order-1"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0, -2, 0] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-64 h-64 lg:w-80 lg:h-80 group"
            >
              {/* Subtle glow background */}
              <motion.div 
                animate={{
                   scale: [1, 1.2, 1],
                   opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" 
              />
              
              <div className="relative w-full h-full">
                <img
                  src={avatarImg}
                  alt="Harishwaran N"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full border-2 border-primary/20 shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left order-2 lg:order-2 max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-blue-50 dark:border-white/10 shadow-sm text-[#1F2937] dark:text-white text-[10px] font-bold mb-6 hover:border-primary/30 transition-colors"
            >
              <Sparkles size={12} className="text-primary" />
              <span className="uppercase tracking-widest text-[#6B7280] dark:text-slate-400">Data-Driven Mindset</span>
            </motion.div>
            
            <h1 className="font-heading text-base sm:text-lg lg:text-lg font-bold mb-0.5 text-[#111827] dark:text-white leading-[1.2]">
              Hello, I'm
            </h1>
            <h2 className="font-['Sacramento'] text-3xl sm:text-4xl lg:text-5xl text-[#3B82F6] mb-4 lg:-ml-1 transform -rotate-1">
              Harishwaran
            </h2>
            
            <div className="h-6 mb-8 flex items-center justify-center lg:justify-start gap-2">
              <span className="font-heading text-base lg:text-lg font-extrabold text-[#1F2937] dark:text-white/90">
                {displayText}
              </span>
              <span className="inline-block w-1 h-5 bg-primary/40 animate-pulse rounded-full align-middle ml-0.5" />
            </div>
            
            <p className="text-muted-foreground text-xs lg:text-sm max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              I'm an AI and Data Analyst passionate about uncovering hidden insights and building 
              intelligent systems that solve complex real-world problems.
            </p>

            {/* Stats Section */}
            <div className="flex justify-center lg:justify-start gap-10 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-xl lg:text-2xl font-extrabold text-[#111827] dark:text-white mb-0.5">{stat.value}</p>
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="group relative bg-[#3B82F6] text-white px-7 py-3 rounded-full text-sm font-bold flex items-center gap-2.5 transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-blue-200 active:scale-95">
                <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
                View My Work
              </button>
              
              <button className="group relative bg-transparent border border-foreground/20 text-foreground dark:text-white px-7 py-3 rounded-full text-sm font-bold flex items-center gap-2.5 transition-all hover:bg-foreground/5 dark:hover:bg-white/10 active:scale-95">
                <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
                Download CV
              </button>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
               <button className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-[11px] font-bold text-foreground dark:text-white hover:border-primary/30 transition-all hover:scale-105 shadow-sm">
                 <Share2 size={14} className="text-primary" />
                 Connect
                 <ChevronDown size={12} className="ml-0.5 opacity-50" />
               </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
