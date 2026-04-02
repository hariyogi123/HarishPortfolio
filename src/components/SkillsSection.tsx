import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Wand2, Brain, Sparkles, Layers } from "lucide-react";

// OLD CONTENT RESTORED
const data = [
  { name: 'Python', level: 85 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
];

const tools = ["GitHub", "VS Code", "Figma", "Flutter Flow", "AI Tools", "Power BI"];
const softSkills = ["Communication", "Problem Solving", "Fast Learner", "Teamwork"];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="">
    <div className="max-w-6xl mx-auto px-4">
      {/* Title Style */}
      <div className="text-center mb-16 relative">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex items-center justify-center gap-3 mb-2"
        >
           <Layers size={20} className="text-primary" />
           <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">Capabilities</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Technical <span className="font-['Sacramento'] text-primary text-6xl ml-2">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-sm tracking-wide">Technologies and abilities I'm passionate about</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Chart (Design kept, content reverted) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] w-full bg-slate-50/50 dark:bg-black/20 p-6 rounded-3xl border border-border/50 backdrop-blur-sm"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="rgba(59, 130, 246, 0.1)" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                hide={true}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px'
                }}
                itemStyle={{ color: '#3B82F6' }}
                cursor={{ stroke: '#3B82F6', strokeWidth: 1 }}
              />
              <Area 
                type="monotone" 
                dataKey="level" 
                stroke="#3B82F6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorLevel)" 
                dot={{ r: 6, fill: '#3B82F6', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 4, fill: '#fff' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Right: Info Panels */}
        <div className="space-y-8">
          {/* Tools & Tech (Reverted Content) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
               <Wand2 className="text-primary" size={24} />
               <h3 className="text-xl font-bold text-foreground font-heading">Tools & Technologies</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, i) => (
                <div 
                  key={i} 
                  className="px-6 py-4 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center text-sm font-medium hover:bg-primary/5 hover:border-primary/30 transition-all font-heading"
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills (Reverted Content) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                 <Brain className="text-primary" size={24} />
                 <h3 className="text-xl font-bold text-foreground font-heading">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-tight">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-muted-foreground text-xs leading-relaxed italic">
                Driven by a deep passion for continuous learning and problem solving.
              </p>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Sparkles size={60} className="text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
