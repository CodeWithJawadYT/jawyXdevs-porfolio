import { FadeIn } from "@/components/FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "Web Development",
    description:
      "High-performance, responsive websites built with modern technologies, clean architecture and production-ready code.",
  },
  {
    number: "02",
    name: "Interactive Web Design",
    description:
      "Modern interfaces with smooth animations, micro-interactions and thoughtful user experiences designed to make websites memorable.",
  },
  {
    number: "03",
    name: "3D & Motion Experiences",
    description:
      "Immersive digital experiences featuring sophisticated motion, scroll interactions and 3D-inspired visual elements.",
  },
  {
    number: "04",
    name: "Performance & SEO",
    description:
      "Fast, responsive and search-friendly websites engineered for strong technical performance, accessibility and discoverability.",
  },
  {
    number: "05",
    name: "AI Integration",
    description:
      "Intelligent web experiences powered by AI — chatbots, automation, content generation and smart integrations that give brands a real competitive edge.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative z-0 bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          data-testid="services-heading"
          className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              data-testid={`service-item-${service.number}`}
              data-cursor="hover"
              className="group relative overflow-hidden flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12 px-4 sm:px-8 -mx-4 sm:-mx-8 rounded-2xl"
              style={{ borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <div
                className="absolute inset-0 bg-[#0C0C0C] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
              />
              <span
                className="relative z-10 font-black text-[#0C0C0C] group-hover:text-[#D7E2EA] transition-colors duration-500 leading-none shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>
              <div className="relative z-10 flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4 group-hover:translate-x-2 transition-transform duration-500">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] group-hover:text-[#D7E2EA] transition-colors duration-500"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] group-hover:text-[#D7E2EA] transition-colors duration-500"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
