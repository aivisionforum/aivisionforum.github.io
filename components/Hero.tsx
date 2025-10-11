"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Users, Code, TrendingUp, Zap, Activity } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const rotatingTexts = [
    "Architecting the Future of Human-AI Synergy",
    "Building Ethical AI Governance Frameworks",
    "Pioneering Open Source AI Innovation",
    "Shaping Tomorrow's Intelligence Landscape"
  ];

  useEffect(() => {
    setMounted(true);
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);

    return () => {
      clearInterval(statInterval);
      clearInterval(textInterval);
    };
  }, [rotatingTexts.length]);

  const stats = [
    { value: "20+", label: "Global Partners", icon: Globe },
    { value: "6", label: "Strategic Initiatives", icon: TrendingUp },
    { value: "100%", label: "Open Source Commitment", icon: Code }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section relative overflow-hidden bg-black">
      {/* Subtle Space Effects */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div className="space-overlay" />
        <div className="subtle-stars" />
        {/* Subtle Meteors */}
        {mounted && (
          <>
            <div className="subtle-meteor" style={{ top: '-10%', left: '-10%', animationDelay: '0s', animationDuration: '15s' }} />
            <div className="subtle-meteor" style={{ top: '-15%', left: '20%', animationDelay: '5s', animationDuration: '18s' }} />
            <div className="subtle-meteor" style={{ top: '5%', left: '-15%', animationDelay: '10s', animationDuration: '20s' }} />
          </>
        )}
      </div>
      
      {/* Animated Background Layers */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        {/* Data visualization overlay */}
        <div className="absolute inset-0 data-grid opacity-20" />
        
        {/* Animated gradient orbs */}
        {mounted && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Particle field */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: '0.5px',
                  height: '0.5px',
                  backgroundColor: 'rgba(0, 212, 255, 0.6)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        )}
        
        {/* Strategic gradient overlay */}
        <div className="absolute inset-0 gradient-vision" />
      </div>

      {/* Matrix effect (subtle) */}
      <div className="matrix-bg" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Executive Badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 mt-4 sm:mt-0"
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 glass-dark rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 212, 255, 0.3)",
                  "0 0 40px rgba(0, 212, 255, 0.5)",
                  "0 0 20px rgba(0, 212, 255, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Strategic Vision 2025-2030</span>
            </motion.div>
          </motion.div>

          {/* Animated Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0, 212, 255, 0.5)",
                  "0 0 40px rgba(0, 212, 255, 0.8)",
                  "0 0 20px rgba(0, 212, 255, 0.5)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.span 
                className="block text-white"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                AI VISION
              </motion.span>
              <motion.span 
                className="block gradient-text"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                FORUM
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Rotating Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-1"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-gray-400 font-light mb-4"
              >
                {rotatingTexts[textIndex]}
              </motion.p>
            </AnimatePresence>
            <motion.div 
              className="glow-line w-32 mx-0 mb-6"
              animate={{
                width: ["32px", "128px", "32px"],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <p className="text-lg text-gray-500 max-w-3xl text-executive mb-12">
              A global consortium of visionary leaders, researchers, and technologists 
              collaborating to establish governance frameworks, ethical standards, and 
              strategic initiatives for the responsible advancement of artificial intelligence.
            </p>
          </motion.div>

          {/* Enhanced Live Stats Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <motion.div 
              className="inline-block p-6 glass-dark rounded-lg cyber-dots"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      opacity: currentStat === index ? 1 : 0.3,
                      scale: currentStat === index ? 1.1 : 0.95,
                      y: currentStat === index ? -5 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={currentStat === index ? {
                        rotate: [0, 360],
                      } : {}}
                      transition={{ duration: 1 }}
                    >
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                    </motion.div>
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTAs with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <motion.a
              href="#working-groups"
              className="btn-strategic group inline-flex items-center justify-center min-h-[52px]"
              style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-4 h-4 mr-2" />
              Access Strategic Initiatives
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="https://github.com/aivisionforum"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center justify-center min-h-[52px]"
              style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Technical Framework
            </motion.a>
          </motion.div>

          {/* Animated Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 glass-dark rounded-xl p-6"
          >
            <div className="flex flex-wrap gap-8 justify-center">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="min-w-[140px]"
              >
                <span className="text-gray-600 text-xs uppercase tracking-wider block">Status</span>
                <div className="flex items-center gap-2 mt-1">
                  <Activity className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-bold">OPERATIONAL</span>
                </div>
              </motion.div>
              <div className="min-w-[140px]">
                <span className="text-gray-600 text-xs uppercase tracking-wider block">Next Summit</span>
                <div className="text-white text-sm mt-1 font-semibold">Paris 2026</div>
              </div>
              <div className="min-w-[140px]">
                <span className="text-gray-600 text-xs uppercase tracking-wider block">Active Projects</span>
                <motion.div 
                  className="text-cyan-400 text-sm mt-1 font-bold"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  27 Initiatives
                </motion.div>
              </div>
              {/* Live collaboration counter */}
              <div className="min-w-[140px]">
                <span className="text-gray-600 text-xs uppercase tracking-wider block">Global Network</span>
                <div className="flex items-center gap-2 mt-1">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-sm font-bold">
                    {mounted && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={Math.floor(Date.now() / 3000)}
                      >
                        {(1247 + Math.floor(Math.random() * 50)).toLocaleString()}
                      </motion.span>
                    )}
                  </span>
                  <span className="text-gray-600 text-xs ml-1">ACTIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;