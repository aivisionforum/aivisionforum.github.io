"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Github, Mail, Video, Download, ExternalLink, Sparkles, ChevronRight, Zap, ArrowRight } from 'lucide-react';

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
          description: "Comprehensive report on global AI strategy from the Paris summit, covering governance, innovation, and cooperation.",
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
          title: "Global Cooperation for Human-Centered AI",
          subtitle: "GOSIM AI Vision Forum 2025 Report",
          description: "Key insights from the forum covering AI education, creativity, governance, and digital public goods.",
          link: "#",
          type: "PDF"
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
          title: "GOSIM Community",
          subtitle: "Open source AI ecosystem",
          description: "Join the broader GOSIM community working on open source AI solutions.",
          link: "https://gosim.org",
          type: "Web"
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
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="resources" className="section bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-futuristic opacity-10" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
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
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Knowledge Hub</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">STRATEGIC</span>{" "}
            <span className="gradient-text">RESOURCES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access comprehensive documentation, research papers, and collaborative tools 
            driving the future of ethical artificial intelligence
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="space-y-16">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
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
                      "0 0 20px rgba(0, 212, 255, 0.3)",
                      "0 0 40px rgba(0, 212, 255, 0.5)",
                      "0 0 20px rgba(0, 212, 255, 0.3)",
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

              {/* Category Items Grid */}
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
                        {/* Hover glow effect */}
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
                        
                        {/* Link indicator */}
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

        {/* Strategic CTA */}
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
              
              <h3 className="text-2xl font-bold text-white mb-4">ACCESS STRATEGIC UPDATES</h3>
              <p className="text-gray-400 mb-6">
                Join the network for exclusive insights on AI governance frameworks, 
                strategic initiatives, and global cooperation efforts.
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
                  JOIN OUR MAILING LIST
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                
                {/* QR Code */}
                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Or scan to join</p>
                  <div className="bg-white p-3 rounded-lg">
                    {qrCodeUrl && (
                      <img 
                        src={qrCodeUrl} 
                        alt="QR Code for joining AI Vision Forum mailing list"
                        className="w-32 h-32"
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