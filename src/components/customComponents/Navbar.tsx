


"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, List } from 'lucide-react'; // Importing icons from lucide-react, you can replace with other icons if needed

// Utility function to conditionally combine classes (similar to `shadcn-utils`' `cn` function)
function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setDeepDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // UseEffect to add/remove scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the threshold for when you want to change the color
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "header sticky top-0 w-full z-50 transition-colors duration-300",
        scrolled ? "bg-[#000820] bg-opacity-50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="index.html" className="flex items-center space-x-2">
          <img src="assets/img/TGS.svg" alt="tgs" className="h-8" />
        </a>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-4">
            <li><a href="#hero" className="text-white hover:text-blue-600">Home</a></li>
            <li><a href="#schedule" className="text-white hover:text-blue-600">Schedule</a></li>
            <li><a href="#venue" className="text-white hover:text-blue-600">Venue</a></li>
            <li><a href="#hotels" className="text-white hover:text-blue-600">Hotels</a></li>
            <li><a href="#gallery" className="text-white hover:text-blue-600">Gallery</a></li>
            <li className="relative">
              <button
                className="text-white hover:text-blue-600 flex items-center space-x-1"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span>Dropdown</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-lg">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dropdown 1</a></li>
                  <li className="relative">
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                      onClick={() => setDeepDropdownOpen(!isDeepDropdownOpen)}
                    >
                      Deep Dropdown <ChevronDown className="inline h-4 w-4 ml-1" />
                    </button>
                    {isDeepDropdownOpen && (
                      <ul className="absolute left-full top-0 mt-0 ml-1 bg-white shadow-md rounded-lg">
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 1</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 2</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 3</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 4</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 5</a></li>
                      </ul>
                    )}
                  </li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dropdown 2</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dropdown 3</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dropdown 4</a></li>
                </ul>
              )}
            </li>
            <li><a href="#contact" className="text-white hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <List className="h-6 w-6" />
        </button>

        {/* Call to Action Button */}
        <a href="#buy-tickets" className="hidden lg:block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          Buy Tickets
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40">
          <div className="relative bg-white p-6">
            <ul className="space-y-4">
              <li><a href="#hero" className="block hover:text-blue-600">Home</a></li>
              <li><a href="#schedule" className="block hover:text-blue-600">Schedule</a></li>
              <li><a href="#venue" className="block hover:text-blue-600">Venue</a></li>
              <li><a href="#hotels" className="block hover:text-blue-600">Hotels</a></li>
              <li><a href="#gallery" className="block hover:text-blue-600">Gallery</a></li>
              <li><a href="#contact" className="block hover:text-blue-600">Contact</a></li>
            </ul>
            <a href="#buy-tickets" className="block mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-center">
              Buy Tickets
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
