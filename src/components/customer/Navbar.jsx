// src/components/customer/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = {
    navBg: isScrolled ? (darkMode ? 'bg-[#0c0c0c]/90' : 'bg-white/90') : 'bg-transparent',
    navText: isScrolled ? (darkMode ? 'text-stone-100' : 'text-stone-900') : 'text-white',
    navBorder: isScrolled ? (darkMode ? 'border-stone-800' : 'border-stone-200') : 'border-transparent',
    bg: darkMode ? 'bg-[#0c0c0c]' : 'bg-[#FAFAFA]',
    text: darkMode ? 'text-stone-200' : 'text-stone-900',
    mobileOverlayText: darkMode ? 'text-stone-200' : 'text-stone-900',
  };

  // Navigation Links Configuration (Mobile)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Venue', path: '/venue' }, // Added Venue here
    { name: 'Booking', path: '/booking' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b backdrop-blur-md py-4 ${theme.navBg} ${theme.navText} ${theme.navBorder}`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo - Links to Homepage */}
        <Link to="/" className="z-50 group">
          <h1 className="text-2xl md:text-3xl font-serif font-light tracking-[0.15em] uppercase cursor-pointer">
            Mapo's
          </h1>
        </Link>

        {/* Desktop Menu - Central Links */}
        <div className={`hidden md:flex items-center gap-12 text-xs tracking-[0.2em] uppercase font-medium ${!isScrolled ? 'text-white/90' : 'text-stone-500'}`}>
          
          <Link to="/menu" className="hover:text-[#C9A25D] transition-colors duration-300 relative group">
            Menu
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C9A25D] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* New Venue Link */}
          <Link to="/venue" className="hover:text-[#C9A25D] transition-colors duration-300 relative group">
            Venue
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C9A25D] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link to="/booking" className="hover:text-[#C9A25D] transition-colors duration-300 relative group">
            Booking
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C9A25D] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors duration-300 z-50 cursor-pointer ${
              isScrolled 
                ? (darkMode ? 'hover:bg-stone-800 text-white' : 'hover:bg-stone-100 text-stone-900') 
                : 'hover:bg-white/20 text-white'
            }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* CTA Button - Links to Booking */}
          <Link 
            to="/booking"
            className={`hidden md:block text-xs tracking-[0.2em] uppercase border-b pb-1 transition-colors ${
              isScrolled 
                ? (darkMode ? 'border-stone-100 hover:text-[#C9A25D]' : 'border-stone-900 hover:text-[#C9A25D]')
                : 'border-white hover:text-[#C9A25D] hover:border-[#C9A25D]'
            }`}
          >
            Inquire
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden z-50 p-1">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 ${theme.bg} flex flex-col items-center justify-center space-y-8 transition-transform duration-700 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`text-3xl font-serif font-light italic ${theme.mobileOverlayText} hover:text-[#C9A25D] transition-colors`} 
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;