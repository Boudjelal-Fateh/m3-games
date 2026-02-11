"use client";

import Link from "next/link";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">M3 Games</h3>
            <p className="text-gray-400 text-sm">AI Excellence Through Technology</p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Future-Proof Solutions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Partnership Programs</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Speed & Precision</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Transparency</Link></li>
            </ul>
          </div>

          {/* Plans Column */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">Plans</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Integration</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Flex</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Performance</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="mailto:contact@m3.games" className="text-gray-400 hover:text-white text-sm transition-colors break-all">contact@m3.games</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">m3.games</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Conditions</Link>
          </div>
          <p className="text-gray-400 text-sm text-center sm:text-right">© 2024 M3 Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
