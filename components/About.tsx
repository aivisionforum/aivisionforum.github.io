"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Heart, Globe, Sparkles, Award, TrendingUp, Users, Zap } from 'lucide-react';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  
  const values = [
    {
      icon: Target,
      title: "Human-Centered",
      description: "AI should augment and empower human capabilities, not replace them."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Open development and clear accountability in AI systems."
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Ensuring AI benefits are accessible to all of humanity."
    },
    {
      icon: Globe,
      title: "Collaboration",
      description: "Global cooperation across cultures, sectors, and disciplines."
    }
  ];

  const partners = [
    { name: "Linux Foundation", url: "https://www.linuxfoundation.org" },
    { name: "Eclipse Foundation", url: "https://www.eclipse.org" },
    { name: "BAAI", url: "https://www.baai.ac.cn/english.html" },
    { name: "Moxin", url: "https://www.moxin.app/" },
    { name: "PyTorch Foundation", url: "https://pytorch.org/foundation" },
    { name: "Hugging Face", url: "https://huggingface.co" },
    { name: "CSDN", url: "https://www.csdn.net" },
    { name: "WasmEdge", url: "https://wasmedge.org" }
  ];

  return (
    <section id="about" className="section bg-gradient-to-b from-gray-950 via-black to-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-futuristic opacity-5" />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 glass-dark rounded-full mb-8"
          >
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Global Consortium</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">STRATEGIC</span>{" "}
            <span className="gradient-text">VISION</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A global initiative uniting visionary leaders to architect 
            the future of human-centered artificial intelligence
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div 
            className="card-executive p-12 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: "linear-gradient(45deg, #00d4ff, #7c3aed, #00d4ff)",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-400/20 rounded-full mb-6"
              >
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Mission Critical</span>
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-6">EXECUTIVE MANDATE</h3>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                The AI Vision Forum serves as a strategic nexus for global dialogue on 
                artificial intelligence governance. Through high-level interdisciplinary 
                collaboration, we architect frameworks ensuring human agency, transparency, 
                and ethical imperatives remain central to AI&apos;s societal integration.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-12 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Strategic Pillars
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="card-executive p-6 h-full text-center">
                  <motion.div 
                    className="inline-flex p-4 rounded-full mb-4 border border-cyan-400/30 bg-cyan-400/10"
                    animate={hoveredValue === index ? {
                      rotate: [0, 360],
                    } : {}}
                    transition={{ duration: 2 }}
                  >
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-500">{value.description}</p>
                  
                  {/* Status indicator */}
                  <AnimatePresence>
                    {hoveredValue === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute -top-2 -right-2"
                      >
                        <span className="flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-12 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Strategic Intelligence
          </motion.h3>
          
          <div className="glass-dark rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  "Education must shift from knowledge transmission to fostering critical thinking, creativity, and emotional intelligence.",
                  "AI should complement and empower human creativity, not replace it.",
                  "Governance requires holistic risk management and international collaboration."
                ].map((insight, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <p className="text-gray-400">{insight}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  "Open source creates pathways for democratizing AI through inclusive participation.",
                  "Digital public goods in AI require multi-stakeholder investment and neutral institutions.",
                  "Human control and decision-making authority must be maintained in high-stakes AI applications."
                ].map((insight, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 3) * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-4 flex-shrink-0"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: (index + 3) * 0.3,
                      }}
                    />
                    <p className="text-gray-400">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Stats Bar */}
            <motion.div 
              className="mt-8 pt-8 border-t border-gray-800 flex justify-around"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-cyan-400"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                  95%
                </motion.div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Strategic Alignment</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-purple-400"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  20+
                </motion.div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Global Partners</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-green-400"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <Sparkles className="w-8 h-8 mx-auto mb-2" />
                  100%
                </motion.div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Open Source</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-12 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Strategic Alliance
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative"
              >
                <a 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 glass-dark rounded-full border border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <span className="text-gray-400 hover:text-white transition-colors font-medium">{partner.name}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;