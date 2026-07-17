import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll direction="scale">
          <div className="relative rounded-[28px] md:rounded-[40px] overflow-hidden bg-brand-navy px-8 py-12 md:px-16 md:py-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#022b4d] to-brand-navy" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 blur-[80px] rounded-full animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/10 blur-[60px] rounded-full" />

            <div className="relative z-10">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] text-brand-teal mb-4 animate-fade-in-up">
                Ready to Trade?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-brand-snow tracking-tighter mb-4 md:mb-6 text-balance">
                Start Your Global Trade Journey Today
              </h2>
              <p className="text-brand-snow/60 text-sm md:text-lg max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
                From first consultation to final delivery — ORIONTEL EXIM handles compliance, logistics, and execution with precision.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-red text-brand-snow px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-xl shadow-brand-red/30"
                >
                  Request Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-brand-snow px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
                >
                  View Our Process
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTABanner;
