import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-md p-1.5">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-700">Maverika</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#use-cases" className="text-gray-700 hover:text-green-600 transition-colors">Use Cases</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Testimonials</a>
            <a href="#contact" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#use-cases" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">Use Cases</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;