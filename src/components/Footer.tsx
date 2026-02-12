"use client";

import Link from "next/link";

// Data for footer sections
const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Future-Proof Solutions", href: "#" },
      { label: "Partnership Programs", href: "#" },
      { label: "Speed & Precision", href: "#" },
      { label: "Transparency", href: "#" },
    ],
  },
  {
    title: "Plans",
    links: [
      { label: "Integration", href: "#" },
      { label: "Flex", href: "#" },
      { label: "Performance", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "contact@m3.games", href: "#" },
      { label: "m3.games", href: "#" },
    ],
  },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer 
      className="flex flex-col items-center self-stretch border-t border-white/10 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-[100px] py-1"
      style={{
        background: 'radial-gradient(100% 50% at 50% 0%, rgba(147, 130, 255, 0.10) 0%, rgba(147, 130, 255, 0.00) 100%), #060606'
      }}
    >
      <div className="w-full max-w-7xl py-12 sm:py-14 md:py-16">
        {/* Footer Content Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 lg:gap-20 mb-12 sm:mb-14 md:mb-16 w-full">
          {/* Brand Column */}
          <div className="lg:max-w-sm">
            <h3 className="font-onest text-[30px] font-semibold text-[#E6E6E6] leading-normal tracking-[0.267px] mb-2">M3 Games</h3>
            <p className="text-[#EFEDFD]/70 text-[14px] font-normal leading-[20px] font-onest">AI Excellence Through Technology</p>
          </div>

          {/* Dynamic Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-24 w-full">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-[#F4F0FF] font-onest text-[16px] font-medium leading-[20px] mb-3 sm:mb-4">{section.title}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href} 
                        className="text-[#EFEDFD]/60 font-onest text-[15px] font-normal leading-[20px] hover:text-white transition-colors break-words"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
            {bottomLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="text-[#EFEDFD]/60 font-onest text-[14px] font-normal leading-[20px] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-[#EFEDFD]/60 font-onest text-[14px] font-normal leading-[20px] text-center sm:text-right">© 2024 M3 Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
