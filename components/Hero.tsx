"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Users, Code, TrendingUp, Zap, Activity } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const rotatingTexts = [
    "Where humanistic research meets AI strategy",
    "A Paris forum for responsible AI in practice",
    "Open collaboration across governance, culture, and technology",
    "Connecting researchers, strategists, and practitioners"
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
    { value: "20+", label: "Partner Institutions", icon: Globe },
    { value: "6", label: "Forum Themes", icon: TrendingUp },
    { value: "100%", label: "Open Collaboration", icon: Code }
  ];

  return (
    <section id="home" className="hero-section flex items-center justify-center section relative overflow-hidden">
      {/* Impressionist SVG background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            {/* Painterly turbulence filter */}
            <filter id="impressionist" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.008" numOctaves="4" seed="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="120" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="28" result="soft" />
              <feColorMatrix in="soft" type="saturate" values="1.3" result="vivid" />
            </filter>
            {/* Dappled light filter */}
            <filter id="dappled" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.025 0.02" numOctaves="3" seed="7" result="lightNoise" />
              <feGaussianBlur in="lightNoise" stdDeviation="18" result="softLight" />
              <feColorMatrix in="softLight" type="luminanceToAlpha" result="lightMap" />
              <feComponentTransfer in="lightMap" result="lightMask">
                <feFuncA type="linear" slope="0.35" intercept="0.05" />
              </feComponentTransfer>
            </filter>
            {/* Brushstroke texture */}
            <filter id="brushstroke" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="turbulence" baseFrequency="0.04 0.008" numOctaves="2" seed="12" result="strokes" />
              <feGaussianBlur in="strokes" stdDeviation="3" result="softStrokes" />
              <feColorMatrix in="softStrokes" type="luminanceToAlpha" result="strokeAlpha" />
              <feComponentTransfer in="strokeAlpha" result="strokeMask">
                <feFuncA type="linear" slope="0.08" intercept="0" />
              </feComponentTransfer>
            </filter>
          </defs>

          {/* Base warm canvas */}
          <rect width="100%" height="100%" fill="#faf5ee" />

          {/* Impressionist color washes — soft blobs like brushstrokes of light */}
          <g filter="url(#impressionist)">
            {/* Rose / peach — upper left, like morning light */}
            <ellipse cx="18%" cy="22%" rx="320" ry="260" fill="rgba(215, 148, 148, 0.45)" />
            <ellipse cx="12%" cy="35%" rx="200" ry="180" fill="rgba(232, 180, 165, 0.35)" />
            {/* Lavender / blue — upper right, like sky reflection */}
            <ellipse cx="78%" cy="18%" rx="360" ry="280" fill="rgba(140, 170, 205, 0.4)" />
            <ellipse cx="85%" cy="30%" rx="220" ry="200" fill="rgba(165, 185, 215, 0.3)" />
            {/* Sage green — lower center, like garden foliage */}
            <ellipse cx="50%" cy="78%" rx="380" ry="240" fill="rgba(155, 185, 140, 0.35)" />
            <ellipse cx="40%" cy="85%" rx="200" ry="160" fill="rgba(175, 200, 155, 0.25)" />
            {/* Golden ochre — center, like sunlight on stone */}
            <ellipse cx="55%" cy="45%" rx="300" ry="220" fill="rgba(220, 190, 140, 0.3)" />
            <ellipse cx="35%" cy="55%" rx="260" ry="200" fill="rgba(235, 205, 160, 0.22)" />
            {/* Cool violet accent — scattered */}
            <ellipse cx="68%" cy="60%" rx="180" ry="150" fill="rgba(180, 155, 195, 0.2)" />
            <ellipse cx="25%" cy="70%" rx="160" ry="140" fill="rgba(190, 165, 200, 0.18)" />
          </g>

          {/* Dappled light overlay — like sunlight through leaves */}
          <rect width="100%" height="100%" fill="rgba(255, 252, 240, 0.6)" filter="url(#dappled)" />

          {/* Subtle brushstroke texture overlay */}
          <rect width="100%" height="100%" fill="rgba(120, 100, 80, 0.5)" filter="url(#brushstroke)" />
        </svg>

        {/* Soft vignette to keep text area clear */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(253, 250, 243, 0.5) 0%, transparent 70%)",
        }} />
      </div>

      {/* Floating light motes — like dust in afternoon sun */}
      {mounted && (
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          {[...Array(8)].map((_, i) => {
            const colors = [
              'rgba(215, 165, 130, 0.5)',
              'rgba(140, 175, 210, 0.45)',
              'rgba(165, 190, 145, 0.4)',
              'rgba(210, 150, 155, 0.45)',
              'rgba(200, 185, 140, 0.4)',
              'rgba(175, 155, 195, 0.35)',
              'rgba(225, 195, 155, 0.45)',
              'rgba(150, 180, 200, 0.4)',
            ];
            const sizes = [60, 80, 50, 70, 55, 65, 75, 45];
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: sizes[i],
                  height: sizes[i],
                  background: `radial-gradient(circle, ${colors[i]} 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                  left: `${10 + (i * 12) % 80}%`,
                  top: `${15 + (i * 17) % 65}%`,
                }}
                animate={{
                  x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
                  y: [0, 20 * (i % 3 === 0 ? -1 : 1), 0],
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              />
            );
          })}
        </div>
      )}

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
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
                  "0 8px 24px rgba(93, 132, 168, 0.16)",
                  "0 16px 36px rgba(202, 124, 129, 0.18)",
                  "0 8px 24px rgba(93, 132, 168, 0.16)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="text-sm font-medium text-gray-300 uppercase tracking-[0.22em]">Paris in May • AI Strategy Forum</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-[8.25rem] font-bold mb-6 leading-none"
              animate={{
                textShadow: [
                  "0 10px 22px rgba(93, 132, 168, 0.1)",
                  "0 18px 36px rgba(202, 124, 129, 0.12)",
                  "0 10px 22px rgba(93, 132, 168, 0.1)",
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
                className="text-2xl md:text-3xl text-gray-400 font-light mb-4 max-w-4xl mx-auto"
              >
                {rotatingTexts[textIndex]}
              </motion.p>
            </AnimatePresence>
            <motion.div 
              className="glow-line w-32 mx-auto mb-6"
              animate={{
                width: ["32px", "128px", "32px"],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <p className="text-lg text-gray-500 max-w-3xl mx-auto text-executive mb-12">
              A spring gathering in Paris for humanistic researchers, AI strategists, policymakers, and practitioners
              to shape responsible innovation through open collaboration, thoughtful governance, and practical action.
            </p>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <motion.a
              href="#working-groups"
              className="btn-strategic group inline-flex items-center justify-center min-h-[52px]"
              style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-4 h-4 mr-2" />
              Explore Forum Themes
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
              View Open Projects
            </motion.a>
          </motion.div>

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
                <span className="text-gray-600 text-xs uppercase tracking-wider block">Current Focus</span>
                <div className="flex items-center gap-2 mt-1">
                  <Activity className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-bold">PARIS CURATION</span>
                </div>
              </motion.div>
              <div className="min-w-[140px]">
                <span className="text-gray-600 text-xs uppercase tracking-wider block">Forum Edition</span>
                <div className="text-white text-sm mt-1 font-semibold">Paris • May 2026</div>
              </div>
              <div className="min-w-[140px]">
                <span className="text-gray-600 text-xs uppercase tracking-wider block">Conversation Tracks</span>
                <motion.div 
                  className="text-cyan-400 text-sm mt-1 font-bold"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Research • Policy • Practice
                </motion.div>
              </div>
              <div className="min-w-[140px]">
                <span className="text-gray-600 text-xs uppercase tracking-wider block">Community Pulse</span>
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
                  <span className="text-gray-600 text-xs ml-1">IN DIALOGUE</span>
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
