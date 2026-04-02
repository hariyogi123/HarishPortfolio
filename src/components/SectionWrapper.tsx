import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, children, className = "" }: Props) => (
  <section id={id} className={`py-16 relative ${className}`}>
    <div className="section-glow absolute inset-0 pointer-events-none" />
    <div className="container mx-auto px-6 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="font-heading text-2xl font-bold mb-10 text-center tracking-tight"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
