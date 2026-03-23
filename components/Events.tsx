"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Globe, Clock, Users, Zap } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = [
    {
      id: 1,
      title: "AI VISION SUMMIT PARIS",
      subtitle: "Open Source AI Strategy Forum",
      date: "MAY 2025",
      location: "Paris, France",
      attendees: "200+",
      description: "Strategic discussions on collaborative frameworks for next-generation AI development.",
      link: "https://paris2025.gosim.org/os-ai-strategy-forum/",
      status: "COMPLETED",
      upcoming: false,
      featured: false
    },
    {
      id: 2,
      title: "GLOBAL AI COOPERATION SUMMIT",
      subtitle: "Annual Forum Hangzhou",
      date: "SEPTEMBER 2025",
      location: "Hangzhou, China",
      attendees: "300+",
      description: "Convergence of global AI leaders, researchers, and policymakers from 20+ nations.",
      link: "https://hangzhou2025.visionforum.ai/",
      status: "COMPLETED",
      upcoming: false,
      featured: false
    },
    {
      id: 3,
      title: "GOSIM AI VISION FORUM 2024",
      subtitle: "Inaugural Summit",
      date: "OCTOBER 2024",
      location: "Virtual & Hybrid",
      attendees: "500+",
      description: "Foundation summit establishing six strategic working groups for human-centered AI.",
      link: null,
      status: "COMPLETED",
      upcoming: false,
      featured: false
    },
    {
      id: 4,
      title: "AI VISION FORUM PARIS 2026",
      subtitle: "Architecting Human-AI Synergy",
      date: "MAY 4, 2026 (MONDAY)",
      location: "Paris, France",
      attendees: "80-100",
      description: "Intimate one-day forum exploring AI's transformative impact across education, governance, and open source. Join global leaders in shaping the future of human-centric AI.",
      link: "https://paris2026.visionforum.ai/",
      status: "REGISTRATION OPEN",
      upcoming: true,
      featured: true
    }
  ];

  const upcomingEvents = events.filter(e => e.upcoming);
  const pastEvents = events.filter(e => !e.upcoming);
  const displayEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <section id="events" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <filter id="events-impressionist" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.013 0.009" numOctaves="4" seed="21" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="110" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="30" result="soft" />
              <feColorMatrix in="soft" type="saturate" values="1.15" />
            </filter>
            <filter id="events-dappled" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.016" numOctaves="3" seed="18" result="lightNoise" />
              <feGaussianBlur in="lightNoise" stdDeviation="15" result="softLight" />
              <feColorMatrix in="softLight" type="luminanceToAlpha" result="lightMap" />
              <feComponentTransfer in="lightMap">
                <feFuncA type="linear" slope="0.28" intercept="0.04" />
              </feComponentTransfer>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#f8f4ec" />
          <g filter="url(#events-impressionist)">
            <ellipse cx="25%" cy="20%" rx="280" ry="200" fill="rgba(150, 180, 215, 0.36)" />
            <ellipse cx="80%" cy="30%" rx="300" ry="230" fill="rgba(210, 160, 155, 0.32)" />
            <ellipse cx="50%" cy="70%" rx="340" ry="200" fill="rgba(170, 195, 150, 0.3)" />
            <ellipse cx="15%" cy="55%" rx="240" ry="180" fill="rgba(215, 195, 145, 0.28)" />
            <ellipse cx="70%" cy="80%" rx="220" ry="170" fill="rgba(175, 155, 200, 0.22)" />
          </g>
          <rect width="100%" height="100%" fill="rgba(255, 253, 245, 0.5)" filter="url(#events-dappled)" />
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
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300 uppercase section-label">Paris in May</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Forum</span>{" "}
            <span className="gradient-text">Calendar</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Gatherings in Paris and beyond for the people shaping human-centered AI across research, policy, and practice.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex glass-dark rounded-full p-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-bold tracking-wider ${
                activeTab === 'upcoming'
                  ? 'bg-white/80 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              UPCOMING
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-bold tracking-wider ${
                activeTab === 'past'
                  ? 'bg-white/80 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ARCHIVE
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {displayEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group ${event.featured ? 'lg:col-span-2' : ''}`}
              >
                <div className={`card-executive h-full p-8 relative overflow-hidden ${event.featured ? 'border-cyan-400/50' : ''}`}>
                  {/* Impressionist background for featured card */}
                  {event.featured && (
                    <div className="absolute inset-0 -z-0 pointer-events-none">
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <defs>
                          <filter id="card-impressionist" x="-20%" y="-20%" width="140%" height="140%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.012" numOctaves="4" seed="5" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" xChannelSelector="R" yChannelSelector="G" result="displaced" />
                            <feGaussianBlur in="displaced" stdDeviation="22" result="soft" />
                            <feColorMatrix in="soft" type="saturate" values="1.2" />
                          </filter>
                          <filter id="card-dappled" x="-10%" y="-10%" width="120%" height="120%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.03 0.025" numOctaves="3" seed="9" result="lightNoise" />
                            <feGaussianBlur in="lightNoise" stdDeviation="14" result="softLight" />
                            <feColorMatrix in="softLight" type="luminanceToAlpha" result="lightMap" />
                            <feComponentTransfer in="lightMap">
                              <feFuncA type="linear" slope="0.25" intercept="0.03" />
                            </feComponentTransfer>
                          </filter>
                        </defs>
                        <rect width="100%" height="100%" fill="rgba(255, 252, 247, 0.6)" />
                        <g filter="url(#card-impressionist)">
                          <ellipse cx="15%" cy="25%" rx="140" ry="110" fill="rgba(215, 148, 148, 0.35)" />
                          <ellipse cx="80%" cy="20%" rx="160" ry="120" fill="rgba(140, 170, 205, 0.32)" />
                          <ellipse cx="50%" cy="75%" rx="180" ry="100" fill="rgba(155, 185, 140, 0.28)" />
                          <ellipse cx="60%" cy="45%" rx="130" ry="100" fill="rgba(220, 190, 140, 0.24)" />
                          <ellipse cx="30%" cy="60%" rx="100" ry="80" fill="rgba(180, 155, 195, 0.18)" />
                        </g>
                        <rect width="100%" height="100%" fill="rgba(255, 252, 240, 0.5)" filter="url(#card-dappled)" />
                      </svg>
                      <div className="absolute inset-0" style={{
                        background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255, 252, 247, 0.55) 0%, transparent 65%)",
                      }} />
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                        event.status === 'COMING SOON' ? 'bg-green-400/20 text-green-400' :
                        event.status === 'EARLY BIRD' ? 'bg-yellow-400/20 text-yellow-400' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {event.status}
                      </span>
                      {event.featured && (
                        <Zap className="w-5 h-5 text-yellow-400" />
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-cyan-400 mb-6 font-medium">{event.subtitle}</p>

                    <div className="space-y-3 mb-6">
                      <motion.div
                        className="flex items-center text-gray-400"
                        whileHover={{ x: 5 }}
                      >
                        <Calendar className="w-5 h-5 mr-3 text-cyan-400/60" />
                        <span className="font-bold">{event.date}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center text-gray-400"
                        whileHover={{ x: 5 }}
                      >
                        <MapPin className="w-5 h-5 mr-3 text-purple-400/60" />
                        <span>{event.location}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center text-gray-400"
                        whileHover={{ x: 5 }}
                      >
                        <Users className="w-5 h-5 mr-3 text-green-400/60" />
                        <span>{event.attendees} Delegates</span>
                      </motion.div>
                    </div>

                    <p className="text-gray-500 mb-8">{event.description}</p>

                    {event.link && (
                      <motion.a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-400 font-bold group"
                        whileHover={{ x: 5 }}
                      >
                        ACCESS PORTAL
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 glass-dark rounded-2xl"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Regional Salons</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Building local circles for ongoing dialogue between scholars, strategists, public-interest institutions, and practitioners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 border border-cyan-400/20 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-500 uppercase">Shared Dialogue</div>
              </div>
              <div className="p-4 border border-purple-400/20 rounded-lg">
                <Globe className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-xs text-gray-500 uppercase">Core Themes</div>
              </div>
              <div className="p-4 border border-green-400/20 rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold text-white">5K+</div>
                <div className="text-xs text-gray-500 uppercase">Community Reach</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:contact@visionforum.ai"
                className="btn-strategic"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                FIND A LOCAL CIRCLE
              </motion.a>
              <motion.a
                href="mailto:contact@visionforum.ai"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                HOST A SALON
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
