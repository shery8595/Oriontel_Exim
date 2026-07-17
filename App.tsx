import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalReach from './components/GlobalReach';
import Section from './components/Section';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimateOnScroll from './components/AnimateOnScroll';
import { INDUSTRIES, OPERATIONS } from './constants';
import { ShieldIcon, GlobeIcon, HandshakeIcon, LocationIcon, EmailIcon, PhoneIcon, ProcessIcons } from './components/icons';

const CORE_VALUES = [
  {
    title: 'SECP Verified',
    desc: 'Operating with full transparency under the Companies Act 2017, ensuring legal excellence in every trade transaction.',
    Icon: ShieldIcon,
  },
  {
    title: 'Global Logistics',
    desc: 'Advanced import-export framework spanning five continents with optimized route management and compliance.',
    Icon: GlobeIcon,
  },
  {
    title: 'Integrity Driven',
    desc: 'Long-term partnerships rooted in absolute transparency and value-added commercial representation.',
    Icon: HandshakeIcon,
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Consultation', desc: 'Share your trade requirements and market objectives with our specialists.', Icon: ProcessIcons.Consult },
  { step: '02', title: 'Strategy', desc: 'We design a tailored import-export plan aligned with regulatory compliance.', Icon: ProcessIcons.Strategy },
  { step: '03', title: 'Execution', desc: 'End-to-end logistics coordination, documentation, and supply chain management.', Icon: ProcessIcons.Execute },
  { step: '04', title: 'Delivery', desc: 'Seamless fulfillment with ongoing support and transparent reporting.', Icon: ProcessIcons.Deliver },
];

const CONTACT_INFO = [
  {
    label: 'Pakistan Headquarters',
    val: 'Empire Plaza, Machine Mohallah No.3, Jhelum, Punjab',
    Icon: LocationIcon,
    href: undefined,
  },
  {
    label: 'Email Correspondence',
    val: 'oriontelexim@gmail.com',
    Icon: EmailIcon,
    href: 'mailto:oriontelexim@gmail.com',
  },
  {
    label: 'Corporate Hotline',
    val: '+92 300 2711881',
    Icon: PhoneIcon,
    href: 'tel:+923002711881',
  },
];

const ProcessSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="process" eyebrow="How We Work" title="Our Process" subtitle="A structured approach to international trade that minimizes risk and maximizes efficiency.">
      <div ref={ref} className="relative">
        <div className={`process-connector ${lineVisible ? 'is-visible' : ''}`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, idx) => (
            <AnimateOnScroll key={item.step} delay={idx * 120}>
              <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-gray-100 hover:border-brand-teal/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 group card-shine h-full">
                <span className="text-4xl font-black text-brand-navy/5 group-hover:text-brand-teal/20 transition-colors absolute top-4 right-6">{item.step}</span>
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-teal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-brand-navy bg-brand-snow selection:bg-brand-teal selection:text-brand-navy">
      <Navbar />
      <Hero />
      <GlobalReach />

      <Section id="about" eyebrow="Who We Are" title="Our Core Values" subtitle="Established June 2025 to redefine global supply chains through trust, compliance, and technology.">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {CORE_VALUES.map((item, idx) => (
            <AnimateOnScroll key={item.title} delay={idx * 120}>
              <div className="group p-8 md:p-10 rounded-[24px] md:rounded-[32px] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:border-brand-teal/20 transition-all duration-500 card-shine h-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 group-hover:text-brand-teal group-hover:scale-110 transition-all duration-500">
                  <item.Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      <ProcessSection />

      <Section id="what-we-do" eyebrow="Capabilities" title="Strategic Operations" dark subtitle="Comprehensive trading architecture designed for the modern global economy.">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {OPERATIONS.map((op, idx) => (
            <AnimateOnScroll key={op.category} delay={idx * 150} direction={idx === 0 ? 'left' : 'right'}>
              <div className="relative overflow-hidden bg-[#0a2033] border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] group hover:border-brand-teal/20 transition-colors h-full card-shine">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-3xl group-hover:bg-brand-teal/10 transition-all" />
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-navy rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-2xl border border-white/5 group-hover:scale-105 transition-transform">
                    {op.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-brand-snow tracking-tight uppercase">{op.category}</h3>
                </div>
                <ul className="grid gap-3 md:gap-4">
                  {op.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                      <span className="text-base text-brand-snow/70 group-hover/item:text-brand-teal transition-colors font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      <Section id="industries" eyebrow="Sectors" title="Market Sectors" subtitle="Broad licensing enabling ORIONTEL EXIM to deliver excellence across diverse world markets.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {INDUSTRIES.map((industry, idx) => (
            <AnimateOnScroll key={industry.title} delay={(idx % 4) * 80}>
              <div className="group p-6 md:p-7 rounded-2xl border border-gray-100 bg-white hover:bg-brand-navy hover:border-brand-navy hover:-translate-y-1 transition-all duration-500 card-shine h-full">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-red/20 group-hover:scale-110 transition-all">
                  {industry.icon}
                </div>
                <h3 className="font-black text-lg mb-2 group-hover:text-brand-snow transition-colors">{industry.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-brand-snow/60 transition-colors">{industry.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      <Section id="leadership" eyebrow="Leadership" title="Founder's Insight" dark>
        <AnimateOnScroll direction="scale">
          <div className="max-w-4xl mx-auto bg-white/[0.03] p-8 md:p-14 rounded-[30px] md:rounded-[50px] border border-white/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/10 blur-[80px]" />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center mx-auto mb-6 animate-glow">
                <span className="text-2xl font-black text-brand-teal">AR</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-1 text-brand-snow tracking-tight">Asif Rehman</h3>
              <p className="text-brand-teal font-bold text-xs mb-6 tracking-[0.2em] uppercase">Founder & Managing Director</p>
              <p className="text-lg md:text-xl text-brand-snow/80 leading-relaxed font-light italic text-balance max-w-3xl mx-auto">
                &ldquo;Our vision is to become the definitive hub for global trade, bridging the gap between innovation and traditional logistics through unmatched integrity.&rdquo;
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {['Global Trade Strategist', 'SECP Specialist', 'Supply Chain Expert'].map((tag) => (
                  <div key={tag} className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-snow/60 hover:bg-white/10 transition-colors">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Section>

      <FAQ />
      <CTABanner />

      <Section id="contact" eyebrow="Get Started" title="Get in Touch" subtitle="Connect with our global trade experts for a tailored consultation. We respond within 12 business hours.">
        <div className="grid lg:grid-cols-5 gap-10 md:gap-14 items-start">
          <AnimateOnScroll direction="left" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black mb-6 tracking-tight">Office & Contact</h3>
              <div className="space-y-5">
                {CONTACT_INFO.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex-shrink-0 flex items-center justify-center text-brand-navy group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors">
                      <info.Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-bold text-base text-brand-navy hover:text-brand-teal transition-colors leading-snug">
                          {info.val}
                        </a>
                      ) : (
                        <p className="font-bold text-base text-brand-navy leading-snug">{info.val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-navy text-brand-snow">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal mb-2">Business Hours</p>
              <p className="font-bold text-sm">Monday – Friday, 9:00 AM – 6:00 PM PKT</p>
              <p className="text-brand-snow/50 text-sm mt-1">Emergency trade inquiries handled within 12 hours</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={150} className="lg:col-span-3">
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default App;
