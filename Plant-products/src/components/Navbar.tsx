import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(20,29,12,0.95)' : 'rgba(20,29,12,0.4)',
          backdropFilter: 'blur(14px)',
          borderBottom: scrolled ? '1px solid rgba(200,184,74,0.1)' : 'none',
          padding: scrolled ? '12px 0' : '18px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4C10 4 6 8 6 13C6 17 9 20 12 21V24H16V21C19 20 22 17 22 13C22 8 18 4 14 4Z" fill="#c8b84a"/>
                <path d="M10 22H18V26H10V22Z" fill="#8a9a6a"/>
                <circle cx="14" cy="12" r="3" fill="#1a2410"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#e8ead0', fontWeight: 700, letterSpacing: '0.5px' }}>
              FloraVision<span style={{ color: '#c8b84a' }}>.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="nav-link">Home</a>
            <div className="flex items-center gap-1 cursor-pointer group">
              <a href="#plants" className="nav-link">Plants Type</a>
              <svg className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text)' }} viewBox="0 0 12 12" fill="currentColor">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <a href="#more" className="nav-link">More</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="cart-btn" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            <button className="cart-btn" aria-label="Cart">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </button>
            <button className="cart-btn" aria-label="Menu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden cart-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="absolute top-6 right-6 cart-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="flex flex-col gap-6">
          {['Home', 'Plants Type', 'More', 'Contact'].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem',
                color: 'var(--text)',
                textDecoration: 'none',
                opacity: 0.9,
                borderBottom: '1px solid rgba(200,184,74,0.1)',
                paddingBottom: '16px',
                transition: 'color 0.2s',
              }}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <button className="cart-btn" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            <button className="cart-btn" aria-label="Cart">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}