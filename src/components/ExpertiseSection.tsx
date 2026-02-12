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
    <section className="flex py-12 px-6 sm:py-16 sm:px-8 md:py-20 md:px-12 lg:py-[140px] lg:px-[100px] flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[60px] bg-transparent w-full">
      {/* Frame 1: Header */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
        <div className="inline-flex items-center gap-2">
           <Image src={"/award.svg"} width={22} height={22} alt="Award Icon" />
         <span className="text-[18px] sm:text-[24px] leading-[24px] text-[#a594fd] font-onest -tracking-[0.24px]">
            Our Expertise
          </span>
        </div>
        
           <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[52px] lg:leading-[64px] mb-[10px] font-onest font-[500] -tracking-[1.76px] text-[#f1f1ef]">
          Solutions Built for Your Growth
        </h2>
      </div>

      {/* Frame 2: Content Grid */}
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
        {/* Left Div: Text and List */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
          <h3 className="text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[40px] lg:leading-[51px] font-onest font-[500] -tracking-[1.76px] text-[#f1f1ef] mb-[10px]">
              Future-Proof Solutions
            </h3>
          
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[26px] -tracking-[0.16px] font-onest font-normal mb-[16px] sm:mb-[22px] text-[#adadad]/80">
              We don't just deliver code — we build scalable systems that{" "}
              <br className="hidden md:block" /> grow with your business.
            </p>

          <div className="flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4">
            <div className="flex items-center gap-3">
               <Image
                  src={"/check-circle-1.svg"}
                  width={20}
                  height={20}
                  alt="Check Icon"
                  className="sm:w-6 sm:h-6"
                />
              <span className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] font-onest font-normal text-[#adadad]">Scalable Architecture</span>
            </div>

            <div className="flex items-center gap-3">
               <Image
                  src={"/check-circle-1.svg"}
                  width={20}
                  height={20}
                  alt="Check Icon"
                  className="sm:w-6 sm:h-6"
                />
              <span className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] font-onest font-normal text-[#adadad]">Modern Technology Stack</span>
            </div>

            <div className="flex items-center gap-3">
              <Image
                  src={"/check-circle-1.svg"}
                  width={20}
                  height={20}
                  alt="Check Icon"
                  className="sm:w-6 sm:h-6"
                />
              <span className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] font-onest font-normal text-[#adadad]">Cloud-Native Solutions</span>
            </div>

            <div className="flex items-center gap-3">
               <Image
                  src={"/check-circle-1.svg"}
                  width={20}
                  height={20}
                  alt="Check Icon"
                  className="sm:w-6 sm:h-6"
                />
              <span className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] font-onest font-normal text-[#adadad]">Performance Optimization</span>
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
            <span className="text-xs text-gray-400 font-medium mb-1">03</span>
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
                  height: '180px',
                  background: '#666',
                  top: `calc(${scrollPosition * 100}% - ${scrollPosition * 180}px)`,
                  transition: isDragging ? 'none' : 'top 0.1s ease-out'
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-400 font-medium mt-1">04</span>
          </div>
        </div>
      </div>
    </section>
  );
}
