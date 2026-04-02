import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1, // Speed up progress from 2s to 1s
      ease: [0.16, 1, 0.3, 1], // Better easing
      onUpdate: (value) => setProgress(Math.round(value)),
    });
    return () => controls.stop();
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden uppercase">
      {/* Background Watermark - Repeating Grid Style */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.06] transform -rotate-12 scale-150">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="flex gap-12 whitespace-nowrap mb-6">
            {Array.from({ length: 15 }).map((_, j) => (
              <span key={j} className="text-2xl font-black tracking-widest text-[#3B82F6] dark:text-white">
                Harishwaran
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="relative flex flex-col items-center z-10 p-12 rounded-[3.5rem] bg-white/40 dark:bg-black/40 backdrop-blur-3xl shadow-2xl border border-white/10">
        {/* Compact Spinner */}
        <div className="relative w-16 h-16 mb-8 group">
          {/* Static track */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3.5"
              fill="transparent"
              className="text-primary/10"
            />
            {/* Animated progress ring */}
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3.5"
              fill="transparent"
              strokeDasharray="176"
              initial={{ strokeDashoffset: 176 }}
              animate={{ strokeDashoffset: 176 - (176 * progress) / 100 }}
              transition={{ duration: 0.1 }}
              className="text-primary"
              strokeLinecap="round"
            />
          </svg>

          {/* Percentage in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-bold text-primary font-heading">
              {progress}%
            </span>
          </div>
        </div>

        {/* Loading Text & Bar - Compact */}
        <div className="w-32 text-center">
          <h2 className="text-[15px] font-extrabold tracking-[0.2em] text-primary mb-2 font-heading uppercase">
            Loading
          </h2>
          <div className="h-0.5 w-full bg-primary/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
