import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiNextdotjs, SiTypescript, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const portfolioData = {
  about: {
    name: "Pallavi Sarovar",
    role: "Frontend Developer",
    tagline: "Crafting modern web experiences with precision and passion.",
    bio: "I am a frontend developer and Computer Science Engineering student currently pursuing my first year of college in Mumbai. I enjoy building modern web applications, improving my problem-solving skills, and continuously learning new technologies. I am passionate about growing as a developer, creating meaningful projects, and strengthening my technical skills through consistent learning and hands-on practice.",
    email: "pallavisarovar1099@gmail.com",
    github: "https://github.com/pallavi-676",
    linkedin: "https://www.linkedin.com/in/pallavi-sarovar-859083383/",
    profileImage: "/src/assets/images/image.jpeg",
    status: "1st Year B.Tech Student",
    focus: "Modern Web Applications"
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: FaReact, color: "text-blue-400" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, color: "text-slate-300" },
        { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
        { name: "Figma", icon: SiFigma, color: "text-pink-500" }
      ]
    },
    {
      category: "Languages",
      items: [
        { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
        { name: "Python", icon: FaPython, color: "text-blue-400" }
      ]
    },
    {
      category: "Currently Learning",
      items: [
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Jarvis AI Assistant",
      description: "A voice-controlled desktop AI assistant engineered using Python. Capable of processing system-level voice commands, converting speech-to-text, and executing automations such as application launches, web searches, and active task assistance.",
      tech: ["Python", "Speech Recognition", "Text-to-Speech"],
      github: "https://github.com/pallavi-676/Jarvis",
      link: "https://github.com/pallavi-676/Jarvis",
      image: "/src/assets/images/jarvis.png"
    },
    {
      id: 2,
      title: "Typing Speed Analyzer",
      description: "A desktop typing tutor application developed to test typing proficiency, typing speed (WPM), and key accuracy in real-time. Features structured prompt tracking, character mismatch highlighting, and robust session statistics analysis.",
      tech: ["Python", "Tkinter"],
      github: "https://github.com/pallavi-676/typing-speed-analyzer",
      link: "https://github.com/pallavi-676/typing-speed-analyzer",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Pomodoro Timer",
      description: "A responsive, minimal web application utilizing native timer APIs to optimize studying and workspace productivity. Allows users to switch seamlessly between focus blocks, short rests, and long breaks with responsive fluid layouts.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/pallavi-676/Pomodoro-timer-web-app",
      link: "https://pomodoro-timer-web-app-ps.netlify.app/",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "To-Do Management App",
      description: "A modern, lightweight task manager designed with persistent browser storage (LocalStorage API). Allows tracking of active, pending, or completed tasks with dynamic DOM updates and seamless layout animations.",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage API"],
      github: "https://github.com/pallavi-676/To-do-app",
      link: "https://to-do-app-gamma-lime.vercel.app/",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Interactive Quiz App",
      description: "A dynamic quiz application featuring structured question streams, real-time score tracking, and highly engaging user controls. Designed with modular code components for absolute client side speed.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/pallavi-676/quiz-app",
      link: "https://quiz-app-ps.netlify.app/",
      image: "/src/assets/images/quiz.png"
    },
    {
      id: 6,
      title: "Modern Calculator",
      description: "A sleek dashboard calculator featuring dynamic calculation parsing and high-performance layout rendering. Focuses on core precision arithmetic rules and high-fidelity transitions.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/pallavi-676/modern-calculator-web-app",
      link: "https://calculator-web-ps.netlify.app/",
      image: "/src/assets/images/calculator.png"
    },
    {
      id: 7,
      title: " React Media Search",
      description: "A responsive media search application built with React.js, utilizing the API to fetch and display stickers, photos, videos and GIFs. Features dynamic search capabilities, structured result layouts, and seamless user interactions.",
      tech: ["React.js", "API Integration"],
      github: "https://github.com/pallavi-676/react-media-search",
      link: "https://react-media-search.vercel.app/",
      image: 'src/assets/images/image_0.png'
    },
    {
      id: 8,
      title: "Random Quote Generator",
      description: "A sleek, responsive web application that generates random quotes with dynamic styling. Built with React.js, it features seamless API integration for fetching quotes and a modern design aesthetic.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/pallavi-676/random-quote-generator",
      link: "https://quotes-generator-eight-henna.vercel.app/",
      image: "src/assets/images/image_1.png"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science Engineering",
      school: "University of Mumbai",
      status: "First Year Student",
      year: "2025 - Present",
      expectedGraduation: "2029",
      description: "Focusing on core Computer Science engineering concepts, structured programming logic, advanced mathematics, and fundamental database systems."
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      specialization: "Science Stream",
      school: "Mumbai Board",
      status: "Completed",
      year: "2024",
      description: "Specialized study in Physics, Chemistry, and Mathematics with core software engineering basics."
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      specialization: "General Education",
      school: "Mumbai Board",
      status: "Completed",
      year: "2022",
      description: "Achieved fundamental academic excellence and baseline scientific logic."
    }
  ]
};
