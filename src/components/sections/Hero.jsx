import { motion } from "framer-motion";
import { Download, ChevronRight, Sparkles } from "lucide-react";
import ResumePDF from "../../assets/Resume.pdf";
import { useEffect, useState } from "react";

export function Hero() {
  const name1 = "PALLAVI";
  const name2 = "SAROVAR";

  // State to spawn subtle floating particles
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const letterAnimation = {
    initial: { y: 0 },
    hover: {
      y: -10,
      color: "#3b82f6",
      textShadow: "0 0 15px rgba(59, 130, 246, 0.8)",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col justify-center bg-transparent"
    >
      {/* Subtle Glowing Blur Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />

      {/* Floating Particles in Hero sec */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-36 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-left"
        >
          {/* Tagline Status  */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-950/20 backdrop-blur-md mb-8">
            <Sparkles className="w-4.5 h-4.5 text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-400">Available for Opportunities</span>
          </motion.div>

          {/*  Animated Headline */}
          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-slate-400 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-500" />
              Frontend Developer & Computer Science Student
            </h2>
          </motion.div>

          {/* Dynamic Name Header with Mouse Interactives */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,12vw,8rem)] font-black tracking-tighter leading-[0.85] mb-10 flex flex-col items-start uppercase text-white select-none"
          >
            <span className="flex overflow-hidden">
              {name1.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterAnimation}
                  initial="initial"
                  whileHover="hover"
                  className="inline-block cursor-none transition-all duration-100"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="text-hollow opacity-60 flex overflow-hidden">
              {name2.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterAnimation}
                  initial="initial"
                  whileHover="hover"
                  className="inline-block cursor-none transition-all duration-100"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Short Introduction */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-normal"
          >
            Developing state-of-the-art interactive user interfaces that merge gorgeous, fluid aesthetics with robust code performance. Dedicated to modern web technology and computer science engineering.
          </motion.p>

          {/* Dual Interactive CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
            <button
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] flex items-center gap-3 cursor-none"
            >
              <span>View Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href={ResumePDF}
              download="Pallavi_Sarovar_Resume.pdf"
              className="group px-10 py-5 bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-white text-xs font-black uppercase tracking-widest rounded-2xl transition-all flex items-center gap-3 cursor-none shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 group-hover:scale-110 group-hover:text-blue-400 transition-all" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
