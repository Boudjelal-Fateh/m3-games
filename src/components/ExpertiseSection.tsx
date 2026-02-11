"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function ExpertiseSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Handle scrollbar click
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollTrackRef.current) {
      const rect = scrollTrackRef.current.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const trackHeight = rect.height;
      const position = Math.max(0, Math.min(1, clickY / trackHeight));
      setScrollPosition(position);
    }
  };

  // Handle drag
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && scrollTrackRef.current) {
        const rect = scrollTrackRef.current.getBoundingClientRect();
        const mouseY = e.clientY - rect.top;
        const trackHeight = rect.height;
        const position = Math.max(0, Math.min(1, mouseY / trackHeight));
        setScrollPosition(position);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="flex py-12 px-6 sm:py-16 sm:px-8 md:py-20 md:px-12 lg:py-[140px] lg:px-[100px] flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[60px] bg-black w-full">
      {/* Frame 1: Header */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
        <div className="inline-flex items-center gap-2">
          <span className="text-purple-500 text-lg sm:text-xl">✦</span>
          <span className="text-purple-500 font-medium text-base sm:text-lg">Our Expertise</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4" style={{
          background: 'linear-gradient(to bottom, #dedede 0%, #fefefe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Solutions Built for Your Growth
        </h2>
      </div>

      {/* Frame 2: Content Grid */}
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
        {/* Left Div: Text and List */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Future-Proof Solutions
          </h3>
          
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We don't just deliver code — we build scalable systems that
            grow with your business.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm sm:text-base">Scalable Architecture</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm sm:text-base">Modern Technology Stack</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm sm:text-base">Cloud-Native Solutions</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm sm:text-base">Performance Optimization</span>
            </div>
          </div>
        </div>

        {/* Right Div: Image with Scrollbar */}
        <div className="flex-1 relative flex items-center gap-4 sm:gap-6 w-full">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex-1">
            <Image 
              src="/Background-1.png" 
              alt="3D Abstract Art"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
              width={562}
              height={568}
            />
          </div>

          {/* Vertical Scrollbar - Desktop only */}
          <div className="hidden md:flex flex-col items-center" style={{ width: '16px', height: '452px' }}>
            <span className="text-xs text-gray-400 font-medium">03</span>
            <div 
              ref={scrollTrackRef}
              onClick={handleTrackClick}
              className="flex flex-col items-center justify-start flex-1 relative cursor-pointer"
              style={{ width: '4px' }}
            >
              <div className="absolute inset-0 rounded-full" style={{ background: '#232323' }}></div>
              <div 
                onMouseDown={handleMouseDown}
                className="absolute rounded-full cursor-grab active:cursor-grabbing transition-colors hover:bg-gray-600"
                style={{ 
                  width: '4px', 
                  height: '60px',
                  background: '#666',
                  top: `${scrollPosition * (100 - (60 / (scrollTrackRef.current?.clientHeight || 1) * 100))}%`,
                  transition: isDragging ? 'none' : 'top 0.1s ease-out'
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-400 font-medium">04</span>
          </div>
        </div>
      </div>
    </section>
  );
}
