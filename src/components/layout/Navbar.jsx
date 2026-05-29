import { motion } from "framer-motion";
import { Globe, Share2, Mail } from "lucide-react";

export function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Globe, href: "https://github.com/pallavi-676" },
    { icon: Share2, href: "https://www.linkedin.com/in/pallavi-sarovar-859083383/" },
    { icon: Mail, href: "mailto:pallavisarovar1099@gmail.com" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-8 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-3xl border border-white/5 px-8 py-4 rounded-full pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Left Brand Identity */}
        <div className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-black text-xs text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
            PS
          </div>
          <span className="font-black tracking-tighter text-white text-lg">Pallavi Sarovar</span>
        </div>

        {/* Center Nav Anchors */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right Socials & Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)] active:scale-95 cursor-none"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
