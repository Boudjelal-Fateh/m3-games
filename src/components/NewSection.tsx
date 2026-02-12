import Image from "next/image";

export default function NewSection() {
   const features = [
    {
      icon: "/SVG-7.svg",
      title: "Real-Time Performance",
      description:
        "Games require sub-millisecond response times and perfect synchronization across multiple systems.",
    },
    {
      icon: "/SVG-3.svg",
      title: "Complex Architecture",
      description:
        "Multi-layer systems handling graphics, physics, networking, and user input simultaneously.",
    },
    {
      icon: "/SVG-5.svg",
      title: "Scalable Multiplayer",
      description:
        "Supporting thousands of concurrent users with perfect state consistency and minimal latency.",
    },
    {
      icon: "/SVG-2.svg",
      title: "Security & Anti-Cheat",
      description:
        "Advanced protection against exploitation while maintaining seamless user experience.",
    },
  ];

  return (
    <section id="web3" className="relative w-full overflow-x-hidden  px-4 py-20 sm:px-6 lg:px-8 xl:py-[140px] xl:px-[100px]">
      {/* Blurry Background Effect */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: '800px',
          maxWidth: '90vw', // Responsive width
          height: '400px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '100px',
          borderRadius: '1000px',
          background: 'rgba(147, 130, 255, 0.06)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      
      {/* Header */}
      <div className="relative z-10 mb-12 sm:mb-16 text-center   flex flex-col items-center justify-center max-w-[594px] mx-auto md:mb-[60px]">
        <div className="mb-4 flex items-center justify-center gap-[5px] ">
          <Image
            src={"/lock.svg"}
            width={22}
            height={22}
            alt="Game Controller Icon"
          />
          <span className="text-[18px] sm:text-[20px] lg:text-[24px] leading-[24px] text-[#a594fd] font-onest -tracking-[0.24px]">
            WEB3 Gaming platform
          </span>
        </div>

        <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[52px] lg:leading-[64px] mb-[10px] font-onest font-[500] -tracking-[1.76px] text-[#f1f1ef]">
          Smarter Tools, Better Work
        </h2>

        <p className="text-center max-w-[594px] leading-[22px] sm:leading-[26px] text-[16px] sm:text-[16px] lg:text-[18px] font-normal font-onest -tracking-[0.16px] text-[#adadad]/80 mt-[10px] ">
          Gaming sets the bar for technical excellence. By mastering real-time{" "}
          <br className=" hidden md:block" />
          performance and complex systems, we're ready for any challenge.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full  max-w-[1100px] mx-auto px-4 md:px-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 sm:p-8 border border-[#ffffff]/10 hover:border-[#ffffff]/20 transition-all duration-300"
            style={{
              borderRadius: '20px',
              background: 'rgba(16, 16, 16, 0.80)',
            }}
          >
            {/* Icon */}
            <Image
              src={feature.icon}
              width={34}
              height={34}
              alt={feature.title}
              className="flex-shrink-0 mt-1"
            />

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] sm:text-[20px] lg:text-[26px] font-onest font-[500] text-[#f1f1ef] leading-[26px] sm:leading-[28px] lg:leading-[32px]">
                {feature.title}
              </h3>
              <p className="text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] font-onest font-normal text-[#adadad]/60">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
