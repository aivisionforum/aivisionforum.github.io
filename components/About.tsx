"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Heart, Globe, Sparkles, Award, TrendingUp, Users } from 'lucide-react';

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
    <section id="about" className="section relative overflow-hidden">
      {/* Impressionist background */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <filter id="about-impressionist" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.014 0.01" numOctaves="4" seed="8" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="26" result="soft" />
              <feColorMatrix in="soft" type="saturate" values="1.2" />
            </filter>
            <filter id="about-dappled" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.022 0.018" numOctaves="3" seed="14" result="lightNoise" />
              <feGaussianBlur in="lightNoise" stdDeviation="16" result="softLight" />
              <feColorMatrix in="softLight" type="luminanceToAlpha" result="lightMap" />
              <feComponentTransfer in="lightMap">
                <feFuncA type="linear" slope="0.3" intercept="0.04" />
              </feComponentTransfer>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#faf5ee" />
          <g filter="url(#about-impressionist)">
            {/* Rose and peach — warmth */}
            <ellipse cx="20%" cy="15%" rx="300" ry="220" fill="rgba(220, 155, 150, 0.38)" />
            <ellipse cx="75%" cy="25%" rx="280" ry="200" fill="rgba(225, 185, 165, 0.3)" />
            {/* Lavender blue — coolness */}
            <ellipse cx="85%" cy="50%" rx="320" ry="260" fill="rgba(145, 175, 210, 0.32)" />
            <ellipse cx="10%" cy="60%" rx="260" ry="200" fill="rgba(170, 190, 220, 0.25)" />
            {/* Sage green */}
            <ellipse cx="55%" cy="80%" rx="350" ry="220" fill="rgba(160, 190, 145, 0.3)" />
            {/* Golden light */}
            <ellipse cx="45%" cy="40%" rx="280" ry="200" fill="rgba(225, 200, 150, 0.26)" />
            {/* Violet accent */}
            <ellipse cx="65%" cy="65%" rx="200" ry="160" fill="rgba(185, 160, 200, 0.2)" />
          </g>
          <rect width="100%" height="100%" fill="rgba(255, 252, 242, 0.5)" filter="url(#about-dappled)" />
        </svg>
      </div>
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 glass-dark rounded-full mb-8"
          >
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300 uppercase section-label">Human-Centered Alliance</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Why This</span>{" "}
            <span className="gradient-text">Forum</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-left text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mt-10"
          >
            <p>
              The AI Vision Forum is a global dialogue and research platform dedicated to advancing
              open-source AI as a public good in support of the United Nations Sustainable Development Goals.
              Its mission is to strengthen international collaboration around open-source AI, foster
              evidence-based research, and explore how AI can enhance human society.
            </p>
            <p>
              By convening a diverse ecosystem of researchers, policymakers, international agencies, open-source
              communities (foundations, projects, developers, and users), and industry partners, the Forum
              creates a trusted space for multi-stakeholder strategy exchange and joint exploration.
            </p>
            <p>
              Our approach emphasizes fact-based and data-driven inquiry, supported by community participation,
              including developers, users, local communities, and universities. Through open datasets, use-case
              studies, and research-friendly methodologies, the Forum ensures that its outputs are rigorous,
              transparent, and actionable.
            </p>
            <p>
              We harness the power of AI-generated content (AIGC) to deliver high-quality, multi-modal, and
              multi-platform publications, ranging from working group reports and expert interviews to white
              papers, academic research, and reference architectures. These outputs are distributed widely across
              multilingual channels such as CSDN, UN platforms, UNICC, foundations, and global social media
              networks.
            </p>
            <p>
              The Forum is organized annually alongside partner events worldwide, providing a
              flagship venue for strategic dialogue, knowledge sharing, and collaborative action.
            </p>
          </motion.div>
        </motion.div>

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
            Shared Commitments
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
            Forum Insights
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
                  6
                </motion.div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Working Groups</div>
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
            Partners & Hosts
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
