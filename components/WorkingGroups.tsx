"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Shield, Globe2, Brain, Users, ArrowRight, Cpu, Database, Network } from 'lucide-react';

const WorkingGroups = () => {
  const groups = [
    {
      id: 1,
      title: "Ethics & Governance",
      icon: Shield,
      description: "Developing governance principles, accountability models, and policy guidance for responsible AI deployment.",
      stats: "Policy and governance",
      color: "purple",
      link: "https://github.com/aivisionforum/ai-ethics-governance"
    },
    {
      id: 2,
      title: "Global Digital Infrastructure",
      icon: Globe2,
      description: "Exploring how open infrastructure can support AI as a global digital public good across regions and institutions.",
      stats: "Public-interest infrastructure",
      color: "green",
      link: "https://github.com/aivisionforum/ai-global-digital-public-good"
    },
    {
      id: 3,
      title: "AI Maturity",
      icon: Cpu,
      description: "Creating frameworks for capability classification, evaluation, and readiness across sectors.",
      stats: "Evaluation and standards",
      color: "blue",
      link: "https://github.com/aivisionforum/ai-maturity"
    },
    {
      id: 4,
      title: "AI & Education",
      icon: BookOpen,
      description: "Examining how AI can strengthen learning, pedagogy, and public understanding without flattening human judgment.",
      stats: "Learning and pedagogy",
      color: "cyan",
      link: null
    },
    {
      id: 5,
      title: "Human-AI Synergy",
      icon: Brain,
      description: "Studying how human expertise and AI systems can work together in ways that preserve agency and trust.",
      stats: "Human-centered design",
      color: "orange",
      link: null
    },
    {
      id: 6,
      title: "Creative Intelligence",
      icon: Users,
      description: "Bringing cultural inquiry, creativity, and applied experimentation into the conversation on AI futures.",
      stats: "Culture and practice",
      color: "pink",
      link: null
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string, bg: string, text: string }> = {
      cyan: { border: "border-cyan-400/30", bg: "bg-cyan-400/10", text: "text-cyan-400" },
      purple: { border: "border-purple-400/30", bg: "bg-purple-400/10", text: "text-purple-400" },
      green: { border: "border-green-400/30", bg: "bg-green-400/10", text: "text-green-400" },
      blue: { border: "border-blue-400/30", bg: "bg-blue-400/10", text: "text-blue-400" },
      orange: { border: "border-orange-400/30", bg: "bg-orange-400/10", text: "text-orange-400" },
      pink: { border: "border-pink-400/30", bg: "bg-pink-400/10", text: "text-pink-400" }
    };
    return colors[color];
  };

  return (
    <section id="working-groups" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <filter id="wg-impressionist" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.015 0.011" numOctaves="4" seed="33" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="95" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="24" result="soft" />
              <feColorMatrix in="soft" type="saturate" values="1.25" />
            </filter>
            <filter id="wg-dappled" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.024 0.02" numOctaves="3" seed="27" result="lightNoise" />
              <feGaussianBlur in="lightNoise" stdDeviation="14" result="softLight" />
              <feColorMatrix in="softLight" type="luminanceToAlpha" result="lightMap" />
              <feComponentTransfer in="lightMap">
                <feFuncA type="linear" slope="0.25" intercept="0.03" />
              </feComponentTransfer>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#faf6ef" />
          <g filter="url(#wg-impressionist)">
            <ellipse cx="70%" cy="15%" rx="320" ry="240" fill="rgba(200, 150, 155, 0.34)" />
            <ellipse cx="20%" cy="30%" rx="280" ry="210" fill="rgba(145, 180, 210, 0.3)" />
            <ellipse cx="85%" cy="55%" rx="260" ry="190" fill="rgba(165, 195, 150, 0.28)" />
            <ellipse cx="40%" cy="75%" rx="300" ry="200" fill="rgba(220, 195, 150, 0.26)" />
            <ellipse cx="55%" cy="40%" rx="200" ry="160" fill="rgba(190, 165, 205, 0.2)" />
            <ellipse cx="10%" cy="70%" rx="240" ry="180" fill="rgba(210, 175, 145, 0.22)" />
          </g>
          <rect width="100%" height="100%" fill="rgba(255, 252, 244, 0.45)" filter="url(#wg-dappled)" />
        </svg>
      </div>

      <div className="container relative">
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
            <Network className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300 uppercase section-label">Forum Themes</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Forum</span>{" "}
            <span className="gradient-text">Themes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Six conversation tracks linking humanities, governance, engineering, education, and applied AI practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => {
            const colors = getColorClasses(group.color);
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="card-executive h-full p-6 flex flex-col relative overflow-hidden">
                  <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className={`p-3 rounded-lg ${colors.border} border bg-black/50 backdrop-blur-sm`}>
                      <group.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex gap-1">
                      <span className={`w-2 h-2 rounded-full ${colors.bg} animate-pulse`} />
                      <span className={`w-2 h-2 rounded-full ${colors.bg} animate-pulse`} style={{ animationDelay: '0.2s' }} />
                      <span className={`w-2 h-2 rounded-full ${colors.bg} animate-pulse`} style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">{group.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                    {group.description}
                  </p>
                  
                  <div className={`text-xs ${colors.text} font-bold mb-4 uppercase tracking-wider relative z-10`}>
                    {group.stats}
                  </div>
                  
                  <div className="relative z-10">
                    {group.link ? (
                      <motion.a
                        href={group.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm font-medium ${colors.text} group/link hover:brightness-125 transition-all`}
                        whileHover={{ x: 5 }}
                      >
                        <Database className="w-4 h-4 mr-2" />
                        View Working Repository
                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </motion.a>
                    ) : (
                      <span className="text-sm text-gray-600 italic">Program curation in progress</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 glass-dark rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Join the Forum Circle</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Contribute research, field experience, or implementation insight to the themes shaping the Paris forum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://aivisionforum.groups.io"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-strategic inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Cpu className="w-4 h-4 mr-2" />
                Join Mailing Lists
              </motion.a>
              <motion.a
                href="https://github.com/aivisionforum"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Open Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingGroups;
