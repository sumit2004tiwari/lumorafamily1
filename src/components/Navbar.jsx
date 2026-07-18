import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || location.pathname !== '/'
            ? 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-950/50 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition-transform">
              🌿
            </div>
            <span className="font-serif font-semibold text-xl text-white tracking-wide">
              LumoraFamily
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    location.pathname === link.href ? 'text-white' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-forest-400 transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full bg-bark-700 text-white text-sm font-semibold hover:bg-bark-600 transition-colors duration-200 shadow-md"
            >
              Book a Call
            </Link>
          </div>

          {/* Hamburger */}
          <button
            id="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-forest-950/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-serif hover:text-forest-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3 rounded-full bg-bark-700 text-white font-semibold text-lg hover:bg-bark-600 transition-colors"
        >
          Book a Free Call
        </Link>
      </div>
    </>
  );
}
