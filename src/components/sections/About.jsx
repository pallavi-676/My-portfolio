import { motion, useMotionValue, useTransform } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { Code2, GraduationCap, ShieldCheck } from "lucide-react";
import { useRef } from "react";

export function About() {
  const { about } = portfolioData;
  const cardRef = useRef(null);

  // Motion values for 3D tilt effect on profile image
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Tracks cursor percentage locations for the soft color reveal blend
  const maskX = useMotionValue("50%");
  const maskY = useMotionValue("50%");
  
  // Controls color layer visibility (0 = fully grayscale, 1 = hover active)
  const hoverOpacity = useMotionValue(0);

  // Maps mouse positions to structural tilt angles
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate 3D card tilt coordinates
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);

    // Calculate percentage coordinates for the airbrush color transition
    const pctX = ((event.clientX - rect.left) / width) * 100;
    const pctY = ((event.clientY - rect.top) / height) * 100;
    maskX.set(`${pctX}%`);
    maskY.set(`${pctY}%`);
    
    hoverOpacity.set(1);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    hoverOpacity.set(0); // Fade back out cleanly to complete grayscale
  }

  // Generates the soft dynamic radial gradient mask
  const maskString = useTransform(
    [maskX, maskY],
    ([latestX, latestY]) => `radial-gradient(130px circle at ${latestX} ${latestY}, black 20%, transparent 100%)`
  );

  return (
    <section id="about" className="relative max-w-7xl mx-auto px-6 py-32 z-10">
      {/* Visual Header */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-blue-500" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
            About Me
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
          Designing the future <br />
          <span className="text-blue-500">of the web.</span>
        </h2>
      </div>

      {/* Grid Layout Container */}
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        {/* Clean Bio Block paragraph without any redundant badges below it */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed font-normal"
          >
            {about.bio}
          </motion.p>
        </div>

        {/* Profile Image with Parallax & Soft Color Reveal Hover */}
        <div className="lg:col-span-5 flex justify-center relative group">
          {/* Ambient Glow Background */}
          <div className="absolute inset-0 bg-blue-600/15 blur-[80px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Decorative Technical Rings */}
          <svg className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] animate-spin pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500" style={{ animationDuration: '25s' }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#3b82f6" strokeWidth="0.75" strokeDasharray="8 8 16 4" />
          </svg>
          <svg className="absolute -inset-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] animate-spin pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity duration-500" style={{ animationDuration: '40s', animationDirection: 'reverse' }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="47" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="4 12" />
          </svg>

          {/* Interactive Card Box Frame */}
          <motion.div
            ref={cardRef}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[340px] aspect-square rounded-[2rem] overflow-hidden glass-panel p-3 border border-white/10 hover:border-blue-500/40 shadow-2xl transition-all duration-300"
          >
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-black relative">
              
              {/* DEFAULT BACKGROUND LAYER: Muted grayscale version */}
              <img
                src={about.profileImage}
                alt={about.name}
                className="w-full h-full object-cover rounded-[1.5rem] select-none scale-102 group-hover:scale-105 transition-transform duration-700 grayscale contrast-[1.15] brightness-90 opacity-70"
              />

              {/* DYNAMIC REVEAL LAYER: True colors brush mask on pointer hover */}
              <motion.div
                style={{ 
                  WebkitMaskImage: maskString,
                  maskImage: maskString,
                  opacity: hoverOpacity
                }}
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-out"
              >
                <img
                  src={about.profileImage}
                  alt={`${about.name} vibrant color layer`}
                  className="w-full h-full object-cover rounded-[1.5rem] select-none scale-102 group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}