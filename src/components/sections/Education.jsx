import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { Landmark, Calendar, BookOpen } from "lucide-react";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative max-w-7xl mx-auto px-6 py-32 z-10">
      {/* Visual Section Header */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-blue-500" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
            Education
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
          Academic <span className="text-blue-500">Journey.</span>
        </h2>
      </div>

      {/* Futuristic Timeline Layout */}
      <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-16 pl-8 md:pl-16">
        {/* Animated Laser Connector Beam */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent pointer-events-none" />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Glowing Timeline Connector Node */}
            <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-white/20 group-hover:border-blue-500 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.8)] z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-500 group-hover:bg-blue-400 animate-pulse transition-all" />
            </div>

            {/* Glowing Node Line highlight */}
            <div className="absolute -left-[30px] md:-left-[60px] top-4.5 w-8 md:w-16 h-[1px] bg-white/10 group-hover:bg-blue-500/40 transition-all pointer-events-none z-10" />

            {/* Glassmorphic Academic Panel */}
            <div className="relative overflow-hidden glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:border-blue-500/30 hover:bg-blue-500/[0.01] hover:shadow-[0_15px_35px_rgba(59,130,246,0.08)] transition-all duration-300">
              {/* Internal shine overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4">
                  {/* Status Badge */}
                  {edu.status && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/20 text-blue-400 text-[9px] font-black uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
                      {edu.status}
                    </span>
                  )}

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white tracking-tight uppercase leading-tight">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <div className="text-sm font-bold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        <span>{edu.specialization}</span>
                      </div>
                    )}
                  </div>

                  {/* Institution block: Only displays for your current active university node */}
                  {index === 0 && (
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                      <Landmark className="w-4 h-4 text-slate-500" />
                      <span>ITM Skills University</span>
                    </div>
                  )}

                  {edu.description && (
                    <p className="text-slate-400 text-sm leading-relaxed max-w-3xl pt-2 font-medium">
                      {edu.description}
                    </p>
                  )}
                </div>

                {/* Right side indicators (Year, expected graduation date status) */}
                <div className="flex flex-col gap-2 shrink-0 md:text-right">
                  <div className="inline-flex items-center gap-2 md:justify-end text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/20 border border-blue-500/10 px-4 py-2 rounded-xl">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{edu.year}</span>
                  </div>

                  {edu.expectedGraduation && (
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Expected Grad: {edu.expectedGraduation}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}