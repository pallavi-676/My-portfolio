import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BootScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(timer);
        setTimeout(onComplete, 500);
        return prev;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-xs font-bold tracking-[0.6em] uppercase mb-12"
        >
          Portfolio
        </motion.div>

        <div className="text-6xl font-black text-white mb-12 tracking-tighter tabular-nums">
          {percent}%
        </div>

        <div className="w-64 h-[2px] bg-white/5 overflow-hidden rounded-full">
           <motion.div 
             initial={{ x: '-100%' }}
             animate={{ x: `${percent - 100}%` }}
             className="h-full bg-blue-600"
           />
        </div>
      </div>

      <div className="absolute bottom-10 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
        Designed by Pallavi Sarovar
      </div>
    </div>
  );
}
