export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Blur Effects */}
      <div 
        className="absolute top-20 left-20"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(147, 130, 255, 0.15) 0%, rgba(147, 130, 255, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        className="absolute bottom-40 right-40"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(147, 130, 255, 0.1) 0%, rgba(147, 130, 255, 0) 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Where flexibility meets<br />performance
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          Flexible hours, real-time tracking, guaranteed continuity. We<br />
          elevate your technology journey from start to finish.
        </p>

        {/* CTA Button */}
        <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors mb-4">
          Transform Your Business
        </button>

        {/* Small Text */}
        <p className="text-gray-400 text-sm">
          Smarter scaling for sustainable growth
        </p>
      </div>
    </section>
  );
}
