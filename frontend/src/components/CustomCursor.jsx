import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [enabled] = useState(() => window.matchMedia("(pointer: fine)").matches);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => {
      const el = e.target instanceof Element ? e.target : null;
      setHovering(!!el?.closest("a, button, [data-cursor='hover']"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        data-testid="custom-cursor-ring"
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          border: "1.5px solid rgba(215,226,234,0.5)",
          boxShadow: "0 0 22px rgba(182,0,168,0.45), inset 0 0 12px rgba(118,33,176,0.3)",
        }}
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: visible ? 1 : 0,
          borderColor: hovering ? "rgba(182,0,168,0.9)" : "rgba(215,226,234,0.5)",
          backgroundColor: hovering ? "rgba(182,0,168,0.08)" : "rgba(182,0,168,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        initial={false}
      />
      <motion.div
        data-testid="custom-cursor-dot"
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          backgroundColor: "#D7E2EA",
          boxShadow: "0 0 10px rgba(215,226,234,0.9)",
        }}
        animate={{ scale: hovering ? 0.4 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};
