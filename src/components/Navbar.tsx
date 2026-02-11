"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Navigation links array - Easy to modify or add new links
const navLinks = [
  { id: "services", label: "Services", href: "#services" },
  { id: "web3", label: "Web3", href: "#web3" },
  { id: "ai", label: "AI", href: "#ai" },
  { id: "plans", label: "Plans", href: "#plans" },
  { id: "contact", label: "Contact", href: "#contact" }
];

// NavLink Component for Desktop
interface NavLinkProps {
  link: typeof navLinks[0];
  isActive: boolean;
  onClick: (id: string) => void;
}

function NavLink({ link, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      href={link.href}
      onClick={() => onClick(link.id)}
      className={`transition-colors relative ${
        isActive
          ? "text-white font-medium"
          : "text-gray-400 hover:text-gray-300"
      }`}
    >
      {link.label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></span>
      )}
    </Link>
  );
}

// MobileNavLink Component
function MobileNavLink({ link, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      href={link.href}
      onClick={() => onClick(link.id)}
      className={`block transition-colors py-2 relative ${
        isActive
          ? "text-white font-medium"
          : "text-gray-400 hover:text-gray-300"
      }`}
    >
      {link.label}
      {isActive && (
        <span className="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("services");

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-white text-xl font-bold cursor-pointer">M3 Games</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                link={link}
                isActive={activeLink === link.id}
                onClick={handleLinkClick}
              />
            ))}
          </div>

          {/* Right Side - Language & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
              <Image 
                src="/united-states.svg" 
                alt="US Flag" 
                width={20} 
                height={20}
                className="rounded-sm"
              />
              <span className="text-sm">EN</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-400">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* CTA Button */}
            <button className="px-6 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors text-sm">
              Get Started Today
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          style={{ top: '64px' }}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden border-t fixed left-0 right-0 z-50"
          style={{
            top: '64px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            background: 'linear-gradient(94deg, rgba(17, 18, 20, 0.30) 4.87%, rgba(12, 13, 15, 0.36) 75.88%)',
            backdropFilter: 'blur(12.5px)',
          }}
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.id}
                link={link}
                isActive={activeLink === link.id}
                onClick={handleLinkClick}
              />
            ))}

            {/* Mobile Language Selector */}
            <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors py-2 w-full">
              <Image 
                src="/united-states.svg" 
                alt="US Flag" 
                width={20} 
                height={20}
                className="rounded-sm"
              />
              <span className="text-sm">EN</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-400">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Mobile CTA Button */}
            <button className="w-full px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors text-sm mt-4">
              Get Started Today
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
