import { motion, useMotionValue, useTransform } from "framer-motion";
import { portfolioData } from "../../data/portfolio";

function SkillCard({ skill }) {
  // Motion values for physical tilt response on card hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Small, comfortable rotation mapping
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      className="relative z-10 glass-panel p-4 rounded-xl flex items-center gap-4 group transition-all duration-300 border border-white/5 bg-white/[0.01] hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] cursor-none overflow-hidden"
    >
      {/* Light Radial Sweep Effect inside the Card */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:animate-shimmer" style={{ animationDuration: '2s' }} />

      <div 
        className="w-12 h-12 rounded-lg bg-blue-950/20 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-600/10 group-hover:border-blue-500/20"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
      >
        {/* We keep the color of the icon as defined, but add a consistent blue hover coloring if desired. A clean approach is to use the item's custom color to stand out, while the glow border remains a unified blue. */}
        <skill.icon className={`w-6 h-6 ${skill.color} transition-colors group-hover:text-blue-400`} />
      </div>

      <div 
        className="font-bold text-sm text-slate-300 transition-colors duration-300 group-hover:text-white"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}
      >
        {skill.name}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative max-w-7xl mx-auto px-6 py-32 z-10">
      {/* Visual Header */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-blue-500" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
            Skills
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
          Technical <span className="text-blue-500">Arsenal.</span>
        </h2>
      </div>

      {/* Tech Stack Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {skills.map((category, catIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                {category.category}
              </h3>
              <span className="text-[10px] font-mono text-blue-500/60 uppercase">
                / {category.items.length} units
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {category.items.map((skill, skillIdx) => (
                <SkillCard key={skillIdx} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
