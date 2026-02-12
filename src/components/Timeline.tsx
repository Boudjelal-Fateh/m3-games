"use client"
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, useMotionValueEvent } from "framer-motion";

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

const TimelineRow = ({ item, index, scrollYProgress, totalItems, activeIndex, setActiveIndex }: { item: TimelineItem; index: number; scrollYProgress: MotionValue<number>; totalItems: number; activeIndex: number; setActiveIndex: (index: number) => void; }) => {
  const isEven = index % 2 === 0;
  const isActive = index === activeIndex;

  // Calculate specific trigger points for this item
  // Distribute trigger points along the vertical line
  const start = index / totalItems;
  const end = (index / totalItems) + 0.15;

  const opacity = useTransform(scrollYProgress, [start, end], [0.5, 1]);
  const glowOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className={`flex flex-col w-full mb-12 md:mb-24 relative ${
        isEven ? "" : ""
      }`}
    >
      {/* Mobile Layout (Visible only on small screens) */}
      <div className="flex lg:hidden flex-col items-center text-center gap-4 w-full px-2">
        <div 
          onClick={() => setActiveIndex(index)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-10 shrink-0 ${
            isActive 
              ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110" 
              : "bg-[#1A1A1A] border border-white/10"
          }`}
        >
          <span className={`font-bold font-onest text-sm transition-colors duration-300 ${isActive ? "text-black" : "text-[#9C9C9D]"}`}>0{item.id}</span>
        </div>
           <h3 className="text-white text-[20px] font-medium font-onest">{item.title}</h3>
           <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-[16px] w-full shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
              <p className="text-[#d4d4d4] text-[16px] leading-relaxed font-onest">{item.description}</p>
           </div>
      </div>

      {/* Desktop Layout (Hidden on mobile, visible on md+) */}
      <div className="hidden lg:grid grid-cols-[1fr_96px_1fr] w-full items-center relative">
        {/* Background Glow (Desktop only) */}
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute w-[800px] h-[400px] rounded-[1000px] bg-[rgba(255,255,255,0.05)] blur-[150px] pointer-events-none z-0 left-1/2 -translate-x-1/2 top-[101px]" 
        />

        {/* Content Side 1 (Left) */}
        <div className="flex justify-end px-0 z-10">
          {isEven ? (
            // Index 0, 2 (Item 1, 3): Left is Description Card
            <div className="flex flex-col justify-center items-center gap-[24px] p-[40px] rounded-[20px] bg-[#101010] flex-1 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] mr-[-4px] relative group">
              <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#101010] border-t border-r border-white/10 rotate-45 transition-all duration-300 group-hover:border-white/30" />
              <p className="self-stretch w-full max-w-[485px] text-[#9C9C9D] text-right font-onest text-[16px] font-[400] leading-[150%]">
                {item.description}
              </p>
            </div>
          ) : (
            // Index 1, 3 (Item 2, 4): Left is Title Pill
            <div className="bg-[#1A1A1A] border border-white/5 py-3 px-6 rounded-[12px] w-fit">
              <h3 className="text-white text-[16px] font-semibold font-onest leading-[146%] whitespace-nowrap">
                {item.title}
              </h3>
            </div>
          )}
        </div>

        {/* Center Node */}
        <div className="relative z-20 flex justify-center items-center shrink-0">
           <div 
             onClick={() => setActiveIndex(index)}
             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-10 ${
               isActive 
                 ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110" 
                 : "bg-[#1A1A1A] border border-white/10"
             }`}
           >
            <span className={`font-bold font-onest text-base transition-colors duration-300 ${isActive ? "text-black" : "text-[#9C9C9D]"}`}>
              0{item.id}
            </span>
          </div>
        </div>

        {/* Content Side 2 (Right) */}
        <div className="flex justify-start px-0 z-10">
          {isEven ? (
            // Index 0 (Item 1): Right is Title Pill
            <div className="bg-[#1A1A1A] border border-white/5 py-3 px-6 rounded-[12px] w-fit">
              <h3 className="text-white text-[16px] font-semibold font-onest leading-[146%] whitespace-nowrap">
                {item.title}
              </h3>
            </div>
          ) : (
            // Index 1 (Item 2): Right is Description Card
            <div className="flex flex-col justify-center items-center gap-[24px] p-[40px] rounded-[20px] bg-[#101010] flex-1 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] mr-[-4px] relative group">
              <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#101010] border-t border-r border-white/10 rotate-45 transition-all duration-300 group-hover:border-white/30" />
              <p className="  text-start w-full max-w-[460px] text-[#9C9C9D] text-right font-onest text-[16px] font-[400] leading-[150%]">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalItems = timelineData.length;
    // Calculate which item is closest to the "trigger point"
    // The trigger point is when an item is centered or slightly entered
    const currentSection = Math.round(latest * (totalItems - 1));
    if (currentSection !== activeIndex && currentSection >= 0 && currentSection < totalItems) {
      setActiveIndex(currentSection);
    }
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="flex flex-col items-center self-stretch py-20 px-4 md:py-[140px] md:px-[100px] relative overflow-hidden bg-[#060606]" ref={containerRef}>
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

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[50%] top-[-100px] bottom-[50px] w-[2px] bg-white/10 -translate-x-1/2 hidden lg:block"></div>
          
          {/* Animated fill line */}
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
