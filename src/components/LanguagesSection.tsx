import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Languages } from "lucide-react";

const langs = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional" },
];

const LanguagesSection = () => (
  <SectionWrapper id="languages" title="Languages">
    <div className="flex justify-center gap-6">
      {langs.map((lang, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glow-card p-6 text-center w-40"
        >
          <Languages size={24} className="mx-auto mb-3 text-primary" />
          <p className="font-heading font-semibold">{lang.name}</p>
          <p className="text-xs text-muted-foreground">{lang.level}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default LanguagesSection;
