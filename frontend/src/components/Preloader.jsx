import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const dur = 1500;
    let raf;
    let timer;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else timer = setTimeout(onDone, 450);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <motion.div
      data-testid="preloader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0C0C0C" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden px-4">
        <motion.h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[13vw] sm:text-[10vw]"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        >
          JAWYXDEVS
        </motion.h1>
      </div>
      <div className="w-[60vw] sm:w-[40vw] h-px mt-8 bg-[#D7E2EA]/15 overflow-hidden rounded-full">
        <div
          className="h-full"
          style={{
            width: `${count}%`,
            background: "linear-gradient(90deg, #B600A8, #7621B0)",
            transition: "width 80ms linear",
          }}
        />
      </div>
      <span className="absolute bottom-8 right-8 text-[#D7E2EA]/60 font-light text-2xl sm:text-4xl tabular-nums">
        {count}%
      </span>
    </motion.div>
  );
};
