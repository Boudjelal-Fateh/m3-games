import Image from "next/image";


export default function AiAgents() {
   return (
    <section id="ai" className="relative w-full overflow-x-hidden    mx-auto overflow-y-hidden xl:max-w-[1240px]   px-4 py-20 sm:px-6 lg:px-8 xl:px-[100px] lg:py-[140px] ">
      {/* Header */}
      <div className="mb-12 sm:mb-16 text-center flex flex-col items-center justify-center md:mb-[60px]">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Image
            src={"/technology-1.svg"}
            alt="Technology Icon"
            width={22}
            height={22}
          />
          <span className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] text-[#a594fd] font-onest -tracking-[0.24px]">
            Artificial Intelligence
          </span>
        </div>

        <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[52px] lg:leading-[64px] font-onest font-[500] -tracking-[1.76px] text-[#f1f1ef]">
          AI Agents. Real Productivity
        </h2>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8 items-start w-full justify-between">
        {/* Left - Image */}
        <div className="relative w-full lg:w-[600px] h-[280px] sm:h-[400px] lg:h-[568px] rounded-[20px] overflow-hidden">
          <Image
            src="/background.png"
            alt="AI Agents"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:justify-between h-auto lg:min-h-[568px] w-full lg:w-[570px] py-[20px]">
          {/* Main Text */}
          <div className="flex flex-col gap-4">
            <p className="text-[16px]  sm:text-[18px] lg:text-[23.5px] leading-[24px] sm:leading-[28px] lg:leading-[40px] font-onest font-[500] text-[#fff]">
              We build custom AI models fine-tuned on your specific data and use
              cases to deliver maximum accuracy and relevance. Our approach
              includes domain-specific training,{" "}
              <span className=" text-[#202020] ">
                {" "}
                Performance optimization and continuous learning to ensure
                models evolve with your business. Every solution is designed
                with privacy and security at its core, giving you reliable,
                high-performance AI you can trust.
              </span>
            </p>
          </div>

          {/* Floating Notes Card */}
          <div className="flex flex-col gap-[15.3px]   ">
            <div className="flex items-center  px-[6px] py-[3px] bg-[#1b1c1e] rounded-[6px] w-fit   gap-1">
              <Image
                src={"/SVG-4.svg"}
                width={16}
                height={16}
                alt="Floating Notes Icon"
              />
              <h4 className="text-[14px] sm:text-[16px] leading-[22.4px] tracking-[0.2px] font-onest font-[500] text-[#fff]">
                Floating Notes
              </h4>
            </div>
            <p className="text-[13px] sm:text-[14px] lg:leading-[22px] tracking-[0.2px] leading-[18px] sm:leading-[20px] font-onest font-normal text-[#9c9c9d]">
              A quick and lightweight way to capture ideas instantly,{" "}
              <br className=" hidden md:block" /> without interrupting your
              workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
