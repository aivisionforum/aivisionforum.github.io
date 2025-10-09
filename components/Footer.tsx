"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, Globe, Zap, Activity, ChevronRight, Sparkles } from 'lucide-react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Working Groups', href: '#working-groups', external: false },
      { name: 'Events', href: '#events', external: false },
      { name: 'Resources', href: '#resources', external: false },
      { name: 'About', href: '#about', external: false },
    ],
    'Community': [
      { name: 'GitHub', href: 'https://github.com/aivisionforum', external: true },
      { name: 'Mailing Lists', href: 'https://aivisionforum.groups.io', external: true },
      { name: 'Contact Us', href: 'mailto:contact@visionforum.ai', external: true },
    ],
    'Resources': [
      { name: 'Reports', href: '#resources', external: false },
      { name: 'Open Source Projects', href: 'https://github.com/aivisionforum', external: true },
      { name: 'Documentation', href: '#resources', external: false },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aivisionforum', label: 'GitHub' },
    { icon: Mail, href: 'https://aivisionforum.groups.io', label: 'Mailing List' },
    { icon: Globe, href: 'https://aivisionforum.org', label: 'Alt Website' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black border-t border-cyan-400/10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-futuristic opacity-5" />
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [-100, 100, -100],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container relative pt-20 pb-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Globe className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <h3 className="text-2xl font-bold">
                <span className="text-white">AI</span>
                <span className="gradient-text">VISION</span>
              </h3>
            </motion.div>
            
            <p className="text-gray-500 mb-6">
              Strategic nexus for global AI governance and human-centered innovation
            </p>
            
            {/* Live status indicator */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-2 glass-dark rounded-full mb-6"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(0, 212, 255, 0.2)",
                  "0 0 20px rgba(0, 212, 255, 0.4)",
                  "0 0 10px rgba(0, 212, 255, 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Activity className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-bold uppercase tracking-wider">Network Active</span>
            </motion.div>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-dark rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredLink(social.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <AnimatePresence>
                    {hoveredLink === social.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -30 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 rounded text-xs text-white whitespace-nowrap"
                      >
                        {social.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
            >
              <motion.h4 
                className="font-bold mb-6 text-white uppercase tracking-wider text-sm flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                {category}
              </motion.h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 1) * 0.1 + linkIndex * 0.05 }}
                  >
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-500 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Strategic Divider */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Network Stats */}
          <motion.div 
            className="glass-dark rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-cyan-400"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  5K+
                </motion.div>
                <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">Community Members</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-purple-400"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  45+
                </motion.div>
                <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">Cities</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-green-400"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  20+
                </motion.div>
                <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">Partners</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-yellow-400"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  27
                </motion.div>
                <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">Active Projects</div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright with animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Zap className="w-4 h-4 text-cyan-400" />
              </motion.div>
              <span className="text-gray-500 text-sm">
                © {currentYear} AI Vision Forum. Strategic Initiative.
              </span>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-6 text-sm"
            >
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Code of Conduct', href: '/code-of-conduct' }
              ].map((item, index) => (
                <motion.a 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-600 hover:text-cyan-400 transition-all duration-300 relative group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Alternative Domain Notice with animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-full">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-500">
                Alternative Access:{' '}
                <a
                  href="https://aivisionforum.org"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  aivisionforum.org
                </a>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;