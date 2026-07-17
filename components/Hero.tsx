import React, { useRef, useEffect, useState } from 'react';
import Globe from './Globe';
import Logo from './Logo';
import { useCountUp } from '../hooks/useCountUp';

const HeroStat: React.FC<{ value: number; suffix: string; label: string; active: boolean }> = ({
  value,
  suffix,
  label,
  active,
}) => {
  const count = useCountUp(value, active, 1600);

  return (
    <div className="flex flex-col items-center lg:items-start">
      <span className="text-2xl md:text-3xl font-black tracking-tighter text-brand-teal">
        {suffix === 'hr' ? `${count}${suffix}` : `${count}${suffix}`}
      </span>
      <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-black text-white/50">{label}</span>
    </div>
  );
};

const Hero: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden hero-gradient text-brand-snow pt-20 md:pt-24">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(65,234,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(65,234,212,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-brand-teal opacity-[0.05] blur-[100px] md:blur-[150px] animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -left-24 w-full md:w-1/2 h-1/2 bg-brand-red opacity-[0.03] blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 text-center lg:text-left">
        <div className="relative flex flex-col items-center lg:items-start">
          <div className="brand-pills mb-6 md:mb-8 animate-fade-in-up">
            <div className="lg:hidden">
              <Logo variant="hero" />
            </div>
            <div className="brand-pill">
              <span className="w-2 h-2 bg-brand-teal rounded-full animate-ping shrink-0"></span>
              <span className="brand-pill__badge-text">SECP Verified &middot; Est. 2025</span>
            </div>
          </div>

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

          <p className="text-base md:text-2xl opacity-70 mb-8 md:mb-10 max-w-xl leading-relaxed font-light animate-fade-in-up delay-4">
            Strategic import-export solutions registered with SECP. Bridging vital markets through integrity and real-time logistics innovation.
          </p>

          <div className="lg:hidden w-full max-w-[320px] h-[320px] mx-auto mb-8 relative animate-float">
            <div className="absolute inset-0 bg-brand-teal/5 blur-[40px] rounded-full scale-90"></div>
            <Globe className="w-full h-full relative z-10" />
          </div>

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

          <div ref={statsRef} className="pt-8 md:pt-10 border-t border-white/10 grid grid-cols-3 gap-6 md:gap-8 w-full max-w-md animate-fade-in-up delay-5">
            <HeroStat value={8} suffix="+" label="Sectors" active={statsActive} />
            <div className="flex flex-col items-center lg:items-start">
              <span className={`text-2xl md:text-3xl font-black tracking-tighter text-brand-teal transition-opacity duration-700 ${statsActive ? 'opacity-100' : 'opacity-0'}`}>
                SECP
              </span>
              <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-black text-white/50">Registered</span>
            </div>
            <HeroStat value={12} suffix="hr" label="Response" active={statsActive} />
          </div>
        </div>

        <div className="hidden lg:flex relative items-center justify-center h-[600px] w-full">
          <div className="absolute inset-0 bg-brand-teal/5 blur-[60px] rounded-full scale-75 animate-glow"></div>
          <div className="relative w-full h-full max-w-[600px] max-h-[600px] flex items-center justify-center animate-float">
            <Globe className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
