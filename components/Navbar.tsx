import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Operations', href: '#what-we-do' },
    { name: 'Industries', href: '#industries' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 py-4 md:py-5 ${isScrolled ? 'glass-nav' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/50">
          <Logo variant="navbar" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-snow hover:text-brand-teal transition-all font-bold text-xs uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="bg-brand-snow text-brand-navy px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-teal transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20">
            Partner With Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-snow p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="space-y-1.5 w-6">
            <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-brand-navy z-[-1] transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-snow font-black text-3xl hover:text-brand-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-red text-brand-snow w-full text-center py-5 rounded-2xl font-black text-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            GET STARTED
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;