import React, { useState, useEffect } from 'react';

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
    { name: 'Operations', href: '#what-we-do' },
    { name: 'Industries', href: '#industries' },
    { name: 'Founder', href: '#leadership' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group relative">
          <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center transform group-hover:rotate-[15deg] transition-all shadow-xl shadow-brand-red/20">
            <span className="text-brand-snow font-black text-2xl italic">O</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-snow group-hover:text-brand-teal transition-colors font-black text-2xl tracking-tighter leading-none">ORIONTEL</span>
            <span className="text-brand-snow text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">Exim Limited</span>
          </div>
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
