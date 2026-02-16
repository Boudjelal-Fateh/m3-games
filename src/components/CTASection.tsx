"use client";

import { Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  

  return (
    <section id="contact" className="relative py-8 md:py-12 px-4 md:px-8 min-h-[400px] md:min-h-[625px] flex items-center">
      <div
        className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center z-0 pointer-events-none w-[200%] sm:w-[150%] md:w-[1100px] h-[600px] md:h-[980.78px] -top-[100px] md:-top-[360px] bottom-auto md:-bottom-[141px]"
      >
        <Image
          src="/ContactBackground.png"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
      </div>
     
      <div className="relative max-w-4xl mx-auto text-center z-20 py-16 md:py-24 w-full">
        <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-onest font-[500] leading-tight md:leading-normal -tracking-[1.2px] md:-tracking-[1.76px] text-[#F1F1EF] mb-4 md:mb-6">
          Ready to Scale Smarter?
        </h2>
        
        <p className="text-[rgba(173,173,173,0.80)] text-center font-onest text-[16px] sm:text-[18px] font-[400] leading-[24px] md:leading-[26px] -tracking-[0.16px] max-w-full md:max-w-[558px] mx-auto mb-8 md:mb-10 px-2 md:px-0">
          Let&apos;s discuss how we can help you achieve your goals with our flexible, high-performance solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px] sm:gap-[16px] w-full sm:w-auto">
          <Link 
            href="#" 
            className="flex items-center justify-center w-full sm:w-auto h-[54px] px-[32px] py-[15px] gap-[8px] rounded-[10px] bg-[#E6E6E6] text-[#000] text-center font-onest text-[18px] font-[500] leading-[28px] tracking-[0.18px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] hover:bg-[#d4d4d4] transition-all"
          >
             <Image
          src="/directbox-default.svg"
          width={20}
          height={20}
          alt="Contact Background"
         
          className="object-cover"
          priority
        />
            Contact Us
          </Link>
          
          <Link 
            href="#" 
            className="flex w-full sm:w-[190px] h-[54px] px-[32px] py-[15px] justify-center items-center gap-[8px] md:gap-[5px] rounded-[10px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] text-[#FFF] text-center font-onest text-[18px] font-[500] leading-[28px] tracking-[0.18px] transition-all hover:bg-[rgba(255,255,255,0.20)]"
          >
            Learn more
            <Image
              src="/SVG.svg"
              alt="Arrow Icon"
              width={20}
              height={20}
              className="object-contain"
              priority
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
