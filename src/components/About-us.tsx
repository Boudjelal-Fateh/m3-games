"use client";
import { useEffect, useRef, useState } from "react";

const FULL_TEXT =
  "We design solutions that turn ambition into reality, addressing today's needs while preparing your business for tomorrow's challenges. Built on trust and driven by results, we partner with you to deliver measurable impact through innovation, reliability, and long-term commitment.";

const words = FULL_TEXT.split(" ");

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [litCount, setLitCount] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop breakpoint (lg = 1024px)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Scroll-driven animation — only active on desktop
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      const total = rect.height + windowH;
      const elapsed = windowH - rect.top;
      const progress = Math.max(0, Math.min(1, (elapsed / total) * 1.6));

      const count = Math.round(progress * words.length);
      setLitCount(Math.max(1, count));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center px-5 py-12 sm:px-10 sm:py-16 md:px-[100px] md:py-[140px] bg-transparent"
    >
      <p
        className="w-full max-w-full lg:max-w-[1240px] font-onest font-bold text-center"
        style={{
          fontSize: "clamp(24px, 6vw, 50px)",
          lineHeight: "clamp(32px, 7vw, 70px)",
          letterSpacing: "-0.5px",
        }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              // On mobile/tablet: always white. On desktop: scroll-driven.
              color: !isDesktop || i < litCount ? "#f1f1ef" : "#2a2a2a",
              transition: isDesktop ? "color 0.25s ease" : "none",
              display: "inline",
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
    </section>
  );
}
