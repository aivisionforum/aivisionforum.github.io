"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Github, Mail, Video, Download, ExternalLink, Sparkles, ChevronRight, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Resources = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  
  const resourceCategories = [
    {
      title: "Reports & Publications",
      icon: FileText,
      items: [
        {
          title: "GOSIM AI Strategy Forum 2025 Paris",
          subtitle: "Linux Foundation Report",
          description: "A detailed forum report on governance, innovation, and international cooperation emerging from the Paris summit.",
          link: "https://www.linuxfoundation.org/research/GOSIM-2025?hsLang=en",
          type: "Web"
        },
        {
          title: "Global Digital Collaboration 2025 Geneva",
          subtitle: "AI For Humanity Track Report",
          description: "Insights on human-centered AI development and global collaboration from the GDC conference.",
          link: "https://ai4humanity.ai/pdf/GDC%20AI%20For%20Humanity%20Track%20Report%20-%20v2.0.pdf",
          type: "PDF"
        },
        {
          title: "GOSIM Beijing 2025: Global Cooperation for Human-Centered AI",
          subtitle: "Linux Foundation Report",
          description: "Comprehensive report covering AI education transformation, creative industries, human-AI interaction, governance frameworks, and digital public goods development.",
          link: "https://www.linuxfoundation.org/research/gosim-beijing-2025",
          type: "Web"
        }
      ]
    },
    {
      title: "Open Source Projects",
      icon: Github,
      items: [
        {
          title: "AI Ethics & Governance",
          subtitle: "Working Group Repository",
          description: "Research, frameworks, and tools for responsible AI development.",
          link: "https://github.com/aivisionforum/ai-ethics-governance",
          type: "GitHub"
        },
        {
          title: "AI as Global Digital Public Good",
          subtitle: "Working Group Repository",
          description: "Initiatives for democratizing AI through open source and shared infrastructure.",
          link: "https://github.com/aivisionforum/ai-global-digital-public-good",
          type: "GitHub"
        },
        {
          title: "CodeCommons Project",
          subtitle: "Ethical datasets for LLMs",
          description: "High-quality, transparent, and traceable datasets for responsible LLM development.",
          link: "https://codecommons.org",
          type: "Web"
        }
      ]
    },
    {
      title: "Community & Collaboration",
      icon: Mail,
      items: [
        {
          title: "AI Ethics Mailing List",
          subtitle: "Join the discussion",
          description: "Participate in ongoing conversations about AI ethics and governance.",
          link: "https://aivisionforum.groups.io/g/ai-ethics-governance",
          type: "Mailing List"
        },
        {
          title: "AI for Global Digital Public Good",
          subtitle: "Collaborative community",
          description: "Connect with researchers and practitioners working on AI as a public good.",
          link: "https://aivisionforum.groups.io/g/ai4gdpg",
          type: "Mailing List"
        },
        {
          title: "AI Maturity",
          subtitle: "IEEE P3514 Working Group",
          description: "Join the AI Maturity working group developing IEEE P3514 standards for AI capability classification.",
          link: "https://aivisionforum.groups.io/g/ai-maturity",
          type: "Mailing List"
        }
      ]
    }
  ];

  useEffect(() => {
    // Generate QR code for the Groups.io join link
    const groupsIoUrl = 'https://aivisionforum.groups.io/g/members/join';
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(groupsIoUrl)}`;
    setQrCodeUrl(qrApiUrl);
  }, []);

  const getIconForType = (type: string) => {
    switch (type) {
      case 'PDF':
        return <Download className="w-4 h-4" />;
      case 'GitHub':
        return <Github className="w-4 h-4" />;
      case 'Mailing List':
        return <Mail className="w-4 h-4" />;
      case 'Video':
        return <Video className="w-4 h-4" />;
      case 'Coming Soon':
        return <Sparkles className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="resources" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <filter id="res-impressionist" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.009" numOctaves="4" seed="42" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="105" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="28" result="soft" />
              <feColorMatrix in="soft" type="saturate" values="1.2" />
            </filter>
            <filter id="res-dappled" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.021 0.017" numOctaves="3" seed="35" result="lightNoise" />
              <feGaussianBlur in="lightNoise" stdDeviation="16" result="softLight" />
              <feColorMatrix in="softLight" type="luminanceToAlpha" result="lightMap" />
              <feComponentTransfer in="lightMap">
                <feFuncA type="linear" slope="0.26" intercept="0.04" />
              </feComponentTransfer>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#f9f5ed" />
          <g filter="url(#res-impressionist)">
            <ellipse cx="30%" cy="20%" rx="300" ry="220" fill="rgba(155, 185, 215, 0.35)" />
            <ellipse cx="75%" cy="35%" rx="280" ry="200" fill="rgba(215, 155, 150, 0.3)" />
            <ellipse cx="15%" cy="65%" rx="260" ry="190" fill="rgba(175, 200, 155, 0.28)" />
            <ellipse cx="60%" cy="75%" rx="320" ry="210" fill="rgba(210, 190, 145, 0.25)" />
            <ellipse cx="45%" cy="45%" rx="200" ry="170" fill="rgba(185, 160, 200, 0.2)" />
          </g>
          <rect width="100%" height="100%" fill="rgba(255, 252, 243, 0.48)" filter="url(#res-dappled)" />
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
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300 uppercase section-label">Reading Room</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Reports,</span>{" "}
            <span className="gradient-text">Notes & Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Reading and working material for a forum that brings cultural inquiry, governance thinking, and applied AI together.
          </p>
        </motion.div>

        <div className="space-y-16">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <motion.div 
                className="flex items-center mb-8 cursor-pointer"
                onClick={() => setActiveCategory(categoryIndex)}
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className={`p-3 rounded-lg mr-4 border transition-all duration-300 ${
                    activeCategory === categoryIndex 
                      ? 'bg-cyan-400/20 border-cyan-400/50' 
                      : 'bg-gray-900/50 border-gray-800'
                  }`}
                  animate={activeCategory === categoryIndex ? {
                    boxShadow: [
                      "0 12px 24px rgba(93, 132, 168, 0.12)",
                      "0 18px 34px rgba(202, 124, 129, 0.16)",
                      "0 12px 24px rgba(93, 132, 168, 0.12)",
                    ],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <category.icon className={`w-6 h-6 ${
                    activeCategory === categoryIndex ? 'text-cyan-400' : 'text-gray-400'
                  }`} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <ChevronRight className={`ml-2 w-5 h-5 transition-transform ${
                  activeCategory === categoryIndex ? 'rotate-90 text-cyan-400' : 'text-gray-600'
                }`} />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    className="group"
                  >
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onMouseEnter={() => setHoveredCard(`${categoryIndex}-${itemIndex}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="block h-full"
                    >
                      <motion.div 
                        className="h-full card-executive p-6 relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                      >
                        <AnimatePresence>
                          {hoveredCard === `${categoryIndex}-${itemIndex}` && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 pointer-events-none"
                            />
                          )}
                        </AnimatePresence>
                        
                        <div className="flex justify-between items-start mb-3 relative z-10">
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {item.title}
                          </h4>
                          <motion.span 
                            className="flex items-center space-x-1 text-gray-500"
                            animate={hoveredCard === `${categoryIndex}-${itemIndex}` ? {
                              rotate: [0, 360],
                            } : {}}
                            transition={{ duration: 1 }}
                          >
                            {getIconForType(item.type)}
                          </motion.span>
                        </div>
                        <p className="text-sm text-cyan-400 mb-2 font-medium">{item.subtitle}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        
                        {item.link !== '#' && (
                          <motion.div 
                            className="absolute bottom-4 right-4"
                            animate={hoveredCard === `${categoryIndex}-${itemIndex}` ? {
                              x: [0, 5, 0],
                            } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <ExternalLink className="w-4 h-4 text-cyan-400/60" />
                          </motion.div>
                        )}
                      </motion.div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="glass-dark rounded-2xl p-8 border border-cyan-400/20">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/20 rounded-full mb-4"
              >
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Stay Connected</span>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Receive Forum Updates</h3>
              <p className="text-gray-400 mb-6">
                Join the mailing list for event notes, research updates, working group progress, and Paris forum announcements.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <motion.a
                  href="https://aivisionforum.groups.io/g/members/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-strategic"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Our Mailing List
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                
                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Or scan to join</p>
                  <div className="bg-white p-3 rounded-lg">
                    {qrCodeUrl && (
                      <Image
                        src={qrCodeUrl} 
                        alt="QR Code for joining AI Vision Forum mailing list"
                        className="w-32 h-32"
                        width={128}
                        height={128}
                        unoptimized
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
