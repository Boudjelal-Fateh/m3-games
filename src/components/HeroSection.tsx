import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen md:h-[110vh] lg:h-[120vh] xl:h-[130vh] flex bg-black items-center justify-center overflow-x-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/gradient_Hero.png"
              alt="Hero background"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-20 max-w-5xl w-full">
        {/* Main Heading */}
        <h1 
          className="text-center text-white mb-4 sm:mb-6 font-onest px-4"
          style={{
            fontSize: 'clamp(32px, 8vw, 66px)',
            fontWeight: 600,
            lineHeight: 'clamp(38px, 9vw, 74px)',
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.15)',
          }}
        >
          Where flexibility meets<br />performance
        </h1>

        {/* Subtitle */}
        <p 
          className="text-center mb-6 sm:mb-8 font-onest px-4 max-w-full   sm:max-w-[573px]"
          style={{
            color: '#B8C5D1',
            fontSize: 'clamp(16px, 4vw, 20px)',
            fontWeight: 400,
            lineHeight: 'clamp(24px, 5vw, 32px)',
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          Flexible hours, real-time tracking, guaranteed continuity.  <span className="hidden sm:inline"><br /></span> We elevate your technology journey from start to finish.
        </p>

        {/* CTA Button */}
       <Link href={"#contact"} > <button 
          className="text-gray-900 font-medium hover:bg-gray-100 transition-colors mb-3 sm:mb-4 w-auto mt-[30px] sm:mt-[40px] md:mt-[60px] cursor-pointer "
          style={{
            display: 'flex',
            height: '40px',
            minHeight: '36px',
            padding: '10px 14px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
            borderRadius: '8px',
            background: '#E6E6E6',
            boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.50), 0 0 14px 0 rgba(255, 255, 255, 0.19), 0 -1px 0.4px 0 rgba(0, 0, 0, 0.20) inset, 0 1px 0.4px 0 #FFF inset',
          }}
        >
          <span
            className="font-onest whitespace-nowrap"
            style={{
              color: '#2F3031',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '16px',
              letterSpacing: '0.2px',
            }}
          >
            Transform Your Business
          </span>
        </button></Link>

        {/* Small Text */}
        <p 
          className="text-center px-4 mt-[15.4px] "
          style={{
            color: '#9C9C9D',
            fontFamily: 'Roboto Mono',
            fontSize: 'clamp(10px, 2.5vw, 20px)',
            fontWeight: 400,
            lineHeight: '19.2px',
            letterSpacing: '0.2px',
          }}
        >
          Smarter scaling for sustainable growth
        </p>
      </div>
    </section>
  );
}

