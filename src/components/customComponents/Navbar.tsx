"use client";

import React, { useState, useEffect, useRef } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a `utils` file with `cn` from shadcn
import Image from "next/image";
import LOGO from "../../app/public/assets/Asset 9@33.33x.png"; // Adjust path if necessary

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-black transition-colors duration-300 ",
        scrolled ? "bg-black " : "bg-black"
      )}
    >
      <div className="container  mx-auto flex bg-black bg-opacity-100  items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <Image
            src={LOGO}
            alt="Logo"
            width={112} // You can set the width
            height={64} // You can set the height
            className="object-contain" // Ensures the logo doesn't get distorted
          /> 
          {/* <h2 className="text-white font-bold">Winter Program</h2> */}
        </a>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="text-white hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#schedule" className="text-white hover:text-blue-600">
                Agenda
              </a>
            </li>
            <li>
              <a href="#venue" className="text-white hover:text-blue-600">
                Cities on Tour
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-white hover:text-blue-600">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-blue-600">
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-blue-600">
                Inquire Now
              </a>
            </li>
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
        <a
          href="#buy-tickets"
          className="hidden lg:block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Participate Now
        </a>
      </div>

{/* Mobile Menu */}
{isMobileMenuOpen && (
  <div
    ref={menuRef}
    className="lg:hidden absolute right-4 top-full bg-white w-64 shadow-md z-40"
  >
    <div className="p-4">
      <ul className="space-y-4">
        <li>
          <a
            href="#hero"
            className="block hover:text-blue-600"
            onClick={closeMobileMenu}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#schedule"
            className="block hover:text-blue-600"
            onClick={closeMobileMenu}
          >
            Schedule
          </a>
        </li>
        <li>
          <a
            href="#venue"
            className="block hover:text-blue-600"
            onClick={closeMobileMenu}
          >
            Venue
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="block hover:text-blue-600"
            onClick={closeMobileMenu}
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block hover:text-blue-600"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
        </li>
      </ul>
      <a
        href="#buy-tickets"
        className="block mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-center"
        onClick={closeMobileMenu}
      >
        Participate now
      </a>
    </div>
  </div>
)}

    </header>
  );
};

export default Navbar;
