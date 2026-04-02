import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, id, className, delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.99 }} // Less travel, less scale
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-15%" }} // Trigger slightly earlier
      transition={{ 
        duration: 0.6, // Faster reveal
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
