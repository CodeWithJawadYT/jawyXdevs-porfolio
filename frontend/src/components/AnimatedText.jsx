import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Char = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="opacity-20">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className, style }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  let charIndex = 0;
  const total = text.length;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split("").map((char) => {
          const start = charIndex / total;
          const end = Math.min((charIndex + 1) / total, 1);
          charIndex += 1;
          return (
            <Char key={charIndex} char={char} progress={scrollYProgress} range={[start, end]} />
          );
        });
        charIndex += 1;
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars}
            {wi < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
};
