# 🌌 Cyber-Space Interactive Portfolio

A futuristic, high-performance personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. The interface features deep-space ambient aesthetics, dynamic 3D parallax layers, interactive hover effect matrices, and clean, scannable structural typography.

---

## 🚀 Live Demo & Links

You can explore the live deployment or view the underlying codebase using the links below:

[Portfolio]https://my-portfolio-xi-ten-duo4dgpa23.vercel.app/
* **Source Code Repository:** [github.com/pallavi-676/portfolio](https://github.com/pallavi-676)

---

## 🛠️ Tech Arsenal & Frameworks

* **Core Architecture:** React.js (Vite configuration)
* **Styling Engine:** Tailwind CSS (Utilizing utility-first design layouts, backdrop blurs, and glassmorphism)
* **Animation System:** Framer Motion (Driving advanced hook states like `useMotionValue` and `useTransform`)
* **Vector Library:** Lucide React (Providing crisp, lightweight UI icons)

---

## ✨ Standout Engineering Features

### 1. Dynamic Grayscale-to-Color Reveal
Instead of using basic opacity fades, the Profile image utilizes a advanced CSS `mask-image` driven by `radial-gradient` vectors. 
* **Idle State:** The image renders in an ambient, muted grayscale layout (`grayscale contrast-[1.15] brightness-90`).
* **Hover State:** The cursor acts like a soft focus airbrush, seamlessly blending the natural, true-color image layer right beneath the user's mouse position with zero rigid edges.

### 2. 3D Tilt & Parallax Physics
The interactive profile card tracks cursor positional coordinates relative to its bounding container box. Mouse tracking metrics are dynamically translated into real-time sub-pixel rotation transformations (`rotateX`, `rotateY`), adding true 3D spatial depth.

### 3. Animated Holographic Technical Rings
The UI features double-layered vector SVG circles enveloping interactive components that rotate asynchronously in opposite directions via custom infinite Tailwind CSS animation keyframes (`animate-spin`).

---

## 📂 File Architecture

```text
src/
├── components/
│   ├── About.jsx       # Streamlined, non-repetitive bio segment & mask image matrix
│   ├── Hero.jsx        # Space-ambient introduction card layout
│   ├── Skills.jsx      # Categorized engineering tools and language units
│   ├── Projects.jsx    # Glassmorphic display gallery showcase
│   └── Contact.jsx     # Modern terminal communication layout form
├── data/
│   └── portfolio.js    # Clean centralized state data configurations
└── index.css           # Tailwind configurations and glass-panel custom layer rules
