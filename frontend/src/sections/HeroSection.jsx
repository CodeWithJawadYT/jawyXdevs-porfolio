import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { Magnet } from "@/components/Magnet";
import { ContactButton } from "@/components/ContactButton";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Hero3DVisual = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-22, 22]), { stiffness: 80, damping: 15 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [16, -16]), { stiffness: 80, damping: 15 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div style={{ perspective: "1200px" }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }}
        animate={{ y: [0, -16, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(182,0,168,0.35) 0%, rgba(118,33,176,0.25) 45%, transparent 70%)",
            transform: "translateZ(-80px) scale(1.15)",
          }}
        />
        <img
          src="/assets/hero-chrome.png"
          alt="Futuristic 3D chrome digital object"
          className="relative w-full select-none pointer-events-none"
          draggable={false}
        />
      </motion.div>
    </div>
  );
};

export default function HeroSection({ introDelay = 0 }) {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative h-screen flex flex-col"
      style={{ overflowX: "clip" }}
    >
      <FadeIn as="nav" delay={introDelay} y={-20} className="relative z-20">
        <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollTo(e, link.id)}
              data-testid={`nav-link-${link.id}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={introDelay + 0.15} y={40}>
          <h1
            data-testid="hero-heading"
            className="hero-heading w-full text-center font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5"
          >
            JAWYXDEVS
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={introDelay + 0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <Hero3DVisual />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={introDelay + 0.35} y={20}>
          <p
            data-testid="hero-tagline"
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            Elite Web Engineering &amp; Digital Experiences
          </p>
        </FadeIn>
        <FadeIn delay={introDelay + 0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
