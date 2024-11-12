"use client";
import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react'; // Importing Lucide icons

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="header d-flex align-items-center fixed-top w-full bg-white shadow-md">
      <div className="container-fluid container-xl flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a href="index.html" className="logo flex items-center space-x-2">
          {/* <img src="assets/img/TGS.svg" alt="TGS" className="h-8" /> */}
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="navmenu hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#hero" className="text-gray-700 hover:text-blue-600">Home</a></li>
            <li><a href="#schedule" className="text-gray-700 hover:text-blue-600">Schedule</a></li>
            <li><a href="#venue" className="text-gray-700 hover:text-blue-600">Venue</a></li>
            <li><a href="#hotels" className="text-gray-700 hover:text-blue-600">Hotels</a></li>
            <li><a href="#gallery" className="text-gray-700 hover:text-blue-600">Gallery</a></li>
            {/* Dropdown */}
            <li className="relative">
              <button
                className="text-gray-700 hover:text-blue-600 flex items-center"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                Dropdown <ChevronDown className="h-5 w-5 ml-1" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Dropdown 1</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Dropdown 2</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Dropdown 3</a></li>
                </ul>
              )}
            </li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Call to Action Button */}
        <a href="#buy-tickets" className="cta-btn hidden sm:block text-white bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700">
          Buy Tickets
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="relative bg-white p-6 space-y-4">
            <ul className="space-y-4">
              <li><a href="#hero" className="text-gray-700 hover:text-blue-600 block">Home</a></li>
              <li><a href="#schedule" className="text-gray-700 hover:text-blue-600 block">Schedule</a></li>
              <li><a href="#venue" className="text-gray-700 hover:text-blue-600 block">Venue</a></li>
              <li><a href="#hotels" className="text-gray-700 hover:text-blue-600 block">Hotels</a></li>
              <li><a href="#gallery" className="text-gray-700 hover:text-blue-600 block">Gallery</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600 block">Contact</a></li>
            </ul>
            <a href="#buy-tickets" className="text-white bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 block text-center">
              Buy Tickets
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
