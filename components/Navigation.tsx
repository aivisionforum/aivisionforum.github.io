"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INITIATIVES', href: '#working-groups' },
    { name: 'SUMMITS', href: '#events' },
    { name: 'RESOURCES', href: '#resources' },
    { name: 'CONSORTIUM', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Globe className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 w-8 h-8 bg-cyan-400 blur-xl opacity-50" />
            </div>
            <span className="text-xl font-bold tracking-wider">
              <span className="text-white">AI</span>
              <span className="gradient-text">VISION</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-xs font-medium tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 hover:w-full" />
              </Link>
            ))}
            <a
              href="https://github.com/aivisionforum"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-xs font-medium tracking-widest text-white border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300"
            >
              ACCESS PORTAL
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-800"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-medium tracking-widest text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://github.com/aivisionforum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                ACCESS PORTAL
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;