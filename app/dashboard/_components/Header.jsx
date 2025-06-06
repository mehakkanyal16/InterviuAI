"use client";
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Bot, Sparkles, Menu, X } from "lucide-react";

function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLandingPage = path === '/';

  // Handle smooth scrolling for anchor links
  const handleScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between bg-white backdrop-blur-sm shadow-sm px-4 sm:px-6 py-4 sm:py-5 h-auto border-b border-gray-100 relative z-20">
      {/* Logo with responsive sizing */}
      <Link 
        href="/" 
        className="flex items-center gap-2 group"
      >
        <div className="relative">
          <Bot className="h-8 w-8 sm:h-9 sm:w-9 text-indigo-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 absolute -right-2 -bottom-1 transition-all duration-500 group-hover:rotate-45" />
        </div>
        <span className="text-2xl sm:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Interviu
          </span>
          <span className="text-purple-600 drop-shadow-[0_2px_1px_rgba(124,58,237,0.3)]">
            AI
          </span>
          <span className="text-indigo-600">.</span>
        </span>
      </Link>

      {/* Hamburger menu for mobile (only on landing page) */}
      {isLandingPage && (
        <button 
          className="sm:hidden text-gray-700 hover:text-indigo-500 z-30"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      )}

      {/* Navigation - Desktop and Mobile (only on landing page) */}
      {isLandingPage && (
        <nav className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          sm:flex flex-col sm:flex-row items-center absolute sm:static 
          top  top-full left-0 w-full sm:w-auto 
          bg-white sm:bg-transparent 
          backdrop-blur-md sm:backdrop-blur-none 
          sm:gap-10 px-6 py-4 sm:p-0 border-b sm:border-0 border-gray-100
          transition-all duration-300 ease-in-out z-10
          ${isMenuOpen ? 'opacity-100 translate-y-0 shadow-xl' : 'opacity-0 -translate-y-2 sm:opacity-100 sm:translate-y-0 sm:shadow-none'}
        `}>
          {[
            { name: "Dashboard", href: "/dashboard" },
            { name: "Features", href: "#features" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "Pricing", href: "#pricing" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`
                text-base sm:text-lg font-medium relative py-3 sm:py-0 w-full sm:w-auto text-center
                ${
                  path === item.href 
                    ? 'text-indigo-600' 
                    : 'text-gray-800 hover:text-indigo-500'
                }
              `}
            >
              <span className="relative">
                {item.name}
                <span className={`
                  absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 
                  transition-all duration-300 
                  ${path === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}></span>
              </span>
            </Link>
          ))}
        </nav>
      )}

      {/* Right side: Get Started button and User Button (Get Started only on landing page) */}
      <div className="hidden sm:flex items-center gap-4">
        {isLandingPage && (
          <Link
            href="/dashboard"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all duration-300"
          >
            Get Started
          </Link>
        )}
        <div className="transition-all hover:scale-110 hover:shadow-lg rounded-full">
          <UserButton appearance={{
            elements: {
              avatarBox: "h-10 w-10 border-2 border-transparent hover:border-indigo-300 transition-all duration-300"
            }
          }} />
        </div>
      </div>
    </header>
  );
}

export default Header;