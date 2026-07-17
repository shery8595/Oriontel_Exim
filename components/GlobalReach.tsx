import React, { useRef, useEffect, useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { useCountUp } from '../hooks/useCountUp';

const MARKETS = [
  'Pakistan', 'UAE', 'China', 'United Kingdom', 'Germany',
  'Saudi Arabia', 'Turkey', 'Malaysia', 'USA', 'Qatar',
];

const METRICS = [
  { value: 5, suffix: '+', label: 'Continents Served', sub: 'Active trade corridors' },
  { value: 8, suffix: '+', label: 'Industry Sectors', sub: 'Licensed categories' },
  { value: 12, suffix: 'hr', label: 'Response Time', sub: 'Business inquiries' },
  { value: 100, suffix: '%', label: 'SECP Compliant', sub: 'Regulatory adherence' },
];

const MetricCard: React.FC<{
  value: number;
  suffix: string;
  label: string;
  sub: string;
  active: boolean;
  delay: number;
}> = ({ value, suffix, label, sub, active, delay }) => {
  const count = useCountUp(value, active);

  return (
    <AnimateOnScroll delay={delay} className="h-full">
      <div className="group h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/10 hover:border-brand-teal/30 transition-all duration-500 hover:bg-white/[0.06]">
        <p className="text-4xl md:text-5xl font-black text-brand-teal tracking-tighter mb-2">
          {count}{suffix}
        </p>
        <p className="font-black text-brand-snow text-sm md:text-base tracking-tight mb-1">{label}</p>
        <p className="text-brand-snow/50 text-xs md:text-sm">{sub}</p>
      </div>
    </AnimateOnScroll>
  );
};

const GlobalReach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [metricsActive, setMetricsActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="global-reach"
      className="py-16 md:py-28 px-6 bg-brand-navy text-brand-snow relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-red/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-teal mb-4">
            Global Footprint
          </p>
          <h2 className="text-3xl md:text-6xl font-display font-black tracking-tighter mb-4">
            Markets We Bridge<span className="text-brand-red">.</span>
          </h2>
          <p className="text-base md:text-xl font-light text-brand-snow/60 max-w-2xl mx-auto leading-relaxed">
            Connecting Pakistani enterprise to high-growth corridors across Asia, Europe, and the Middle East.
          </p>
        </AnimateOnScroll>

        <div className="marquee-mask mb-12 md:mb-16">
          <div className="marquee-track">
            {[...MARKETS, ...MARKETS].map((market, idx) => (
              <span
                key={`${market}-${idx}`}
                className="marquee-item"
              >
                {market}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {METRICS.map((metric, idx) => (
            <MetricCard
              key={metric.label}
              {...metric}
              active={metricsActive}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
