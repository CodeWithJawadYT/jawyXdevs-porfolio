import { FadeIn } from "@/components/FadeIn";
import { AnimatedText } from "@/components/AnimatedText";
import { ContactButton } from "@/components/ContactButton";

const BASE = "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7";

const DECOR = [
  {
    src: `${BASE}/moon_icon.11395d36.png`,
    className: "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]",
    delay: 0.1,
    x: -80,
  },
  {
    src: `${BASE}/p59_1.4659672e.png`,
    className: "w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]",
    delay: 0.25,
    x: -80,
  },
  {
    src: `${BASE}/lego_icon-1.703bb594.png`,
    className: "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]",
    delay: 0.15,
    x: 80,
  },
  {
    src: `${BASE}/Group_134-1.2e04f3ce.png`,
    className: "w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]",
    delay: 0.3,
    x: 80,
  },
];

const ABOUT_TEXT =
  "JawyXdevs is an elite web engineering studio focused on building high-performance digital experiences. We create modern, responsive, interactive and visually striking websites that help businesses and brands stand out online. From custom web development to immersive interactions, every project is built with performance, design and user experience in mind.";

export default function AboutSection() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {DECOR.map((d, i) => (
        <FadeIn
          key={i}
          delay={d.delay}
          x={d.x}
          y={0}
          duration={0.9}
          className={`absolute pointer-events-none ${d.className}`}
        >
          <img src={d.src} alt="" loading="lazy" className="w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            data-testid="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About JawyXdevs
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
      </div>

      <div className="relative z-10 mt-16 sm:mt-20 md:mt-24">
        <FadeIn delay={0.1} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
