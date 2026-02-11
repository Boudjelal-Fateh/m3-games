"use client";

import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  const bars = Array.from({ length: 19 }, (_, i) => i);

  return (
    <section className="relative bg-white py-20 px-4 md:px-8 overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="flex" style={{ width: '1100px', height: '980.78px' }}>
          {bars.map((index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center flex-shrink-0"
              style={{
                width: '55px',
                height: '980.78px',
                opacity: 0.2,
                background: 'linear-gradient(270deg, rgba(154, 160, 166, 0.20) 0%, #F5F5F7 30%, rgba(154, 160, 166, 0.20) 100%)',
                backdropFilter: 'blur(50px)',
                borderRight: '1px solid rgba(0, 0, 0, 0.05)',
              }}
            />
          ))}
        </div>
      </div>

      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          width: '1100px',
          height: '980.78px',
          background: 'radial-gradient(50% 50% at 50% 54.7%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.00) 100%)',
        }}
      >
        <div
          className="absolute"
          style={{
            width: '473px',
            height: '446px',
            top: '147px',
            right: '628px',
            opacity: 0.3,
            background: 'radial-gradient(50% 50% at 50% 50%, #A5B4FC 0%, rgba(165, 180, 252, 0.00) 100%)',
            filter: 'blur(60px)',
          }}
        />

        <div
          className="absolute"
          style={{
            width: '562.11px',
            height: '530.03px',
            top: '75.5px',
            left: '269px',
            opacity: 0.4,
            background: 'radial-gradient(50% 50% at 50% 50%, #C4B5FD 0%, rgba(196, 181, 253, 0.00) 100%)',
            filter: 'blur(80px)',
          }}
        />

        <div
          className="absolute"
          style={{
            width: '473px',
            height: '446px',
            top: '174px',
            left: '629px',
            opacity: 0.3,
            background: 'radial-gradient(50% 50% at 50% 50%, #DDD6FE 0%, rgba(221, 214, 254, 0.00) 100%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-20 py-32 w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
          Ready to Scale Smarter?
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss how we can help you achieve your goals with our flexible, high-performance solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#contact" 
            className="group flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            <Briefcase className="w-5 h-5" />
            Contact Us
          </Link>
          
          <Link 
            href="#learn-more" 
            className="px-8 py-4 rounded-xl font-medium text-gray-700 hover:text-gray-900 transition-all hover:bg-gray-100 backdrop-blur-sm border border-gray-200"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
