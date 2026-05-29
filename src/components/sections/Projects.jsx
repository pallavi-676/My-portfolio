import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { ExternalLink, ArrowUpRight, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectHorizontalCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative shrink-0 w-[300px] sm:w-[360px] h-[550px] rounded-[2.5rem] border border-white/5 bg-black/40 overflow-hidden group shadow-2xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] snap-center cursor-none z-10"
    >
      {/* 1. Decorative Number Badge */}
      <div className="absolute top-6 left-6 z-30 w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-black font-black text-sm shadow-xl pointer-events-none">
        {index + 1}
      </div>

      {/* 2. Project Visual Background */}
      <div className="w-full h-full relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover select-none scale-100 group-hover:scale-105 transition-transform duration-[1000ms] ease-out"
        />
        {/* Deep vignette gradient so typography is highly legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 opacity-90 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* 3. Static Card Body (Visible initially at the bottom) */}
      <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-4 group-hover:translate-y-20 group-hover:opacity-0 transition-all duration-500 ease-in-out pointer-events-none">
        <p className="text-slate-300 text-sm font-medium leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center w-full">
          {/* Action Status pill */}
          <span className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-wider">
            {project.tech[0]}
          </span>
          {/* Action Node circle */}
          <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center text-white pointer-events-auto">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* 4. Sliding Glassmorphic Detailed Panel (Reveals on Hover) */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-800 cubic-bezier(0.16, 1, 0.3, 1)">
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-blue-600/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-500">
              <Code2 className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Project Profile</span>
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-blue-950/40 border border-blue-500/20 text-blue-300 text-[8px] font-mono uppercase rounded">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex gap-3 w-full">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3.5 px-4 bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-white rounded-xl text-center text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-none"
            >
              <FaGithub className="w-4 h-4" />
              <span>Source</span>
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center transition-all shadow-[0_10px_20px_rgba(59,130,246,0.3)] cursor-none"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="work" className="relative max-w-7xl mx-auto px-6 py-32 z-10 overflow-hidden">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-blue-500" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
            Selected Works
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
          Project's <span className="text-blue-500">Gallery.</span>
        </h2>
      </div>

      {/* Horizontal Scroll Layout Wrapper Container */}
      <div className="w-full relative">
        <div 
          className="flex gap-6 md:gap-8 overflow-x-scroll pb-12 pt-4 px-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Loop over all 7 projects dynamically */}
          {projects.map((project, index) => (
            <ProjectHorizontalCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
          
          {/* Extra spacer node to keep horizontal padding safe at the end */}
          <div className="w-4 shrink-0" />
        </div>

        {/* Ambient Subtle Visual Hint for scrolling right */}
        <div className="absolute right-0 top-0 bottom-12 w-24 bg-gradient-to-l from-black via-black/20 to-transparent pointer-events-none z-20 opacity-70 hidden md:block" />
      </div>
    </section>
  );
}