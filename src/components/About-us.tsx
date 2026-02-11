export default function AboutUs() {
  return (
    <section className="flex flex-col items-center px-5 py-12 sm:px-10 sm:py-16 md:px-[100px] md:py-[140px] bg-transparent">
      <p 
        className="text-white w-full max-w-full lg:max-w-[1240px] font-onest font-bold text-center"
        style={{
          fontSize: 'clamp(24px, 6vw, 50px)',
          lineHeight: 'clamp(32px, 7vw, 70px)',
          letterSpacing: '-0.5px',
        }}
      >
        We design solutions that turn ambition into reality, addressing today's
        needs while preparing your business for tomorrow's challenges.
        <span 
          className="text-[#202020] font-onest"
          style={{
            fontSize: 'clamp(24px, 6vw, 50px)',
            lineHeight: 'clamp(32px, 7vw, 70px)',
          }}
        >
          {" "}Built on trust and driven by results, we partner with you to deliver
          measurable impact through innovation, reliability, and long-term
          commitment.
        </span>
      </p>
    </section>
  );
}
