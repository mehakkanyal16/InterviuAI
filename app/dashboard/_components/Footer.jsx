"use client";
import { Bot, Sparkles } from "lucide-react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 border-t border-gray-700">
    <div className="container mx-auto px-6 max-w-7xl">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <Bot className="h-8 w-8 text-blue-400" />
            <Sparkles className="h-6 w-6 text-yellow-400 -ml-2" />
            <span className="text-2xl font-bold ml-2">InterviuAI</span>
          </div>
          <p className="text-gray-400 text-center md:text-left">
            AI-powered interview preparation platform
          </p>
        </div>
        
        {/* Rights Column - Centered */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-300 text-lg mb-2">
            © {new Date().getFullYear()} InterviuAI
          </p>
          <p className="text-gray-400 text-sm">
            All Rights Reserved
          </p>
        </div>
        
        {/* Social Links Column */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-gray-300 mb-3">Connect With Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.instagram.com/mehak_kanyal16/" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors">
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/in/mehak-kanyal-9b32ba261/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
              <AiFillLinkedin />
            </a>
            <a href="https://x.com/mehakkanyal16" target="_blank" className="text-gray-400 hover:text-gray-300 transition-colors">
              <FaXTwitter />
            </a>
            <a href="https://github.com/mehakkanyal16" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/@mehakkanyal8440" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Attribution */}
      <div className="border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          Designed and developed with ❤️ by {' '}
          <a 
            href="https://mehak-kanyal.vercel.app/" 
            target="_blank"
            rel="noopener"
            className="text-blue-300 hover:text-blue-200 transition-colors"
          >
            Mehak Kanyal
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;