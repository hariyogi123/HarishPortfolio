import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, Linkedin, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" title="">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Keerthana-Style Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground dark:text-white tracking-tight font-heading">
            Don't be <span className="font-['Sacramento'] text-primary text-4xl ml-2">shy!</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-sm font-medium leading-relaxed max-w-md mx-auto">
            Feel free to get in touch. Open to projects and ideas. I'm always looking for new challenges!
          </p>
        </motion.div>

        {/* Pulsing Contact Button */}
        <div className="flex justify-center mb-20 relative">
           <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-primary"
           />
           <a 
              href="mailto:nagachellam862@gmail.com" 
              className="relative w-24 h-24 rounded-full bg-slate-900 border border-primary/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)] group"
           >
              <Mail size={32} className="text-primary group-hover:scale-110 transition-transform" />
           </a>
        </div>

        {/* Contact Links Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.2em] mb-12">
           <a href="tel:9655657161" className="px-6 py-3 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 hover:border-primary/50 text-foreground dark:text-white flex items-center gap-2 transition-all">
             <Phone size={14} className="text-primary" /> 9655657161
           </a>
           <a href="https://www.linkedin.com/in/n-harishwaran-9ab6782a8" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 hover:border-primary/50 text-foreground dark:text-white flex items-center gap-2 transition-all">
             <Linkedin size={14} className="text-primary" /> LinkedIn
           </a>
           <a href="mailto:nagachellam862@gmail.com" className="px-6 py-3 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 hover:border-primary/50 text-foreground dark:text-white flex items-center gap-2 transition-all">
             <MessageSquare size={14} className="text-primary" /> Let's Chat
           </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
