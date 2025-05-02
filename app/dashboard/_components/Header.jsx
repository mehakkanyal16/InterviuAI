"use client";
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Bot, Sparkles } from "lucide-react";

function Header() {
  const path = usePathname();

  // Handle smooth scrolling for anchor links
  const handleScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-sm px-6 py-5 h-22 border-b border-gray-100">
      {/* Logo with impressive text effect */}
      <Link 
        href="/" 
        className="flex items-center gap-2 group"
      >
        <div className="relative">
          <Bot className="h-9 w-9 text-indigo-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
          <Sparkles className="h-6 w-6 text-yellow-400 absolute -right-2 -bottom-1 transition-all duration-500 group-hover:rotate-45" />
        </div>
        <span className="text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Interviu
          </span>
          <span className="text-purple-600 drop-shadow-[0_2px_1px_rgba(124,58,237,0.3)]">
            AI
          </span>
          <span className="text-indigo-600">.</span>
        </span>
      </Link>

      {/* Navigation with impressive hover and smooth scrolling */}
      <nav className="flex items-center gap-10">
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
            className={`text-lg font-medium relative
              ${
                path === item.href 
                  ? 'text-indigo-600' 
                  : 'text-gray-700 hover:text-indigo-500'
              }`}
          >
            <span className="relative">
              {item.name}
              <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 transition-all duration-300 ${
                path === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </span>
          </Link>
        ))}
      </nav>

      {/* User Button with impressive effect */}
      <div className="transition-all hover:scale-110 hover:shadow-lg rounded-full">
        <UserButton appearance={{
          elements: {
            avatarBox: "h-10 w-10 border-2 border-transparent hover:border-indigo-300 transition-all duration-300"
          }
        }} />
      </div>
    </header>
  );
}

export default Header;