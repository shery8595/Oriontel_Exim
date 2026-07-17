import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const FAQS = [
  {
    q: 'What industries does ORIONTEL EXIM operate in?',
    a: 'We are licensed across eight major sectors including agriculture, textiles, construction materials, chemicals, electronics, healthcare, automotive, and IT & telecom — enabling diversified import-export operations.',
  },
  {
    q: 'Is ORIONTEL EXIM SECP registered?',
    a: 'Yes. ORIONTEL EXIM (SMC-Private) Ltd. is registered with the Securities and Exchange Commission of Pakistan under the Companies Act 2017, ensuring full legal compliance for every transaction.',
  },
  {
    q: 'How quickly will I receive a response to my inquiry?',
    a: 'We respond to all business inquiries within 12 business hours. Emergency trade consultations are prioritized for active shipment and compliance matters.',
  },
  {
    q: 'Do you handle both import and export operations?',
    a: 'Absolutely. We provide end-to-end import-export services including documentation, logistics coordination, commercial representation, and cross-border strategic partnerships.',
  },
  {
    q: 'Which international markets do you serve?',
    a: 'Our trade network spans five continents with active corridors in the UAE, China, UK, Germany, Saudi Arabia, Turkey, Malaysia, USA, and Qatar — with expanding routes across Asia and Europe.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-28 px-6 bg-brand-snow relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-red mb-4">
            Questions
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter mb-4 text-brand-navy">
            Trade FAQ<span className="text-brand-red">.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light">
            Quick answers about partnering with ORIONTEL EXIM.
          </p>
        </AnimateOnScroll>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimateOnScroll key={faq.q} delay={idx * 80}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-brand-teal/30 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]'
                      : 'border-gray-100 bg-white hover:border-brand-teal/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-black text-sm md:text-base text-brand-navy tracking-tight pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-brand-teal text-brand-navy rotate-45' : 'bg-gray-50 text-brand-navy'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`faq-answer grid transition-all duration-300 ease-out ${
                      isOpen ? 'faq-answer--open' : 'faq-answer--closed'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-gray-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
