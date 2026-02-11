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
    avatar: "/avatars/avatar-1.png", // Placeholder
    content:
      "This platform has transformed how we manage our projects. Its intuitive design and powerful features have streamlined our workflow and improved team collaboration. It's truly a game-changer for our operations.",
  },
  {
    id: 2,
    name: "Fabrizio Rinaldi",
    handle: "@linuz90",
    avatar: "/avatars/avatar-2.png", // Placeholder
    content:
      "This platform has transformed how we manage our projects. Its intuitive design and powerful features have streamlined our workflow and improved team collaboration. It's truly a game-changer for our operations.",
  },
  {
    id: 3,
    name: "Demetria Giles",
    handle: "@drosewritings",
    avatar: "/avatars/avatar-3.png", // Placeholder
    content:
      "This platform has transformed how we manage our projects. Its intuitive design and powerful features have streamlined our workflow and improved team collaboration. It's truly a game-changer for our operations.",
  },
];

export default function WallOfLove() {
  return (
    <section className="bg-black py-20 px-4 md:px-8 relative overflow-hidden">
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
          <div className="flex items-center gap-2 text-purple-500 mb-4">
            <Heart className="w-5 h-5 fill-current" />
            <span className="text-base font-medium">Wall of love</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-gray-200">
            Trusted by Thinkers
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Trusted by those who work with us
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 border border-white/10 hover:border-white/20 transition-all"
              style={{
                borderRadius: '20px',
                background: 'rgba(16, 16, 16, 0.80)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 overflow-hidden relative border border-white/10">
                   {/* Avatar with fallback to initials */}
                   <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-300">
                     {testimonial.name.charAt(0)}
                   </div>
                   {/* Uncomment when you have actual avatar images */}
                   {/* <Image
                     src={testimonial.avatar}
                     alt={testimonial.name}
                     width={48}
                     height={48}
                     className="object-cover"
                   /> */}
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
      </div>
    </section>
  );
}
