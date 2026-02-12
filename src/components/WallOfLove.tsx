"use client";

import { Heart } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  handle: string;
  avatar: string; // In a real app, this would be a URL
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sean Rose",
    handle: "@seanrose",
    avatar: "/glassesguy.png", // Placeholder
    content:
      "This platform has transformed how we manage our projects. Its intuitive design and powerful features have streamlined our workflow and improved team collaboration. It's truly a game-changer for our operations.",
  },
  {
    id: 2,
    name: "Fabrizio Rinaldi",
    handle: "@linuz90",
    avatar: "/guy.png", // Placeholder
    content:
      "This platform has transformed how we manage our projects. Its intuitive design and powerful features have streamlined our workflow and improved team collaboration. It's truly a game-changer for our operations.",
  },
  {
    id: 3,
    name: "Demetria Giles",
    handle: "@drosewritings",
    avatar: "/female.png", // Placeholder
    content:
      "This platform has transformed how we manage our projects. Its intuitive design and powerful features have streamlined our workflow and improved team collaboration. It's truly a game-changer for our operations.",
  },
];

export default function WallOfLove() {
  return (
    <section className=" py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Glow - Responsive */}
      <div 
        className="absolute pointer-events-none left-1/2 -translate-x-1/2 top-[140px] w-[min(800px,90vw)] h-[400px]"
        style={{
          borderRadius: '1000px',
          background: 'rgba(147, 130, 255, 0.06)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-purple-500 mb-[22px] ">
            <Image  src={"/heart.svg"} width={22} height={22} alt="image of a heart icon" />
            <span className="text-[#A594FD] font-onest text-[24px] font-normal leading-[24px] tracking-[-0.24px]">Wall of love</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-gray-200">
            Trusted by Thinkers
          </h2>
          <p className="text-[#ADADAD]/80 mt-[10px] font-onest text-[18px] font-normal leading-[26px] tracking-[-0.16px] text-center">
            Trusted by those who work with us
          </p>
        </div>

        {/* Grid */}
        <div className="grid  grid-cols-1  lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 border  border-white/10 transition-all"
              style={{
                borderRadius: '20px',
               background: "rgba(16, 16, 16, 0.80)"

              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 overflow-hidden relative border border-white/10">
                   {/* Avatar with fallback to initials */}
                  
                   {/* Uncomment when you have actual avatar images */}
                   <Image
                     src={testimonial.avatar}
                     alt={testimonial.name}
                     width={48}
                     height={48}
                     className="object-cover"
                   />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-20"
          style={{
            width: '1240px',
            height: '278px',
            background: 'linear-gradient(270deg, #060606 0%, rgba(6, 6, 6, 0.50) 16.67%, rgba(6, 6, 6, 0.00) 33.33%, rgba(6, 6, 6, 0.00) 50%, rgba(6, 6, 6, 0.00) 66.67%, rgba(6, 6, 6, 0.50) 83.33%, #060606 100%)'
          }}
        />
      </div>
    </section>
  );
}
