import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, Github, Award, ExternalLink, X, Plus, Calendar, MapPin } from "lucide-react";

// Proper imports for the images
import prepinstaImg from "@/assets/prepinsta.png";
import fsdImg from "@/assets/fsd.png";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Codsoft (Online)",
    duration: "31 Days",
    icon: Briefcase,
    github: "https://github.com/hariyogi123/Web-Development",
    desc: "Built frontend and backend features with a focus on data-driven interfaces."
  },
  {
    title: "Python Programming Intern",
    company: "Codsoft (Online)",
    duration: "31 Days",
    icon: Briefcase,
    github: "https://github.com/hariyogi123/Python_Programming",
    desc: "Developing and optimizing Python scripts for data processing and modular apps."
  },
];

const certificates = [
  {
    title: "PrepInsta Prime",
    issuer: "Certified Courses",
    skills: ["C", "C++", "Data Science", "Machine Learning", "Java", "Python", "SQL"],
    image: prepinstaImg
  },
  {
    title: "Full Stack Development",
    issuer: "MERN Specialization",
    skills: ["React", "Node.js", "MongoDB"],
    image: fsdImg
  }
];

const ExperienceCertSection = () => {
  const [selectedCert, setSelectedCert] = useState<null | typeof certificates[0]>(null);

  return (
    <SectionWrapper id="experience" title="">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            Journey & <span className="font-['Sacramento'] text-primary text-4xl ml-2">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left: Professional Experience (Compact) */}
          <div className="space-y-6 relative pl-6 border-l border-primary/20">
            <h3 className="text-sm font-bold text-foreground mb-6 flex items-center gap-2">
               <Briefcase className="text-primary" size={18} />
               Experience
            </h3>
            
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-primary/40 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-black/40 border border-slate-200 dark:border-white/5 backdrop-blur-xl relative transition-all duration-300 group-hover:border-primary/20">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-0.5">{exp.title}</h4>
                      <p className="text-[#3B82F6] text-[10px] font-bold">{exp.company}</p>
                    </div>
                    {exp.github && (
                      <a href={exp.github} target="_blank" className="p-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-[8px] uppercase font-bold tracking-[0.2em] text-[#64748B] mb-3">
                     <span className="flex items-center gap-1"><Calendar size={10} /> {exp.duration}</span>
                     <span className="flex items-center gap-1"><MapPin size={10} /> Remote</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Certifications (Compact) */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
               <Award className="text-primary" size={18} />
               Certifications
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="glow-card overflow-hidden h-full">
                    <div className="flex items-center h-full">
                      <div className="w-20 h-20 relative overflow-hidden bg-primary/5 flex-shrink-0">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                           <Plus size={16} />
                        </div>
                      </div>

                      <div className="px-4 py-3 flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-foreground mb-0.5 truncate">{cert.title}</h4>
                        <p className="text-[9px] text-primary font-bold mb-2 uppercase tracking-tighter">{cert.issuer}</p>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.slice(0, 3).map((skill) => (
                             <span key={skill} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-[7px] font-extrabold text-muted-foreground uppercase tracking-widest border border-border/50">
                               {skill}
                             </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal - Keeping full screen view but refined */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/95 backdrop-blur-3xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2rem] p-6 md:p-8 relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="space-y-6 relative z-10">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-2xl">
                  <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover object-top" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                     <Award className="text-primary" size={24} />
                     <h3 className="text-xl font-extrabold text-white font-heading">{selectedCert.title}</h3>
                  </div>
                  <p className="text-primary text-[10px] font-bold mb-4 uppercase tracking-[0.3em]">{selectedCert.issuer}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedCert.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[8px] font-extrabold text-white uppercase tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white font-bold text-[10px] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest">
                    <ExternalLink size={14} />
                    Verify Credential Online
                  </button>
                </div>
              </div>
              
              <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ExperienceCertSection;
