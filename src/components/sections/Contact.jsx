import { motion } from "framer-motion";
import { Mail, Send, Globe, Share2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending message with premium feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      {/* Background soft glow blur */}
      <div className="absolute right-[5%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Context & Coordinates */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-blue-500" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                  Contact
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                Let's build <br />
                something <span className="text-blue-500">remarkable.</span>
              </h2>
              <p className="text-slate-400 font-medium text-base md:text-lg max-w-md leading-relaxed">
                Whether you have a project idea, want to collaborate, or just want to connect—feel free to drop a message!
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email Coordinate",
                  val: "pallavisarovar1099@gmail.com",
                  href: "mailto:pallavisarovar1099@gmail.com",
                },
                {
                  icon: Globe,
                  label: "GitHub Terminal",
                  val: "github.com/pallavi-676",
                  href: "https://github.com/pallavi-676",
                },
                {
                  icon: Share2,
                  label: "LinkedIn Portal",
                  val: "linkedin.com/in/pallavi-sarovar",
                  href: "https://www.linkedin.com/in/pallavi-sarovar-859083383/",
                },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-6 group cursor-none"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/20 border border-white/5 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500/20 transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                      {item.label}
                    </div>
                    <div className="text-base md:text-lg font-bold text-slate-300 group-hover:text-blue-400 transition-colors">
                      {item.val}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: High-End Glassmorphism Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 lg:p-14 rounded-[2.5rem] border border-white/5 bg-black/40 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Your Signature
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/5 px-5 py-4 rounded-xl text-white outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all placeholder:text-slate-600 text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/5 px-5 py-4 rounded-xl text-white outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all placeholder:text-slate-600 text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Project Brief / Message
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="Describe your vision or project brief..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/5 px-5 py-4 rounded-xl text-white outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all resize-none placeholder:text-slate-600 text-sm font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(59,130,246,0.3)] cursor-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Transmitting message...</span>
                  </>
                ) : submitted ? (
                  <span>Message Transmitted!</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
