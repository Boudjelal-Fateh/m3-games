import { Sparkles } from "lucide-react";
import Image from "next/image";

export function Productivity() {
  return (
    <section className="relative w-full bg-black overflow-x-hidden bg-transparent px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:py-[140px] -mt-64 md:-mt-80 lg:-mt-96 xl:-mt-[28rem] z-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-14 md:mb-16 text-center flex flex-col items-center justify-center">
          <div className="mb-3 sm:mb-4 md:mb-[22px] flex items-center justify-center gap-2">
            <Image src="/Frame.svg" width={16} height={16} alt="Sparkles Icon" className="sm:w-[18px] sm:h-[18px]" />
            <span 
              className="font-onest"
              style={{
                color: '#A594FD',
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '24px',
                letterSpacing: '-0.24px',
              }}
            >
              Productivity
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-[10px] px-4">
            <h2 
              className="mb-2 sm:mb-[10px] font-onest text-center"
              style={{
                color: '#F1F1EF',
                fontSize: '50px',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '-1.76px',
              }}
            >
              Smarter Tools, Better Work
            </h2>
            <p 
              className="text-center font-onest"
              style={{
                color: 'rgba(173, 173, 173, 0.80)',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '26px',
                letterSpacing: '-0.16px',
                width: '550px',
              }}
            >
              Automate tasks, collaborate seamlessly, and optimize operations to
              focus on what truly matters.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-[30px] items-start justify-items-center">
          {/* Item 1 - Collaborative Tools */}
          <div className="flex flex-col w-full max-w-[393px] h-auto md:h-[435px] bg-[#101010]/80 items-center rounded-[20px]">
            <div className="relative mb-4 sm:mb-6 w-full h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-lg">
              <Image
                src="/asset-1.png"
                alt="Collaborative Tools"
                width={385}
                height={59}
                className="absolute top-[45px] right-[5px]"
              />
              <Image
                src="/asset.png"
                alt="Collaborative Tools"
                width={385}
                height={80}
                style={{ filter: "grayscale(100%)" }}
                className="absolute top-[104px] right-[5px]"
              />
              <Image
                src="/asset-2.png"
                alt="Collaborative Tools"
                width={385}
                height={80}
                className="absolute top-[184px] right-[5px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-[38.5px] pb-8 sm:pb-10 md:pb-[50px] gap-2 sm:gap-[10px]">
              <h3 className="font-onest text-[#f1f1ef] text-center text-xl sm:text-2xl md:text-[26px] font-[500] leading-tight sm:leading-[28px]">
                Collaborative Tools
              </h3>
              <p className="font-onest text-sm sm:text-base md:text-[16px] leading-6 sm:leading-[24px] font-normal -tracking-[0.16px] text-[#adadad]/80 max-w-[287px] text-center">
                Boost teamwork and collaboration with our tools
              </p>
            </div>
          </div>

          {/* Item 2 - Automate Tedious Tasks */}
          <div className="flex flex-col w-full max-w-[393px] h-auto md:h-[435px] bg-[#101010]/80 items-center rounded-[20px]">
            <div className="mb-4 sm:mb-6 w-full h-[220px] sm:h-[245px] md:h-[269px] overflow-hidden flex flex-col items-center justify-center">
              <div className="px-4 sm:px-6 md:px-[17.9px] max-w-[350px]">
                <p className="font-onest text-2xl sm:text-3xl md:text-[42px] leading-9 sm:leading-10 md:leading-[44px] font-[500] text-[#3e3e3e] text-center">
                  Less manual work,
                  <span className="font-onest text-2xl sm:text-3xl md:text-[44px] font-[500] leading-9 sm:leading-10 md:leading-[44px] bg-gradient-to-r from-[#A594FD] to-[#EB8BF7] bg-clip-text text-transparent">
                    {" "}
                    But more
                  </span>{" "}
                  impact{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-[38.5px] pb-8 sm:pb-10 md:pb-[50px] gap-2 sm:gap-[10px]">
              <h3 className="font-onest text-[#f1f1ef] text-center text-xl sm:text-2xl md:text-[26px] font-[500] leading-tight sm:leading-[28px]">
                Automate Tedious Tasks
              </h3>
              <p className="font-onest text-sm sm:text-base md:text-[16px] leading-6 sm:leading-[24px] font-normal -tracking-[0.16px] text-[#adadad]/80 max-w-[287px] text-center">
                Streamline operations with intelligent automation
              </p>
            </div>
          </div>

          {/* Item 3 - Transform Operations */}
          <div className="flex flex-col w-full max-w-[393px] h-auto md:h-[435px] bg-[#101010]/80 items-center rounded-[20px]">
            <div className="mb-4 sm:mb-6 w-full h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-lg flex items-center justify-center">
              <div className="w-full max-w-[350px] xl:max-w-[393px] h-[200px] sm:h-[215px] md:h-[227px] relative flex items-center justify-center">
                {/* Left Image - easy-02 */}
                <Image
                  src="/easy-02.png.png"
                  alt="Transform Operations"
                  width={174}
                  height={155}
                  className="xl:hidden absolute z-10"
                  style={{
                    left: '10%',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                />
                <Image
                  src="/easy-02.png.png"
                  alt="Transform Operations"
                  width={174}
                  height={155}
                  className="hidden xl:block absolute"
                  style={{
                    left: '15%',
                    top: '55.5px'
                  }}
                />
                
                {/* Right Image - Frame-1 */}
                <Image
                  src="/Frame-1.png"
                  alt="Transform Operations"
                  width={174}
                  height={155}
                  className="xl:hidden absolute z-20"
                  style={{
                    right: '10%',
                    top: '20%'
                  }}
                />
                <Image
                  src="/Frame-1.png"
                  alt="Transform Operations"
                  width={174}
                  height={155}
                  className="hidden xl:block absolute"
                  style={{
                    right: '15%',
                    top: '15.9px'
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-[38.5px] pb-8 sm:pb-10 md:pb-[50px] gap-2 sm:gap-[10px]">
              <h3 className="font-onest text-[#f1f1ef] text-center text-xl sm:text-2xl md:text-[26px] font-[500] leading-tight sm:leading-[28px]">
                Transform Operations
              </h3>
              <p className="font-onest text-sm sm:text-base md:text-[16px] leading-6 sm:leading-[24px] font-normal -tracking-[0.16px] text-[#adadad]/80 max-w-[287px] text-center">
                Revolutionize your business operations for peak efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
