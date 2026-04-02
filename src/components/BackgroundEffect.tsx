import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundEffect = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
      duration: 3, 
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-[-20] pointer-events-none overflow-hidden select-none translate-z-0">
      {/* Animated Glowing Orbs (Extra visual depth) */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[150px]"
      />
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, -40, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-400/10 rounded-full blur-[150px]"
      />

      {/* Blinking Stars / Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40 dark:bg-primary/80 shadow-[0_0_8px_rgba(59,130,246,0.6)] dark:shadow-[0_0_12px_rgba(59,130,246,0.8)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating Sparkles */}
      {particles.slice(0, 15).map((p, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-px h-12 bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-45"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffect;
