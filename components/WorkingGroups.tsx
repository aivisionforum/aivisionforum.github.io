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
      description: "Establishing robust governance frameworks for responsible AI deployment at scale.",
      stats: "Framework Development",
      color: "purple",
      link: "https://github.com/aivisionforum/ai-ethics-governance"
    },
    {
      id: 2,
      title: "Global Digital Infrastructure",
      icon: Globe2,
      description: "Building AI as a global digital public good through distributed infrastructure.",
      stats: "Open Source Initiative",
      color: "green",
      link: "https://github.com/aivisionforum/ai-global-digital-public-good"
    },
    {
      id: 3,
      title: "AI Maturity",
      icon: Cpu,
      description: "Developing guidance for AI capability classification and evaluation.",
      stats: "Industry Guidance",
      color: "blue",
      link: "https://github.com/aivisionforum/ai-maturity"
    },
    {
      id: 4,
      title: "AI & Education",
      icon: BookOpen,
      description: "Revolutionizing learning paradigms through AI-enhanced pedagogical frameworks and adaptive systems.",
      stats: "Research Initiative",
      color: "cyan",
      link: null
    },
    {
      id: 5,
      title: "Human-AI Synergy",
      icon: Brain,
      description: "Pioneering frameworks for augmented intelligence and human-machine collaboration.",
      stats: "Collaborative Research",
      color: "orange",
      link: null
    },
    {
      id: 6,
      title: "Creative Intelligence",
      icon: Users,
      description: "Exploring the intersection of artificial and human creativity in digital realms.",
      stats: "Exploratory Phase",
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
    <section id="working-groups" className="section bg-black relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-futuristic opacity-20" />
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
            <Network className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Strategic Initiatives</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">WORKING</span>{" "}
            <span className="gradient-text">GROUPS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Six specialized themes driving innovation across critical AI domains
          </p>
        </motion.div>

        {/* Working Groups Grid */}
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
                  {/* Subtle hover overlay - behind content with 30% opacity */}
                  <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />
                  
                  {/* Status indicator */}
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
                  
                  {/* Content with z-10 layering */}
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">{group.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                    {group.description}
                  </p>
                  
                  {/* Stats */}
                  <div className={`text-xs ${colors.text} font-bold mb-4 uppercase tracking-wider relative z-10`}>
                    {group.stats}
                  </div>
                  
                  {/* Link with better visibility */}
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
                        Access Repository
                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </motion.a>
                    ) : (
                      <span className="text-sm text-gray-600 italic">Deployment Pending</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 glass-dark rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">JOIN THE INITIATIVE</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Contribute to the advancement of ethical AI through collaborative research and development
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
                ACCESS NETWORKS
              </motion.a>
              <motion.a
                href="https://github.com/aivisionforum"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTRIBUTE CODE
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingGroups;