import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/data/projects";

const ROW1 = PROJECTS.map((p) => ({ src: `${process.env.PUBLIC_URL}/projects/${p.slug}_top.jpg`, alt: p.name }));
const ROW2 = PROJECTS.map((p) => ({ src: `${process.env.PUBLIC_URL}/projects/${p.slug}_mid.jpg`, alt: p.name }));

const repeat = (arr, times) => Array.from({ length: times }, () => arr).flat();

const Tile = ({ img }) => (
  <img
    src={img.src}
    alt={img.alt}
    loading="lazy"
    className="rounded-2xl object-cover shrink-0 w-[280px] h-[180px] sm:w-[420px] sm:h-[270px]"
  />
);

export default function MarqueeSection() {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const sectionTop = ref.current.offsetTop;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(Math.max(0, value));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const row1 = repeat(ROW1, 4);
  const row2 = repeat(ROW2, 4);

  return (
    <section
      ref={ref}
      data-testid="marquee-section"
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div
        className="flex gap-3 w-max"
        style={{ transform: `translate3d(${offset - 2200}px, 0, 0)`, willChange: "transform" }}
      >
        {row1.map((img, i) => (
          <Tile key={`r1-${i}`} img={img} />
        ))}
      </div>
      <div
        className="flex gap-3 w-max"
        style={{ transform: `translate3d(${-offset - 200}px, 0, 0)`, willChange: "transform" }}
      >
        {row2.map((img, i) => (
          <Tile key={`r2-${i}`} img={img} />
        ))}
      </div>
    </section>
  );
}
