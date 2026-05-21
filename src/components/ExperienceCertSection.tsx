import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, Github, Award, X, Plus, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Development",
    company: "Codsoft (Online)",
    duration: "31 Days",
    github: "https://github.com/hariyogi123/Web-Development",
    desc: "Built web development projects and strengthened frontend fundamentals.",
  },
  {
    title: "Python Programming",
    company: "Codsoft (Online)",
    duration: "31 Days",
    github: "https://github.com/hariyogi123/Python_Programming",
    desc: "Developed Python programs and practiced modular scripting for real tasks.",
  },
  {
    title: "UI/UX Design",
    company: "Codsoft (Online)",
    duration: "31 Days",
    desc: "Explored user interface and experience design principles through guided projects.",
  },
  {
    title: "Python Programming",
    company: "ByteXI (Online)",
    duration: "22 Days",
    desc: "Completed structured Python programming exercises and hands-on assignments.",
  },
  {
    title: "Full Stack Development",
    company: "Prodigy InfoTech (Online)",
    duration: "31 Days",
    desc: "Worked on full stack development concepts across frontend and backend layers.",
  },
];

const certificates = [
  {
    title: "DataBricks Accredited Generative AI Fundamentals",
    issuer: "Databricks",
    skills: ["Generative AI", "LLMs", "AI Fundamentals"],
  },
  {
    title: "Azure Data Fundamentals",
    issuer: "Microsoft",
    skills: ["Azure", "Data Fundamentals", "Cloud"],
  },
  {
    title: "Microsoft DP-900",
    issuer: "Microsoft",
    skills: ["Azure Data", "DP-900", "Certification"],
  },
  {
    title: "Basics Of Python",
    issuer: "Certified Course",
    skills: ["Python", "Programming", "Fundamentals"],
  },
];

type Certificate = (typeof certificates)[0];

const ExperienceCertSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <SectionWrapper id="experience" title="">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            Journey & <span className="font-['Sacramento'] text-primary text-4xl ml-2">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-[8px] uppercase font-bold tracking-[0.2em] text-[#64748B] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={10} /> Remote
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

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
                      <div className="w-20 h-20 relative flex-shrink-0 bg-primary/10 flex items-center justify-center">
                        <Award size={28} className="text-primary" />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                          <Plus size={16} />
                        </div>
                      </div>

                      <div className="px-4 py-3 flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-foreground mb-0.5">{cert.title}</h4>
                        <p className="text-[9px] text-primary font-bold mb-2 uppercase tracking-tighter">
                          {cert.issuer}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-[7px] font-extrabold text-muted-foreground uppercase tracking-widest border border-border/50"
                            >
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
              className="w-full max-w-lg bg-slate-900 border border-white/10 rounded-[2rem] p-6 md:p-8 relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <Award className="text-primary" size={28} />
                  <div>
                    <h3 className="text-lg font-extrabold text-white font-heading">{selectedCert.title}</h3>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[8px] font-extrabold text-white uppercase tracking-widest"
                    >
                      {skill}
                    </span>
                  ))}
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
