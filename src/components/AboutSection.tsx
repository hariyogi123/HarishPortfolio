import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Star, User, Sparkles, Code, Brain, Lightbulb } from "lucide-react";

// OLD CONTENT RESTORED
const infoCards = [
  { icon: Code, label: "Development", desc: "Web & Mobile" },
  { icon: Brain, label: "AI & Data", desc: "ML & Analytics" },
  { icon: Lightbulb, label: "Innovation", desc: "Problem Solving" },
  { icon: Sparkles, label: "Focus", desc: "100% Dedicated" },
];

const AboutSection = () => (
  <SectionWrapper id="about" title="">
    <div className="max-w-6xl mx-auto px-6">
      {/* Dynamic Title */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
          About <span className="font-['Sacramento'] text-primary text-4xl ml-2">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Biography Content (REVERTED) */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-6 text-sm text-muted-foreground leading-relaxed"
        >
          <div className="glow-card p-8">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Computer Science Engineering student from <span className="text-[#3B82F6] font-bold">SNS College of Engineering</span>, with a specialized focus on <span className="text-[#3B82F6] font-bold">Data Analysis</span> and <span className="text-[#3B82F6] font-bold">Artificial Intelligence</span>. I am committed to continuous learning in predictive modeling and intelligent data systems to drive real-world digital solutions.
            </p>
            <div className="pt-6 flex gap-3">
               <div className="flex flex-col">
                  <span className="text-xl font-bold text-foreground">8.8</span>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">CGPA</span>
               </div>
               <div className="w-[1px] h-8 bg-border mx-2" />
               <div className="flex flex-col">
                  <span className="text-xl font-bold text-foreground">4th</span>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Year Student</span>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Modern Grid (Design kept, Content reverted) */}
        <div className="grid grid-cols-2 gap-4">
          {infoCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center hover:border-primary/30 transition-all duration-300"
            >
              <card.icon size={22} className="mx-auto mb-3 text-primary opacity-60 group-hover:opacity-100" />
              <p className="text-sm font-bold text-[#111827] dark:text-white mb-1 uppercase tracking-tight">{card.label}</p>
              <p className="text-[10px] font-medium text-muted-foreground">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
