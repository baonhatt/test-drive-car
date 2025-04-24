import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${
      isScrolled ? "bg-white/95 shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={(e) => scrollToSection(e, 'hero')} className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              PORSCHE
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#models" onClick={(e) => scrollToSection(e, 'models')} className="text-sm font-medium text-gray-700 hover:text-[#d5001c] transition-colors relative group">
              Models
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d5001c] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-medium text-gray-700 hover:text-[#d5001c] transition-colors relative group">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d5001c] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-sm font-medium text-gray-700 hover:text-[#d5001c] transition-colors relative group">
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d5001c] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm font-medium text-gray-700 hover:text-[#d5001c] transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d5001c] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#d5001c] hover:bg-[#b5001a] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Test Drive
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#d5001c] focus:outline-none transition-colors"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden bg-white shadow-lg`}>
        <div className="px-4 pt-2 pb-4 space-y-4">
          <a href="#models" onClick={(e) => {
            scrollToSection(e, 'models');
            setIsMenuOpen(false);
          }} className="block text-sm font-medium text-gray-700 hover:text-[#d5001c] transition-colors py-2">
            Models
          </a>
          <a href="#features" onClick={(e) => {
            scrollToSection(e, 'features');
            setIsMenuOpen(false);
          }} className="block text-sm font-medium text-gray-700 hover:text-[#d5001c] transition-colors py-2">
            Features
          </a>
          <a href="#gallery" onClick={(e) => {
            scrollToSection(e, 'gallery');
            setIsMenuOpen(false);
          }} className="block text-sm font-medium text-gray-700 hover:text-[#d5001c] transition-colors py-2">
            Gallery
          </a>
          <a href="#contact" onClick={(e) => {
            scrollToSection(e, 'contact');
            setIsMenuOpen(false);
          }} className="block text-sm font-medium text-gray-700 hover:text-[#d5001c] transition-colors py-2">
            Contact
          </a>
          <a href="#contact" onClick={(e) => {
            scrollToSection(e, 'contact');
            setIsMenuOpen(false);
          }} className="inline-flex w-full justify-center items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#d5001c] hover:bg-[#b5001a] transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Test Drive
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
