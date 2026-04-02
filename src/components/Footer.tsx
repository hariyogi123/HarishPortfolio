import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="pb-12 pt-6 flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-8 py-3 rounded-full bg-white/5 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 backdrop-blur-xl shadow-lg"
      >
        <p className="text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
          © 2024 <span className="text-primary font-['Sacramento'] normal-case text-2xl lowercase tracking-normal mx-2">Harish</span>. All rights reserved.
        </p>
      </motion.div>
      <div className="w-[1px] h-12 bg-gradient-to-b from-primary/30 to-transparent" />
    </footer>
  );
};

export default Footer;
