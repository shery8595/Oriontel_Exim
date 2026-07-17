import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'hero';
}

const LogoMark: React.FC = () => (
  <>
    <div className="brand-pill__icon-wrap">
      <img
        src="/logo-icon.png"
        alt=""
        className="brand-pill__icon"
        width={40}
        height={18}
      />
    </div>
    <div className="brand-pill__text">
      <span className="brand-pill__title">ORIONTEL</span>
      <span className="brand-pill__subtitle">Exim Limited</span>
    </div>
  </>
);

const Logo: React.FC<LogoProps> = ({ variant = 'navbar' }) => {
  if (variant === 'navbar' || variant === 'hero') {
    return (
      <div className="brand-pill">
        <LogoMark />
      </div>
    );
  }

  return (
    <img
      src="/logo.png"
      alt="ORIONTEL EXIM — Global Trade, Local Trust"
      className="h-14 w-auto block"
    />
  );
};

export default Logo;
