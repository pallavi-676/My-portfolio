import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";

const COMMANDS = {
  help: "Available commands: projects, skills, about, contact, clear",
  about: "Pallavi Sarovar: Frontend Developer. Focus: Immersive Web Experiences.",
  skills: "Technical Skills: React, Three.js, Tailwind, Framer Motion, C++.",
  projects: "Navigating to projects section...",
  contact: "Navigating to contact section...",
};

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(["Developer Console initialized. Type 'help' to begin."]);
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.toLowerCase().trim();
      let response = COMMANDS[cmd] || `Command not found: ${cmd}. Type 'help'.`;
      
      if (cmd === "clear") {
        setHistory([]);
      } else {
        setHistory(prev => [...prev, `> ${input}`, response]);
      }
      
      setInput("");

      // Navigation logic
      if (cmd === "projects" || cmd === "work") {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      }
      if (cmd === "contact") {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
      if (cmd === "about") {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
      if (cmd === "skills") {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Console Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 z-[100] w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
      >
        <TerminalIcon className="w-6 h-6" />
        <span className="absolute -top-12 right-0 bg-white text-black text-[10px] px-3 py-1 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Open Console
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-28 right-10 z-[100] w-full max-w-lg h-[400px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-slate-700" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">developer_console</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-4 h-4 text-slate-500 hover:text-white" /></button>
            </div>

            {/* Content */}
            <div 
              ref={scrollRef}
              className="flex-1 p-8 font-mono text-xs space-y-2 overflow-y-auto bg-black/50"
            >
              {history.map((line, i) => (
                <p key={i} className={line.startsWith(">") ? "text-blue-500" : "text-slate-400"}>
                  {line}
                </p>
              ))}
              <div className="flex items-center gap-2 text-blue-500">
                <span className="font-bold">{">"}</span>
                <input
                  autoFocus
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="bg-transparent border-none outline-none flex-1 text-white caret-blue-500"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
