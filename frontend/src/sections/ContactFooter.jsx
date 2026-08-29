import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ContactButton } from "@/components/ContactButton";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      data-testid="contact-section"
      className="relative px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="flex flex-col items-center text-center gap-10 sm:gap-12">
        <FadeIn delay={0} y={40}>
          <h2
            data-testid="contact-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}
          >
            Let's Build
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide max-w-md"
            style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.2rem)" }}
          >
            Have a project in mind? Let's create something exceptional together.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <ContactButton />
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
          <a
            href="tel:03151082775"
            data-testid="contact-phone-link"
            className="flex items-center gap-2 text-[#D7E2EA] font-light tracking-wider hover:opacity-70 transition-opacity duration-200 text-sm sm:text-base"
          >
            <Phone size={16} />
            03151082775
          </a>
          <a
            href="mailto:jawyXdevs@gmail.com"
            data-testid="contact-email-link"
            className="flex items-center gap-2 text-[#D7E2EA] font-light tracking-wider hover:opacity-70 transition-opacity duration-200 text-sm sm:text-base"
          >
            <Mail size={16} />
            jawyXdevs@gmail.com
            <ArrowUpRight size={14} />
          </a>
        </FadeIn>
      </div>

      <div
        className="mt-16 sm:mt-20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(215, 226, 234, 0.15)" }}
      >
        <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs">
          © {new Date().getFullYear()} JawyXdevs
        </span>
        <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs">
          Elite Web Engineering &amp; Digital Experiences
        </span>
      </div>
    </footer>
  );
}
