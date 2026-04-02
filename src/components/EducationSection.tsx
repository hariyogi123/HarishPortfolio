import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, BookOpen, Star, Lightbulb, Quote, Award } from "lucide-react";

const education = [
  {
    type: "2023 – 2027",
    school: "SNS College of Engineering",
    degree: "Bachelor of Engineering",
    desc: "Computer Science & Engineering",
    icon: GraduationCap
  },
  {
    type: "2021 – 2023",
    school: "Ideal Matric Hr Sec School",
    degree: "SSLC & HSC",
    desc: "Secondary Education",
    icon: BookOpen
  },
];

const EducationSection = () => (
  <SectionWrapper id="education" title="">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
          Educational <span className="font-['Sacramento'] text-primary text-4xl ml-2">Timeline</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Timeline - More Compact */}
        <div className="relative pl-10 space-y-12">
          <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent" />
          
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[38px] top-0 w-8 h-8 rounded-full bg-slate-900 border border-primary/30 flex items-center justify-center z-10 shadow-sm">
                <item.icon size={14} className="text-primary" />
              </div>

              <div>
                <span className="inline-block px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-bold text-primary uppercase tracking-widest mb-2">
                  {item.type}
                </span>
                <h3 className="text-base font-bold text-foreground mb-1">{item.degree}</h3>
                <p className="text-xs text-primary font-semibold mb-1.5">{item.school}</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Vision Card - Compacted & Re-described for AI/Data Analyst */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50/80 dark:bg-black/20 border border-slate-200 dark:border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all"
          >
            <div className="relative z-10">
               <div className="flex items-center gap-3 mb-4">
                  <Star className="text-primary" size={20} />
                  <h3 className="text-sm font-bold text-foreground font-heading uppercase tracking-tight">Academic Pursuit</h3>
               </div>
               <p className="text-muted-foreground text-[11px] leading-relaxed mb-4">
                 Maintaining a strong <span className="text-foreground font-bold">8.8 CGPA</span> at SNS College, with a focus on mastering <span className="text-primary font-bold">Data Analysis</span> and building <span className="text-primary font-bold">AI solutions</span>.
               </p>
               <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/5 text-primary text-[8px] uppercase font-bold tracking-widest w-fit">
                  <Award size={12} />
                  Data Science Excellence
               </div>
            </div>
            <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
               <Quote size={60} className="text-primary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative"
          >
            <div className="flex items-center gap-3 mb-3">
               <Lightbulb className="text-primary" size={20} />
               <h3 className="text-sm font-bold text-foreground font-heading">My Mission</h3>
            </div>
            <p className="text-[11px] text-muted-foreground italic leading-relaxed">
              "Driven to transform raw data into intelligent insights. My goal is to build AI systems that drive meaningful digital impact and simplify complexity."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
