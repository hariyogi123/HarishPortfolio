import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";

// Project Image Imports
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

const projects = [
  {
    title: "Smart Blind Stick",
    desc: "IoT Powered Smart Blind Stick for enhanced navigation assistance using ultrasonic sensors and GPS.",
    tags: ["Arduino", "IoT"],
    image: project1,
    category: "Hardware / IoT"
  },
  {
    title: "Anti-Doping Gamification",
    desc: "Problem ID: 1722 — Gamification of Anti-Doping Information to educate athletes through interactive gameplay. Smart India Hackathon project.",
    tags: ["Hackathon", "Game Dev"],
    image: project2,
    category: "Smart India Hackathon"
  },
  {
    title: "Buy & Sell Land Portal",
    desc: "A full-stack web portal enabling users to buy and sell land with secure listing and search features.",
    tags: ["MERN", "Full Stack"],
    image: project3,
    category: "Mini Project"
  }
];

const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <SectionWrapper id="projects" title="">
      <div className="max-w-xl mx-auto px-6">
        {/* Significantly reduced title size */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#3B82F6] dark:text-white tracking-tight font-heading">
            My <span className="font-['Sacramento'] text-[#3B82F6] text-4xl ml-2">Projects</span>
          </h2>
          <p className="mt-2 text-[#6B7280] dark:text-slate-400 text-[10px] font-medium tracking-wide max-w-lg mx-auto">
            Highlights from my favorite technical explorations and experiments.
          </p>
        </div>

        <div className="relative group">
          {/* Carousel Configured for 1 Slide at a time */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-[3.5rem] bg-white/5 dark:bg-black/40 border border-slate-200 dark:border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl"
                  >
                    {/* Project Image Area */}
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-8 bg-primary/10 group/img shadow-inner">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-6">
                        <button className="w-12 h-12 rounded-full bg-white text-[#111827] flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                          <ExternalLink size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-[#3B82F6] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                          <Github size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-8">
                      <div className="flex items-center gap-3 mb-4">
                         <span className="text-[10px] font-extrabold text-[#3B82F6] uppercase tracking-[0.25em] bg-primary/5 px-3 py-1 rounded-full">
                           {project.category}
                         </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-[#111827] dark:text-white mb-3 font-heading">{project.title}</h3>
                      <p className="text-[11px] text-[#6B7280] dark:text-slate-400 leading-relaxed mb-6 max-w-2xl">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[9px] font-extrabold text-[#111827] dark:text-white font-heading uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 dark:bg-slate-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white transition-all z-20 group"
          >
            <ArrowLeft size={20} className="text-[#3B82F6] group-hover:text-white" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 dark:bg-slate-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white transition-all z-20 group"
          >
            <ArrowRight size={20} className="text-[#3B82F6] group-hover:text-white" />
          </button>
        </div>

        {/* Explore Details */}
        <div className="flex justify-center mt-12">
           <button className="px-8 py-3 rounded-full bg-[#3B82F6] text-white font-bold text-[10px] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/25 uppercase tracking-widest">
             See Full Architecture
           </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
