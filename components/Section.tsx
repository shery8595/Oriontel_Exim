import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, dark }) => {
  return (
    <section id={id} className={`py-16 md:py-32 px-6 relative overflow-hidden ${dark ? 'bg-brand-navy text-brand-snow' : 'bg-brand-snow text-brand-navy'}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24 animate-fade-in-up">
          <h2 className={`text-3xl md:text-7xl font-display font-black mb-4 md:mb-6 tracking-tighter ${dark ? 'text-brand-snow' : 'text-brand-navy'}`}>
            {title}<span className="text-brand-red">.</span>
          </h2>
          {subtitle && <p className="text-base md:text-2xl font-light opacity-60 max-w-3xl mx-auto leading-relaxed text-balance px-4">{subtitle}</p>}
          <div className="w-12 md:w-20 h-1.5 md:h-2 bg-brand-teal mx-auto mt-6 md:mt-10 rounded-full shadow-lg shadow-brand-teal/20"></div>
        </div>
        <div className="relative">
          {children}
        </div>
      </div>
      
      {/* Decorative vertical line hidden on mobile for cleaner look */}
      <div className={`hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 opacity-10 ${dark ? 'bg-white' : 'bg-brand-navy'}`}></div>
    </section>
  );
};

export default Section;
