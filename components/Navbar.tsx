import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById('features');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-kortex-black/80 backdrop-blur-md border-b border-kortex-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif-display font-medium tracking-wide text-white">HelpMe!</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            onClick={scrollToFeatures}
            className="text-sm text-kortex-muted hover:text-white transition-colors"
          >
            Features
          </a>
          <button className="px-5 py-2 text-sm bg-white text-black hover:bg-gray-200 transition-colors rounded-full font-medium">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-kortex-black border-b border-kortex-border p-6 flex flex-col gap-4 md:hidden animate-fade-in">
          <a 
            href="#features" 
            onClick={scrollToFeatures}
            className="text-lg text-kortex-muted hover:text-white"
          >
            Features
          </a>
          <button className="w-full py-3 text-sm bg-white text-black rounded-full font-medium">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;