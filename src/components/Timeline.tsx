"use client";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  id: number;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Customer Support Automation",
    description:
      "AI agents handling 90% of customer inquiries with human-level understanding and response quality.",
  },
  {
    id: 2,
    title: "Content Generation Pipeline",
    description:
      "Automated content creation, optimization, and distribution across multiple channels and formats.",
  },
  {
    id: 3,
    title: "Predictive Business Intelligence",
    description:
      "AI-driven forecasting and decision support systems that adapt to market changes in real-time.",
  },
  {
    id: 4,
    title: "Process Optimization",
    description:
      "Intelligent workflow analysis and optimization that continuously improves operational efficiency.",
  },
  {
    id: 5,
    title: "Fine-Tuned Models vs RAG",
    description:
      "Custom fine-tuned models that outperform RAG solutions with superior accuracy and domain-specific intelligence.",
  },
  {
    id: 6,
    title: "Agentic Business Automation",
    description:
      "Autonomous agents that handle complex processes, make smart decisions, and coordinate across teams.",
  },
];

const TimelineRow = ({
  item,
  index,
  scrollYProgress,
  activeIndex,
  setActiveIndex,
  nodeRef,
}: {
  item: TimelineItem;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalItems: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  nodeRef: (el: HTMLDivElement | null) => void;
}) => {
  const isEven = index % 2 === 0;
  const isActive = index <= activeIndex;

  const start = index / timelineData.length;
  const end = start + 0.15;
  const glowOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  // Derived styles based on active state
  const titleColor = isActive ? "text-white" : "text-[#2e2e2e]";
  const pillBg = isActive ? "bg-[#1A1A1A]" : "bg-[#0f0f0f]";
  const pillBorder = isActive ? "border-white/10" : "border-white/[0.03]";
  const cardBg = isActive ? "bg-[#101010]" : "bg-[#090909]";
  const cardBorder = isActive ? "border-white/10" : "border-white/[0.03]";
  const descColor = isActive ? "text-[#9C9C9D]" : "text-[#2a2a2a]";
  const transition = "transition-all duration-500";

  return (
    <div className={`flex flex-col w-full mb-12 md:mb-24 relative`}>
      {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col items-center text-center gap-4 w-full px-2">
        <div
          onClick={() => setActiveIndex(index)}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${transition} cursor-pointer z-10 shrink-0 ${
            isActive
              ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110"
              : "bg-[#1A1A1A] border border-white/10"
          }`}
        >
          <span
            className={`font-bold font-onest text-sm ${transition} ${isActive ? "text-black" : "text-[#9C9C9D]"}`}
          >
            0{item.id}
          </span>
        </div>
        <h3
          className={`text-[20px] font-medium font-onest ${transition} ${titleColor}`}
        >
          {item.title}
        </h3>
        <div
          className={`${cardBg} border ${cardBorder} p-6 rounded-[16px] w-full shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] ${transition}`}
        >
          <p
            className={`text-[16px] leading-relaxed font-onest ${transition} ${descColor}`}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-[1fr_96px_1fr] w-full items-center relative">
        {/* Background Glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute w-[800px] h-[400px] rounded-[1000px] bg-[rgba(255,255,255,0.05)] blur-[150px] pointer-events-none z-0 left-1/2 -translate-x-1/2 top-[101px]"
        />

        {/* Left Side */}
        <div className="flex justify-end px-0 z-10">
          {isEven ? (
            <div
              className={`flex flex-col justify-center items-center gap-[24px] p-[40px] rounded-[20px] ${cardBg} flex-1 border ${cardBorder} ${transition} hover:border-white/30 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] mr-[-4px] relative group`}
            >
              <div
                className={`absolute right-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 ${cardBg} border-t border-r ${cardBorder} rotate-45 ${transition} group-hover:border-white/30`}
              />
              <p
                className={`self-stretch w-full max-w-[485px] text-right font-onest text-[16px] font-[400] leading-[150%] ${transition} ${descColor}`}
              >
                {item.description}
              </p>
            </div>
          ) : (
            <div
              className={`${pillBg} border ${pillBorder} py-3 px-6 rounded-[12px] w-fit ${transition}`}
            >
              <h3
                className={`text-[16px] font-semibold font-onest leading-[146%] whitespace-nowrap ${transition} ${titleColor}`}
              >
                {item.title}
              </h3>
            </div>
          )}
        </div>

        {/* Center Node — ref captured here */}
        <div className="relative z-20 flex justify-center items-center shrink-0">
          <div
            ref={nodeRef}
            onClick={() => setActiveIndex(index)}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${transition} cursor-pointer z-10 ${
              isActive
                ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110"
                : "bg-[#1A1A1A] border border-white/10"
            }`}
          >
            <span
              className={`font-bold font-onest text-base ${transition} ${isActive ? "text-black" : "text-[#9C9C9D]"}`}
            >
              0{item.id}
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-start px-0 z-10">
          {isEven ? (
            <div
              className={`${pillBg} border ${pillBorder} py-3 px-6 rounded-[12px] w-fit ${transition}`}
            >
              <h3
                className={`text-[16px] font-semibold font-onest leading-[146%] whitespace-nowrap ${transition} ${titleColor}`}
              >
                {item.title}
              </h3>
            </div>
          ) : (
            <div
              className={`flex flex-col justify-center items-center gap-[24px] p-[40px] rounded-[20px] ${cardBg} flex-1 border ${cardBorder} ${transition} hover:border-white/30 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] relative group`}
            >
              <div
                className={`absolute right-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 ${cardBg} border-t border-r ${cardBorder} rotate-45 ${transition} group-hover:border-white/30`}
              />
              <p
                className={`text-start w-full max-w-[460px] font-onest text-[16px] font-[400] leading-[150%] ${transition} ${descColor}`}
              >
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const relativeRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>(
    Array(timelineData.length).fill(null),
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const [activeIndex, setActiveIndex] = useState(-1); // -1 = nothing active yet

  // How far through scrollYProgress (0→1) the line should be FULLY filled.
  // Lower = completes earlier = all items lit before leaving the section.
  const SPEED = 0.65;

  // Activate items precisely when the white fill-line reaches each node
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!relativeRef.current) return;
    const containerRect = relativeRef.current.getBoundingClientRect();
    const containerH = relativeRef.current.offsetHeight;

    // Scale progress by SPEED so activation matches the visual line
    const scaled = Math.min(latest / SPEED, 1);

    // When fully complete, activate everything and bail out
    if (scaled >= 1) {
      setActiveIndex(timelineData.length - 1);
      return;
    }

    // The line starts at top:-100px, so its full reachable range is containerH + 100.
    // lineTipY = 0 maps to the very top of the container.
    const lineTipY = scaled * (containerH + 100) - 100;

    let newActive = -1;
    nodeRefs.current.forEach((node, i) => {
      if (!node) return;
      const nodeRect = node.getBoundingClientRect();
      const nodeCenterY =
        nodeRect.top + nodeRect.height / 2 - containerRect.top;
      if (lineTipY >= nodeCenterY) newActive = i;
    });

    setActiveIndex(newActive);
  });

  // Measure the exact pixel height the line needs to reach the last node's center.
  // height = lastNodeCenterY (relative to container) + 100 (offset for top:-100px)
  const targetPxRef = useRef(0);
  useEffect(() => {
    const measure = () => {
      const lastNode = nodeRefs.current[timelineData.length - 1];
      if (!lastNode || !relativeRef.current) return;
      const containerRect = relativeRef.current.getBoundingClientRect();
      const nodeRect = lastNode.getBoundingClientRect();
      const lastNodeCenterY =
        nodeRect.top + nodeRect.height / 2 - containerRect.top;
      // line starts at top:-100px, so height needed = centerY + 100
      targetPxRef.current = lastNodeCenterY + 100;
    };
    // Small delay to ensure layout is complete
    const t = setTimeout(measure, 150);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Functional transform: always reads the latest measured pixel target
  const height = useTransform(scrollYProgress, (v) => {
    const t = targetPxRef.current;
    if (t === 0) return 0;
    const scaled = Math.min(v / SPEED, 1);
    return scaled * t;
  });

  return (
    <section
      className="flex flex-col items-center self-stretch py-20 px-4 md:py-[140px] md:px-[100px] relative overflow-hidden bg-[#060606]"
      ref={containerRef}
    >
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#060606] to-[#060606] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Pill */}
        <div className="flex justify-center mb-24">
          <div className="flex flex-col justify-center items-center gap-[10px] py-[10px] px-[16px] rounded-[10px] bg-[#E6E6E6]">
            <span className="text-[#333333] text-center font-onest text-[16px] font-[600] leading-[150%]">
              AI Transformation Use Cases
            </span>
          </div>
        </div>

        <div className="relative" ref={relativeRef}>
          {/* Static track line */}
          <div className="absolute left-[50%] top-[-100px] bottom-[50px] w-[2px] bg-white/10 -translate-x-1/2 hidden lg:block" />

          {/* Animated white fill line */}
          <motion.div
            style={{ height }}
            className="absolute left-[50%] top-[-100px] w-[2px] bg-white -translate-x-1/2 hidden lg:block origin-top shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />

          <div className="space-y-4 md:space-y-12">
            {timelineData.map((item, index) => (
              <TimelineRow
                key={item.id}
                item={item}
                index={index}
                scrollYProgress={scrollYProgress}
                totalItems={timelineData.length}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                nodeRef={(el) => {
                  nodeRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
