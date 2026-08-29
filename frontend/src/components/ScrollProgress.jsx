import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div
      data-testid="scroll-progress"
      className="fixed top-0 left-0 right-0 h-[3px] z-[95] origin-left"
      style={{ scaleX, background: "linear-gradient(90deg, #B600A8, #7621B0, #BE4C00)" }}
    />
  );
};
