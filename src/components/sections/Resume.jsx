import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import ResumePDF from "../../assets/Resume.pdf";

export function Resume() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="relative overflow-hidden glass-panel p-8 md:p-14 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 group border border-white/5 bg-black/40 hover:border-blue-500/50 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-all duration-700"
      >
        {/* Futuristic Floating Background Document Icon */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [-12, -8, -12],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-12 -top-12 text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-700 pointer-events-none z-0"
        >
          <FileText className="w-72 h-72 stroke-[0.5]" />
        </motion.div>

        {/* Backdrop radial cyan glow */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

        {/* Content Column */}
        <div className="flex-1 relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-blue-500">
              Resume
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
            Ready to explore more?
          </h3>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal">
            Download my resume to learn more about my technical skills, projects, and academic journey.
          </p>
        </div>

        {/* Download Button */}
        <div className="shrink-0 w-full md:w-auto relative z-10">
          <motion.a
            href={ResumePDF}
            download="Pallavi_Sarovar_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-[0_15px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_20px_45px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-none group-hover:border group-hover:border-blue-400/20"
          >
            <span>Download Resume</span>
            <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
