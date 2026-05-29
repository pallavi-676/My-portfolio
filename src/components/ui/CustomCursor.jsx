import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out"
        style={{ willChange: "transform" }}
      />

      {/* Center Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-blue-500 pointer-events-none z-[10000] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
