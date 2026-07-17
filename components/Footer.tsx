import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Operations', href: '#what-we-do' },
    { name: 'Industries', href: '#industries' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-navy pt-16 md:pt-20 pb-10 px-6 border-t border-white/5 text-brand-snow">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <div className="mb-6 inline-block rounded-lg bg-white px-3 py-2">
              <Logo variant="footer" />
            </div>
            <p className="text-brand-snow/60 leading-relaxed max-w-sm mb-6">
              SECP-verified import-export company delivering strategic global trade solutions with integrity, transparency, and operational excellence.
            </p>
            <div className="flex items-center gap-2 text-brand-teal text-sm font-bold">
              <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
              Available for global partnerships
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-snow/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-snow/70 hover:text-brand-teal transition-colors font-medium text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-snow/40 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-brand-snow/40 text-[10px] font-bold uppercase tracking-widest mb-1">Headquarters</p>
                <p className="text-brand-snow/70 leading-relaxed">Empire Plaza, Machine Mohallah No.3, Jhelum, Punjab, Pakistan</p>
              </li>
              <li>
                <p className="text-brand-snow/40 text-[10px] font-bold uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:oriontelexim@gmail.com" className="text-brand-teal hover:text-brand-snow transition-colors font-medium">
                  oriontelexim@gmail.com
                </a>
              </li>
              <li>
                <p className="text-brand-snow/40 text-[10px] font-bold uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+923002711881" className="text-brand-teal hover:text-brand-snow transition-colors font-medium">
                  +92 300 2711881
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-snow/30">
            &copy; 2025 ORIONTEL EXIM (SMC-Private) Ltd. All rights reserved.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-snow/30">
            SECP Verified &middot; Established 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
