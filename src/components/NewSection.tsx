export default function NewSection() {
  return (
    <section 
      className="flex flex-col items-center relative bg-[#F5F5F5] w-full px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-[100px] lg:py-[140px]"
    >
      {/* Purple Gradient Blur Background */}
      <div 
        className="hidden md:block"
        style={{
          width: '800px',
          height: '400px',
          position: 'absolute',
          left: '320px',
          top: '100px',
          bottom: '362px',
          right: '320px',
          borderRadius: '1000px',
          background: 'rgba(147, 130, 255, 0.06)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Title Section */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 relative z-10 max-w-4xl px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-100/50 backdrop-blur-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-purple-500 sm:w-4 sm:h-4">
            <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" />
          </svg>
          <span className="text-purple-600 font-medium text-xs sm:text-sm">WEB3 Gaming platform</span>
        </div>

        {/* Main Title */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
          style={{
            background: 'linear-gradient(to bottom, #1a1a1a 0%, #4a4a4a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Smarter Tools, Better Work
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
          Gaming sets the bar for technical excellence. By mastering real-time
          performance and complex systems, we're ready for any challenge.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full max-w-[1240px] relative z-10">
        {/* Card 1: Real-Time Performance */}
        <div 
          className="flex flex-col gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          style={{
            background: 'rgba(68, 68, 68, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="sm:w-6 sm:h-6">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Real-Time Performance</h3>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Games require sub-millisecond response times and perfect synchronization across multiple systems.
          </p>
        </div>

        {/* Card 2: Complex Architecture */}
        <div 
          className="flex flex-col gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          style={{
            background: 'rgba(68, 68, 68, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="sm:w-6 sm:h-6">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Complex Architecture</h3>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Multi-layer systems handling graphics, physics, networking, and user input simultaneously.
          </p>
        </div>

        {/* Card 3: Scalable Multiplayer */}
        <div 
          className="flex flex-col gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          style={{
            background: 'rgba(68, 68, 68, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="sm:w-6 sm:h-6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Scalable Multiplayer</h3>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Supporting thousands of concurrent users with perfect state consistency and minimal latency.
          </p>
        </div>

        {/* Card 4: Security & Anti-Cheat */}
        <div 
          className="flex flex-col gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          style={{
            background: 'rgba(68, 68, 68, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="sm:w-6 sm:h-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Security & Anti-Cheat</h3>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Advanced protection against exploitation while maintaining seamless user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
