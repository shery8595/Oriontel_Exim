import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import { INDUSTRIES, OPERATIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-brand-navy bg-brand-snow selection:bg-brand-teal selection:text-brand-navy">
      <Navbar />
      <Hero />

      {/* About Section */}
      <Section id="about" title="Our Core Values" subtitle="Established June 2025 to redefine global supply chains through trust and technology.">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-10">
          {[
            { title: "SECP Verified", desc: "Operating with full transparency under the Companies Act 2017, ensuring legal excellence in every trade.", icon: "📜" },
            { title: "Global Logistics", desc: "Advanced import-export framework spanning across five continents with optimized route management.", icon: "🌎" },
            { title: "Integrity Driven", desc: "Long-term partnerships rooted in absolute transparency and value-added commercial representation.", icon: "🤝" }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 md:p-10 rounded-[24px] md:rounded-[32px] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div className="text-4xl md:text-6xl mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-base md:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Strategic Operations Section */}
      <Section id="what-we-do" title="Strategic Operations" dark subtitle="Comprehensive trading architecture designed for the modern global economy.">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
          {OPERATIONS.map((op, idx) => (
            <div key={idx} className="relative overflow-hidden bg-[#0a2033] border border-white/5 p-8 md:p-12 rounded-[30px] md:rounded-[40px] group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-3xl group-hover:bg-brand-teal/10 transition-all"></div>
              <div className="flex items-center space-x-4 md:space-x-6 mb-8 md:mb-12">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-brand-navy rounded-2xl md:rounded-3xl flex items-center justify-center text-2xl md:text-4xl shadow-2xl">
                  {op.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-brand-snow tracking-tighter uppercase">{op.category}</h3>
              </div>
              <ul className="grid gap-4 md:gap-5">
                {op.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 md:space-x-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0"></div>
                    <span className="text-base md:text-xl text-brand-snow/70 group-hover/item:text-brand-teal transition-colors font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries Grid */}
      <Section id="industries" title="Market Sectors" subtitle="Broad licensing enabling ORIONTEL EXIM to deliver excellence across diverse world markets.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, idx) => (
            <div key={idx} className="group p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 bg-white hover:bg-brand-navy hover:border-brand-navy transition-all duration-500">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 group-hover:bg-brand-red transition-colors group-hover:rotate-12">
                {industry.icon}
              </div>
              <h3 className="font-black text-lg md:text-xl mb-2 md:mb-3 group-hover:text-brand-snow transition-colors">{industry.title}</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed group-hover:text-brand-snow/60 transition-colors">{industry.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership Profile */}
      <Section id="leadership" title="Founder's Insight" dark>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16 bg-white/[0.03] p-8 md:p-12 rounded-[30px] md:rounded-[50px] border border-white/5 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/10 blur-[80px]"></div>
          <div className="relative group flex-shrink-0 w-full md:w-auto flex justify-center">
             <div className="absolute inset-0 bg-brand-teal rounded-[40px] rotate-3 md:rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
             <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-[40px] overflow-hidden border-4 border-brand-navy shadow-2xl">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale" alt="Asif Rehman" />
             </div>
          </div>
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-black mb-1 text-brand-snow tracking-tight">Asif Rehman</h3>
            <p className="text-brand-teal font-bold text-xs md:text-sm mb-6 md:mb-8 tracking-[0.2em] uppercase">Founder & Managing Director</p>
            <div className="relative">
              <span className="hidden md:block text-6xl text-brand-red absolute -top-8 -left-6 opacity-40">“</span>
              <p className="text-xl md:text-2xl text-brand-snow/80 leading-relaxed font-light italic text-balance">
                Our vision is to become the definitive hub for global trade, bridging the gap between innovation and traditional logistics through unmatched integrity.
              </p>
            </div>
            <div className="mt-8 md:mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="px-4 py-2 bg-white/5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">Global Trade Strategist</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">SECP Specialist</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch" subtitle="Connect with our global trade experts for a tailored consultation.">
        <div className="grid lg:grid-cols-5 gap-10 md:gap-16 items-start">
          <div className="lg:col-span-2 space-y-8 md:space-y-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 tracking-tighter">Office Locations</h3>
              <div className="space-y-6 md:space-y-8">
                {[
                  { label: "Pakistan Headquarters", val: "Empire Plaza, Machine Mohallah No.3, Jhelum, Punjab", icon: "📍" },
                  { label: "Email Correspondence", val: "oriontelexim@gmail.com", icon: "📧" },
                  { label: "Corporate Hotline", val: "+92 300 2711881", icon: "📞" }
                ].map((info, idx) => (
                  <div key={idx} className="flex items-center space-x-4 md:space-x-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-gray-50 flex-shrink-0 flex items-center justify-center text-xl md:text-3xl shadow-sm">{info.icon}</div>
                    <div>
                      <p className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{info.label}</p>
                      <p className="font-bold text-base md:text-xl text-brand-navy leading-tight">{info.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form className="bg-white p-6 md:p-12 rounded-[30px] md:rounded-[50px] shadow-xl border border-gray-50 space-y-6 md:space-y-8" onSubmit={(e) => {
              e.preventDefault();
              alert('Inquiry received. We will respond within 12 hours.');
            }}>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-teal outline-none transition-all font-medium text-sm md:text-base" required />
                <input type="email" placeholder="Corporate Email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-teal outline-none transition-all font-medium text-sm md:text-base" required />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-teal outline-none transition-all font-medium text-sm md:text-base" required />
              <textarea placeholder="Trade or logistics requirements..." rows={4} className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-teal outline-none transition-all font-medium resize-none text-sm md:text-base" required></textarea>
              <button type="submit" className="w-full bg-brand-navy text-brand-snow py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-sm md:text-xl tracking-tight hover:bg-brand-red transition-all shadow-xl active:scale-[0.98]">
                Submit Strategic Inquiry
              </button>
            </form>
          </div>
        </div>
      </Section>

      <footer className="bg-brand-navy pt-20 pb-12 px-6 border-t border-white/5 text-brand-snow text-center lg:text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16 mb-16">
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">
                  <span className="text-brand-snow font-black text-xl italic">O</span>
                </div>
                <span className="text-brand-snow font-black text-2xl tracking-tighter">ORIONTEL</span>
              </div>
              <p className="text-lg md:text-xl text-brand-snow/60 mb-8 max-w-sm">
                Redefining the excellence of global trade with local trust assurance since 2025.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-brand-snow/30">
            <p>&copy; 2025 ORIONTEL EXIM (SMC-Private) Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;