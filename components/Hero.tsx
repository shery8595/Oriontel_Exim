import React from 'react';
import Globe from './Globe';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden hero-gradient text-brand-snow pt-20 md:pt-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-brand-teal opacity-[0.05] blur-[100px] md:blur-[150px] animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -left-24 w-full md:w-1/2 h-1/2 bg-brand-red opacity-[0.03] blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 text-center lg:text-left">
        {/* Left Column - Content */}
        <div className="relative flex flex-col items-center lg:items-start">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-4 py-2 rounded-full mb-6 md:mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-brand-teal rounded-full animate-ping"></span>
            <span className="text-brand-teal text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Global Trade Portal 2025</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-black leading-[1.1] md:leading-[1] mb-6 md:mb-8 text-balance">
            <div className="reveal-container">
              <span className="reveal-item animate-reveal delay-1">Trading</span>
            </div>{" "}
            <div className="reveal-container">
              <span className="reveal-item animate-reveal delay-2">with</span>
            </div><br className="hidden md:block" />
            <div className="reveal-container">
              <span className="reveal-item animate-reveal delay-3 text-brand-teal">Global</span>
            </div>{" "}
            <div className="reveal-container">
              <span className="reveal-item animate-reveal delay-4">Precision.</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-2xl opacity-70 mb-8 md:mb-10 max-w-xl leading-relaxed font-light animate-fade-in-up delay-4">
            Strategic import-export solutions registered with SECP. Bridging vital markets through integrity and real-time logistics innovation.
          </p>

          {/* Mobile Globe */}
          <div className="lg:hidden w-full max-w-[320px] h-[320px] mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-brand-teal/5 blur-[40px] rounded-full scale-90"></div>
            <Globe className="w-full h-full relative z-10" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-5 w-full animate-fade-in-up delay-5 mb-10 md:mb-12">
            <a href="#contact" className="bg-brand-red px-10 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-opacity-90 hover:scale-[1.05] active:scale-[0.98] transition-all flex items-center justify-center space-x-3 shadow-2xl shadow-brand-red/40 group">
              <span>Connect Globally</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#about" className="group bg-white/5 border border-white/10 px-10 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
              <span>Our Vision</span>
              <span className="opacity-40 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Stats bar */}
          <div className="pt-8 md:pt-10 border-t border-white/10 grid grid-cols-3 gap-6 md:gap-8 w-full max-w-md opacity-40 animate-fade-in-up delay-5">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl md:text-3xl font-black tracking-tighter">2025</span>
              <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-black">Est. Year</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl md:text-3xl font-black tracking-tighter">SECP</span>
              <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-black">Governance</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl md:text-3xl font-black tracking-tighter">98%</span>
              <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-black">Success</span>
            </div>
          </div>
        </div>

        {/* Right Column - Desktop Globe */}
        <div className="hidden lg:flex relative items-center justify-center h-[600px] w-full">
          <div className="absolute inset-0 bg-brand-teal/5 blur-[60px] rounded-full scale-75 animate-pulse-slow"></div>
          <div className="relative w-full h-full max-w-[600px] max-h-[600px] flex items-center justify-center">
            <Globe className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
