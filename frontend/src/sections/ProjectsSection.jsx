import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { LiveProjectButton } from "@/components/LiveProjectButton";

const useIsMd = () => {
  const [isMd, setIsMd] = useState(() => window.matchMedia("(min-width: 768px)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const fn = (e) => setIsMd(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return isMd;
};

const Card = ({ project, index, total, progress }) => {
  const isMd = useIsMd();
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center">
      <motion.div
        data-testid={`project-card-${project.number}`}
        className="sticky w-full rounded-[32px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
        style={{
          scale,
          top: `calc(${isMd ? "6rem" : "4.5rem"} + ${index * (isMd ? 28 : 12)}px)`,
          backgroundColor: "#0C0C0C",
          willChange: "transform",
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 px-2 sm:px-4 pb-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2">
              <span className="text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: "clamp(1.1rem, 2.6vw, 2.4rem)" }}
              >
                {project.name}
              </h3>
              <p
                className="text-[#D7E2EA]/50 font-light max-w-md hidden sm:block"
                style={{ fontSize: "clamp(0.8rem, 1.1vw, 1rem)" }}
              >
                {project.description}
              </p>
            </div>
          </div>
          <LiveProjectButton url={project.url} testId={`live-project-btn-${project.number}`} />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
            <img
              src={`/projects/${project.slug}_top.jpg`}
              alt={`${project.name} preview`}
              loading="lazy"
              className="w-full object-cover object-top rounded-[24px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={`/projects/${project.slug}_mid.jpg`}
              alt={`${project.name} section`}
              loading="lazy"
              className="w-full object-cover rounded-[24px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <img
              src={`/projects/${project.slug}_tall.jpg`}
              alt={`${project.name} full view`}
              loading="lazy"
              className="w-full h-full object-cover object-top rounded-[24px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <h2
        data-testid="projects-heading"
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-10 sm:mb-14 md:mb-20"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </h2>

      <div ref={ref} className="max-w-6xl mx-auto pb-[8vh] md:pb-[48vh]">
        {PROJECTS.map((project, i) => (
          <Card
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
